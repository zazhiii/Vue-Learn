import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册一个自定义指令 `v-focus`
// Vue.directive('focus', {
//   inserted(el){
//     // 当指令绑定到元素上时，自动获取焦点
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
