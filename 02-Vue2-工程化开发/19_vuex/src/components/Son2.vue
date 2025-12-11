<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    从vuex中获取的值: <label>{{ title }}</label>
    <br />
    <button @click="subOne">值 - 1</button>
    <br>
    <button @click="subOneAsync">一秒后值 - 1</button>
    <br>
    <p>从vuex中getter获取值: {{filter}}</p>
  </div>
</template>

<script>
// 辅助函数, 简化代码
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filter'])
  },
  methods: {
    ...mapMutations(['subOne']),
    ...mapActions(['subOneAsync'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>