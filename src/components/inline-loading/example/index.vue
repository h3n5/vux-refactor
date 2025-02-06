<template>
  <div>
    <br />
    <p style="text-align: center">
      <inline-loading></inline-loading>
    </p>
    <br />
    <p style="text-align: center">
      <span style="vertical-align: middle; display: inline-block; font-size: 14px">
        {{ $t('loading') }}&nbsp;&nbsp;
      </span>
      <inline-loading></inline-loading>
    </p>
    <br />
    <p style="text-align: center">
      <inline-loading></inline-loading>
      <span style="vertical-align: middle; display: inline-block; font-size: 14px">
        &nbsp;&nbsp;{{ $t('loading') }}
      </span>
    </p>
  </div>
</template>

<i18n>
  zh_CN:
    loading: "加载中"
  en:
    loading: "loading"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { InlineLoading } from '@/index'

export default {
  components: {
    InlineLoading
  }
}
</script>
