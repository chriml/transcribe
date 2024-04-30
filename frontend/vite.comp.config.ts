import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('file-upload') || tag.includes('FileUpload')
        }
      }
    }),
    VueDevTools(),
  ],
  build: {
    outDir: "public/js",
    lib: {
      entry: './src/main.ce.ts',
      name: 'file-upload',
      // the proper extensions will be added
      fileName: 'file-upload'
    }
  },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
