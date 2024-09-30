<template>
  <div class="vux-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '@/mixins/multi-items'

export default {
  name: 'button-tab',
  mixins: [parentMixin],
  props: {
    height: Number
  }
}
</script>

<style lang="less">
@import './button-tab.less';
</style>
