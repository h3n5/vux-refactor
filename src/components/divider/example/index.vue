<template>
  <div>
    <divider>{{ t('I have bottom line') }}</divider>
  </div>
</template>

<i18n lang="yaml">
zh-CN:
  I have bottom line: '我是有底线的'
en:
  I have bottom line: 'I have bottom line'
</i18n>
<script>
import { Divider } from '@/index.js'
import { useI18n } from 'vue-i18n-bridge'
export default {
  components: {
    Divider,
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
}
</script>
