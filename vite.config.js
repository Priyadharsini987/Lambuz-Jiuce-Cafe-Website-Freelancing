import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work from any folder or sub-path (Netlify, GitHub Pages, any static host).
export default defineConfig({
  plugins: [react()],
  base: './',
});
