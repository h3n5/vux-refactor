<template>
    <div style="position: relative;">
        <div class="varlet-logo">
            <h1 class="varlet-home__title">

                <svg class="varlet-home__image" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px"
                    viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
                    <path data-index="path_0" fill="#35495e"
                        d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36"
                        class="svgpath"></path>
                </svg>
                <span>Vux-refator</span>
            </h1>
            <h2 class="varlet-home__desc">vux UI -组件库</h2>
        </div>
        <div class="router-view__block">
            <div class="varlet-home__cell" v-for="(item, index) in components" :key="index"
                @click="goRouter(item.route)">
                <span>{{ item.label }}</span>
                <i class="var-icon var-icon--set var-icon-chevron-right"
                    style="transition-duration: 0ms; font-size: 14px;"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import router from '@/router';
const components = ref([
    {
        label: 'Actionsheet',
        route: 'actionsheet'.toLocaleUpperCase(),
    }
])

const goRouter = (route) => {
    router.push({
        name: route
    })
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}

.varlet-logo {
    padding: 10px
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
    user-select: none
}

.varlet-home__desc {
    font-size: 14px;
    line-height: 22px
}

.varlet-home__image {
    width: 36px;
    height: 36px
}

.header {
    position: fixed;
    z-index: 99;
    width: 100%;
    font-weight: 700;
    text-align: center;
}

.router-view__block {
    // padding: 15px 15px;
    background: #fef7ff;
    color: #555;

    .varlet-home__cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
        padding: 10px 12px;
        font-size: 15px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: all .3s;
        border-bottom: 1px solid #e00f0f;
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
            content: ">";
        }
    }
}
</style>