import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

const isBuild = process.argv.includes('build');
const isProduction = process.env.NODE_ENV === 'production' || process.env.CF_PAGES === '1' || isBuild;

console.log('--- Astro Config Load ---');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CF_PAGES:', process.env.CF_PAGES);
console.log('process.argv:', process.argv);
console.log('isProduction (skip keystatic):', isProduction);
console.log('------------------------');

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
