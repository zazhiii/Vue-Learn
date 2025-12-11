<script>
export default {
  name: 'MyDialog2',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<template>
  <div v-show="visible" class="dialog-mask">
    <div class="dialog-container">
      <div class="dialog-header">
        <slot name="title">默认标题</slot>
        <button class="dialog-close" @click="close">×</button>
      </div>
      <div class="dialog-body">
        <slot name="content">默认内容</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog-container {
  background: #fff;
  border-radius: 6px;
  min-width: 300px;
  min-height: 150px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  overflow: hidden;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f5f5f5;
  font-weight: bold;
}
.dialog-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.dialog-body {
  padding: 16px;
}
.dialog-footer {
  padding: 12px 16px;
  background: #f5f5f5;
  text-align: right;
}
</style>