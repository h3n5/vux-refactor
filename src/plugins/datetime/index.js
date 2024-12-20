import Datetime from '@/components/datetime/datetimepicker.js'
import ObjectAssign from 'object-assign'
import DatetimeComponent from '@/components/datetime/index.vue'

const libs = {
  show: function (options = {}) {
    options = ObjectAssign(
      {
        destroyOnHide: true,
        isOneInstance: true,
      },
      options
    )
    const datetime = (libs.datetime = new Datetime(options))
    datetime.show()
  },
  hide: function () {
    libs.datetime && libs.datetime.hide()
  },
}

export default {
  install(Vue) {
    // inject style
    const _Datetime = Vue.extend(DatetimeComponent)
    const div = document.createElement('div')
    if (typeof document !== 'undefined') {
      let $vm = new _Datetime({
        el: div,
      })
      if ($vm.$el.style) {
        $vm.$el.style.display = 'none'
      }
      $vm.$el.className += ' vux-datetime-style-inject'
      document.body.appendChild($vm.$el)
    }

    if (!Vue.$vux) {
      Vue.$vux = {
        datetime: libs,
      }
    } else {
      Vue.$vux.datetime = libs
    }

    Vue.mixin({
      created: function () {
        this.$vux = Vue.$vux
      },
    })
  },
}
