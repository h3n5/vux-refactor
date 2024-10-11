<template>
  <div>
    <group :title="$t('Switch the type')">
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group>
    <panel
      :header="$t('List of content with image')"
      :footer="footer"
      :list="list"
      :type="type"
      @on-img-error="onImgError"
    ></panel>
  </div>
</template>

<i18n>
  zh-CN:
    Switch the type: 切换样式
    List of content with image: 图文组合列表
    More: 查看更多
  en:
    Switch the type: 'Switch the type'
    List of content with image: 'List of content with image'
    More: More
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Panel, Group, Radio } from 'vux-refactor'

export default {
  components: {
    Panel,
    Group,
    Radio,
  },
  methods: {
    onImgError(item, $event) {
      // console.log(item, $event)
    },
  },
  data() {
    return {
      type: '1',
      list: [
        {
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'https://dummyimage.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell',
        },
        {
          src: 'https://dummyimage.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false,
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息',
          },
        },
      ],
      footer: {
        title: 'more',
        url: 'http://vux.li',
      },
    }
  },
}
</script>
