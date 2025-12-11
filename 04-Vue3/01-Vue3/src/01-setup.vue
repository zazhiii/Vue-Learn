<!--
<script>
export default {
  setup() {
    const message = "Hello Vue 3!";
    const logMessage = () => {
      console.log(message);
    };
    return {
      message,
      logMessage
    };
  }
}
</script>
-->

<script setup>
const message = "Hello Vue 3!";
const logMessage = () => {
  console.log(message);
}
</script>


<template>
  <div>{{ message }}</div>
  <button @click="logMessage">Log Message</button>
</template>

<style scoped>
</style>
