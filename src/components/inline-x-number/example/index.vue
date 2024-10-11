<template>
  <div>
    <br />
    <div style="text-align: center">
      <inline-x-number width="50px"></inline-x-number>
    </div>
    <br />
    <div style="text-align: center">
      <inline-x-number width="50px" button-style="round"></inline-x-number>
    </div>
    <group>
      <cell :title="$t('Used within cell')">
        <inline-x-number style="display: block" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    Used within cell: "在cell中使用"
  en:
    Used within cell: "Used within cell"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, Cell, InlineXNumber } from 'vux-refactor'

export default {
  components: {
    Group,
    Cell,
    InlineXNumber,
  },
}
</script>
