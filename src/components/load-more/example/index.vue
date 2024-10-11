<template>
  <div>
    <load-more :tip="$t('正在加载')"></load-more>
    <load-more :show-loading="false" :tip="$t('暂无数据')" background-color="#fbf9fe"></load-more>
    <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
  </div>
</template>

<i18n>
  zh-CN:
    正在加载: "正在加载"
    暂无数据: "暂无数据"
  en:
    正在加载: "Loading"
    暂无数据: "The End"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { LoadMore } from 'vux-refactor'

export default {
  components: {
    LoadMore,
  },
}
</script>
