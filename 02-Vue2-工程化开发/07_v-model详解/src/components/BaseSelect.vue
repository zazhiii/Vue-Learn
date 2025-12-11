<script>
export default {
  props: {
    selectId: String,
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value);
    }
  }
}
</script>

<template>
<div>
  <!--
    1. 绑定属性值
    2. 修改通知父组件
  -->
  <select :value="selectId" @change="handleChange">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </select>
</div>
</template>

<style scoped>

</style>