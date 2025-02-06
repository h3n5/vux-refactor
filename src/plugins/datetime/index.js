import Datetime from '@/components/datetime/datetimepicker.js'
import ObjectAssign from 'object-assign'
import DatetimeComponent from '@/components/datetime/index.vue'
import { defineComponent } from 'vue'
const libs = {
  show: function (options = {}) {
    options = ObjectAssign(
      {
        destroyOnHide: true,
        isOneInstance: true
      },
      options
    )
    const datetime = (libs.datetime = new Datetime(options))
    datetime.show()
  },
  hide: function () {
    libs.datetime && libs.datetime.hide()
  }
}

export default {
  install(app) {
    // inject style
    const _Datetime = defineComponent(DatetimeComponent)
    const div = document.createElement('div')
    if (typeof document !== 'undefined') {
      let $vm = new _Datetime({
        el: div
      })
      if ($vm.$el.style) {
        $vm.$el.style.display = 'none'
      }
      $vm.$el.className += ' vux-datetime-style-inject'
      document.body.appendChild($vm.$el)
    }

    if (!app.config.globalProperties.$vux) {
      app.config.globalProperties.$vux = {
        datetime: libs
      }
    } else {
      app.config.globalProperties.$vux.datetime = libs
    }

    app.mixin({
      created: function () {
        this.$vux = app.config.globalProperties.$vux
      }
    })
  }
}
