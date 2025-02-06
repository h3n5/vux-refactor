<template>
  <div class="drawer">
    <Drawer width="200px;" :show.sync="drawerVisibility">
      <div slot="drawer">menu</div>

      <!-- rourer-view 作为默认插槽内容 -->
      <div>
        <XButton @click.native="drawerVisibility = !drawerVisibility">toggle</XButton>
      </div>
    </Drawer>
  </div>
</template>
<script setup>
import { Drawer, XButton } from '@/index'
import { ref } from 'vue'
const drawerVisibility = ref(false)
</script>
<style lang="less">
.drawer {
  height: 100vh;
  width: 100vh;
}
</style>
