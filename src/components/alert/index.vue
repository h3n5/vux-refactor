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
          {{ buttonText || $t('button_text') }}
        </a>
      </div>
    </x-dialog>
  </div>
</template>

<i18n>
    en:
        button_text: OK
    zh-CN:
        button_text: 确定
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import XDialog from '../x-dialog/index.vue'

export default {
  name: 'alert',
  components: {
    XDialog,
  },
  created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false,
    },
    maskTransition: {
      type: String,
      default: 'vux-mask',
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog',
    },
    maskZIndex: [Number, String],
  },
  data() {
    return {
      showValue: false,
    }
  },
  methods: {
    _onHide() {
      this.showValue = false
    },
  },
  watch: {
    value(val) {
      this.showValue = val
    },
    showValue(val) {
      this.$emit('input', val)
    },
  },
}
</script>
<style lang="less">
@import './alert.less';
</style>
