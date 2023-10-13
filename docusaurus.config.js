// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const yearBuilt = (new Date().getFullYear() == 2023) ? '' : '2023-';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Sidebar collapsible
          sidebarCollapsible: true,

          // Docs folder path relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          /* editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         /*  editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
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

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      /* announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter</a>`,
      }, */

      navbar: {
        title: 'Kinh Sách Đại Đạo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kinhSidebar',
            position: 'left',
            label: 'Kinh',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sachSidebar',
            position: 'left',
            label: 'Sách',
          },
          {
            to: '/docs/intro',
            label: 'Giới thiệu',
            position: 'left',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          /* {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Kinh',
                to: 'docs/kinh/kinh-thien-dao-va-the-dao',
              },
              {
                label: 'Sách',
                to: 'docs/sach',
              },
            ],
          },
         /*  {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          }, */
          {
            title: 'More',
            items: [
              {
                label: 'Giới thiệu',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lov3five/kinhsachdaidao',
              },
            ],
          },
        ],
        copyright: `Kinh Sách Đại Đạo © ${yearBuilt}${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
