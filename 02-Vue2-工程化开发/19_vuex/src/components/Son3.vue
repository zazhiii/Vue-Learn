<template>
  <div class="box">
    <h2>Son3 子组件</h2>
    <p>从模块中取数据{{  $store.state.user.userInfo }}</p>
    <p>从模块中取数据 theme: {{ theme }}</p>
    <p>1-获取getter：{{ $store.getters['user/score'] }}</p>
    <p>2-获取getter：{{ score }}</p>
    <button @click="$store.commit('user/addScore')">分数 + 1</button>
    <button @click="addScore">分数 + 1</button>
    <button @click="setTheme()">更新主题色为light</button>

  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'Son3Com',
  computed: {
    ...mapState('setting', ['theme']),
    ...mapGetters('user', ['score']),
  },
  methods: {
    ...mapMutations('user', ['addScore']),
    setTheme() {
      console.log('更新主题色为light');
      this.$store.commit('setting/setTheme', 'light')
    }
  },
  data(){
    return {
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
