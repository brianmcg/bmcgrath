import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@components': '/src/components',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
