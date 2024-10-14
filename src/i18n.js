import { createI18n } from 'vue-i18n-bridge'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n, { bridge: true })
const i18n = createI18n(
  {
    locale: 'zh-CN',
    silentTranslationWarn: true,
    messages: {},
  },
  VueI18n
)

export default i18n
