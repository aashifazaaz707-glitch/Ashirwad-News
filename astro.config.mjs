import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

const isProduction = process.env.NODE_ENV === 'production' || process.env.CF_PAGES === '1';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    ...(isProduction ? [] : [keystatic()])
  ].filter(Boolean),
});
