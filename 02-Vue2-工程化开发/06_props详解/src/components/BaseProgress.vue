<template>
  <div>
    <div class="outer">
      <div class="inner" :style="{width: w + '%'}"></div>
    </div>
    <button @click="inc">-</button>
    <p>{{w}}%</p>
    <button @click="dec">+</button>
  </div>
</template>
<script>
export default {
  name: 'SonComponent',

  // 校验

  // props: {
  //   w: Number, // 1. 类型校验
  // },

  props:{
    w: {
      type: Number,
      require: true, // 2. 非空校验
      default: 50, // 3. 默认值
      validator(value) { // 4. 自定义校验
        return value >= 0 && value <= 100;
      }
    }
  },
  data() {
    return {
    }
  },
  methods:{
    // 组件不能直接修改父组件传递的props值
    inc(){
      // this.w += 1; // 错误的做法
      // 只能通过 $emit 触发父组件的事件来修改父组件的数据
      // 父组件通过 v-on:changePercent="w = $event" 监听
      this.$emit('changePercent',this.w + 1);
    },
    dec(){
      this.$emit('changePercent',this.w - 1);
    }
  }
}
</script>
<style scoped>
.outer{
  border: 1px solid black;
  padding: 3px;
  width: 300px;
  height: 20px;
}
.inner{
  background-color: pink;
  height: 100%;
}
</style>