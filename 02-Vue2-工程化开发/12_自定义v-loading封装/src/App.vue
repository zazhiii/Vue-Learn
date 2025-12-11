<!--
  自定义指令 -- 封装v-loading
-->
<template>
  <div class="App" v-loading="isLoading">
      <h1>内容内容</h1>
  </div>
</template>

<script>
export default {
  created() {
    // 模拟异步加载
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  data(){
    return {
      isLoading: true
    }
  },
  directives: {
    loading: {
      inserted(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading');
      },
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading');
      }
    }
  }
}
</script>

<style scoped>
.App{
  width: 300px;
  height: 300px;
  border: 3px solid #333333;
}
.loading:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff url('../public/下载加载.gif') no-repeat center;
}
</style>