<template>
  <div class="App">
    <TodoHeader @addTask="addTask"></TodoHeader>
    <TodoMain :todo-list="todoList" @del="handleDel"></TodoMain>
    <TodoFooter :todoList="todoList" @clear="clear"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";
export default {
  components: {
    TodoMain,
    TodoHeader,
    TodoFooter
  },
  data(){
    return{
      todoList: []
    }
  },
  methods:{
    addTask(task) {
      this.todoList.push({
        id: new Date(),
        name: task,
      });
    },
    handleDel(id){
      this.todoList = this.todoList.filter(item => item.id !== id);
    },
    clear(){
      this.todoList = [];
    }
  }
}
</script>

<style>
body {
  background: #f5f5f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.App {
  max-width: 360px;
  margin: 20px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 10px 10px 10px 10px;
}
</style>