<template>
  <div>
    <group>
      <cell is-link title="pullup" link="/component/pullup">Pullup</cell>
      <cell is-link title="pulldown" link="/component/pulldown">Pulldown</cell>
      <cell is-link title="pulldownpullup" link="/component/pulldown-pullup">PulldownPullup</cell>
    </group>

    <divider>{{ $t('A Horizontal Scroller without Scrollbar') }}</divider>
    <scroller lock-y :scrollbar-x="false">
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i">
          <span>{{ ' ' + i + ' ' }}</span>
        </div>
      </div>
    </scroller>

    <divider>{{ $t('A Horizontal Scroller with Scrollbar') }}</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i">
          <span>{{ ' ' + i + ' ' }}</span>
        </div>
      </div>
    </scroller>

    <divider>{{ $t('A Horizontal Scroller without bounce effect') }}</divider>
    <scroller lock-y scrollbar-x :bounce="false">
      <div class="box1">
        <div class="box1-item" v-for="i in 7" :key="i">
          <span>{{ ' ' + i + ' ' }}</span>
        </div>
      </div>
    </scroller>

    <divider>{{ $t('A Vertical Scroller') }} scrollTop: {{ scrollTop }}</divider>
    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80" :key="i">placeholder {{ i }}</p>
      </div>
    </scroller>

    <x-button type="primary" @click.native="$refs.scrollerEvent.reset({ top: 0 })">reset</x-button>

    <divider>{{ $t('event:on-scroll-bottom') }}</divider>
    <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <p v-for="i in bottomCount" :key="i">placeholder {{ i }}</p>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>

    <divider>{{ $t('A Vertical Scroller with scrollbar') }}</divider>
    <scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <template v-if="showList1">
          <p v-for="i in 20" :key="i">placeholder {{ i + '' + i }}</p>
        </template>
        <template v-else>
          <p v-for="i in 10" :key="i">placeholder {{ i }}</p>
        </template>
        <x-button style="margin: 10px 0" type="primary" @click.native="onClickButton">{{ $t('Button') }}</x-button>
        <group>
          <cell @click.native="onCellClick" title="Title" value="Value"></cell>
        </group>
      </div>
    </scroller>
    <x-button @click.native="changeList" type="primary">{{ $t('show another list') }}</x-button>
  </div>
</template>

<i18n>
  zh-CN:
    A Horizontal Scroller without Scrollbar: "不带滚动条的水平 scroller"
    A Horizontal Scroller with Scrollbar: "显示滚动条的水平 scroller"
    A Horizontal Scroller without bounce effect: "没有边缘回滚效果的水平 scroller"
    A Vertical Scroller: "竖向 scroller"
    A Vertical Scroller with scrollbar: "显示滚动条的竖向 scroller"
    show another list: "改变显示的内容"
    Button: "按钮"
    event:on-scroll-bottom: "检查是否滚动到底部"
  en:
    A Horizontal Scroller without Scrollbar: "Horizontal Scroller without Scrollbar"
    A Horizontal Scroller with Scrollbar: "Horizontal Scroller with Scrollbar"
    A Horizontal Scroller without bounce effect: "Horizontal Scroller without bounce effect"
    A Vertical Scroller: "Vertical Scroller"
    A Vertical Scroller with scrollbar: "Vertical Scroller with scrollbar"
    show another list: "show another list"
    Button: "Button"
    event:on-scroll-bottom: "event:on-scroll-bottom"

</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux-refactor'

export default {
  components: {
    Scroller,
    Divider,
    Spinner,
    XButton,
    Group,
    Cell,
    LoadMore,
  },
  data() {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({ top: 0 })
    })
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({ top: 0 })
    })
  },
  methods: {
    onScrollBottom() {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    onScroll(pos) {
      this.scrollTop = pos.top
    },
    onCellClick() {
      window.alert('cell click')
    },
    onClickButton() {
      window.alert('click')
    },
    changeList() {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0,
        })
      })
    },
  },
}
</script>

<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>
