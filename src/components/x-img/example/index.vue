<template>
  <div>
    <div v-for="src in list" style="background-color: yellow; text-align: center" :key="src">
      <span style="font-size: 20px">Loading</span>
      <x-img
        :src="src"
        :webp-src="`${src}?type=webp`"
        @on-success="success"
        @on-error="error"
        class="ximg-demo"
        error-class="ximg-error"
        :offset="-100"
        container="#vux_view_box_body"
      ></x-img>
    </div>
  </div>
</template>

<script>
import { XImg } from 'vux-refactor'
export default {
  components: {
    XImg,
  },
  methods: {
    success(src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error(src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
  },
  data() {
    return {
      list: ['https://dummyimage.com/810x300/FF3B3B/ffffff.png'],
    }
  },
}
</script>

<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
