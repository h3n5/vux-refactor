<template>
  <div>
    <img
      class="previewer-demo-img"
      v-for="(item, index) in list"
      :key="item.src"
      :src="item.src"
      width="100"
      @click="show(index)"
    />
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script>
import { Previewer, TransferDom } from 'vux-refactor'

export default {
  directives: {
    TransferDom,
  },
  components: {
    Previewer,
  },
  methods: {
    logIndexChange(arg) {
      console.log(arg)
    },
    show(index) {
      this.$refs.previewer.show(index)
    },
  },
  data() {
    return {
      list: [
        {
          msrc: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg',
          src: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg',
          w: 800,
          h: 400,
        },
      ],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // https://javascript.info/tutorial/coordinates
        },
      },
    }
  },
}
</script>
