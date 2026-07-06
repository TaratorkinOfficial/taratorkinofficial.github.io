// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://taratorkinofficial.github.io',
  // '/' for root deploys, '/v1' when published as a design mirror
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Internal tool — keep it out of the sitemap (robots.txt disallows it too).
      filter: (page) => !page.includes('/roadmap'),
    }),
  ],
});
