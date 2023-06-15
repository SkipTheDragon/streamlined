<?php

namespace Wyverr\StreamlinedBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('your_bundle_name');
        $rootNode = $treeBuilder->getRootNode();

        $rootNode
            ->children()
                ->arrayNode('links')
                    ->children()
                        ->scalarNode('user_website')->end()
                            ->arrayNode('socials')
                            ->scalarPrototype()->end()
                            ->end()
                            ->arrayNode('downloads')
                            ->scalarPrototype()->end()
                            ->end()
                            ->arrayNode('overridable')
                            ->scalarPrototype()->end()
                            ->end()
                            ->end()
                            ->end()
                            ->arrayNode('app')
                            ->children()
                            ->scalarNode('name')->defaultValue("Streamlined")->end()
                            ->scalarNode('description')->defaultValue("Your description (used for sep)")->end()
                            ->scalarNode('motto')->defaultValue("Continuous Development")->end()
                            ->scalarNode('disable_destination_obfuscation')->defaultValue(false)->end()
                            ->scalarNode('always_instant_redirect')->defaultValue(false)->end()
                            ->scalarNode('logo')->end()
                            ->scalarNode('favicon')->end()
                            ->booleanNode('allow_dark_mode')->defaultTrue()->end()
                            ->booleanNode('allow_uploads')->defaultTrue()->end()
                            ->end()
                            ->end()
                            ->arrayNode('svg')
                            ->children()
                            ->scalarNode('iconBackgroundColor')->end()
                            ->scalarNode('textBackgroundColor')->end()
                            ->scalarNode('textColor')->end()
                            ->end()
                            ->end()
                            ->arrayNode('apps')
                            ->arrayPrototype()
                            ->children()
                            ->scalarNode('name')->end()
                            ->scalarNode('shared_with')->end()
                            ->scalarNode('icon')->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}
