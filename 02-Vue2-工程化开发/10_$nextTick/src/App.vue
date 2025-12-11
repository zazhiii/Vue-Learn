<!--
  使用 $nextTick 方法来确保 DOM 更新完成后再执行一些操作。
-->
<template>
  <div class="App">
    <button @click="edit">编辑</button>
    <input type="text" ref="input" v-show="visible"/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
      visible: false
    }
  },
  methods:{
    edit(){
      this.visible = true;
      // 使用 $nextTick 确保 DOM 更新完成后再执行
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
}
</script>

<style scoped>
</style>
