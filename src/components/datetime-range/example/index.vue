<template>
  <div>
    <group :title="value[0] + ' ' + value[1] + ':' + value[2]">
      <datetime-range
        :title="$t('Choose')"
        start-date="2017-01-01"
        end-date="2017-02-02"
        :format="$t('daterange-format')"
        v-model="value"
        @on-change="onChange"
      ></datetime-range>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    daterange-format: 'YYYY年MM月DD日'
    Choose: '选择'
  en:
    daterange-format: 'YYYY/MM/DD'
    Choose: 'Choose'
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Group, DatetimeRange } from '@/index.js'

export default {
  components: {
    Group,
    DatetimeRange,
  },
  methods: {
    onChange(val) {
      console.log('change', val)
    },
  },
  data() {
    return {
      value: ['2017-01-15', '03', '05'],
    }
  },
}
</script>
