<?php

namespace Wyverr\StreamlinedBundle;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\AbstractBundle;

class StreamlinedBundle extends AbstractBundle
{
    public function getContainerExtension(): ?ExtensionInterface
    {
        return new DependencyInjection\StreamlinedBundleExtension();
    }
    public function getPath(): string
    {
        return \dirname(__FILE__)."/Resources";
    }
}
