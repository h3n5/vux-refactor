<template>
  <Card :header="{ title: `参考vite.config.js` }">
    <div slot="content" style="padding: 10px">
      <code>
        import Components from 'unplugin-vue-components/vite'
        <br />
        import VuxRefactorResolver from 'vux-refactor'
        <br />
        Components({ resolvers: [ VuxRefactorResolver({ exclude: [] }) ], allowOverrides: true })
      </code>
    </div>
  </Card>
</template>
<script setup>
</script>