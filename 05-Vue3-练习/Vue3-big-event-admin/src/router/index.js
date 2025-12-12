import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from '@/stores/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes: [// {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {path: '/login', name: 'login', component: () => import('@/views/login/LoginPage.vue')},
    {
      path: '/', name: 'layout', component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {path: '/article/manage', name: 'article-manage', component: () => import('@/views/article/ArticleManage.vue')},
        {path: '/article/channel', name: 'article-channel', component: () => import('@/views/article/ArticleChannel.vue')},
        {path: '/user/profile', name: 'user-profile', component: () => import('@/views/user/UserProfile.vue')},
        {path: '/user/avatar', name: 'user-avatar', component: () => import('@/views/user/UserAvatar.vue')},
        {path: '/user/password', name: 'user-password', component: () => import('@/views/user/UserPassword.vue')},
      ]
    }
  ]
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})

export default router
