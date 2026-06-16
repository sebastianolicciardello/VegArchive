import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://sebastianolicciardello.github.io',
  base: '/VegArchive',
  outDir: 'dist',
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['favicon.png', 'icon-192x192.png', 'icon-512x512.png'],
      manifest: {
        name: 'VegArchive',
        short_name: 'VegArchive',
        description: 'Ricette vegetali e vegane',
        theme_color: '#4a7c59',
        background_color: '#faf8f5',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/VegArchive/',
        scope: '/VegArchive/',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
      },
    }),
  ],
});
