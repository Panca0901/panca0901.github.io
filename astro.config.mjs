// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://panca0901.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [mdx(), react(), tailwind({
    applyBaseStyles: false,
  }), icon(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'plastic',
      wrap: true,
    },
  },
  experimental: {
    svg: true,
  },
});
