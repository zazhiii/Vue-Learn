// 文件作用: 导入App.vue, 基于App.vue的结构渲染到index.html

// 导入Vue核心包
import Vue from 'vue'
// 导入 App.vue 根组件
import App from './App.vue'

// 提示：当前处于什么环境（生产 / 开发）
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  // 渲染App.vue组件到index.html
  render: h => h(App),
  // .$mount('#app') 将Vue实例挂载到id为app的元素上
  // 和 el: '#app' 等价
}).$mount('#app')
