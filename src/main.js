import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import i18n from './i18n.js'
import { ConfirmPlugin, ToastPlugin, LoadingPlugin, AlertPlugin, DatetimePlugin } from './index.js'
Vue.use(ConfirmPlugin).use(ToastPlugin).use(LoadingPlugin).use(AlertPlugin).use(DatetimePlugin)
const app = new Vue({
  render: (h) => h(App),
  router,
})

app.$mount('#app')
