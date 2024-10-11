<template>
  <div>
    <group :title="$t('Default')">
      <x-number :name="$t('Quantity')" :title="$t('Quantity')"></x-number>
    </group>

    <group :title="$t('listen')">
      <x-number :title="$t('Quantity')" v-model="changeValue" :min="0" @on-change="change"></x-number>
    </group>

    <group :title="$t('set width=100px')">
      <x-number :title="$t('Quantity')" width="100px"></x-number>
    </group>

    <group :title="$t('round style')">
      <x-number :title="$t('Quantity')" v-model="roundValue" button-style="round" :min="0" :max="5"></x-number>
    </group>

    <group :title="$t('set step=0.5')">
      <x-number :title="$t('Quantity')" :step="0.5"></x-number>
    </group>

    <group :title="$t('set value=1, min=-5 and max=8')">
      <x-number :title="$t('Quantity')" :min="-5" :max="8" :value="1"></x-number>
    </group>

    <group :title="$t('fillable = true')">
      <x-number :value="10" :title="$t('Quantity')" fillable></x-number>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    Default: "默认"
    Quantity: "数量"
    listen: "监听 on-change 事件（打印在控制台）"
    set width=100px: "设置宽度为100px"
    set step=0.5: "设置步长为0.5"
    set value=1, min=-5 and max=8: "设置值为1，最小值为-5，最大值为8"
    fillable = true: "设置可以输入"
    use with other group elements: "和其他group子元素一起使用"
    Switch Component: "Switch 组件"
    round style: "圆形按钮"
  en:
    Default: "Default"
    Quantity: "Quantity"
    listen: "Listen to on-change events (printed on console)"
    set width=100px: "Set width to 100px"
    set step=0.5: "Set step to 0.5"
    set value=1, min=-5 and max=8: "Set value to 1, min=-5 and max=8"
    fillable = true: "Set fillable"
    use with other group elements: "Use with other group elements"
    Switch Component: "Switch Component"
    round style: "Round style"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, XNumber, XSwitch, Divider } from 'vux-refactor'

export default {
  components: {
    XNumber,
    Group,
    XSwitch,
    Divider,
  },
  data() {
    return {
      changeValue: 0,
      roundValue: 0,
    }
  },
  methods: {
    change(val) {
      console.log('change', val)
    },
  },
}
</script>
