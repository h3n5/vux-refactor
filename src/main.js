import Vue from 'vue'
import i18n from './i18n.js'
import App from './App.vue'
import router from '@/router.js'
import { ConfirmPlugin, ToastPlugin, LoadingPlugin, AlertPlugin } from './index.js'
Vue.use(ConfirmPlugin).use(ToastPlugin).use(LoadingPlugin).use(AlertPlugin)
const app = new Vue({
  render: (h) => h(App),
  i18n,
  router,
})

app.$mount('#app')
