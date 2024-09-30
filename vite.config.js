// vite.config.js
import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: './src/index.js',
      name: 'VuxRefactor',
      formats: ['es', 'umd'],
      fileName: (format) => `vux-refactor.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [VueI18nPlugin({
    defaultSFCLang: 'yaml',
    include: [path.resolve(__dirname, './src/components/**')],
  }), vue()],
}
