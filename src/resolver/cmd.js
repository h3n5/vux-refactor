const fs = require('fs')
const path = require('path')

const ComponentsModule = [
  'XCircle',
  'InlineLoading',
  'Spinner',
  'Scroller',
  'XDialog',
  'Toast',
  'Drawer',
  'Confirm',
  'Loading',
  'Msg',
  'Popover',
  'PopupHeader',
  'Masker',
  'Countdown',
  'ColorPicker',
  'Blur',
  'Timeline',
  'TimelineItem',
  'ViewBox',
  'Grid',
  'GridItem',
  'Swipeout',
  'SwipeoutItem',
  'SwipeoutButton',
  'Range',
  'Search',
  'Rater',
  'Picker',
  'PopupRadio',
  'InlineXNumber',
  'InlineCalendar',
  'XTextarea',
  'XNumber',
  'XInput',
  'XAddress',
  'Selector',
  'PopupPicker',
  'FormPreview',
  'DatetimeView',
  'Datetime',
  'DatetimeRange',
  'Checklist',
  'Popup',
  'Checker',
  'CheckerItem',
  'CheckIcon',
  'Calendar',
  'XTable',
  'LoadMore',
  'XProgress',
  'XImg',
  'Step',
  'StepItem',
  'Qrcode',
  'Previewer',
  'Radio',
  'Panel',
  'Marquee',
  'MarqueeItem',
  'Flow',
  'FlowState',
  'FlowLine',
  'Countup',
  'Clocker',
  'Card',
  'XHeader',
  'TabbarItem',
  'Tabbar',
  'TabItem',
  'Tab',
  'SwiperItem',
  'Swiper',
  'Sticky',
  'ButtonTab',
  'ButtonTabItem',
  'XSwitch',
  'Alert',
  'Actionsheet',
  'XButton',
  'Box',
  'GroupTitle',
  'Group',
  'Flexbox',
  'FlexboxItem',
  'Divider',
  'Badge',
  'Cell',
  'CellBox',
  'CellFormPreview',
  'InlineXSwitc'
]
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function kebabToPascalCase(str) {
  return str
    .split('-') // Split by the hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join('') // Join them back into a single string
}

function getSideEffects(partialName) {
  const sideEffectsPath = `vux-refactor/src/components/${partialName}/${partialName}.less`
  const fileExistPath = path.resolve(
    __dirname,
    'node_modules',
    `vux-refactor/src/components/${partialName}/${partialName}.less`
  )
  const hasSideEffects = fs.existsSync(fileExistPath)
  if (hasSideEffects) {
    return sideEffectsPath
  } else {
    return []
  }
}

function getComponent(name = '') {
  if (/^X[A-Z]/.test(name)) {
    return true
  }

  if (name.includes('-')) {
    name = kebabToPascalCase(name)
  }

  return ComponentsModule.find((v) => v === name)
}

module.exports = function VuxRefactorResolver(options = {}) {
  return {
    type: 'component',
    resolve: (name) => {
      if (options.exclude && name.match(options.exclude)) return
      if (getComponent(name)) {
        const partialName = kebabCase(name)

        return {
          name: name,
          from: `vux-refactor`,
          sideEffects: getSideEffects(partialName)
        }
      }
    }
  }
}
