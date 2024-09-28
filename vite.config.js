// vite.config.js
import vue from '@vitejs/plugin-vue2'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default {
  resolve: {},
  plugins: [VueI18nPlugin({}), vue()],
}
