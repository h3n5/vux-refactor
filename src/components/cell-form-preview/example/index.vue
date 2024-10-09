<template>
  <div>
    <group>
      <cell :title="$t('Total')" :value="$t('$1024')"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>

<i18n>

  zh-CN:
    Total: 合计
    $1024: '￥1024'
    Apple: 苹果
    Banana: 香蕉
    Fish: 鱼肉
  en:
    Total: Total
    $1024: $1024
    Apple: Apple
    Banana: Banana
    Fish: Fish
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { CellFormPreview, Group, Cell } from '@/index.js'

export default {
  components: {
    CellFormPreview,
    Group,
    Cell,
  },
  data() {
    return {
      list: [
        {
          label: 'Apple',
          value: '3.29',
        },
        {
          label: 'Banana',
          value: '1.04',
        },
        {
          label: 'Fish',
          value: '8.00',
        },
      ],
    }
  },
}
</script>
