<!--
  1. 数据动态传入--props
  2. 表头和主体支持自定义--具名插槽, 作用域插槽
-->
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
<template>
  <div class="App">
    <table>
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <slot name="body" :row="row" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}
th {
  background: #f5f5f5;
}
</style>