<template>
  <div>
    <div style="padding: 15px">
      <check-icon :value.sync="demo1">{{ $t('Do you agree?') }} ({{ demo1 }})</check-icon>
      <br />
      <br />
      <check-icon :value.sync="demo2" type="plain">{{ $t('Do you agree?') }} ({{ demo2 }})</check-icon>
    </div>
  </div>
</template>

<i18n>
  zh-CN:
    Do you agree?: 同意不
  en:
    Do you agree?: Do you agree?
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { CheckIcon } from '@/index.js'

export default {
  components: {
    CheckIcon,
  },
  data() {
    return {
      demo1: false,
      demo2: true,
    }
  },
}
</script>
