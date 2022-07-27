// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waurum',
  tagline: 'Official documentation platform for Waurum',
  url: 'https://waurum-studio.github.io',
  baseUrl: '/waurum-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Waurum-Studio', // Usually your GitHub org/user name.
  projectName: 'waurum-documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false, 

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Waurum-Studio/waurum-documentation/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Waurum-Studio/waurum-documentation/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Waurum',
        logo: {
          alt: 'Waurum Logo',
          src: 'img/waurum.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Waurum-Studio/waurum-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Waurum Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: "Garry's mod",
                to: '/docs/category/-gmod---getting-started',
              },
              {
                label: 'Contribute',
                to: '/docs/not-existing',
              }
            ],
          },
          {
            title: 'Waurum Community',
            items: [
              {
                label: 'Our Website',
                href: 'https://waurum.net',
              },
              {
                label: 'Our Discord',
                href: 'https://discord.gg/waurum',
              },
              {
                label: 'Our Steam',
                href: 'https://steamcommunity.com/groups/waurum',
              },
            ],
          },
          {
            title: 'I want more !!',
            items: [
              {
                label: 'Our Blog (WIP)',
                to: '/blog',
              },
              {
                label: 'Our GitHub',
                href: 'https://github.com/Waurum-Studio',
              },
              {
                label: 'dotCore is ❤️',
                href: 'https://github.com/dotCore-off',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} © Waurum, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
