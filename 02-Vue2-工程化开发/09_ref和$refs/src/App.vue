<!--
  1. ref和$refs获取dom元素
  2. ref和$refs获取组件实例
-->
<template>
  <div class="App">
    <BaseComponent></BaseComponent>

    <!-- 给组件设置 ref 属性 -->
    <BaseForm ref = 'BaseForm'></BaseForm>
    <button @click="clear">清空</button>
  </div>
</template>

<script>

import BaseComponent from "@/components/BaseComponent.vue";
import BaseForm from "@/components/BaseForm.vue";

export default {
  components: {
    BaseComponent,
    BaseForm
  },
  data(){
    return {
    }
  },
  methods:{
    clear(){
      this.$refs.BaseForm.resetValue()
    }
  }
}
</script>

<style scoped>
</style>