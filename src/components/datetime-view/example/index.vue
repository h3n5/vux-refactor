<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
    <p class="info">{{ $t('Current value') }}: {{ value1 }}</p>
    <div style="padding: 15px">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary">
        {{ $t('Set 2017-11-11') }}
      </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary">
        {{ $t('Set 2016-08-08') }}
      </x-button>
      <x-button @click.native="toggleFormat" :disabled="format === 'YYYY-MM-DD HH'" type="primary">
        {{ $t('Toggle format') }}
      </x-button>
      <x-button @click.native="changeFormatAndValue" type="primary">{{ $t('Format 2019-10-23 10') }}</x-button>
      <x-button @click.native="showPopup = true" type="primary">{{ $t('Show popup with datetime-view') }}</x-button>
    </div>
    <div v-transfer-dom>
      <popup v-model="showPopup">
        <datetime-view v-model="value2"></datetime-view>
      </popup>
    </div>
  </div>
</template>

<i18n>
  zh-CN:
    Current value: 选中值
    Set 2017-11-11: "设置为 2017-11-11"
    Set 2016-08-08: "设置为 2016-08-08"
    Toggle format: "切换时间格式"
    Format 2019-10-23 10: "时间格式设置为 2019-10-23 10"
    Show popup with datetime-view: "显示弹窗样式"
  en:
    Current value: "Current value"
    Set 2017-11-11: "Set 2017-11-11"
    Set 2016-08-08: "Set 2016-08-08"
    Toggle format: "Toggle format"
    Format 2019-10-23 10: "Format 2019-10-23 10"
    Show popup with datetime-view: "Show popup with datetime-view"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { DatetimeView, XButton, Popup, TransferDom } from 'vux-refactor'

export default {
  components: {
    DatetimeView,
    XButton,
    Popup,
  },
  directives: {
    TransferDom,
  },
  data() {
    return {
      value1: '2017-10-11',
      value2: '2017-10-24',
      showPopup: false,
      format: 'YYYY-MM-DD',
    }
  },
  methods: {
    toggleFormat() {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else {
        this.format = 'YYYY-MM-DD'
      }
    },
    changeValue(val) {
      this.value1 = val
      this.$refs.datetime.render()
    },
    changeFormatAndValue() {
      this.format = 'YYYY-MM-DD HH'
      this.$nextTick(() => {
        this.value1 = '2019-10-23 10'
        this.$refs.datetime.render()
      })
    },
  },
}
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
</style>
