import LoadingComponent from '@/components/loading/index.vue'
import { mergeOptions } from '@/libs/plugin_helper.js'
import { defineComponent, createApp } from 'vue'
export function createVM() {
  if (typeof document === 'undefined') {
    console.error('[VUX] Loading plugin cannot be used in ssr.')
    return
  }
  const Comp = defineComponent(LoadingComponent)
  const el = document.createElement('div')
  const $vm = createApp(Comp)
  $vm.mount(el)
  document.body.appendChild(el)
  return $vm
}

export function show($vm, options) {
  if (typeof options === 'object') {
    mergeOptions($vm, options)
  } else if (typeof options === 'string') {
    $vm.content = options
  }
  $vm.show = true
}

export function hide($vm) {
  $vm.show = false
  $vm.$nextTick(() => {
    this.watcher && this.watcher()
    this.watcher = null
  })
}

export default {
  show,
  hide
}
