<template>
  <div>
    <group>
      <cell :title="t('My Account')" :value="t('Protected')" @click.native="onClick"></cell>
      <cell :title="t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>
      <cell :title="t('Withdraw')" disabled is-link></cell>
    </group>

    <group :title="t('Use is-link to show arrow')">
      <cell is-link>
        <span slot="title" style="color: green">
          <span style="vertical-align: middle">{{ t('Messages') }}</span>
          <badge text="1"></badge>
        </span>
      </cell>
      <cell :title="t('Notifications')" is-link></cell>
      <cell :title="t('Privacy')" is-link></cell>
      <cell :title="t('General')" is-link>
        <img
          slot="icon"
          width="20"
          style="display: block; margin-right: 5px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
        />
      </cell>
    </group>

    <group label-width="5em" title="Align-items">
      <cell
        primary="content"
        title="default"
        value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"
      ></cell>
      <cell
        title="flex-start"
        align-items="flex-start"
        value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"
      ></cell>
    </group>

    <group :title="t('Collapse')">
      <cell
        :title="t('Title 001')"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"
      ></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
      </template>

      <cell
        :title="t('Title 002')"
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"
      ></cell>

      <template v-if="showContent002">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>

      <cell
        :title="t('Title 003')"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"
      ></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">I'm content 003</cell-box>
      </template>

      <cell
        :title="t('Animated')"
        is-link
        :border-intent="false"
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"
      ></cell>

      <p class="slide" :class="showContent004 ? 'animate' : ''">
        blablabla...
        <br />
        blablabla...
        <br />
        blablabla...
        <br />
        blablabla...
      </p>
    </group>

    <group>
      <cell :title="t('Notifications')" :value="t('Enabled')"></cell>
    </group>

    <group :title="t('Use slot for complicated content')">
      <cell :title="t('Slot content')">
        <div>
          <span style="color: green">{{ t("Hi, I'm Vux.") }}</span>
        </div>
      </cell>
    </group>

    <group :title="t('is-link is set to true automatically when link exists')">
      <cell :title="t('Go to Radio Demo')" link="/component/radio" inline-desc='link="/component/radio"'></cell>
      <cell :title="t('Go to Demo')" :link="{ path: '/demo' }" inline-desc=':link={path:"/demo"}'></cell>
      <cell :title="t('Http link')" link="https://vux.li" inline-desc='link="https://vux.li"'></cell>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    'My Account': 我的账号
    Protected: 保护中
    'Use is-link to show arrow': '使用 is-link 显示右边箭头'
    Notifications: 通知
    Enabled: 已开启
    Privacy: 隐私
    General: 通用
    'Use slot for complicated content': 使用slot显示复杂内容
    'Slot content': 'Slot 内容'
    "Hi, I'm Vux.": '你好哇，感谢关注 Vux'
    'Go to Radio Demo': 前往Radio页面
    'Go to Demo': 前往Demo页面
    'Http link': 站外链接
    'is-link is set to true automatically when link exists': '当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link'
    Money: 余额
    Withdraw: 提现
    Messages: 消息
    Collapse: 折叠
    'Title 001': 标题一
    'Title 002': 标题二
    'Title 003': 标题三
    Animated: 动画效果
  en:
    'My Account': 'My Account'
    'Protected': Protected
    'Use is-link to show arrow' : 'Use is-link to show arrow'
    Notifications: Notifications
    Enabled: Enabled
    Privacy: Privacy
    General: General
    'Use slot for complicated content': 'Use slot for complicated content'
    'Slot content': 'Slot content'
    "Hi, I'm Vux.": "Hi, I'm Vux."
    'is-link is set to true automatically when link exists': 'is-link is set to true automatically when link exists'
    'Go to Radio Demo': 'Go to Radio Demo'
    'Go to Demo': 'Go to Demo'
    'Http link': 'Http link'
    Money: Money
    Withdraw: Withdraw
    Messages: Messages
    Collapse: Collapse
    'Title 001': 'Title 001'
    'Title 002': 'Title 002'
    'Title 003': 'Title 003'
    Animated: Animated
</i18n>
<script setup>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux-refactor'
import { useI18n } from 'vue-i18n-bridge'
import { onMounted, ref } from 'vue'
const { t } = useI18n()
const list = ref([
  {
    label: 'Apple',
    value: '3.29',
  },
  {
    label: 'Banana',
    value: '1.04',
  },
  {
    label: 'Fish',
    value: '8.00',
  },
])
const money = ref(null)
const showContent001 = ref(false)
const showContent002 = ref(false)
const showContent003 = ref(false)
const showContent004 = ref(false)

onMounted(() => {
  setTimeout(() => {
    money.value = -1024
  }, 2000)
})

function onClick() {}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
