<template>
  <div>
    <div class="vux-1px-t">
      <swipeout>
        <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{ $t('Yes') }}</swipeout-button>
            <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{ $t('Right') }}</swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-t">
            {{ $t('JavaScript is the best language') }}
          </div>
        </swipeout-item>

        <swipeout-item :threshold="0.5" underlay-color="#ccc">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">
              {{ $t('Fav') }}
            </swipeout-button>
            <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934" disabled>
              {{ $t('Delete') }}
            </swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-tb">
            {{ $t('threshold = 0.5') }}
          </div>
        </swipeout-item>

        <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">
              {{ $t('Fav') }}
            </swipeout-button>
            <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">
              {{ $t('Delete') }}
            </swipeout-button>
            <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">
              {{ $t('Ignore') }}
            </swipeout-button>
          </div>

          <div slot="left-menu">
            <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{ $t('Fav') }}</swipeout-button>
            <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{ $t('Delete') }}</swipeout-button>
          </div>

          <div slot="content" class="demo-content vux-1px-b">
            now
            <span v-if="disabled">{{ $t('disabled') }}</span>
            <span v-else>{{ $t('enabled') }}</span>
          </div>
        </swipeout-item>
      </swipeout>
    </div>

    <div style="padding: 15px">
      <x-button @click.native="disabled = false" type="primary" :disabled="!disabled">{{ $t('set Enabled') }}</x-button>
      <x-button @click.native="disabled = true" type="warn" :disabled="disabled">{{ $t('set Disabled') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('left')" type="primary">{{ $t('open left menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('right')" type="primary">{{ $t('open right menu') }}</x-button>
      <x-button @click.native="$refs.swipeoutItem.close()" type="warn">{{ $t('close menu') }}</x-button>
    </div>
    <br />
    <group-title>use vux-1px to style items</group-title>
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="primary">{{ $t('Yes') }}</swipeout-button>
          <swipeout-button type="warn">{{ $t('Right') }}</swipeout-button>
        </div>
        <div slot="content" :class="{ 'vux-1px-b': i !== 3, 'vux-1px-t': i === 1 }" style="padding: 12px">
          {{ $t('JavaScript is the best language') }}
        </div>
      </swipeout-item>
    </swipeout>
    <br />
    <br />
  </div>
</template>

<i18n>
  zh_CN:
    Fav: "收藏"
    Delete: "删除"
    JavaScript is the best language: "JavaScript 是最好的语言"
    now enabled: "当前可操作"
    enabled: "可操作"
    now disabled: "当前不可操作"
    set Enabled: "设置可操作"
    set Disabled: "设置不可操作"
    open left menu: "打开左菜单"
    open right menu: "打开右菜单"
    close menu: "关闭菜单"
    threshold = 0.5: "设置滑动阙值为 0.5"
    Yes: "是的"
    Right: "正确"
    Ignore: "忽略"
  en:
    Fav: "Fav"
    Delete: "Delete"
    JavaScript is the best language: "JavaScript is the best language"
    now enabled: "now enabled"
    enabled: "enabled"
    now disabled: "now disabled"
    set Enabled: "set Enabled"
    set Disabled: "set Disabled"
    open left menu: "open left menu"
    open right menu: "open right menu"
    close menu: "close menu"
    threshold = 0.5: "threshold = 0.5"
    Yes: "Yes"
    Right: "Right"
    Ignore: "Ignore"
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from '@/index'

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods: {
    onButtonClick(type) {
      alert('on button click ' + type)
    },
    handleEvents(type) {
      console.log('event: ', type)
    }
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>
