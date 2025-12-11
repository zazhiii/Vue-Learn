import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 组件的全局注册
import MyButton from '@/components/MyButton.vue'
Vue.component('MyButton', MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
