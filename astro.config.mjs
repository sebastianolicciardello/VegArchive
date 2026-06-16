import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://vegarchive.pages.dev',
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'VegArchive',
        short_name: 'VegArchive',
        description: 'Ricette vegetali',
        theme_color: '#4a7c59',
        background_color: '#faf8f5',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,json,png,svg,ico,webp}'],
        navigateFallback: '/',
      },
    }),
  ],
});
