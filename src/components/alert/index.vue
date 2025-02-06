<template>
  <div class="vux-alert">
    <x-dialog
      v-model="showValue"
      :mask-transition="maskTransition"
      :dialog-transition="dialogTransition"
      :hide-on-blur="hideOnBlur"
      :mask-z-index="maskZIndex"
      @on-hide="$emit('on-hide')"
      @on-show="$emit('on-show')"
    >
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{ title }}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="_onHide">
          {{ buttonText || t('button_text') }}
        </a>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../x-dialog/index.vue'
import { useI18n } from 'vue-i18n'
import { ref, toRefs } from 'vue'
export default {
  name: 'alert',
  components: {
    XDialog
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    maskZIndex: [Number, String]
  },
  setup(props) {
    const { value } = toRefs(props)
    const showValue = ref(value || false)
    const { t } = useI18n()
    return {
      showValue,
      t
    }
  },
  methods: {
    _onHide() {
      this.showValue = false
    }
  },
  watch: {
    value(val) {
      this.showValue = val
    },
    showValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="less">
@import './alert.less';
</style>
