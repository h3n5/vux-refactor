<template>
  <div>
    <group>
      <calendar
        :readonly="readonly"
        v-model="demo1"
        :title="$t('Basic Usage')"
        disable-past
        placeholder="placeholder"
        @on-show="log('show')"
        @on-hide="log('hide')"
      ></calendar>
    </group>

    <div style="padding: 15px">
      <x-button type="primary" @click.native="readonly = !readonly">{{ $t('Toggle readonly') }}</x-button>
    </div>

    <group>
      <calendar v-model="demo2" :title="$t('Set value as TODAY')" disable-past></calendar>
    </group>

    <group>
      <calendar @on-change="onChange" v-model="demo3" :title="$t('Disable future')" disable-future></calendar>
    </group>

    <group>
      <calendar
        @on-change="onChange"
        v-model="demo4"
        :title="$t('Show popup header')"
        show-popup-header
        :popup-header-title="$t('Please select')"
        disable-future
      ></calendar>
    </group>

    <group>
      <calendar
        placeholder="placeholder"
        @on-change="onChange"
        v-model="demo5"
        :title="$t('Multiple dates')"
        :popup-header-title="$t('Please select')"
        disable-future
      ></calendar>
    </group>

    <group>
      <calendar
        disable-weekend
        :display-format="displayFormat"
        :placeholder="$t('Please select')"
        @on-change="onChange"
        v-model="demo6"
        :title="$t('Format multiple dates')"
        :popup-header-title="$t('please select')"
      ></calendar>
      <cell-box align-items="flex-start">
        <span class="selected-days">value:</span>
        <div>
          <badge v-for="day in demo6" :text="day" :key="day" style="margin-right: 10px"></badge>
        </div>
      </cell-box>
    </group>
    <div style="padding: 15px">
      <x-button type="primary" @click.native="demo6 = []">{{ $t('Empty value') }}</x-button>
    </div>
  </div>
</template>

<i18n>
  zh-CN:
    Basic Usage: "基本用法"
    Set value as TODAY: "设置时间为今天"
    Disable future: "禁止选择未来时间"
    Show popup header: "显示 popup 头部"
    Please select: "请选择日期"
    Multiple dates: "多选"
    Format multiple dates: "格式化表单值"
    Empty value: "清空值"
    Toggle readonly: "切换 readonly"
    please select: "请选择日期"
  en:
    please select: "Please select"
    Basic Usage: "Basic Usage"
    Set value as TODAY: "Set value as TODAY"
    Disable future: "Disable future"
    Show popup header: "Show popup header"
    Please select: "Please select"
    Multiple dates: "Multiple dates"
    Format multiple dates: "Format multiple dates"
    Empty value: "Empty value"
    Toggle readonly: "Toggle readonly"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, Calendar, Cell, Badge, CellBox, XButton } from 'vux-refactor'

export default {
  components: {
    Calendar,
    Group,
    Cell,
    Badge,
    CellBox,
    XButton,
  },
  data() {
    return {
      readonly: false,
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY',
      demo4: 'TODAY',
      demo5: [],
      demo6: [],
      displayFormat(value, type) {
        if (type === 'string') {
          return value
        } else {
          return value.length ? value.length + ' days' : ''
        }
      },
    }
  },
  methods: {
    log(str) {
      console.log(str)
    },
    onChange(val) {
      console.log('on change', val)
    },
  },
}
</script>

<style scoped>
.selected-days {
  color: #999;
  width: 90px;
}
</style>
