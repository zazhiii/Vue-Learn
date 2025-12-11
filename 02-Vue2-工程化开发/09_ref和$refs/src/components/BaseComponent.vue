<!--
- 传统的document.querySelector('.app')的方式会在整个页面中查找id为app的元素，
- 通过给元素指定ref属性，再通过this.$refs.app来访问该元素，可以做到只在组件中查找元素
-->
<script>
export default {
  mounted(){
    const element = document.querySelector(".App");
    console.log(element) // 获取到了两个元素，因为页面中有两个类名为App的元素

    const element2 = this.$refs.App;
    console.log(element2) // 只获取到了一个元素，因为this.$refs.App只会在当前组件中查找名为App的元素
  }
}
</script>

<template>
<div class="App" ref = "App">
</div>
</template>

<style scoped>

</style>