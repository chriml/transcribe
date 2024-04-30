import { fileURLToPath, URL } from 'node:url'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteVueCE } from 'unplugin-vue-ce'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVueCE({ }) as PluginOption,
   // VueDevTools(),
  ],
  build: {
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
