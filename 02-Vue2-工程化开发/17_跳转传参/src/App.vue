<!--
  1. 查询参数传递
  2. 动态路由传递
-->
<template>
  <div class="App">
      <div>
        <router-link to="/aa?val=查询参数">A组件</router-link>
        <router-link to="/bb/1">B组件</router-link>
      </div>
      <div class="components">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a.router-link-active {
  color: red;
  font-weight: bold;
}
a{
  margin-left: 10px;
  border: 1px solid black;
  padding: 3px;
}
a:hover{
  background-color: #eee;
  color: green;
}
.components{
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  width: 100px;
  height: 100px;
}
</style>