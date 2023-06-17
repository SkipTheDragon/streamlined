<?php

namespace Wyverr\StreamlinedBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;

class Redirect extends AbstractController
{
    #[Route('/pointing-to/{app}/{pointer}', name: 'app_redirect_user')]
    public function pointingTo(string $app, string $pointer, #[Autowire(service: "service_container")] ContainerInterface $container): Response
    {
        $isEncoded = $this->isBase64Encoded($pointer);
        $pointer = $this->decodeBase64($pointer);
        $config = $container->getParameter('streamlined_bundle.streamlined');

        if (!isset($config["apps"][$app])) {
            throw new HttpException(404, "App not found");
        }

        $currentApp = $config["apps"][$app];

        $cookieToCheck = $currentApp["shared_with"] ?? $app;

        //if cookie is set redirect instant else  render the app.
        return $this->render('@StreamlinedBundle/app_redirect_link.twig', [
            '_app' => $app,
            'cookie' => $cookieToCheck,
            'show_link' => ($isEncoded && str_contains($pointer, "streamlined-unique-show-url=true")) || !$isEncoded,
            'pointer' => $pointer =  str_replace("streamlined-unique-show-url=true", "", $pointer),
            'cookie_already_set' => isset($_COOKIE[$cookieToCheck]) && filter_var($_COOKIE[$cookieToCheck], FILTER_VALIDATE_URL) !== false,
            'user_instance' => isset($_COOKIE[$cookieToCheck]) && filter_var($_COOKIE[$cookieToCheck], FILTER_VALIDATE_URL) !== false ? $_COOKIE[$cookieToCheck] : null,
            'url' => isset($_COOKIE[$cookieToCheck]) && filter_var($_COOKIE[$cookieToCheck], FILTER_VALIDATE_URL) !== false ? trim($_COOKIE[$cookieToCheck], "/"). "/" . $this->decodeBase64($pointer) : "",
        ]);
    }

    #[Route('/instant-pointing-to/{app}/{pointer}', name: 'app_redirect_user_instant')]
    public function instantPointingTo(string $app, string $pointer): Response
    {
        //if cookie is set and is a valid url redirect instant else render the app.
        if (isset($_COOKIE[$app]) && filter_var($_COOKIE[$app], FILTER_VALIDATE_URL) !== false) {
            return $this->redirect(trim($_COOKIE[$app], "/"). "/" . $this->decodeBase64($pointer));
        }

        return $this->pointingTo($app, $pointer);
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
