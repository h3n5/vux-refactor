<template>
  <div>
    <divider>{{ $t('Default usage') }}</divider>
    <marquee>
      <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">
        hello world {{ i }}
      </marquee-item>
    </marquee>
    <br />
    <divider>{{ $t('Used in a cell') }}</divider>
    <group>
      <cell :title="$t('News')">
        <marquee>
          <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">
            {{ $t('JavaScript is the best language') }} {{ i }}
          </marquee-item>
        </marquee>
      </cell>
    </group>
    <br />
    <divider>{{ $t('Async data') }}</divider>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">
        hello world {{ i }}
      </marquee-item>
    </marquee>
  </div>
</template>

<i18n>
  zh_CN:
    Default usage: "默认"
    Used in a cell: "在 cell 中使用"
    News: "公告"
    Async data: "异步数据"
    JavaScript is the best language: "JavaScript 是最好的语言"
  en:
    Default usage: "Default"
    Used in a cell: "Use in cell"
    News: "News"
    Async data: "Async data"
    JavaScript is the best language: "JavaScript is the best language"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, Cell, Marquee, MarqueeItem, Divider } from '@/index'

export default {
  components: {
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    Divider
  },
  mounted() {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick(i) {
      console.log(i)
    }
  },
  data() {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>
