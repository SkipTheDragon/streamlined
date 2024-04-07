<?php

namespace Wyverr\StreamlinedBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;

class Redirect extends AbstractController
{
    #[Route('/pointing-to/{app}', name: 'app_redirect_user')]
    public function pointingTo(string $app, Request $request, #[Autowire(service: "service_container")] ContainerInterface $container): Response
    {
        $pointer = $request->get('pointer');
        $isEncoded = $this->isBase64Encoded($pointer);
        $pointer = $this->decodeBase64($pointer);
        $config = $container->getParameter('streamlined_bundle.streamlined');

        if (!isset($config["apps"][$app])) {
            throw new HttpException(404, "App not found");
        }

        $currentApp = $config["apps"][$app];

        $cookieToCheck = $currentApp["shared_with"] ?? $app;

        $initialPointer =  $pointer; // Decoded already if encoded
        $pointer =  str_replace("streamlined-unique-show-url=true", "", $pointer);
        $isCookieAlreadySet = isset($_COOKIE[$cookieToCheck]) && filter_var($_COOKIE[$cookieToCheck], FILTER_VALIDATE_URL) !== false;
        $userInstance = $isCookieAlreadySet ? $_COOKIE[$cookieToCheck] : null;
        $url = $isCookieAlreadySet ? trim($_COOKIE[$cookieToCheck], "/"). "/" . $this->decodeBase64($pointer) : false;

        //if cookie is set redirect instant else  render the app.
        return $this->render('@StreamlinedBundle/app_redirect_link.twig', [
            '_app' => $app,
            'cookie' => $cookieToCheck,
            'show_link' => ($isEncoded && str_contains($initialPointer, "streamlined-unique-show-url=true")) || !$isEncoded,
            'pointer' => $pointer,
            'cookie_already_set' => $isCookieAlreadySet,
            'user_instance' => $userInstance,
            'url' => $url
        ]);
    }

    #[Route('/instant-pointing-to/{app}', name: 'app_redirect_user_instant')]
    public function instantPointingTo(string $app, Request $request, #[Autowire(service: "service_container")] ContainerInterface $container): Response
    {
        $pointer = $request->get('pointer');

        // If cookie is set and is a valid url redirect instant else render the app.
        if (isset($_COOKIE[$app]) && filter_var($_COOKIE[$app], FILTER_VALIDATE_URL) !== false) {
            return $this->redirect(trim($_COOKIE[$app], "/"). "/" . urldecode($this->decodeBase64($pointer)));
        }

        return $this->pointingTo($app, $request, $container);
    }

    public function isBase64Encoded(string $string): bool
    {
        $decoded = base64_decode($string, true);
        return base64_encode($decoded) === $string;
    }

    public function decodeBase64(string $string): string
    {
        if ($this->isBase64Encoded($string)) {
            return base64_decode($string);
        }
        return $string; // Not Base64 encoded, return as is
    }
}
