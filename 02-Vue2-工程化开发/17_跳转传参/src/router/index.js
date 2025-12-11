import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import AaComponent from "@/views/AaComponent.vue";
const router = new VueRouter({
    routes: [
        {
            path: '/aa',
            component: AaComponent
        },
        // 路径参数传递
        // 注意：？表示可选参数
        // 默认情况下:msg参数是必需的，/bb 匹配不到路径
        // 如果需要可选参数，可以在路径中使用:msg?，这样就可以匹配到/bb和/bb/123
        {
            path: '/bb/:msg?',
            component: () => import('@/views/BbComponent.vue'),
        }
    ],
})

export default router