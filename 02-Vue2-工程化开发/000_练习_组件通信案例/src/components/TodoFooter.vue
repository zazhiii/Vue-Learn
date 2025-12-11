<template>
  <div class="App">
    <div>{{todoList.length}}</div>
    <button @click="clear">清空</button>
  </div>
</template>
<script>
export default {
  props: {
    todoList: Array
  },
  methods: {
    clear(){
      this.$emit('clear');
    }
  }

}
</script>

<style scoped>
.App {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
div {
  font-size: 15px;
  color: #888;
}
button {
  padding: 6px 16px;
  background: #e6a23c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #f3d19e;
  color: #333;
}
</style>