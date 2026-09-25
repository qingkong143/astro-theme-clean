import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkLinkCard from './src/plugins/remark-link-card.mjs';

export default defineConfig({
  site: 'https://qingkong143.github.io',
  base: '/astro-theme-clean',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkLinkCard],
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
