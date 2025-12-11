<script>
export default {
  props: {
    // v-model绑定的属性名必须是value
    value: String,
  },
  methods: {
    handleChange(event) {
      // 触发的事件必须是input
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<template>
<div>
  <select :value="value" @change="handleChange">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </select>
</div>
</template>

<style scoped>

</style>