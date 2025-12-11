<!--
  插槽
  1. 在组件中使用 `<slot>` 标签来定义插槽位置。
  2. 在使用组件时，可以在组件标签内添加内容，这些内容会被插入到 `<slot>` 标签的位置。

  具名插槽--如果有多个<slot>标签，可以使用name属性来区分不同的插槽。
  使用时，在组件标签内使用 `<template v-slot:slotName>` 来指定内容插入到哪个具名插槽。
-->
<template>
  <div class="App">
    <!--
      传入不同标签内容
    -->
    <MyDialog>
    </MyDialog>
    <MyDialog :visible="dialogVisible1" @update:visible="dialogVisible1 = $event">
      <h1>内容</h1>
    </MyDialog>
    <MyDialog :visible="dialogVisible2" @update:visible="dialogVisible2 = $event">
      <p>内容内容内容</p>
      <p>内容</p>
    </MyDialog>
    <!-- 不传 -->
    <MyDialog :visible="dialogVisible3" @update:visible="dialogVisible3 = $event">
    </MyDialog>

    <!--
      具名插槽
    -->
    <MyDialog2 :visible="dialogVisible3" @update:visible="dialogVisible3 = $event">
      <template v-slot:title>
        <h1>自定义标题</h1>
      </template>
      <!-- 可以简化为 #slotName -->
      <template #content>
        <p>自定义内容</p>
        <p>更多内容</p>
      </template>
    </MyDialog2>
  </div>
</template>

<script>
import MyDialog from "@/components/MyDialog.vue";
import MyDialog2 from "@/components/MyDialog2.vue";

export default {
  components: {MyDialog2, MyDialog},
  data(){
    return{
      dialogVisible1: true,
      dialogVisible2: true,
      dialogVisible3: true,
      dialogVisible4: true,
    }
  }
}
</script>

<style scoped>

</style>