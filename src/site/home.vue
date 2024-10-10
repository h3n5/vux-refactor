<template>
  <div style="position: relative">
    <div class="varlet-logo">
      <h1 class="varlet-home__title">
        <svg
          class="varlet-home__image"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="1024px"
          height="1024px"
          viewBox="0 0 1024 1024"
          enable-background="new 0 0 1024 1024"
          xml:space="preserve"
        >
          <path
            data-index="path_0"
            fill="#35495e"
            d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36"
            class="svgpath"
          ></path>
        </svg>
        <span>Vux-refator</span>
      </h1>
      <h2 class="varlet-home__desc">vux UI -组件库</h2>
    </div>
    <div class="router-view__block" v-for="(bc, i) in baseComponent" :key="i">
      <p style="padding: 10px">{{ bc.name }}</p>
      <div class="varlet-home__cell" v-for="(item, index) in bc.children" :key="index" @click="goRouter(item.route)">
        <span>{{ item.label }}</span>
        <i class="var-icon var-icon--set var-icon-chevron-right" style="transition-duration: 0ms; font-size: 14px"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import router from '@/router'
const baseComponent = ref([
  {
    name: '基础组件',
    children: [
      {
        label: 'Button',
        route: 'XButton'.toLocaleUpperCase(),
      },
      {
        label: 'Cell',
        route: 'Cell'.toLocaleUpperCase(),
      },
      {
        label: 'CellBox',
        route: 'CellBox'.toLocaleUpperCase(),
      },
      {
        label: 'CellFormPreview',
        route: 'CellFormPreview'.toLocaleUpperCase(),
      },
      {
        label: 'Group',
        route: 'Group'.toLocaleUpperCase(),
      },
      {
        label: 'Icon',
        route: 'Icon'.toLocaleUpperCase(),
      },
      {
        label: 'XIcon',
        route: 'XIcon'.toLocaleUpperCase(),
      }
    ],
  },
  {
    name: '布局组件',
    children: [
      {
        label: 'Divider',
        route: 'Divider'.toLocaleUpperCase(),
      },
      {
        label: 'Flexbox',
        route: 'Flexbox'.toLocaleUpperCase(),
      },
      {
        label: 'Grid',
        route: 'Grid'.toLocaleUpperCase(),
      },
      {
        label: 'Sticky',
        route: 'Sticky'.toLocaleUpperCase(),
      },
      {
        label: 'ViewBox',
        route: 'ViewBox'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '表单组件',
    children: [
      {
        label: 'CheckIcon',
        route: 'CheckIcon'.toLocaleUpperCase(),
      },
      {
        label: 'Checker',
        route: 'Checker'.toLocaleUpperCase(),
      },
      {
        label: 'Checklist',
        route: 'Checklist'.toLocaleUpperCase(),
      },
      {
        label: 'FormPreview',
        route: 'FormPreview'.toLocaleUpperCase(),
      },
      {
        label: 'InlineXNumber',
        route: 'InlineXNumber'.toLocaleUpperCase(),
      },
      {
        label: 'InlineXSwitch',
        route: 'InlineXSwitch'.toLocaleUpperCase(),
      },
      {
        label: 'Picker',
        route: 'Picker'.toLocaleUpperCase(),
      },
      {
        label: 'PopupPicker',
        route: 'PopupPicker'.toLocaleUpperCase(),
      },
      {
        label: 'PopupRadio',
        route: 'PopupRadio'.toLocaleUpperCase(),
      },
      {
        label: 'Radio',
        route: 'Radio'.toLocaleUpperCase(),
      },
      {
        label: 'Range',
        route: 'Range'.toLocaleUpperCase(),
      },
      {
        label: 'Rater',
        route: 'Rater'.toLocaleUpperCase(),
      },
      {
        label: 'Search',
        route: 'Search'.toLocaleUpperCase(),
      },
      {
        label: 'Selector',
        route: 'Selector'.toLocaleUpperCase(),
      },
      {
        label: 'Swipeout',
        route: 'Swipeout'.toLocaleUpperCase(),
      },
      {
        label: 'XAddress',
        route: 'XAddress'.toLocaleUpperCase(),
      },
      {
        label: 'XInput',
        route: 'XInput'.toLocaleUpperCase(),
      },
      {
        label: 'XNumber',
        route: 'XNumber'.toLocaleUpperCase(),
      },
      {
        label: 'XSwitch',
        route: 'XSwitch'.toLocaleUpperCase(),
      },
      {
        label: 'XTextarea',
        route: 'XTextarea'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '日期组件',
    children: [
      {
        label: 'Calendar',
        route: 'Calendar'.toLocaleUpperCase(),
      },
      {
        label: 'InlineCalendar',
        route: 'InlineCalendar'.toLocaleUpperCase(),
      },
      {
        label: 'Datetime',
        route: 'Datetime'.toLocaleUpperCase(),
      },
      {
        label: 'DatetimeRange',
        route: 'DatetimeRange'.toLocaleUpperCase(),
      },
      {
        label: 'DatetimeView',
        route: 'DatetimeView'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '弹窗组件',
    children: [
      {
        label: 'Actionsheet',
        route: 'actionsheet'.toLocaleUpperCase(),
      },
      {
        label: 'Alert',
        route: 'Alert'.toLocaleUpperCase(),
      },
      {
        label: 'Confirm',
        route: 'Confirm'.toLocaleUpperCase(),
      },
      {
        label: 'InlineLoading',
        route: 'InlineLoading'.toLocaleUpperCase(),
      },
      {
        label: 'LoadMore',
        route: 'LoadMore'.toLocaleUpperCase(),
      },
      {
        label: 'Loading',
        route: 'Loading'.toLocaleUpperCase(),
      },
      {
        label: 'Msg',
        route: 'Msg'.toLocaleUpperCase(),
      },
      {
        label: 'Popover',
        route: 'Popover'.toLocaleUpperCase(),
      },
      {
        label: 'PopupHeader',
        route: 'PopupHeader'.toLocaleUpperCase(),
      },
      {
        label: 'Popup',
        route: 'Popup'.toLocaleUpperCase(),
      },
      {
        label: 'Spinner',
        route: 'Spinner'.toLocaleUpperCase(),
      },
      {
        label: 'Toast',
        route: 'Toast'.toLocaleUpperCase(),
      },
      {
        label: 'XDialog',
        route: 'XDialog'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '导航组件',
    children: [
      {
        label: 'ButtonTab',
        route: 'ButtonTab'.toLocaleUpperCase(),
      },
      {
        label: 'Tab',
        route: 'Tab'.toLocaleUpperCase(),
      },
      {
        label: 'Tabbar',
        route: 'Tabbar'.toLocaleUpperCase(),
      },
      {
        label: 'Header',
        route: 'XHeader'.toLocaleUpperCase(),
      },
      {
        label: 'Drawer',
        route: 'Drawer'.toLocaleUpperCase(),
      }
    ],
  },
  {
    name: '数据展示',
    children: [
      {
        label: 'Badge',
        route: 'Badge'.toLocaleUpperCase(),
      },
      {
        label: 'Timeline',
        route: 'Timeline'.toLocaleUpperCase(),
      },
      {
        label: 'Card',
        route: 'Card'.toLocaleUpperCase(),
      },
      {
        label: 'Clocker',
        route: 'Clocker'.toLocaleUpperCase(),
      },
      {
        label: 'Countup',
        route: 'Countup'.toLocaleUpperCase(),
      },
      {
        label: 'Flow',
        route: 'Flow'.toLocaleUpperCase(),
      },
      {
        label: 'Marquee',
        route: 'Marquee'.toLocaleUpperCase(),
      },
      {
        label: 'Panel',
        route: 'Panel'.toLocaleUpperCase(),
      },
      {
        label: 'Previewer',
        route: 'Previewer'.toLocaleUpperCase(),
      },
      {
        label: 'Qrcode',
        route: 'Qrcode'.toLocaleUpperCase(),
      },
      {
        label: 'Step',
        route: 'Step'.toLocaleUpperCase(),
      },
      {
        label: 'Swiper',
        route: 'Swiper'.toLocaleUpperCase(),
      },
      {
        label: 'XImg',
        route: 'XImg'.toLocaleUpperCase(),
      },
      {
        label: 'XProgress',
        route: 'XProgress'.toLocaleUpperCase(),
      },
      {
        label: 'XTable',
        route: 'XTable'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '图表组件',
    children: [
      {
        label: 'VChart',
        route: 'VChart'.toLocaleUpperCase(),
      },
      {
        label: 'XCircle',
        route: 'XCircle'.toLocaleUpperCase(),
      },
    ],
  },
  {
    name: '其它组件',
    children: [
      {
        label: 'Blur',
        route: 'Blur'.toLocaleUpperCase(),
      },
      {
        label: 'ColorPicker',
        route: 'ColorPicker'.toLocaleUpperCase(),
      },
      {
        label: 'Countdown',
        route: 'Countdown'.toLocaleUpperCase(),
      },
      {
        label: 'Masker',
        route: 'Masker'.toLocaleUpperCase(),
      },
      {
        label: 'Scroller',
        route: 'Scroller'.toLocaleUpperCase(),
      },
      {
        label: 'WechatEmotion',
        route: 'WechatEmotion'.toLocaleUpperCase(),
      },
    ],
  },
])

const goRouter = (route) => {
  router.push({
    name: route,
  })
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.varlet-logo {
  padding: 10px;
}

.varlet-home__title {
  margin: 0 0 16px;
  font-size: 34px;
  display: flex;
  align-items: center;
}

.varlet-home__title,
.varlet-home__desc {
  padding: 0 12px;
  font-weight: 400;
  line-height: 1;
  user-select: none;
}

.varlet-home__desc {
  font-size: 14px;
  line-height: 22px;
}

.varlet-home__image {
  width: 36px;
  height: 36px;
}

.header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: 700;
  text-align: center;
}

.router-view__block {
  padding: 15px 15px;
  background: #f7f8fa;
  color: #555;

  .varlet-home__cell {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    padding: 0px 10px;
    font-size: 15px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.3s;
    // border-bottom: 1px solid #e00f0f;
  }

  .var-icon-chevron-right {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: bottom;
    color: inherit;
    transition-duration: 0ms;
    font-size: 14px;

    &::before {
      position: relative;
      display: inline-block;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-style: normal;
      line-height: 1;
      content: '>';
    }
  }
}
</style>
