<template>
  <div class="page">
    <Card :header="{ title: '切换主题' }">
      <p slot="content" class="card-padding">组件库通过 css 变量 来组织样式</p>
    </Card>
    <Group>
      <Cell title="切换主题"></Cell>
      <Cell title="css 变量"></Cell>
      <div class="card-padding">
        <XButton type="primary" @click.native="setTheme('#04BE02')">默认主题色</XButton>
      </div>
      <div class="card-padding purple">
        <XButton type="primary" @click.native="setTheme('#7966af')">紫色</XButton>
      </div>
      <div class="card-padding dark">
        <XButton type="primary" @click.native="setThemeDark()">暗色</XButton>
      </div>
    </Group>
  </div>
</template>
<script setup>
import { Group, XButton, Card, Cell } from '@/index.js'

import { StyleProvider, Themes } from './utils.js'

function setThemeDark() {
  StyleProvider(Themes.dark)
}
function setTheme(theme) {
  const root = document.documentElement
  root.style.setProperty('--theme-color', theme)
  // root.style.setProperty("--button-primary-bg-color", theme);
}
</script>
<style lang="less">
.page {
  background: var(--theme-color);
}
.card-padding {
  padding: 10px;
}
.purple {
  --button-primary-bg-color: #7966af;
}
.dark {
  --button-primary-bg-color: #333;
}
</style>
