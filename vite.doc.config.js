import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import copyPlugin from 'rollup-plugin-copy'
import Components from 'unplugin-vue-components/vite'
import VuxRefactorResolver from './src/resolver/index.js'
/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
  const isDev = mode === 'development'
  const isProduction = mode === 'production'

  return {
    base: '/vux-refactor',
    define: {
      'process.env.NODE_ENV': JSON.stringify('production')
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
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
    plugins: isProduction
      ? [
          vue(),
          VueI18nPlugin({
            defaultSFCLang: 'yaml',
            include: [path.resolve(__dirname, './src/components/**/*.vue')],
            runtimeOnly: false
          })
        ]
      : [
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
