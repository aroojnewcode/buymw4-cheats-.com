import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://buymw4cheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/mw4-cheats/',
    '/cheats/lite/': '/products/mw4-cheats/',
    '/cheats/pro/': '/products/mw4-cheats/',
    '/cheats/elite/': '/products/mw4-cheats/elite/',
    '/cheats/compare/': '/blog/mw4-lite-vs-pro/',
    '/products/aion-2-cheats/': '/products/mw4-cheats/',
    '/products/aion-2-cheats/elite/': '/products/mw4-cheats/elite/',
    '/products/aion-2-cheats/utilities/': '/products/mw4-cheats/utilities/',
    '/products/fortnite-cheats/': '/products/mw4-cheats/',
    '/products/fortnite-cheats/elite/': '/products/mw4-cheats/elite/',
    '/products/fortnite-cheats/utilities/': '/products/mw4-cheats/utilities/',
    '/products/dota-2-cheats/': '/products/mw4-cheats/',
    '/products/dota-2-cheats/elite/': '/products/mw4-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/mw4-cheats/utilities/',
    '/go/aion-2/': '/go/mw4/',
    '/go/fortnite/': '/go/mw4/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ko: 'ko-KR',
          'zh-tw': 'zh-TW',
          de: 'de-DE',
          'pt-br': 'pt-BR',
          th: 'th-TH',
          ja: 'ja-JP',
          es: 'es-ES',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
