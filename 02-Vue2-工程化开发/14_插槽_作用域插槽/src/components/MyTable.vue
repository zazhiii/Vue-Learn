<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>序号</th>
      <th>名称</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, index) in data" :key="row.id || index">
      <td>{{ index + 1 }}</td>
      <td>{{ row.name }}</td>
      <td>{{ row.age }}</td>
      <td>
        <slot name="actions" :row="row" :index="index" msg="测试文本"></slot>
        <!-- 会将所有属性添加到一个对象中
             {
                row: { id: 1, name: '张三', age: 18 },
                index: 0,
                msg: '测试文本'
             }
        -->
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

th {
  background: #f5f5f5;
}
</style>