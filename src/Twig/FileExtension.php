<?php

namespace Wyverr\StreamlinedBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class FileExtension extends AbstractExtension
{

    public function getFunctions(): array
    {
        return [
            new TwigFunction('json_decode', [$this, 'jsonDecode']),
            new TwigFunction('file_exists', [$this, 'fileExists']),
            new TwigFunction('file_get_contents', [$this, 'fileGetContents']),
        ];
    }

    public function fileExists(string $path): bool
    {
        return file_exists($path);
    }

    public function fileGetContents(string $path): string
    {
        return file_get_contents($path);
    }

    public function jsonDecode(string $json): array
    {
        return json_decode($json, true);
    }
}
