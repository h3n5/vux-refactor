<template>
  <component
    :is="'i'"
    :class="className"
    :style="{
      color,
      fontSize: toSizeUnit(size),
    }"
  />
</template>

<script>
const isString = (val) => typeof val === 'string'

const isNumber = (val) => typeof val === 'number'

const isNumeric = (val) => isNumber(val) || (isString(val) && /^[-+]?\d+$/.test(val))
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 30,
    },
    color: {
      type: String,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {
    className() {
      const icon = this.type
      return `var-icon--set var-icon-${icon}`
    },
  },
  methods: {
    toSizeUnit(value) {
      if (value == null) {
        return undefined
      }

      if (isNumeric(value)) {
        return `${value}px`
      }

      return String(value)
    },
  },
}
</script>
<style lang="less">
@import './varlet-icons.less';
</style>
