<?php

namespace Wyverr\StreamlinedBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Symfony\Component\HttpFoundation\RequestStack;

class CookieExtension extends AbstractExtension
{
    public function __construct(private readonly RequestStack $requestStack)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getCookie', [$this, 'getCookieValue']),
        ];
    }

    public function getCookieValue(string $cookieName): float|bool|int|string|null
    {
        $request = $this->requestStack->getCurrentRequest();
        return $request->cookies->get($cookieName);
    }
}
