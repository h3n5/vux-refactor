import Vue from 'vue'
import i18n from './i18n.js'
import App from './App.vue'


const app = new Vue({
  render: (h) => h(App),
  i18n,
})

app.$mount('#app')
