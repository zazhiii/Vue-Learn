<template>
  <div class="App">
    <h1>记事本</h1>
    <input
        type="text"
        v-model="todoText"
        @keyup.enter="addTask"
        placeholder="请输入待办事项" />
    <button @click="addTask">添加任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods:{
    addTask() {
      if (this.todoText.trim() === '') {
        alert('请输入待办事项');
        return;
      }
      this.$emit('addTask', this.todoText); // 传给父组件
      this.todoText = ''; // 清空输入框
    }
  }
}
</script>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
h1 {
  margin-bottom: 16px;
  color: #333;
}
input[type="text"] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
  font-size: 16px;
}
button {
  padding: 8px 16px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #66b1ff;
}
</style>