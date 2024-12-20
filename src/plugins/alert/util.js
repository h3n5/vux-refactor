import AlertComponent from '@/components/alert/index.vue'
import { mergeOptions } from '@/libs/plugin_helper'

export function createVM(Vue) {
  if (typeof document === 'undefined') {
    console.error('[VUX] Alert plugin cannot be used in ssr.')
    return
  }
  try {
    const Alert = Vue.extend(AlertComponent)
    const $vm = new Alert({
      el: document.createElement('div'),
    })
    document.body.appendChild($vm.$el)
    return $vm
  } catch (error) {
    console.log('AutoConsole: createVM -> error', error)
  }
}

export function show($vm, options) {
  if (typeof options === 'object') {
    mergeOptions($vm, options)
  } else if (typeof options === 'string') {
    $vm.content = options
  }
  this.watcher && this.watcher()
  this.watcher = $vm.$watch('showValue', (val) => {
    val && options.onShow && options.onShow($vm)
    if (val === false && options.onHide) {
      options.onHide($vm)
      this.watcher && this.watcher()
    }
  })
  $vm.showValue = true
}

export function hide($vm) {
  $vm.showValue = false
  $vm.$nextTick(() => {
    this.watcher && this.watcher()
    this.watcher = null
  })
}

export default {
  show,
  hide,
}
