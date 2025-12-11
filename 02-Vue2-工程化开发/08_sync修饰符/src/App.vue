<!--
-->
<template>
  <div class="App">
    <button @click="visible=true">显示弹窗</button>
    <BaseDialog :visible.sync="visible"></BaseDialog>
    <!--
      :visible.sync="visible" 是一个双向绑定的语法糖，
      等价于 :visible="visible" @update:visible="visible = $event"
    -->
  </div>
</template>

<script>
import BaseDialog from "@/components/BaseDialog.vue";

export default {
  components:{
    BaseDialog
  },
  data(){
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
</style>