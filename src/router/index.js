import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '../layout/index.vue'
import NotFound from '@/views/NotFound.vue'
import roleRouter from './module/role'
import systemRouter from './module/system';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import('@/layout/index.vue'),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            title: '首页',
            icon: ''
          }
        },
        ...systemRouter
        ,
        {
          path: '/role',
          name: 'role',
          component: () => import('@/layout/index.vue'),
        },
        ...roleRouter
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

export default router
