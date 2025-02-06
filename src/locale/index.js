import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.json'
import enUS from './en-US.json'
const i18n = createI18n({
  locale: 'zh_CN',
  fallbackLocale: 'zh_CN',
  messages: {
    zh_CN: zhCN,
    en: enUS
  }
})
const localeMixin = {
  computed: {
    t() {
      return i18n.t
    }
  }
}

export { localeMixin }
export default i18n
