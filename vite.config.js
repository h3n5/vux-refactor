// vite.config.js
import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import copyPlugin from 'rollup-plugin-copy'
/** @type {import('vite').UserConfig} */
export default {
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vux-refactor': path.resolve(__dirname, './dist/vux-refactor.es.js'),
    },
  },
  build: {
    sourcemap: true,
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
          vue: 'Vue',
        },
      },
      plugins: [
        copyPlugin({
          targets: [
            { src: 'src/locale/en-US.json', dest: 'dist/locale' },
            { src: 'src/locale/zh-CN.json', dest: 'dist/locale' },
          ],
          hook: 'writeBundle', // notice here
        }),
      ],
    },
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
