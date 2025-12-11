<!--
  1. 封装路由组件
  2. router-link
  3. 自定义匹配类名
-->
<template>
  <div class="App">
      <div>
        <!--
          使用 router-link 会给链接添加一个    class="router-link-active"
          方便用来实现选中样式
          这个类名是可以配置的
        -->
        <router-link to="/aa">A组件</router-link>
        <router-link to="/bb">B组件</router-link>
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