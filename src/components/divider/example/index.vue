<template>
  <div>
    <divider>{{ $t('I have bottom line') }}</divider>
  </div>
</template>

<i18n>
  zh-CN:
    I have bottom line: "我是有底线的"
  en:
    I have bottom line: "I have bottom line"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Divider } from 'vux-refactor'

export default {
  components: {
    Divider,
  },
}
</script>
