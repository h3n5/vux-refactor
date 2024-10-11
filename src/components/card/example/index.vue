<template>
  <div>
    <divider>{{ $t('Simple card with header and content') }}</divider>
    <card :header="{ title: $t('My wallet') }">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br />
          {{ $t('Point') }}
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br />
          {{ $t('Coupon') }}
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br />
          {{ $t('Gift card') }}
        </div>
        <div>
          <span>88</span>
          <br />
          {{ $t('Cash') }}
        </div>
      </div>
    </card>

    <br />
    <divider>{{ $t('With footer') }}</divider>
    <card :header="{ title: $t('Product details') }" :footer="{ title: $t('More'), link: '/component/panel' }">
      <p slot="content" class="card-padding">{{ $t('Custom content') }}</p>
    </card>

    <br />
    <divider>{{ $t('Use header slot and content slot') }}</divider>
    <card>
      <img slot="header" src="https://dummyimage.com/640x300/000000/0011ff.png" style="width: 100%; display: block" />
      <div slot="content" class="card-padding">
        <p style="color: #999; font-size: 12px">Posted on January 21, 2015</p>
        <p style="font-size: 14px; line-height: 1.2">
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis
          nibh hendrerit..
        </p>
      </div>
    </card>
  </div>
</template>

<i18n>
  zh-CN:
    Simple card with header and content: "带有标题和内容的简单卡片"
    My wallet: "我的钱包"
    Point: "京豆"
    Coupon: "京东券"
    Gift card: "京东卡/E卡"
    Cash: "七天待还"
    With footer: "带有 footer 的卡片"
    Product details: "商品详情"
    More: "查看更多"
    Custom content: "自定义内容"
    Use header slot and content slot: "使用 header slot 和 content slot"
  en:
    Simple card with header and content: "Simple card with header and content"
    My wallet: "My wallet"
    Point: "Point"
    Coupon: "Coupon"
    Gift card: "Gift card"
    Cash: "Cash"
    With footer: "With footer"
    Product details: "Product details"
    More: "More"
    Custom content: "Custom content"
    Use header slot and content slot: "Use header slot and content slot" 
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Divider, Card } from 'vux-refactor'

export default {
  components: {
    Card,
    Divider,
  },
}
</script>

<style scoped lang="less">
@import '@/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
