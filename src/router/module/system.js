export default [
  {
    path: '/system',
    name: 'system',
    component: () => import('../../views/system/index.vue'),
    meta: {
      title: '系统设置'
    }
  }
]
