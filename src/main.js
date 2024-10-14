import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import { ConfirmPlugin, ToastPlugin, LoadingPlugin, DatetimePlugin, AlertPlugin } from '@/index.js'
import '../dist/style.css'
import '../dist/locale/zh-CN.json'
import i18n from './i18n.js'
Vue.use(i18n)
Vue.use(ConfirmPlugin).use(ToastPlugin).use(LoadingPlugin).use(DatetimePlugin).use(AlertPlugin)
const app = new Vue({
  render: (h) => h(App),
  router,
})
app.$mount('#app')
