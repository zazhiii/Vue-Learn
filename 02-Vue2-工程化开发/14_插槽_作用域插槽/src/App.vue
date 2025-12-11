<!--
-->
<template>
  <div class="App">
    <MyTable :data="list">
      <!--
        接受作用域插槽传递的参数(传过来的是一个对象)
        可以直接结构
      -->
      <template #actions="{row, index}">
        <button @click="del(row)">删除 {{ index + 1}}</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";

export default {
  components: {MyTable},
  data(){
    return {
      list: [
        { id: 1, name: '张三', age: 18 },
        { id: 2, name: '李四', age: 20 },
        { id: 3, name: '王五', age: 22 }
      ]
    }
  },
  methods: {
    del(row) {
      const id = row.id
      this.list = this.list.filter(item => item.id !== id);
      alert(`删除了 ${row.name}`)
    }
  }
}
</script>

<style scoped>

</style>