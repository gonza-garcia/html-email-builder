import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // The Cloudflare Pages project is configured with output directory "build".
    outDir: 'build',
  },
});
