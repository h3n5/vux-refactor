<template>
  <div>
    <div style="padding: 15px">
      <button-tab>
        <button-tab-item>{{ $t('Today') }}</button-tab-item>
        <button-tab-item selected>{{ $t('This Week') }}</button-tab-item>
        <button-tab-item>{{ $t('This Month') }}</button-tab-item>
      </button-tab>
      <br />
      <divider>{{ $t('Use v-model to set selected item') }}</divider>
      <br />
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Articles') }}</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Products') }}</button-tab-item>
      </button-tab>
      <br />
      <button-tab v-model="demo01">
        <button-tab-item>{{ $t('Articles sync') }}</button-tab-item>
        <button-tab-item>{{ $t('Products sync') }}</button-tab-item>
      </button-tab>
      <br />
      <divider>{{ $t('Red Dot') }}</divider>
      <br />
      <button-tab>
        <button-tab-item selected>{{ $t('All Messages') }}</button-tab-item>
        <button-tab-item>
          <span class="vux-reddot-s">{{ $t('New Messages') }}</span>
        </button-tab-item>
      </button-tab>
    </div>
  </div>
</template>

<i18n>
  en:
    Today: Today
    This Week: "This Week"
    This Month: "This Month"
    Articles: Articles
    Products: Products
    Articles sync: "Articles sync"
    Products sync: "Products sync"
    All Messages: "All Messages"
    New Messages: "New Messages"
    Red Dot: "Red Dot"
    Use v-model to set selected item: "Use v-model to set selected item:"
  zh_CN:
    Today: 今天
    This Week: 本周
    This Month: 本月
    Articles: 文章
    Products: 商品
    Articles sync: 文章同步
    Products sync: 商品同步
    All Messages: 所有消息
    New Messages: 新消息
    Red Dot: 红点
    Use v-model to set selected item: "使用 v-model 设置当前选中项"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { ButtonTab, ButtonTabItem, Divider } from '@/index'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  methods: {
    consoleIndex() {
      console.log('click demo01', this.demo01)
    }
  },
  data() {
    return {
      demo01: 0
    }
  }
}
</script>
