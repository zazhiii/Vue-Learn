<script setup>
import {reactive} from "vue";

// reactive: 使得对象变成响应式的
const state = reactive({
  count: 0
})
const addOne = () => {
  state.count += 1;
}

// （🌟推荐）ref: 使得基本类型或者复杂类型变成响应式的 （原理是包装成对象再用reactive）
import {ref} from "vue";
const countRef = ref(0);
const addOneRef = () => {
  countRef.value += 1;
}

</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="addOne">+ 1</button>
  <hr>
  <div>{{ countRef }}</div>
  <button @click="addOneRef">+ 1 Ref</button>
</template>

<style scoped>
</style>
