import Vue from 'vue'
import { createI18n } from 'vue-i18n-bridge'
import VueI18n from 'vue-i18n'
import App from './App.vue'
Vue.use(VueI18n, { bridge: true })
const i18n = createI18n({ locale: 'zh-CN', messages: {}, silentTranslationWarn: true }, VueI18n)

Vue.use(i18n)

const app = new Vue({
  render: (h) => h(App),
  i18n,
})

app.$mount('#app')
