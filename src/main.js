import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import i18n from './locale/index.js'
import { ConfirmPlugin, ToastPlugin, LoadingPlugin, DatetimePlugin, AlertPlugin, LocalePlugin } from '@/index.js'
import '../dist/style.css'
const app = createApp(App)
app
  // .use(ConfirmPlugin)
  // .use(ToastPlugin)
  // .use(LoadingPlugin)
  // .use(DatetimePlugin)
  .use(i18n)
  .use(AlertPlugin)
  .use(router)
  .mount('#app')
