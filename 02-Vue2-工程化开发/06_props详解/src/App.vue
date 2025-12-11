<!--
  1. props校验
  2. $emit
-->
<template>
  <div class="App">
    <h1>父组件</h1>
    <BaseProgress
        :w="w"
        @changePercent="handleChange"
    ></BaseProgress>
  </div>
</template>

<script>
import BaseProgress from '@/components/BaseProgress.vue'
export default {
  components: {
    BaseProgress
  },
  data(){
    return {
      w: 50
    }
  },
  methods:{
    handleChange(newValue){
      this.w = newValue;
    }
  }
}
</script>

<style scoped>
.App{
  border: 1px solid black;
}
</style>