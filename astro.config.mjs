// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://brunosoda.github.io',
  base: '/mimou-website',
  vite: {
    plugins: [tailwindcss()],
  },
});
