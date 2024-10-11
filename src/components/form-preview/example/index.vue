<template>
  <div>
    <form-preview
      :header-label="$t('付款金额')"
      header-value="¥2400.00"
      :body-items="list"
      :footer-buttons="buttons1"
    ></form-preview>
    <br />
    <form-preview
      :header-label="$t('付款金额')"
      header-value="¥2400.00"
      :body-items="list"
      :footer-buttons="buttons2"
      name="demo"
    ></form-preview>
    <br />
    <form-preview :header-label="$t('付款金额')" header-value="¥2400.00" :body-items="list"></form-preview>
  </div>
</template>

<i18n>
  en:
    付款金额: "Total"
    标题标题: "Item Title"
    商品: "Product"
    很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字: "Long Long Long Long Long Long Long Long Long Long Long Long Content"
    名字名字名字: "Name Name"
    电动打蛋机: "Item title"
    辅助操作: "Info"
    操作: "Action"
    点击事件: "Click Event"
    跳转到首页: "Homepage"
  zh-CN:
    付款金额: "付款金额"
    标题标题: "标题标题"
    商品: "商品"
    很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字: "很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"
    名字名字名字: "名字名字名字"
    电动打蛋机: "电动打蛋机"
    辅助操作: "辅助操作"
    操作: "操作"
    点击事件: "点击事件"
    跳转到首页: "跳转到首页"
</i18n>
<script setup>
import { FormPreview } from 'vux-refactor'
import { useI18n } from 'vue-i18n-bridge'
import { ref } from 'vue'
const { t } = useI18n()
const $t = t

const list = ref([
  {
    label: '商品',
    value: '电动打蛋机',
  },
  {
    label: '标题标题',
    value: '名字名字名字',
  },
  {
    label: '标题标题',
    value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
  },
])
const buttons1 = ref([
  {
    style: 'default',
    text: '辅助操作',
  },
  {
    style: 'primary',
    text: $t('跳转到首页'),
    link: '/',
  },
])
const buttons2 = ref([
  {
    style: 'primary',
    text: $t('点击事件'),
    onButtonClick: (name) => {
      alert(`clicking ${name}`)
    },
  },
])
</script>
