// 引入 VueRouter 并 注册
import Vue from "vue"
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
    ],
    // 自定义匹配选中类名
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router