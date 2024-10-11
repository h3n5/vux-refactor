<template>
  <div>
    <group :title="$t('value map')">
      <x-switch :title="$t('default true')" :value-map="['0', '1']" v-model="stringValue"></x-switch>
      <cell title="value" :value="typeof stringValue + ' ' + stringValue"></cell>
    </group>
    <group :title="$t('Basic Usage')">
      <x-switch :title="$t('default false')"></x-switch>
      <x-switch :title="$t('default true')" :inline-desc="value1 + ''" v-model="value1"></x-switch>
    </group>
    <group :title="$t('disabled')">
      <x-switch :title="$t('default false')" disabled></x-switch>
      <x-switch :title="$t('default true')" :value="true" disabled></x-switch>
    </group>
    <group :title="$t('prevent default')">
      <x-switch :title="$t('default false')" prevent-default v-model="value2" @on-click="onClick"></x-switch>
    </group>
    <group :title="$t('html title')">
      <x-switch disabled :title="$t('switch red')"></x-switch>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    prevent default: "阻止默认"
    Basic Usage: "基本用法"
    value map: "值转换 map"
    default true: "默认 true"
    default false: "默认 false"
    disabled: "禁用"
    html title: "使用html设置title"
    switch red: "我是红色"
  en:
    prevent default: "prevent default"
    Basic Usage: "Basic Usage"
    value map: "value map"
    default true: "default true"
    default false: "default false"
    disabled: "disabled"
    html title: "html title"
    switch red: "switch red"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { XSwitch, Group, Cell } from 'vux-refactor'

export default {
  components: {
    XSwitch,
    Group,
    Cell,
  },
  methods: {
    onClick(newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$vux.loading.show({
        text: 'in processing',
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.value2 = newVal
      }, 1000)
    },
  },
  data() {
    return {
      value1: true,
      value2: false,
      stringValue: '0',
    }
  },
}
</script>
