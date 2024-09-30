<template>
    <div>
        <Group>
            <XSwitch :title="t('Basic Usage')" v-model="show1"></XSwitch>
            <XSwitch :title="t('Android Theme')" v-model="show7"></XSwitch>
            <XSwitch :title="t('Show cancel menu')" v-model="show2"></XSwitch>
            <XSwitch :title="t('Array menu')" v-model="show5"></XSwitch>
        </group>

        <Actionsheet v-model="show1" :menus="menus1" @on-click-menu="log" @on-after-hide="log('after hide')"
            @on-after-show="log('after show')"></Actionsheet>
    </div>
</template>
<i18n>
    en:
        Basic Usage: "Basic Usage"
        Android Theme: "Android Theme"
        Show cancel menu: "Show cancel menu"
        Array menu: "Array menu"
        Close me: "Close me"
        Deleted~: "Deleted~"
        'Slot: header': "Slot: header"
        Prevent closing when clicking mask: "Prevent closing when clicking mask"
        Share to friends: "Share to friends"
        Share to timeline: "Share to timeline"
        Take Photo: "Take Photo"
        Choose from photos: "Choose from photos"
    zh-CN:
        Basic Usage: "基本使用"
        Android Theme: "安卓风格"
        Show cancel menu: "显示取消菜单"
        Array menu: "数组菜单"
        Close me: "点我关闭"
        Deleted~: "删除成功"
        'Slot: header': "使用 header slot"
        Prevent closing when clicking mask: "点击遮罩区域不自动关闭"
        Share to friends: "分享给朋友"
        Share to timeline: "分享到朋友圈"
        Take Photo: "拍照"
        Choose from photos: "从相册中选择"

  </i18n>
<script setup>
import { useI18n } from 'vue-i18n-bridge'
import { ref } from 'vue'
const { t } = useI18n()
import Actionsheet from '../index.vue'
import Group from '@/components/group/index.vue'
import XSwitch from '@/components/x-switch/index.vue'
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const log = console.log

const menus1 = ref({
    menu1: t('Share to friends'),
    menu2: t('Share to timeline')
})
</script>