// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EYF Game',
  tagline: 'Welcome to the most enjoyable way to learn Financial Literacy and much more!',
  url: 'https://github.com',
  baseUrl: '/EYF-Docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gwat95', // Usually your GitHub org/user name.
  projectName: 'EYF-Docusaurus', // Usually your repo name.
  deploymentBranch: "gh-pages",
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'EYF Game',
        logo: {
          alt: 'My Site Logo',
          src: 'img/EYF.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Mission',
          },
          //{to: '/blog: false', label: 'Blog', position: 'left'},
          //I added a "false" to the blog to get rid of it for now. Will right this wrong later when I have time
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Store',
            to: '/blog'
          },
          {
            href: 'https://www.instagram.com/earn.your.freedom/',
            label: 'Instagram',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Mission',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Instagram',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'TikTok',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: '(918)884-9534',
                to: '/blog',
              },
              {
                label: 'grant@eyf.money',
                href: 'https://trex-runner.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
