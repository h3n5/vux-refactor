import Vue from 'vue'
import i18n from './i18n.js'
import App from './App.vue'
import router from '@/router.js'

const app = new Vue({
  render: (h) => h(App),
  i18n,
  router
})

app.$mount('#app')
