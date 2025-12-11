<template>
  <div class="App">
      <div>
        <a href="#/aa">A组件</a>
        <a href="#/bb">B组件</a>
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