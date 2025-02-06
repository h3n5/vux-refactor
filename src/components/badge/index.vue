<template>
  <span
    v-text="text"
    :class="[
      'vux-badge',
      {
        'vux-badge-dot': typeof text === 'undefined',
        'vux-badge-single': typeof text !== 'undefined' && text.toString().length === 1
      }
    ]"
  ></span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: [String, Number]
  }
}
</script>

<style lang="less">
@import './badge.less';
</style>