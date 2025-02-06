<template>
  <div>
    <divider>{{ $t('Horizontal') }}</divider>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
      <flexbox-item><div class="flex-demo">6</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Honrizontal with no gutter') }}</divider>
    <flexbox :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Vertical') }}</divider>
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Vertical with no gutter') }}</divider>
    <flexbox orient="vertical" :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Grid support (12 columns)') }}</divider>
    <flexbox>
      <flexbox-item :span="4"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2/3</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox>
      <flexbox-item :span="6"><div class="flex-demo">6/12</div></flexbox-item>
      <flexbox-item :span="2"><div class="flex-demo">2/12</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Flexible grid') }}</divider>
    <flexbox>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 6"><div class="flex-demo">1/6</div></flexbox-item>
      <flexbox-item :span="1 / 8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item :span="1 / 8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br />
    <flexbox :gutter="0">
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 6"><div class="flex-demo">1/6</div></flexbox-item>
      <flexbox-item :span="1 / 8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item :span="1 / 8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br />
    <divider>{{ $t('Flexible grid') }}</divider>
    <flexbox :gutter="0">
      <flexbox-item :span="1 / 3" :order="4"><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item :span="1 / 6" :order="3"><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item :span="1 / 8" :order="2"><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item :span="1 / 8" :order="1"><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item :order="-99"><div class="flex-demo">5</div></flexbox-item>
    </flexbox>
    <br />
    <divider>flex-wrap</divider>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1 / 3"><div class="flex-demo">1/3</div></flexbox-item>
    </flexbox>
  </div>
</template>

<i18n>
  zh_CN:
    Horizontal: "水平"
    Honrizontal with no gutter: "水平无间隙"
    Vertical: "垂直"
    Vertical with no gutter: "垂直无间隙"
    Grid support (12 columns): "网格（12列）"
    Flexible grid: "弹性网格"
  en:
    Horizontal: "Horizontal"
    Honrizontal with no gutter: "Horizontal without gutter"
    Vertical: "Vertical"
    Vertical with no gutter: "Vertical without gutter"
    Grid support (12 columns): "Grid (12 columns)"
    Flexible grid: "Flexible grid"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Flexbox, FlexboxItem, Divider } from '@/index'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  }
}
</script>

<style lang="less">
@import '@/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
