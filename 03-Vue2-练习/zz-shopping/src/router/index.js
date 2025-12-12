import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/login', component: () => import('@/views/login'),
}, {
    path: '/', component: () => import('@/views/layout'), redirect: '/home', children: [{
        path: 'home', component: () => import('@/views/layout/home.vue')
    }, {
        path: 'cart', component: () => import('@/views/layout/cart.vue')
    }, {
        path: 'category', component: () => import('@/views/layout/category.vue')
    }, {
        path: 'user', component: () => import('@/views/layout/user.vue')
    }]
}, {
    path: '/search', component: () => import('@/views/search'),
}, {
    path: '/search-list', component: () => import('@/views/search/list'),
}, {
    path: '/prodetail/:id', component: () => import('@/views/prodetail'),
}, {
    path: '/pay', component: () => import('@/views/pay'),
}, {
    path: '/myorder', component: () => import('@/views/myorder'),
}]

const router = new VueRouter({
    routes
})

// 路由守卫
const authPages = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
    if (!authPages.includes(to.path)) {
        return next()
    }
    const token = store.getters.token
    if (token) {
        next()
    } else {
        next('/login')
    }
})

export default router
