<template>
  <div class="App">
    <h1>我是父组件</h1>
    <input v-model="title" type="text" placeholder="在父组件中输入子组件需要的标题" />
    <!--
      通过属性给子组件传递数据
    -->
    <Son :title="title"></Son>
  </div>
</template>

<script>
import Son from '@/components/Son.vue'
export default {
  components: {
    Son
  },
  data(){
    return {
      title: ''
    }
  }
}
</script>

<style scoped>
.App{
  border: 1px solid black;
}
</style>