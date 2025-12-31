import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://vzubak.com',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({
      // Optimization: This applies Tailwind to all your files automatically
      applyBaseStyles: true,
    })
  ],
  compressHTML: true, // Optimization: Minifies HTML output for smaller file sizes
  build: {
    inlineStylesheets: 'always', // Optimization: Inlines CSS to reduce render-blocking requests
  },
  vite: {
    build: {
      cssCodeSplit: true, // Optimization: Splits CSS by page to improve Chrome Coverage scores
      chunkSizeWarningLimit: 500,
    }
  }
});