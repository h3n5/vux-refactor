<template>
  <ViewBox>
    <p v-for="i in 100" :key="i">{{ i }}</p>
  </ViewBox>
</template>
<script setup>
import { ViewBox } from 'vux-refactor'
</script>
