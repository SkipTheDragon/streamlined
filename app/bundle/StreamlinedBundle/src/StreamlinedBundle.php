<?php

namespace Wyverr\StreamlinedBundle;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\AbstractBundle;

/**
 * Features:
 * Dark Mode
 * Fully Responsive
 * Thoroughly Tested
 * Modern Design
 * Fast and Lightweight
 * Can Be used as a bundle in any Symfony Project
 * No Database Required
 * Small Footprint
 * Easy to Use
 * Provided as a bundle or as a full project
 * Powerful User Configuration
 * Powerful Customization
 * Most things can be overridden by the user easily (text/templates/pages/etc)
 * Modern Design provided by Tailwind
 * Extensible Platform (Future Proof and easy to extend)
 * Easy to update.
 * GDPR Compliant
 * DarkMode Switch
 * Accessibility options
 * Mask Links / URL obfuscatory
 * Instant redirect
 * Panel for user to manage their instances
 * Hide or show redirect destination
 * Multi App or Single App
 * Download Links for Android apps and ios apps
 * FAQ/Privacy Policy/Terms of Service pages
 * SEO Ready
 * Todo:
 * Docs
 */
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
