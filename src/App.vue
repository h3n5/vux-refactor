<template>
  <div>
    hello world
    <button @click="show4 = !show4">click</button>
    <Actionsheet :showCancel="true" v-model="show4" :menus="menus1" />
  </div>
</template>
<script setup>
import { Actionsheet } from './index'
import { ref } from 'vue'
const menus1 = ref([
  {
    label: '测试',
    type: 'primary',
  },
  {
    label: 'Warn',
    type: 'warn',
  },
  {
    label: 'Disabled',
    type: 'disabled',
  },
])
const show4 = ref(true)
</script>
