<template>
  <label :for="`vux-agree-${uuid}`" class="weui-agree">
    <input :id="`vux-agree-${uuid}`" type="checkbox" v-model="currentValue" class="weui-agree__checkbox" />
    <span class="weui-agree__text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { buildUUID } from '@/tools/utils.js'
export default {
  name: 'agree',
  props: {
    value: Boolean
  },
  created() {
    this.currentValue = this.value
  },
  data() {
    return {
      uuid: buildUUID(),
      currentValue: false
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import './agree.less';
</style>