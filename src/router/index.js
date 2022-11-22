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
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          redirect: '/',
          component: () => import('@/views/dashboard/index.vue')
        },
        {
          path: '/system',
          name: 'system',
          component: () => import('@/layout/index.vue'),
          children: [
            ...systemRouter
          ]
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('@/layout/index.vue'),
          children: [
            ...roleRouter
          ]
        },
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
