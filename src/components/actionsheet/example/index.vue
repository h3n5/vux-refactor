<template>
  <div>
    <group>
      <x-switch :title="$t('Basic Usage')" v-model="show1"></x-switch>
      <x-switch :title="$t('Android Theme')" v-model="show7"></x-switch>
      <x-switch :title="$t('Show cancel menu')" v-model="show2"></x-switch>
      <x-switch :title="$t('Array menu')" v-model="show5"></x-switch>
    </group>

    <group :title="$t('Prevent closing when clicking mask')">
      <x-switch :title="$t('Basic Usage')" v-model="show4"></x-switch>
    </group>

    <group>
      <x-switch :title="$t('Menu as tips')" v-model="show3"></x-switch>
      <x-switch :title="$t('Slot: header')" v-model="show6"></x-switch>
      <x-switch :title="$t('Prevent auto closing')" v-model="show8"></x-switch>
    </group>

    <actionsheet
      v-model="show4"
      :menus="menus1"
      :close-on-clicking-mask="false"
      show-cancel
      @on-click-mask="log('on click mask')"
    ></actionsheet>

    <actionsheet
      v-model="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"
    ></actionsheet>

    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>

    <actionsheet
      v-model="show3"
      :menus="menus3"
      @on-click-menu="click"
      @on-click-menu-delete="onDelete"
      show-cancel
    ></actionsheet>

    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click5"></actionsheet>

    <actionsheet v-model="show6" :menus="menus1">
      <p slot="header" v-html="$t('Actionsheet header')"></p>
    </actionsheet>

    <actionsheet
      v-model="show7"
      :menus="menu7"
      theme="android"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"
    ></actionsheet>

    <toast v-model="showSuccess">{{ $t('Deleted~') }}</toast>

    <div v-transfer-dom>
      <actionsheet
        v-model="show8"
        :menus="menus8"
        @on-click-menu="demo8doClose"
        :close-on-clicking-mask="false"
        :close-on-clicking-menu="false"
      ></actionsheet>
    </div>
  </div>
</template>
<i18n>
    en:
        Basic Usage: "Basic Usage"
        Android Theme: "Android Theme"
        Show cancel menu: "Show cancel menu"
        Array menu: "Array menu"
        Close me: "Close me"
        Deleted~: "Deleted~"
        'Slot: header': "Slot: header"
        Prevent closing when clicking mask: "Prevent closing when clicking mask"
        Share to friends: "Share to friends"
        Share to timeline: "Share to timeline"
        Take Photo: "Take Photo"
        Choose from photos: "Choose from photos"
        Actionsheet header: 'Are you sure?Once deleted, you will never find it.'
        Menu as tips: "Menu as tips"
        Prevent auto closing: "Prevent auto closing"
    zh-CN:
        Basic Usage: "基本使用"
        Android Theme: "安卓风格"
        Show cancel menu: "显示取消菜单"
        Array menu: "数组菜单"
        Close me: "点我关闭"
        Deleted~: "删除成功"
        'Slot: header': "使用 header slot"
        Prevent closing when clicking mask: "点击遮罩区域不自动关闭"
        Share to friends: "分享给朋友"
        Share to timeline: "分享到朋友圈"
        Take Photo: "拍照"
        Choose from photos: "从相册中选择"
        Actionsheet header: '确定咩?删除后就无法撤消了哦'
        Menu as tips: "显示提示文字"
        Prevent auto closing: '不自动关闭'
  </i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
import { ref } from 'vue'
const { t } = useI18n()
const $t = t
import Actionsheet from '../index.vue'
import Group from '@/components/group/index.vue'
import XSwitch from '@/components/x-switch/index.vue'
import Toast from '@/components/toast/index.vue'
import * as vTransferDom from '@/directives/transfer-dom'
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)

const showSuccess = ref(false)
function log(e) {
  return window.console.log(e)
}

const menus1 = ref({
  menu1: t('Share to friends'),
  menu2: t('Share to timeline'),
})
const menus2 = {
  menu1: $t('Take Photo'),
  menu2: $t('Choose from photos'),
}
const menus3 = {
  'title.noop': $t('Actionsheet header'),
  delete: '<span style="color:red">Delete</span>',
}
const menus5 = [
  {
    label: $t('Actionsheet header'),
    type: 'info',
  },
  {
    label: 'Primary',
    type: 'primary',
    value: 'primary',
    otherProp: 'hey',
  },
  {
    label: 'Warn',
    type: 'warn',
  },
  {
    label: 'Disabled',
    type: 'disabled',
  },
  {
    label: 'Default',
  },
]
const menu7 = {
  menu1: '北京烤鸭',
  menu2: '陕西油泼面',
  menu3: '西安肉夹馍',
}
const menus8 = {
  menu1: $t('Close me'),
  menu2: $t('Close me'),
}
// todo
const demo8doClose = () => {
  this.$vux.loading.show({
    text: 'processing',
  })
  setTimeout(() => {
    this.$vux.loading.hide()
    show8.value = false
  }, 1000)
}

function click(key) {
  console.log(key)
}
function click5(key, item) {
  console.log(key, item)
}
function onDelete() {
  showSuccess.value = true
}
</script>
