import { createI18n } from 'vue-i18n-bridge'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n, { bridge: true })
const i18n = createI18n(
  {
    locale: 'zh-CN',
    messages: {
      'zh-CN': {
        Start: '开始',
      },
      'en-US': {
        Start: 'Start',
      },
    },
  },
  VueI18n
)
Vue.use(i18n)
export default i18n
