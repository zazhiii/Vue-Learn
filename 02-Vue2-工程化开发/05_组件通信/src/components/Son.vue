<template>
  <div class="App">
    <!--
      直接使用
    -->
    <h1>我是子组件: {{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'SonComponent',
  // 2. 使用props接受父组件传递的title
  props:['title'],
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style scoped>
.App{
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
}
</style>