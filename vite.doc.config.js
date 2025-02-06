import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import VuxRefactorResolver from './src/resolver/index.js'
/** @type {import('vite').UserConfig} */
export default ({}) => {
  return {
    base: '/vux-refactor',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production')
    },
    optimizeDeps: {},
    server: {
      host: true,
      port: 5173
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'vux-refactor': path.resolve(__dirname, './dist/vux-refactor.es.js')
      }
    },
    build: {
      outDir: 'docs'
    },
    plugins: [
      Components({
        resolvers: [
          VuxRefactorResolver({
            exclude: []
          })
        ],
        allowOverrides: true
      }),
      vue(),
      VueI18nPlugin({
        defaultSFCLang: 'yaml',
        include: [path.resolve(__dirname, './src/components/**/*.vue')],
        runtimeOnly: false
      })
    ]
  }
}
