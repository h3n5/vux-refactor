<template>
  <div>
    <flow>
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" is-done>
        <span slot="title">{{ $t('Shipped') }}</span>
      </flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>

    <flow>
      <flow-state :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state :title="$t('Shipped')" is-done></flow-state>
      <flow-line is-done :line-span="30"></flow-line>

      <flow-state :title="$t('Delivered')" is-done></flow-state>
      <flow-line :tip="$t('In progress')" tip-direction="bottom" :line-span="45" :process-span="60"></flow-line>

      <flow-state :title="$t('Done')"></flow-state>
    </flow>

    <flow orientation="vertical" style="height: 250px">
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" :title="$t('Shipped')" is-done></flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>

    <flow orientation="vertical" style="height: 200px">
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state state="2" :title="$t('Shipped')" is-done></flow-state>
      <flow-line :line-span="30"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line :line-span="45"></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>
  </div>
</template>

<i18n>
  zh-CN:
    In progress: 进行中
    Paid: 已付款
    Shipped: 已发货
    Delivered: 待收货
    Done: 完成
  en:
    In progress: 'In progress'
    Paid: Paid
    Shipped: Shipped
    Delivered: Delivered
    Done: Done
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Flow, FlowState, FlowLine } from 'vux-refactor'

export default {
  components: {
    Flow,
    FlowState,
    FlowLine,
  },
}
</script>
