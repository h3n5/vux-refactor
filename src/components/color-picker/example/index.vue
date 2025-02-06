<template>
  <div>
    <div style="padding: 15px">
      <color-picker :colors="colors1" v-model="color1"></color-picker>
      <br />
      <color-picker :colors="colors1" v-model="color1" size="middle"></color-picker>
    </div>
    <group :title="$t('Use in cell')">
      <cell :title="'Color:' + color1">
        <color-picker :colors="colors1" v-model="color1" size="small"></color-picker>
      </cell>
    </group>
    <group :title="$t('A cell without title')">
      <cell primary="content">
        <color-picker :colors="colors1" v-model="color1" size="middle"></color-picker>
      </cell>
    </group>
  </div>
</template>

<i18n>
  zh_CN:
    Use in cell: "在 cell 中使用"
    A cell without title: "不带标题的 cell"
  en:
    Use in cell: "Use in cell"
    A cell without title: "A cell without title"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { ColorPicker, Group, Cell } from '@/index'

export default {
  components: {
    ColorPicker,
    Group,
    Cell
  },
  data() {
    return {
      color1: '#FFEF7D',
      colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
    }
  }
}
</script>
