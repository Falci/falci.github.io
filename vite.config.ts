import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx(),
    ssr({ prerender: true, includeAssetsImportedByServer: true }),
  ],
  optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] },
});
