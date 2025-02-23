import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const organizationName = "HotariTobu";
const projectName = "tkmt-lab";
const editUrl = "https://github.com/HotariTobu/tkmt-lab/tree/main/";

const config: Config = {
  title: "髙松研の​学生に向けた​メッセージ",
  tagline: "髙松先生は超人である",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://${organizationName.toLowerCase()}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    // defaultLocale: 'en',
    // locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: false,
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   path: 'main',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   showLastUpdateAuthor: true,
        //   showLastUpdateTime: true,
        // },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "content-docs",
      {
        id: "main",
        path: "main",
        routeBasePath: "main",
        sidebarPath: "./sidebars.ts",
        editUrl,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      } satisfies DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "extra",
        path: "extra",
        routeBasePath: "extra",
        sidebarPath: "./sidebars.ts",
        editUrl,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      } satisfies DocsOptions,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: 'Message',
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "autoSidebar",
          position: "left",
          label: "メイン",
          docsPluginId: "main",
        },
        {
          type: "docSidebar",
          sidebarId: "autoSidebar",
          position: "left",
          label: "おまけ",
          docsPluginId: "extra",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "プログラムの効率化 承りマス",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSe5GL1dZgazBUQvkUtUoi_ooUsFdkifAR-x9GwibA_My7X_5A/viewform?usp=sf_link",
        },
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${organizationName} Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",
      integrity: "sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib",
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
