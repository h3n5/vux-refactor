import { createVM, show, hide } from './util'

let $vm

const plugin = {
  install(app) {
    if (!$vm) {
      $vm = createVM()
    }

    const alert = {
      show(options = {}) {
        return show.call(this, $vm, options)
      },
      hide() {
        return hide.call(this, $vm)
      },
      isVisible() {
        return $vm.showValue
      }
    }

    if (!app.config.globalProperties.$vux) {
      app.config.globalProperties.$vux = {
        alert
      }
    } else {
      app.config.globalProperties.$vux.alert = alert
    }

    app.mixin({
      created: function () {
        this.$vux = app.config.globalProperties.$vux
      }
    })
  }
}

export default plugin
export const install = plugin.install
