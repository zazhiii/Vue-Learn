import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import AaComponent from "@/views/AaComponent.vue";

const routes = [
    // 重定向
    {
        path: "/",
        redirect: "/aa"
    },
    {
        path: '/aa',
        component: AaComponent
    },
    {
        name: 'B',
        path: '/bb/:id',
        component: () => import('@/views/BbComponent.vue'),
    },
    // 当所有页面都没有匹配到，就会匹配到这个
    {
        path: '*',
        component: () => import('@/views/NotFoundComponent.vue'),
    }
]

const router = new VueRouter({
    routes,
    // 使用 HTML5 History 模式
    mode: 'history',
})

export default router