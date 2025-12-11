<script>

</script>

<template>
 <div>BaseOne</div>
</template>

  <!--
    1. 不加 scoped 的话会全局生效
    2. 加了 scoped 的话只会在当前组件生效

    一般推荐加上
  -->
<!--<style>-->
<style scoped>
div {
  border: 1px solid black;
  margin: 5px;
}
</style>