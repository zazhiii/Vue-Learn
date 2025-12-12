<script setup>
import {computed, ref} from "vue";

const arr = ref([1, 2, 3, 4, 5, 6, 7, 8])

const computedArr = computed(() => {
  return arr.value.filter(item => item % 2 === 0)
})

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
