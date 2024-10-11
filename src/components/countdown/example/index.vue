<template>
  <div>
    <group :title="$t('Automatic countdown')">
      <cell title="15s" v-model="value">
        <countdown v-model="time1" @on-finish="finish" v-show="show"></countdown>
      </cell>
    </group>
    <group :title="$t('Manually')">
      <x-switch :title="$t('Start')" v-model="start"></x-switch>
      <cell title="15s">
        <countdown v-model="time2" :start="start" @on-finish="finish2"></countdown>
      </cell>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    Automatic countdown: "自动倒计时"
    Manually: "手动模式"
    Start: "开始"
  en:
    Automatic countdown: "Automatic countdown"
    Manually: "Manually"
    Start: "Start"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, Cell, Countdown, XSwitch } from 'vux-refactor'

export default {
  components: {
    Group,
    Cell,
    Countdown,
    XSwitch,
  },
  methods: {
    finish(index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    finish2(index) {
      this.start = false
      this.time = 20
    },
  },
  data() {
    return {
      show: true,
      time1: 15,
      time2: 15,
      value: '',
      start: false,
    }
  },
}
</script>
