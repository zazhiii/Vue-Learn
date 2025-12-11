import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '/article',
          component: () => import('@/views/Article'),
        },
        {
          path: '/like',
          component: () => import('@/views/Like'),
        },
        {
          path: '/user',
          component: () => import('@/views/User'),
        },
        {
          path: 'collect',
          component: () => import('@/views/Collect'),
        }

      ]
    },
    {
      path: '/article/:id',
      component: () => import('@/views/ArticleDetail.vue')
    }
  ]
})

export default router