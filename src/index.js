import Actionsheet from './components/actionsheet/index.vue'
import XButton from './components/x-button/index.vue'
import Box from './components/box/index.vue'
import GroupTitle from './components/group-title/index.vue'
import Group from './components/group/index.vue'
import Flexbox from './components/flexbox/flexbox.vue'
import FlexboxItem from './components/flexbox/flexbox-item.vue'
import Divider from './components/divider/index.vue'
import Badge from './components/badge/index.vue'
import Cell from './components/cell/index.vue'
import CellBox from './components/cell-box/index.vue'
import CellFormPreview from './components/cell-form-preview/index.vue'
import TransferDomDirective from './directives/transfer-dom'
import Alert from './components/alert/index.vue'
import XSwitch from './components/x-switch/index.vue'
import ButtonTab from './components/button-tab/button-tab.vue'
import ButtonTabItem from './components/button-tab/button-tab-item.vue'
import Sticky from './components/sticky/index.vue' // todo
import Swiper from './components/swiper/swiper.vue'
import SwiperItem from './components/swiper/swiper-item.vue'
import Tab from './components/tab/tab.vue'
import TabItem from './components/tab/tab-item.vue'
import Tabbar from './components/tabbar/tabbar.vue'
import TabbarItem from './components/tabbar/tabbar-item.vue'
import XHeader from './components/x-header/index.vue'
import Card from './components/card/index.vue'
import Clocker from './components/clocker/index.vue'
import Countup from './components/countup/index.vue'
import Flow from './components/flow/flow.vue'
import FlowState from './components/flow/flow-state.vue'
import FlowLine from './components/flow/flow-line.vue'
import Marquee from './components/marquee/marquee.vue'
import MarqueeItem from './components/marquee/marquee-item.vue'
import Panel from './components/panel/index.vue'
import Radio from './components/radio/index.vue'
import Previewer from './components/previewer/index.vue'
import Qrcode from './components/qrcode/index.vue'
import Step from './components/step/step.vue'
import StepItem from './components/step/step-item.vue'
import XHr from './components/x-hr/index.vue'
import XImg from './components/x-img/index.vue'
import XProgress from './components/x-progress/index.vue'
import XTable from './components/x-table/index.vue'
import LoadMore from './components/load-more/index.vue'
import Calendar from './components/calendar/index.vue'
import CheckIcon from './components/check-icon/index.vue'
import Checker from './components/checker/checker.vue'
import CheckerItem from './components/checker/checker-item.vue'
import Popup from './components/popup/index.vue'
import Checklist from './components/checklist/index.vue'
import DatetimeRange from './components/datetime-range/index.vue'
import Datetime from './components/datetime/index.vue'
import DatetimeView from './components/datetime-view/index.vue'
import FormPreview from './components/form-preview/index.vue'
import ChinaAddressData from './datas/china_address.json'
import ChinaAddressV1Data from './datas/china_address_v1.json'
import ChinaAddressV2Data from './datas/china_address_v2.json'
import ChinaAddressV3Data from './datas/china_address_v3.json'
import ChinaAddressV4Data from './datas/china_address_v4.json'
import PopupPicker from './components/popup-picker/index.vue'
import Selector from './components/selector/index.vue'
import XAddress from './components/x-address/index.vue'
import XInput from './components/x-input/index.vue'
import XNumber from './components/x-number/index.vue'
import XTextarea from './components/x-textarea/index.vue'
import InlineCalendar from './components/inline-calendar/index.vue'
import InlineXNumber from './components/inline-x-number/index.vue'
import Picker from './components/picker/index.vue'
import PopupRadio from './components/popup-radio/index.vue'
import Range from './components/range/index.vue'
import Rater from './components/rater/index.vue'
import Search from './components/search/index.vue'
import Swipeout from './components/swipeout/swipeout.vue'
import SwipeoutItem from './components/swipeout/swipeout-item.vue'
import SwipeoutButton from './components/swipeout/swipeout-button.vue'
import Grid from './components/grid/grid.vue'
import GridItem from './components/grid/grid-item.vue'
import ViewBox from './components/view-box/index.vue'
import Timeline from './components/timeline/timeline.vue'
import TimelineItem from './components/timeline/timeline-item.vue'
import Icon from './components/icon/index.vue'
import InlineXSwitch from './components/inline-x-switch/index.vue'
import Blur from './components/blur/index.vue'
import ColorPicker from './components/color-picker/index.vue'
import Countdown from './components/countdown/index.vue'
import Masker from './components/masker/index.vue'
import XDialog from './components/x-dialog/index.vue'
import Scroller from './components/scroller/index.vue'
import Spinner from './components/spinner/index.vue'
import WechatEmotion from './components/wechat-emotion/index.vue'
import Toast from './components/toast/index.vue'
import Confirm from './components/confirm/index.vue'
import Loading from './components/loading/index.vue'
import Msg from './components/msg/index.vue'
import Popover from './components/popover/index.vue'
import PopupHeader from './components/popup-header/index.vue'
import InlineLoading from './components/inline-loading/index.vue'
import XIcon from './components/x-icon/index.vue'
import Drawer from './components/drawer/index.vue'
// tool
import base64 from './tools/base64/index.js'
import cookie from './tools/cookie/index.js'
import dateFormat from './tools/date/format.js'
import debounce from './tools/debounce/index.js'
import md5 from './tools/md5/index.js'
import numberComma from './tools/number/comma.js'
import numberPad from './tools/number/pad.js'
import numberRandom from './tools/number/random.js'
import numberRange from './tools/number/range.js'
import querystring from './tools/querystring/index.js'
import trim from './tools/string/trim'
// chart
import VChart from './components/v-chart/v-chart.vue'
import VLine from './components/v-chart/v-line.vue'
import VArea from './components/v-chart/v-area.vue'
import VBar from './components/v-chart/v-bar.vue'
import VPie from './components/v-chart/v-pie.vue'
import VPoint from './components/v-chart/v-point.vue'
import VScale from './components/v-chart/v-scale.vue'
import VAxis from './components/v-chart/v-axis.vue'
import VGuide from './components/v-chart/v-guide.vue'
import VTooltip from './components/v-chart/v-tooltip.vue'
import VLegend from './components/v-chart/v-legend.vue'
import XCircle from './components/x-circle/index.vue'
// plugin
// import AlertModule from './plugins/alert/module'
// import LoadingModule from './plugins/loading/module'
import AjaxPlugin from './plugins/ajax/index.js'
import AlertPlugin from './plugins/alert/index.js'
import AppPlugin from './plugins/app/index.js'
import BusPlugin from './plugins/bus/index.js'
import CloseDialogsPlugin from './plugins/close-dialogs/index.js'
import ConfirmPlugin from './plugins/confirm/index.js'
import ConfigPlugin from './plugins/config/index.js'
import DatetimePlugin from './plugins/datetime/index.js'
import DevicePlugin from './plugins/device/index.js'
import LoadingPlugin from './plugins/loading/index.js'
import ToastPlugin from './plugins/toast/index.js'
import WechatPlugin from './plugins/wechat/index.js'
// i18n
import LocalePlugin from './locale/index.js'
export {
  ChinaAddressV1Data,
  ChinaAddressV2Data,
  ChinaAddressV3Data,
  ChinaAddressV4Data,
  AjaxPlugin,
  AlertPlugin,
  AppPlugin,
  BusPlugin,
  CloseDialogsPlugin,
  ConfirmPlugin,
  ConfigPlugin,
  DatetimePlugin,
  DevicePlugin,
  // AlertModule,
  // LoadingModule,
  LoadingPlugin,
  LocalePlugin,
  ToastPlugin,
  WechatPlugin,
  WechatEmotion,
  InlineLoading,
  Spinner,
  Scroller,
  XDialog,
  Toast,
  Drawer,
  Confirm,
  Loading,
  Msg,
  Popover,
  XIcon,
  PopupHeader,
  Masker,
  Countdown,
  ColorPicker,
  Blur,
  XCircle,
  VChart,
  VLine,
  VArea,
  VBar,
  VPie,
  VPoint,
  VScale,
  VAxis,
  VGuide,
  VTooltip,
  VLegend,
  trim,
  querystring,
  numberComma,
  numberPad,
  numberRandom,
  numberRange,
  md5,
  debounce,
  dateFormat,
  cookie,
  base64,
  Timeline,
  TimelineItem,
  ViewBox,
  Grid,
  GridItem,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  Range,
  Search,
  Rater,
  Picker,
  PopupRadio,
  InlineXNumber,
  InlineCalendar,
  XTextarea,
  XNumber,
  XInput,
  XAddress,
  Selector,
  PopupPicker,
  ChinaAddressData,
  FormPreview,
  DatetimeView,
  Datetime,
  DatetimeRange,
  Checklist,
  Popup,
  Checker,
  CheckerItem,
  CheckIcon,
  Calendar,
  XTable,
  LoadMore,
  XProgress,
  XImg,
  XHr,
  Step,
  StepItem,
  Qrcode,
  Previewer,
  Radio,
  Panel,
  Marquee,
  MarqueeItem,
  Flow,
  FlowState,
  FlowLine,
  Countup,
  Clocker,
  Card,
  XHeader,
  TabbarItem,
  Tabbar,
  TabItem,
  Tab,
  SwiperItem,
  Swiper,
  Sticky,
  ButtonTab,
  ButtonTabItem,
  XSwitch,
  Alert,
  Actionsheet,
  XButton,
  Box,
  GroupTitle,
  Group,
  Flexbox,
  FlexboxItem,
  Divider,
  Badge,
  Cell,
  CellBox,
  CellFormPreview,
  Icon,
  InlineXSwitch,
  TransferDomDirective,
  TransferDomDirective as TransferDom,
}
