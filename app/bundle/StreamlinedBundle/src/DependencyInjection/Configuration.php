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
                            ->scalarNode('motto')->defaultValue("")->end()
                            ->scalarNode('disable_destination_obfuscation')->defaultFalse()->end()
                            ->scalarNode('always_instant_redirect')->defaultFalse()->end()
                            ->scalarNode('logo')->defaultValue('./bundles/streamlined/images/logo.svg')->end()
                            ->scalarNode('logo_dark')->defaultValue('./bundles/streamlined/images/logo_dark.svg')->end()
                            ->scalarNode('favicon')->defaultValue('./bundles/streamlined/images/favicon.svg')->end()
                            ->scalarNode('favicon_dark')->defaultValue('./bundles/streamlined/images/favicon_dark.svg')->end()
                            ->booleanNode('allow_dark_mode')->defaultTrue()->end()
                            ->booleanNode('allow_uploads')->defaultFalse()->end()
                            ->end()
                            ->end()
                            ->arrayNode('svg')
                            ->children()
                            ->scalarNode('iconBackgroundColor')->defaultValue("#4F46E5")->end()
                            ->scalarNode('textBackgroundColor')->defaultValue("#080C13")->end()
                            ->scalarNode('textColor')->defaultValue("white")->end()
                            ->scalarNode('customWidth')->defaultValue(50)->end()
                            ->scalarNode('customHeight')->defaultValue(50)->end()
                            ->end()
                            ->end()
                            ->arrayNode('apps')
                            ->arrayPrototype()
                            ->children()
                            ->scalarNode('name')->end()
                            ->scalarNode('shared_with')->end()
                            ->scalarNode('icon')->defaultValue('%kernel.project_dir%/public/bundles/streamlined/images/defaulticon.svg')->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}
