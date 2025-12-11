<!--
自定义指令
1. 全局注册(main.js中)
2. 局部注册(组件中)

指令的绑定值
-->
<template>
  <div class="App">
    <input type="text" ref="inp"/>
    <br>
    <!--
      使用自定义指令
    -->
    <input v-focus type="text">

   <div v-color='clr1'>文字</div>
   <div v-color='clr2'>文字</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      clr1: 'green',
      clr2: 'pink'
    }
  },
  // 获取焦点的原始写法
  // mounted() {
  //   this.$refs.inp.focus()
  // }

  // 局部指令注册
  directives:{
    focus: {
      inserted(el) {
        el.focus()
      }
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value || 'red' // 如果没有传值，默认红色
      },
      update(el, binding) {
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style scoped>
</style>