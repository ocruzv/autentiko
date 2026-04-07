// @ts-check
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://autentiko.com.mx',
  output: 'server',
  integrations: [sitemap()],
  adapter: node({
    mode: 'standalone',
  }),
  security: {
    allowedDomains: [
      {
        protocol: 'https',
        hostname: 'autentiko.com.mx',
      },
      {
        protocol: 'https',
        hostname: 'www.autentiko.com.mx',
      },
    ],
  },
});
