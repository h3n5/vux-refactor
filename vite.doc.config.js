// vite.config.js
import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
/** @type {import('vite').UserConfig} */
export default {
  base: '/vux-refactor',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  server: {
    host: true,
    port: 5174,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vux-refactor': path.resolve(__dirname, './dist/vux-refactor.es.js'),
    },
  },
  build: {
    outDir: 'docs',
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      defaultSFCLang: 'yaml',
      include: [path.resolve(__dirname, './src/components/**/*.vue')],
      runtimeOnly: false,
    }),
  ],
}
