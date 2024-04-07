<?php

namespace Wyverr\StreamlinedBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use Symfony\Component\HttpFoundation\RequestStack;

class UrlDecodeExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('url_decode', [$this, 'urlDecode']),
        ];
    }

    public function urlDecode(string $url): float|bool|int|string|null
    {
        return urldecode($url);
    }
}
