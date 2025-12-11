<!--
-->
<template>
  <div class="App">
    <MyTable :data="list">
      <template #header>
        <th>编号</th>
        <th>名称</th>
        <th>年龄</th>
        <th>标签</th>
      </template>
      <template #body="{ row, index }">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
          <td><MyTag v-model="row.tag"></MyTag></td>
        </tr>
      </template>
    </MyTable>
  </div>
</template>

<script>

import MyTable from "@/components/MyTable.vue";
import MyTag from "@/components/MyTag.vue";

export default {
  components: {MyTable, MyTag},
  data() {
    return {
      list: [
        {id: 1, name: '张三', age: 18, tag: '标签1'},
        {id: 2, name: '李四', age: 20, tag: '标签2'},
        {id: 3, name: '王五', age: 22, tag: '标签3'}
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>