import { resolve } from 'path'
import { defineConfig } from 'vite'

const pages = resolve(__dirname, 'pages')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  build: {
    outDir,
    rollupOptions: {
      input: {
        news: resolve(pages, 'news', 'index.html'),
        webMagazine: resolve(pages, 'news', 'web-magazine.html'),
        service: resolve(pages, 'service.html'),
        works: resolve(pages, 'works.html'),
        company: resolve(pages, 'company.html'),
        recruit: resolve(pages, 'recruit.html'),
        contact: resolve(pages, 'contact.html'),
        index: resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${__dirname}/src/`,
    },
  },
  base: './',
})
