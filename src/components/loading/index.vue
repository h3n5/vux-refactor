<template>
  <transition :name="transition">
    <div class="weui-loading_toast vux-loading" :class="!text ? 'vux-loading-no-text' : ''" v-show="show">
      <div class="weui-mask_transparent"></div>
      <div
        class="weui-toast"
        :style="{
          position: position
        }"
      >
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content" v-if="text">
          {{ text || t('loading') }}
          <slot></slot>
        </p>
      </div>
    </div>
  </transition>
</template>
<script>
import { localeMixin } from '@/locale/index.js'
export default {
  name: 'loading',
  model: {
    prop: 'show',
    event: 'change'
  },
  mixins: [localeMixin],
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'vux-mask'
    }
  },
  watch: {
    show(val) {
      this.$emit('update:show', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_toast';
@import '../../styles/weui/widget/weui-loading/weui-loading.less';

.vux-loading .weui-toast {
  z-index: var(--loading-z-index);
}

.weui-icon_toast.weui-loading {
  margin: 30px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
}

.vux-mask-enter,
.vux-mask-leave-active,
.vux-mask-leave-active,
.vux-mask-enter-active {
  position: relative;
  z-index: 1;
}

.vux-mask-enter,
.vux-mask-leave-active {
  opacity: 0;
}

.vux-mask-leave-active,
.vux-mask-enter-active {
  transition: opacity 0s;
}

.vux-loading-no-text .weui-toast {
  min-height: 98px;
}
</style>
