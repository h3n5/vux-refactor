<template>
  <div>
    <div style="margin: 10px; overflow: hidden" v-for="(item, i) in list" :key="i">
      <masker style="border-radius: 2px">
        <div class="m-img" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
        <div slot="content" class="m-title">
          {{ item.title }}
          <br />
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
import { Masker } from '@/index.js'

export default {
  components: {
    Masker,
  },
  data() {
    return {
      list: [
        {
          title: '洗颜新潮流！人气洁面皂排行榜',
          img: 'https://pixabay.com/photos/globe-ship-exploration-to-travel-7939725/',
        },
      ],
    }
  },
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
