<template>
  <a
    class="vux-datetime weui-cell"
    :class="{ 'weui-cell_access': !readonly }"
    :data-cancel-text="t('cancel_text')"
    :data-confirm-text="t('confirm_text')"
    href="javascript:"
  >
    <slot>
      <div>
        <slot name="title">
          <p :style="styles" :class="labelClass" v-html="title"></p>
        </slot>
        <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
      </div>
      <div
        class="weui-cell__ft vux-cell-primary vux-datetime-value"
        :style="{
          textAlign: valueTextAlign,
        }"
      >
        <span class="vux-cell-placeholder" v-if="!currentValue && placeholder">{{ placeholder }}</span>
        <span class="vux-cell-value" v-if="currentValue">
          {{ displayFormat ? displayFormat(currentValue) : currentValue }}
        </span>
        <icon class="vux-input-icon" type="warn" v-show="!valid" :title="firstError"></icon>
      </div>
    </slot>
  </a>
</template>

<script>
import Icon from '../icon/index.vue'
import Picker from './datetimepicker.js'
import Group from '../group/index.vue'
import InlineDesc from '../inline-desc/index.vue'
import Uuid from '@/mixins/uuid.js'
import format from '@/tools/date/format.js'
import { localeMixin } from '@/locale/index.js'
export default {
  name: 'datetime',
  mixins: [Uuid, localeMixin],
  components: {
    Group,
    InlineDesc,
    Icon,
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
      validator(val) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'development' && val && /A/.test(val) && val !== 'YYYY-MM-DD A') {
          return console.error('[VUX] Datetime prop:format 使用 A 时只允许的值为： YYYY-MM-DD A')
        }
        return true
      },
    },
    title: String,
    value: {
      type: String,
      default: '',
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}',
    },
    monthRow: {
      type: String,
      default: '{value}',
    },
    dayRow: {
      type: String,
      default: '{value}',
    },
    hourRow: {
      type: String,
      default: '{value}',
    },
    minuteRow: {
      type: String,
      default: '{value}',
    },
    required: {
      type: Boolean,
      default: false,
    },
    minHour: {
      type: Number,
      default: 0,
    },
    maxHour: {
      type: Number,
      default: 23,
    },
    startDate: {
      type: String,
      validator(val) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'development' && val && val.length !== 10) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式')
        }
        return val ? val.length === 10 : true
      },
    },
    endDate: {
      type: String,
      validator(val) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'development' && val && val.length !== 10) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式')
        }
        return val ? val.length === 10 : true
      },
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function,
    orderMap: Object,
  },
  created() {
    this.isFirstSetValue = false
    this.currentValue = this.value
  },
  data() {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {},
    }
  },
  mounted() {
    const uuid = this.uuid
    this.$el.setAttribute('id', `vux-datetime-${uuid}`)
    if (!this.readonly) {
      this.$nextTick(() => {
        this.render()

        if (this.show) {
          this.$nextTick(() => {
            this.picker && this.picker.show(this.currentValue)
          })
        }
      })
    }
  },
  computed: {
    styles() {
      if (!this.$parent) {
        return {}
      }
      return {
        width: this.$parent.labelWidth,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight,
      }
    },
    pickerOptions() {
      const _this = this
      const options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        orderMap: this.orderMap || {},
        onSelect(type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue)
            _this.$emit('on-change', wholeValue)
          }
        },
        onConfirm(value) {
          _this.currentValue = value
        },
        onClear(value) {
          _this.$emit('on-clear', value)
        },
        onHide(type) {
          _this.currentShow = false
          _this.$emit('update:show', false)
          _this.validate()
          _this.$emit('on-hide', type)
          if (type === 'cancel') {
            _this.$emit('on-cancel')
          }
          if (type === 'confirm') {
            setTimeout(() => {
              _this.$nextTick(() => {
                _this.$emit('on-confirm', _this.value)
              })
            })
          }
        },
        onShow() {
          _this.currentShow = true
          _this.$emit('update:show', true)
          _this.$emit('on-show')
        },
      }
      if (this.minYear) {
        options.minYear = this.minYear
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear
      }
      return options
    },
    firstError() {
      let key = Object.keys(this.errors)[0]
      return this.errors[key]
    },
    labelClass() {
      if (!this.$parent) {
        return {}
      }
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify',
      }
    },
  },
  methods: {
    getButtonText(type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText
      }
      return this.$el.getAttribute(`data-${type}-text`)
    },
    render() {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(this.pickerOptions)
      })
    },
    validate() {
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填'
        return
      }
      this.valid = true
      this.errors = {}
    },
  },
  watch: {
    readonly(val) {
      if (val) {
        this.picker && this.picker.destroy()
      } else {
        this.render()
      }
    },
    show(val) {
      if (val === this.currentShow) return
      if (val) {
        this.picker && this.picker.show(this.currentValue)
      } else {
        this.picker && this.picker.hide(this.currentValue)
      }
    },
    currentValue(val, oldVal) {
      this.$emit('input', val)
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true
        oldVal && this.$emit('on-change', val)
      } else {
        this.$emit('on-change', val)
      }
      this.validate()
    },
    startDate() {
      this.render()
    },
    endDate() {
      this.render()
    },
    format(val) {
      if (this.currentValue) {
        this.currentValue = format(this.currentValue, val)
      }
      this.render()
    },
    value(val) {
      // do not force render when renderInline is true
      if (this.readonly || (this.picker && this.picker.config.renderInline)) {
        this.currentValue = val
        return
      }
      if (this.currentValue !== val) {
        this.currentValue = val
        this.render()
      }
    },
  },
  beforeDestroy() {
    this.picker && this.picker.destroy()
  },
}
</script>

<style lang="less">
@import './datetime.less';
</style>
