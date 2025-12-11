<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <button @click="count--">-</button>
    <div>{{ count }}</div>
    <button @click="count++">+</button>
  </div>
</template>
<script>
export default {
  // data必须是一个函数返回一个对象。
  // 这样可以使用组件复用时，每个组件实例都有自己的独立数据。
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style scoped>
</style>