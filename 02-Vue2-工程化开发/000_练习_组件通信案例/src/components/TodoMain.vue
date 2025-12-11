<template>
<div class="App">
  <ul>
    <li v-for="(todo, idx) in todoList" :key="idx">
      <div class="item">{{todo.name}}</div>
      <button @click="handleDel(todo.id)">删除</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    todoList: Array
  },
  data() {
    return {
    }
  },
  methods:{
    handleDel(id){
      this.$emit('del', id)
    }
  }
}
</script>

<style scoped>
.App {
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  margin-bottom: 10px;
  padding: 10px 16px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.item {
  flex: 1;
  color: #444;
  font-size: 16px;
}
button {
  padding: 6px 14px;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 10px;
}
button:hover {
  background: #ff7875;
}
</style>