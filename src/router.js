import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const defaultRouters = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./site/home.vue'),
  },
  {
    path: '/Internationalization',
    name: 'Internationalization',
    component: () => import('./site/Internationalization.vue'),
  },
  {
    path: '/Theme',
    name: 'Theme',
    component: () => import('./site/Theme.vue'),
  },
]

const router = new VueRouter({
  routes: defaultRouters,
})

const modules = import.meta.glob('./components/**/example/index.vue')
const reg = /components\/([\w|-]+)\/example/
for (const mod in modules) {
  const name = mod.match(reg)[1].replace(/-/g, '')
  router.addRoute({
    path: '/' + name,
    name: name.toLocaleUpperCase(),
    component: modules[mod],
  })
}

export default router
