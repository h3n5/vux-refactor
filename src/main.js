import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import { ConfirmPlugin, ToastPlugin, LoadingPlugin, DatetimePlugin, AlertPlugin, LocalePlugin } from '@/index.js'
import '../dist/style.css'
import i18n from './i18n.js'
Vue.use(ConfirmPlugin).use(ToastPlugin).use(LoadingPlugin).use(DatetimePlugin).use(AlertPlugin).use(i18n)
const app = new Vue({
  render: (h) => h(App),
  router,
})
app.$mount('#app')
