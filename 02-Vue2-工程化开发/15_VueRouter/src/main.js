import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入 VueRouter 并 注册
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入路由组件
import AaComponent from "@/views/AaComponent.vue";
import BbComponent from "@/views/BbComponent.vue";
const router = new VueRouter({
  routes: [
    {
      path: '/aa',
      component: AaComponent
    },
    {
      path: '/bb',
      component: BbComponent
    }
  ]
})

new Vue({
  render: h => h(App),
  router // 将 router 实例传入 Vue 实例; router: router
}).$mount('#app')
