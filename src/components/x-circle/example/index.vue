<template>
  <div class="vux-circle-demo">
    <br />
    <div style="width: 150px; height: 150px">
      <x-circle :percent="percent" :stroke-width="5" stroke-color="#04BE02">
        <span>{{ percent }}%</span>
      </x-circle>
    </div>

    <div class="circle-demo-range">
      <range v-model="percent" :min="0" :max="100"></range>
    </div>

    <div style="width: 150px; height: 150px">
      <x-circle :percent="percent" :stroke-width="5" stroke-color="#04BE02" anticlockwise>
        <span>{{ percent }}%</span>
      </x-circle>
    </div>
    <h4>{{ $t('anticlockwise') }}</h4>
    <br />
  </div>
</template>

<i18n>
  zh_CN:
    anticlockwise: 逆时针
  en:
    anticlockwise: anticlockwise
</i18n>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const $t = t
</script>
<script>
import { XCircle, Range, Icon } from '@/index'

export default {
  components: {
    XCircle,
    Range,
    Icon
  },
  data() {
    return {
      percent: 50
    }
  }
}
</script>

<style scoped>
.vux-circle-demo {
  text-align: center;
}
.vux-circle-demo > div {
  margin-left: auto;
  margin-right: auto;
}
.circle-demo-range {
  width: 250px;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
