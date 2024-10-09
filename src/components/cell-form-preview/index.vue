<template>
  <div class="weui-cell vux-cell-form-preview" :class="{ 'vux-cell-no-border-intent': !borderIntent }">
    <div class="weui-form-preview__bd">
      <div class="weui-form-preview__item" v-for="(item, i) in list" :key="i">
        <label class="weui-form-preview__label" v-html="$t(item.label)"></label>
        <span class="weui-form-preview__value" v-html="$t(item.value)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell-form-preview',
  props: {
    list: Array,
    borderIntent: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="less">
@import './cell-form-preview.less';
</style>
