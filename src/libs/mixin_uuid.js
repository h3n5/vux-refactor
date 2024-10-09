export default {
  mounted() {
    this.uuid = createId()
  },
  data() {
    return {
      uuid: createId(),
    }
  },
}

function createId() {
  return Math.random().toString(36).substring(3, 8)
}
