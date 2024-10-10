<template>
  <div style="text-align: center">
    <popover placement="top" style="margin: 20px" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">hello world</div>
      <button class="btn btn-default">{{ $t('Popover on top') }}</button>
    </popover>

    <popover placement="bottom" style="margin: 20px">
      <div slot="content" class="popover-demo-content">hello world</div>
      <button class="btn btn-default">{{ $t('Popover on bottom') }}</button>
    </popover>

    <popover placement="left" style="margin: 20px">
      <div slot="content" class="popover-demo-content">hello world</div>
      <button class="btn btn-default">{{ $t('Popover on left') }}</button>
    </popover>

    <popover placement="right" style="margin: 20px">
      <div slot="content" class="popover-demo-content">hello world</div>
      <button class="btn btn-default">{{ $t('Popover on right') }}</button>
    </popover>

    <div style="position: fixed; bottom: 100px; text-align: center; width: 100%">
      <p>fixed element</p>
      <popover placement="right" style="margin: 20px">
        <div slot="content" class="popover-demo-content">hello world</div>
        <button class="btn btn-default">{{ $t('Popover on right') }}</button>
      </popover>
    </div>
    <p style="padding-top: 500px">
      <popover placement="top" style="margin: 20px" @on-show="onShow" @on-hide="onHide">
        <div slot="content" class="popover-demo-content">hello world</div>
        <button class="btn btn-default">{{ $t('Popover with scroll height') }}</button>
      </popover>
    </p>
  </div>
</template>

<i18n>
  zh-CN:
    Popover on top: "上方出现"
    Popover on bottom: "下方出现"
    Popover on left: "左边出现"
    Popover on right: "右边出现"
    Popover with scroll height: "滚动条"
  en:
    Popover on top: "Popover on top"
    Popover on bottom: "Popover on bottom"
    Popover on left: "Popover on left"
    Popover on right: "Popover on right"
    Popover with scroll height: "Popover with scroll height"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Popover } from '@/index.js'

export default {
  components: {
    Popover,
  },
  methods: {
    onShow() {
      console.log('on show')
    },
    onHide() {
      console.log('on hide')
    },
  },
}
</script>

<style scoped>
.popover-demo-content {
  padding: 5px 10px;
}
</style>
