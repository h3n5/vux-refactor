<template>
  <div style="">
    <blur :blur-amount="40" :url="url">
      <p class="center"><img :src="url" /></p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index">
        <img :src="img" style="width: 100%" @click="url = img" />
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur } from '@/index.js'

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
  },
  data() {
    return {
      images: ['https://cdn.pixabay.com/photo/2023/04/20/12/22/globe-7939725_1280.jpg'],
      url: 'https://cdn.pixabay.com/photo/2023/04/20/12/22/globe-7939725_1280.jpg',
    }
  },
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
