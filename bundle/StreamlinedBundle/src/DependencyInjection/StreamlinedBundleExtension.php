<?php

namespace Wyverr\StreamlinedBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class StreamlinedBundleExtension extends Extension implements PrependExtensionInterface
{
    public function prepend(ContainerBuilder $container): void
    {
        if ($container->hasExtension('twig')) {
            // add custom form widgets
            $container->prependExtensionConfig('twig', [
                'paths' => [
                    dirname(__DIR__) . '/Resources/templates/' => 'StreamlinedBundle',
                ],
            ]);
        }
    }

    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $processedConfig = $this->processConfiguration($configuration, $configs);
        // Set the processed configuration parameters in the container
        $container->setParameter('streamlined_bundle.streamlined', $processedConfig);

        // Load the services.yaml file
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yaml');
    }
}
