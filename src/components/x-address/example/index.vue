<template>
  <div>
    <group>
      <x-address
        @on-hide="logHide"
        @on-show="logShow"
        :title="title"
        v-model="value"
        :list="addressData"
        @on-shadow-change="onShadowChange"
        placeholder="请选择地址"
        inline-desc="可以设置placeholder"
        :show.sync="showAddress"
      ></x-address>
      <cell title="上面value值" :value="value"></cell>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    select address: "选择地址"
  en:
    select address: "select address"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, XAddress, XButton, Cell } from '@/index.js'
import value2name from '@/filters/value2name.js'
import ChinaAddressV4Data from '@/datas/china_address.json'
export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell,
  },
  data() {
    return {
      title: '默认为空',
      value_0_1: [],
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区'],
      showAddress: false,
    }
  },
  methods: {
    doShowAddress() {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange(ids, names) {
      console.log(ids, names)
    },
    changeData() {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels() {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2() {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide(str) {
      console.log('on-hide', str)
    },
    logShow(str) {
      console.log('on-show')
    },
  },
}
</script>
