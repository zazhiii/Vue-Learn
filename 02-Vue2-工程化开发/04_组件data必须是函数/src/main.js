import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 组件的全局注册
import BaseCount from '@/components/BaseCount.vue'
Vue.component('BaseOne', BaseCount)

new Vue({
  render: h => h(App),
}).$mount('#app')
