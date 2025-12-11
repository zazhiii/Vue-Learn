import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 组件的全局注册
import Son from '@/components/Son.vue'
Vue.component('BaseOne', Son)

new Vue({
  render: h => h(App),
}).$mount('#app')
