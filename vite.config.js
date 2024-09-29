// vite.config.js
import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
function transformI18nBlock(source) {
  console.log(source)
  // transformation logic
}
/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: true
  },
  resolve: {},
  plugins: [VueI18nPlugin({
    transformI18nBlock,
    include: [path.resolve(__dirname, './src/components/**')],
  }), vue()],
}
