<template>
  <div
    class="vux-tab-wrap"
    :class="barPosition === 'top' ? 'vux-tab-bar-top' : ''"
  >
    <div class="vux-tab-container">
      <div
        class="vux-tab"
        :class="[{ 'vux-tab-no-animate': !animate }, { scrollable }]"
        ref="nav"
      >
        <slot></slot>
        <div
          v-if="animate"
          class="vux-tab-ink-bar"
          :class="barClass"
          :style="barStyle"
        >
          <span
            class="vux-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parentMixin } from "../../mixins/multi-items";

export default {
  name: "tab",
  mixins: [parentMixin],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3,
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true,
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4,
    },
    barPosition: {
      type: String,
      default: "bottom",
      validator(val) {
        return ["bottom", "top"].indexOf(val) !== -1;
      },
    },
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable
          ? nav.offsetWidth /
            this.$children[this.currentIndex || 0].$el.getBoundingClientRect()
              .width
          : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const nav = this.$refs.nav;
        const count = this.scrollable
          ? nav.offsetWidth /
            this.$children[this.currentIndex || 0].$el.getBoundingClientRect()
              .width
          : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width:
          typeof this.customBarWidth === "function"
            ? this.customBarWidth(this.currentIndex)
            : this.customBarWidth,
        background: this.barActiveColor || this.activeColor,
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: "block",
        height: this.lineWidth + "px",
        transition: !this.hasReady ? "none" : null,
      };
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.background = "transparent"; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        "vux-tab-ink-bar-transition-forward": this.direction === "forward",
        "vux-tab-ink-bar-transition-backward": this.direction === "backward",
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    },
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? "forward" : "backward";
      this.$emit("on-index-change", newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    },
  },
  data() {
    return {
      direction: "forward",
      right: "100%",
      hasReady: false,
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft +=
          (currentIndexTab.offsetLeft -
            (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 -
            nav.scrollLeft) /
          scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
};
</script>


<style lang="less">
@import "../../styles/variable.less";

@prefixClass: vux-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: 0.3s;

.@{prefixClass} {
  &-ink-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--tab-bar-active-color);
    text-align: center;

    &-transition-forward {
      transition: right @effect-duration @easing-in-out,
        left @effect-duration @easing-in-out @effect-duration * 0.3;
    }
    &-transition-backward {
      transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
        left @effect-duration @easing-in-out;
    }
  }
}

.vux-tab-bar-top .@{prefixClass} {
  &-ink-bar {
    top: 0;
  }
}

.vux-tab {
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}

.vux-tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}

.vux-tab .vux-tab-item {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0))
    bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: var(--tab-text-default-color);
}

.vux-tab .vux-tab-item.vux-tab-selected {
  color: var(--tab-text-active-color);
  border-bottom: 3px solid var(--tab-text-active-color);
}

.vux-tab-bar-top {
  .vux-tab .vux-tab-item {
    background: linear-gradient(
        180deg,
        #e5e5e5,
        #e5e5e5,
        rgba(229, 229, 229, 0)
      )
      top left no-repeat;
    background-size: 100% 1px;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    border-bottom: none;
    border-top: 3px solid var(--tab-text-active-color);
  }
}

.vux-tab .vux-tab-item.vux-tab-disabled {
  color: var(--tab-text-disabled-color);
}

.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {
  background: 0 0;
}

/** when=prop:custom-bar-width **/
.vux-tab-bar-inner {
  display: block;
  background-color: var(--tab-text-active-color);
  margin: auto;
  height: 100%;
  transition: width 0.3s @easing-in-out;
}

.vux-tab-item-badge {
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  height: 18px;
  min-width: 18px;
  padding: 0 4px;
  border-radius: 30px;
  margin: auto 0 auto 4px;
  line-height: 18px;
  font-size: 11px;
  background-clip: padding-box;
  vertical-align: middle;
}

.vux-tab-wrap {
  position: relative;
  padding-top: 44px;
}

.vux-tab-container {
  height: 44px;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
}

.scrollable {
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 17px;
  box-sizing: content-box;
}

.scrollable::-webkit-scrollbar {
  display: none;
}

.scrollable .vux-tab-ink-bar {
  bottom: 17px;
  position: absolute;
}

.scrollable .vux-tab-item {
  flex: 0 0 22%;
}
</style>
