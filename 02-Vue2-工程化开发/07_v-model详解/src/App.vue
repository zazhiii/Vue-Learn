<!--
  1. v-model原理
  2. 表单组件封装
-->
<template>
  <div class="App">
    <input type="text" v-model="msg1">
    <br>
    <!--
      相当于
    -->
    <input type="text" :value="msg2" @input="msg2 = $event.target.value">
    <br>
    ---------------------
    <!--
      通过$event能在模板中获取到事件形参
    -->
    <BaseSelect :select-id="selectId" @change="selectId = $event"></BaseSelect>
    ---------------------
    <!--
      使用v-model简化上面的代码
      1. v-model绑定的属性名必须是value
      2. 触发的事件必须是input
    -->
    <BaseSelect2 v-model="selectId2"></BaseSelect2>
  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect.vue";
import BaseSelect2 from "@/components/BaseSelect2.vue";
export default {
  components:{
    BaseSelect2,
    BaseSelect
  },
  data(){
    return {
      msg1: 'hello',
      msg2: 'world',
      selectId: '1',
      selectId2: '1'
    }
  }
}
</script>

<style scoped>
</style>