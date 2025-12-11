import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 组件的全局注册
import BaseOne from '@/components/BaseOne.vue'
Vue.component('BaseOne', BaseOne)

new Vue({
  render: h => h(App),
}).$mount('#app')
