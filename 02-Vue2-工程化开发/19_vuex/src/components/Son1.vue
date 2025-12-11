<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    <!--
      1. 访问数据
    -->
    从vuex中获取的值: <label> {{ $store.state.count }}</label>
    <br>
    <!--
      2. 修改数据
    -->
    <button @click="add()">值 + 1</button>
    <br>
    <button @click="addN()">值 + n</button>
    <input type='number' v-model="n">
    <br>
    <!--
      3. 异步操作
    -->
    <button @click="addOneAsync()">一秒后值 + 1</button>
    <br>
    <p>从vuex getter中获取的值: {{ $store.getters.filter }}</p>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    add() {
      // 调用vuex中的mutations方法
      this.$store.commit('addCount');
    },
    addN(){
      this.$store.commit('addN', this.n);
    },
    addOneAsync(){
      this.$store.dispatch('addOneAsync');
    }
  },
  data(){
    return {
      n: 0
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
