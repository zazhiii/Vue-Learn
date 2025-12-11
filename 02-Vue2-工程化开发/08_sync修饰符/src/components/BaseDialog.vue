<script>
export default {
  props:{
    visible:Boolean,
  },
  methods: {
    change() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<template>
<div class="App" v-show="visible">
<button @click="change">x</button>
</div>
</template>

<style scoped>
.App{
  width: 300px;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>