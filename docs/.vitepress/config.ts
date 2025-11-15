import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@khaimerax/nexa-ui",
  description: "Lightweight, zero-dependency React UI component library",
  base: "/nexa-ui/", // GitHub Pages için base path
  
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/installation" },
      { text: "Components", link: "/components/button" },
      {
        text: "Links",
        items: [
          { text: "NPM", link: "https://www.npmjs.com/package/@khaimerax/nexa" },
          { text: "GitHub", link: "https://github.com/elegancecms/nexa-ui" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Installation", link: "/guide/installation" },
            { text: "Getting Started", link: "/guide/getting-started" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Components",
          items: [
            { text: "Button", link: "/components/button" },
            { text: "Card", link: "/components/card" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/elegancecms/nexa-ui" },
      { icon: "npm", link: "https://www.npmjs.com/package/@khaimerax/nexa" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 @khaimerax/nexa-ui",
    },

    search: {
      provider: "local",
    },
  },
});

