<template>
  <div>
    <msg :title="$t('Yeah! You make it')" :description="$t('Msg description')" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<i18n>
  zh-CN:
    Yeah! You make it: "操作成功"
    Msg description: "内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现文字链接"
    Primary button: "推荐操作"
    Secondary button: "辅助操作"
  en:
    Yeah! You make it: "Yeah! You make it"
    Msg description: "Msg description"
    Primary button: "Primary button"
    Secondary button: "Secondary button"
</i18n>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n-bridge'
import { Msg } from '@/index.js'
const { t } = useI18n()
const $t = t
const description = ref('msg description')
const icon = ref('')
const buttons = ref([
  {
    type: 'primary',
    text: $t('Primary button'),
    onClick: changeIcon,
  },
  {
    type: 'default',
    text: $t('Secondary button'),
  },
])
function changeIcon() {
  if (!icon.value || icon.value === 'success') {
    icon.value = 'warn'
    return
  }
  if (icon.value === 'warn') {
    icon.value = 'info'
    return
  }
  if (icon.value === 'info') {
    icon.value = 'waiting'
    return
  }
  if (icon.value === 'waiting') {
    icon.value = 'success'
  }
}
</script>
