<!--
  1. 重定向
  2. 跳转404页面
  3. 切换路由模式

  两种路由模式：
  1. path 跳转
  2. name 跳转(需要给路由起名字, 用于path太长)
-->
<template>
  <div class="App">
      <div>
        <router-link to="/aa">A组件</router-link>
        <router-link to="/bb">B组件</router-link>
      </div>
      <div class="components">
        <router-view></router-view>
      </div>
    <button @click="goA1()">跳转到A-1</button>
    <button @click="goA2()">跳转到A-2</button>
    <button @click="goB1()">跳转到B-1</button>
    <button @click="goB2()">跳转到B-2</button>
  </div>
</template>

<script>
export default {
  methods:{
    goA1() {
      this.$router.push('/aa?val=123');
    },
    // 完整写法，更适合传参
    goA2() {
      this.$router.push({
        path: '/aa',
        query: { val: 456 }
      });
    },
    goB1(){
      this.$router.push('/bb/123');
    },
    goB2(){
      this.$router.push({
        name: 'B',
        params: { id: 456 }
      });
    }
  }
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