<template>
  <div></div>
</template>

<script>
import Datetime from '../datetime/index.vue'
import Picker from '../datetime/datetimepicker.js'
import objectAssign from 'object-assign'

export default {
  name: 'datetime-view',
  extends: Datetime,
  methods: {
    render() {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(
          objectAssign(this.pickerOptions, {
            renderInline: true,
          })
        )
        // #2797
        this.$nextTick(() => {
          this.picker.show()
        })
      })
    },
  },
}
</script>
