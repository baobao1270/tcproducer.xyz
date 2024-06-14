import path from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import metadata from './build/metadata'
import { PROJECT_ROOT } from './build/consts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@',       replacement: fileURLToPath(new URL('./src',    import.meta.url)) },
      { find: '@common', replacement: fileURLToPath(new URL('./common', import.meta.url)) },
      { find: '@data',   replacement: fileURLToPath(new URL('./data',   import.meta.url)) },
    ],
  },
  define: {
    $package:  JSON.stringify(metadata.package),
    $site:     JSON.stringify(metadata.site),
    $artworks: JSON.stringify(metadata.artworks),
    $articles: JSON.stringify(metadata.articles),
    $icons:    JSON.stringify(metadata.icons),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const project = path.resolve(PROJECT_ROOT).replace(/\\/g, '/').replace(/\/$/, '')
          const relativeId = id.startsWith(project) ? id.slice(project.length) : id

          if (relativeId.includes('icon') || relativeId.includes('fontawesome')) {
            return 'icons'
          }

          if (relativeId.startsWith('/data/articles/novels/')) {
              const name = relativeId
                .slice('/data/articles/novels/'.length, -('.md?raw'.length))
              return `articles_novels_data/${name}`
          }

          if (relativeId.startsWith('/data/articles')) {
              return 'articles'
          }
        },
      },
    },
  },
  plugins: [vue(), ViteMinifyPlugin({})],
})
