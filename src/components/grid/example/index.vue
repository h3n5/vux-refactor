<template>
  <div>
    <group-title>2 columns</group-title>
    <grid>
      <grid-item :label="$t('Grid')" v-for="i in 2" :key="i">
        <img slot="icon" src="@/assets/grid_icon.png" />
      </grid-item>
    </grid>
    <group-title>3 columns</group-title>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/component/cell" :label="$t('Go to Cell')">
        <img slot="icon" src="@/assets/grid_icon.png" />
      </grid-item>
      <grid-item :link="{ path: '/component/cell' }" :label="$t('Go to Cell')">
        <img slot="icon" src="@/assets/grid_icon.png" />
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="@/assets/grid_icon.png" />
        <span slot="label">{{ $t('Go to Cell') }}</span>
      </grid-item>
    </grid>
    <group-title>4 columns</group-title>
    <grid :show-lr-borders="false">
      <grid-item :label="$t('Grid')" v-for="i in 4" :key="i">
        <img slot="icon" src="@/assets/grid_icon.png" />
      </grid-item>
    </grid>
    <group-title>{{ $t('Custom content') }}</group-title>
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{ i }}</span>
      </grid-item>
    </grid>
    <group-title>{{ $t('Custom col') }}</group-title>
    <grid :cols="3" :show-lr-borders="false">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{ i }}</span>
      </grid-item>
    </grid>
  </div>
</template>

<i18n>
  zh_CN:
    Grid: "九宫格"
    "Go to Cell": "跳转到Cell"
    "Custom content": "自定义内容"
    "Custom col": "自定义列"
  en:
    Grid: "Grid"
    "Go to Cell": "Go to Cell"
    "Custom content": "Custom content"
    "Custom col": "Custom col"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Grid, GridItem, GroupTitle } from '@/index'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick() {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>
