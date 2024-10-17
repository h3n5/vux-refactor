<template>
  <div>
    <Group title="国际化" label-width="5em">
      <Radio title="语言选择" :options="list" v-model="lang"></Radio>
    </Group>
    <InlineCalendar :show.sync="show"></InlineCalendar>
  </div>
</template>

<script setup>
import { Group, Radio, LocalePlugin, InlineCalendar } from "vux-refactor";
import { ref, watch } from "vue-demi";
const lang = ref("zh_CN");
const show = ref(true);
const list = ref([
  {
    value: "中文",
    key: "zh_CN",
  },
  {
    value: "English",
    key: "en_GB",
  },
]);
watch(lang, (val) => {
  LocalePlugin.locale = val;
});
</script>