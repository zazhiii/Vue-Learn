<script setup>
import {ref, watch} from "vue";

const count = ref(0)
const obj = ref({
  nickname: 'zhangsan',
  age: 18
})

watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`)
})

watch(obj, (newValue, oldValue) => {
      console.log('obj changed:', oldValue, '=>', newValue)
    },
    {
      // 进页面立即执行回调
      immediate: true,
      // 深度监听对象内部值变化
      deep: true,
    }
)

// 单独监听obj.value.age
watch(() => obj.value.age, (newValue, oldValue) => {
  console.log(`obj.age changed from ${oldValue} to ${newValue}`)
})


const addOne = () => {
  count.value += 1;
}

</script>

<template>
  <div>{{ count }}</div>
  <button @click="addOne">+ 1</button>
  <hr>
</template>

<style scoped>
</style>
