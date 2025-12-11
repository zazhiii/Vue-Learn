<!--
  1. 双击显示，并自动聚焦
  2. 是去焦点隐藏输入框
  3. 回显标签信息 (v-model实现)
  4. 回车保存
-->
<script>
export default {
  name: 'MyTag',
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    handleClick() {
      this.isEdit = true;
      // // 注意！需要等待异步加载完成才能获取焦点   *使用自定义指令代替这一部分
      // this.$nextTick(() => {
      //   this.$refs.inputRef.focus();
      // })
    },
    handleStore(){
      this.isEdit = false
      this.$emit('input', this.$refs.inputRef.value);
    }
  }
}
</script>

<template>
  <input
      type="text"
      class="input"
      v-if="isEdit"
      ref="inputRef"
      v-focus
      @blur="handleStore()"
      :value="value"
      @keyup.enter="handleStore()"
  >
  <div v-else @dblclick="handleClick()" >{{ value }}</div>
</template>

<style scoped>

</style>