import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        'font-manrope': fileURLToPath(new URL('./font-manrope.html', import.meta.url)),
        'font-plex': fileURLToPath(new URL('./font-plex.html', import.meta.url)),
        'font-editorial': fileURLToPath(new URL('./font-editorial.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy.html', import.meta.url)),
        consent: fileURLToPath(new URL('./consent.html', import.meta.url)),
      },
    },
  },
});
