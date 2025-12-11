<!--
  1. state & mapState -- 访问数据
  2. mutations & mapMutations -- 修改数据
  3. actions & mapActions -- 异步操作
  4. getters & mapGetters -- 类似于计算属性
  5. 分模块管理
-->
<template>
  <div id="app">
    <h1>根组件</h1>
    <p>count: {{ count }}</p>
    <p>title: {{ title }}</p>
    <input type="text" :value="count" @input="handleInput" />
    <Son1></Son1>
    <hr>
    <Son2></Son2>
    <hr>
    <Son3></Son3>
  </div>
</template>

<script>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import Son3 from '@/components/Son3.vue'
import {mapState} from "vuex";

export default {
  name: 'app',
  components: {
    Son1,
    Son2,
    Son3
  },
  computed:{
    ...mapState(['count', 'title'])
  },
  data () {
    return {

    }
  },
  methods: {
    handleInput(e){
      this.$store.commit('updateCount', e.target.value);
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
