<template>
  <div>
    <badge text="1"></badge>
    <br />
    <badge text="123"></badge>
    <br />
    <group :title="$t('Used in a Cell')">
      <cell :title="$t('Red dot')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge></badge>
        </div>
      </cell>
      <cell :title="$t('Single digit')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell :title="$t('Big Number')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge text="888"></badge>
        </div>
      </cell>
    </group>
  </div>
</template>

<i18n>
  en:
    Used in a Cell: "Used in a Cell"
    New Messages: "New Messages"
    Single digit: "Single digit"
    Big Number: "Big Number"
    Red dot: "Red dot"
  zh-CN:
    Used in a Cell: "在 Cell 组件里使用"
    New Messages: 新消息
    Single digit: 个位数
    Big Number: 多位数
    Red dot: 红点
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Badge, Group, Cell } from '@/index.js'

export default {
  components: {
    Badge,
    Group,
    Cell,
  },
}
</script>

<style lang="less">
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
