<template>
  <div ref="clockerEl" style="display: inline-block">
    <span v-if="showTimeString">{{ timeString }}</span>
    <div class="vux-clocker-tpl"><slot></slot></div>
  </div>
</template>
<script setup>
import { onMounted, nextTick, watch, onBeforeUnmount, useSlots, toRefs, ref } from 'vue-demi'
import i18n from '@/locale/index.js'
import Clocker from './clocker'
const props = defineProps({
  time: [String, Number],
  format: {
    type: String,
    default: '%D 天 %H 小时 %M 分 %S 秒',
  },
})
const { time, format } = toRefs(props)
const showTimeString = ref(true)
const timeString = ref('')
const slotString = ref('')
const cacheSlotString = ref('')
const emit = defineEmits(['on-tick', 'on-finish'])
const locale = i18n.locale
const slot = useSlots()
if (typeof locale === 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    console.warn('clocker locale is undefined')
  }
} else {
  if (locale === 'en') {
    format.value = '%D d %H h %M m %S s'
  } else if (locale === 'zh-CN') {
    format.value = '%D 天 %H 小时 %M 分 %S 秒'
  }
}
const clockerEl = ref(null)
let slotTmp = null
onMounted(() => {
  nextTick(() => {
    slotTmp = clockerEl.value.querySelector('.vux-clocker-tpl')
    slotString.value = slotTmp.innerHTML
    if (slotString.value !== '') {
      showTimeString.value = false
    }
    render()
  })
})
let clocker = null
function render() {
  if (!time.value) return
  clocker = new Clocker(time.value)
    .on('tick', (event) => {
      update(event)
      emit('on-tick', event)
    })
    .on('finish', () => {
      timeString.value = '00:00:00'
      emit('on-finish')
    })
    .start()
}

function update(event) {
  if (showTimeString.value) {
    timeString.value = event.strftime(format.value)
  } else {
    let string = event.strftime(slotString.value)
    if (string !== cacheSlotString.value) {
      slotTmp.innerHTML = cacheSlotString.value = string
    }
  }
}

watch(
  () => props.time,
  () => {
    clocker && clocker.remove()
    render()
  }
)
onBeforeUnmount(() => {
  if (clocker) {
    clocker.remove()
    clocker = null
  }
})
</script>
