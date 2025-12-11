<template>
  <div class="App">
    <MyHeader>头部导航栏</MyHeader>
    <MyButton>按钮</MyButton>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: {
    MyHeader
  }
}
</script>

<style>
.App {
  width: 300px;
  height: 500px;
  background-color: pink;
  margin: 0 auto;
  padding: 20px;
}

</style>