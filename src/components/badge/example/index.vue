<template>
  <div>
    <Badge text="1"></Badge>
    <br />
    <Badge text="123"></Badge>
    <br />
    <Group :title="$t('Used in a Cell')">
      <Cell :title="$t('Red dot')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <Badge></Badge>
        </div>
      </Cell>
      <Cell :title="$t('Single digit')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <Badge text="8"></Badge>
        </div>
      </Cell>
      <Cell :title="$t('Big Number')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <Badge text="888"></Badge>
        </div>
      </Cell>
    </Group>
  </div>
</template>

<i18n>
  en:
    Used in a Cell: "Used in a Cell"
    New Messages: "New Messages"
    Single digit: "Single digit"
    Big Number: "Big Number"
    Red dot: "Red dot"
  zh_CN:
    Used in a Cell: "在 Cell 组件里使用"
    New Messages: 新消息
    Single digit: 个位数
    Big Number: 多位数
    Red dot: 红点
</i18n>
<script setup>
import { Badge, Group, Cell } from '@/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>

<style lang="less">
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
