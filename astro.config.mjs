import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const BUILD_DATE = new Date().toISOString();

export default defineConfig({
  site: 'https://fieldvisiongroup.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/empty-party'),
      serialize(item) {
        const url = item.url;
        let priority = 0.5;
        let changefreq = 'monthly';
        if (url === 'https://fieldvisiongroup.com/' || url === 'https://fieldvisiongroup.com') {
          priority = 1.0;
          changefreq = 'weekly';
        } else if (url.includes('/services/') || url.includes('/guides/')) {
          priority = 0.9;
          changefreq = 'monthly';
        } else if (url.includes('/teardown')) {
          priority = 0.9;
          changefreq = 'monthly';
        } else if (url.includes('/case-studies/')) {
          priority = 0.8;
          changefreq = 'monthly';
        } else if (url.includes('/blog/')) {
          priority = 0.7;
          changefreq = 'weekly';
        } else if (url.includes('/press/')) {
          priority = 0.6;
          changefreq = 'monthly';
        } else if (url.includes('/privacy') || url.includes('/contact')) {
          priority = 0.3;
          changefreq = 'yearly';
        }
        item.priority = priority;
        item.changefreq = changefreq;
        item.lastmod = BUILD_DATE;
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
