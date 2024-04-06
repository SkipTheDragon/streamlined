<?php

namespace Wyverr\StreamlinedBundle\Twig;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ProvideConfigToTwig extends AbstractExtension
{
    public function __construct(private readonly ContainerInterface $container)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('streamlined_config', [$this, 'provideConfig']),
        ];
    }

    public function provideConfig(string $parameterName): \UnitEnum|float|int|bool|array|string|null
    {
        return $this->container->getParameter($parameterName);
    }
}
