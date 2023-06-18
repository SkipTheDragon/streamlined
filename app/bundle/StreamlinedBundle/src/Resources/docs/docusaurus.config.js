// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Streamlined By WYVERR',
    tagline: 'A user-centric web platform that links documentation directly to service instances for easy navigation. It enhances user experience in troubleshooting, configuration, or setup by providing one-click access to specific service pages or features.',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://streamlined.docs.wyverr.com/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'wyverr', // Usually your GitHub org/user name.
    projectName: 'streamlined', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                logo: {
                    alt: 'Streamlined Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/logo_dark.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Get Started',
                    },
                    {
                        to: '/docs/features/overview',
                        label: 'Features Overview',
                        position: 'left'
                    },
                    {
                        to: '/docs/config',
                        label: 'Configuration Overview',
                        position: 'left'
                    },
                    {
                        href: 'https://wyverr.com/',
                        label: 'Our Website',
                        position: 'left'
                    },
                    {
                        href: 'https://streamlined.purchase.wyverr.com/',
                        label: 'Purchase Now!',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                logo: {
                    alt: 'Streamlined Logo',
                    src: 'img/logo_dark.svg',
                },
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: "/docs/intro",
                            },
                            {
                                to: '/docs/features/overview',
                                label: 'Features Overview',
                                position: 'left'
                            },
                            {
                                to: '/docs/config',
                                label: 'Configuration Overview',
                                position: 'left'
                            },
                        ],
                    },
                    {
                        title: 'Useful Links',
                        items: [
                            {
                                label: 'Support Center',
                                href: 'https://streamlined.support.wyverr.com/',
                            },
                            {
                                label: 'Purchase now!',
                                href: 'https://streamlined.purchase.wyverr.com/',
                            },
                            {
                                label: 'Demo',
                                href: 'https://streamlined.demo.wyverr.com/',
                            },
                        ],
                    },
                    {
                        title: 'More Products',
                        items: [
                            {
                                label: 'Coming Soon',
                                href: 'https://streamlined.demo.wyverr.com/',
                            },
                            {
                                label: 'Coming Soon',
                                href: 'https://streamlined.demo.wyverr.com/',
                            },
                            {
                                label: 'Coming Soon',
                                href: 'https://streamlined.demo.wyverr.com/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} WYVERR, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
