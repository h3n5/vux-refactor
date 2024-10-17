import VueI18n from 'vue-i18n'
import zhCN from './zh-CN.json'
import enUS from './en-US.json'
import Vue from 'vue'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
  fallbackLocale: 'zh_CN',
  messages: {
    zh_CN: zhCN,
    en_GB: enUS,
  },
})
const localeMixin = {
  computed: {
    t() {
      return i18n.t.bind(i18n)
    },
  },
}

export { localeMixin }
export default i18n
