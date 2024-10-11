<template>
  <div>
    <group title="default">
      <radio :options="radio001" @on-change="change"></radio>
    </group>

    <group :title="$t('pre-select China(disabled)')">
      <radio :options="radio001" value="China" disabled></radio>
    </group>

    <group :title="'fill mode value is ' + radio001Value">
      <radio
        :selected-label-style="{ color: '#FF9900' }"
        fill-mode
        :options="radio001"
        v-model="radio001Value"
        @on-change="change"
      ></radio>
    </group>

    <group title="fill mode with custom placeholder and label">
      <radio
        fill-mode
        fill-label="Other"
        fill-placeholder="填写其他的哦"
        :options="radio001"
        @on-change="change"
      ></radio>
    </group>

    <group title="object options">
      <radio fill-mode fill-label="Other" fill-placeholder="other" :options="radio003" @on-change="change"></radio>
    </group>

    <group title="slot:each-item">
      <radio :options="radio001">
        <template slot-scope="props" slot="each-item">
          <!-- use scope="props" when vue < 2.5.0 -->
          <p>
            V{{ props.index + 1 }}
            <img src="https://dummyimage.com/110x110/FF2D55/000" class="vux-radio-icon" />
            {{ props.label }}
          </p>
        </template>
      </radio>
    </group>
  </div>
</template>

<i18n>
  zh-CN:
    pre-select China(disabled): "默认值 China(禁用操作)"
  en:
    pre-select China(disabled): "Preselect China (disabled)"
</i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
const { t } = useI18n()
const $t = t
</script>
<script>
import { Radio, Group } from 'vux-refactor'

export default {
  components: {
    Radio,
    Group,
  },
  data() {
    return {
      radio001: ['China', 'Japan'],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [
        {
          icon: 'https://dummyimage.com/110x110/FF2D55/000',
          key: '001',
          value: 'radio001',
        },
        {
          icon: 'https://dummyimage.com/110x110/FF2D55/000',
          key: '002',
          value: 'radio002',
        },
      ],
    }
  },
  methods: {
    change(value, label) {
      console.log('change:', value, label)
    },
  },
}
</script>
