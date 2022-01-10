import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@logos': path.resolve(__dirname, './src/img/logos'),
      '@icons': path.resolve(__dirname, './src/img/icons'),
    },
  },
  plugins: [react()],
});
