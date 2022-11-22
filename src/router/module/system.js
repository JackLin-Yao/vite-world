export default [
  {
    path: '/system',
    name: 'system',
    component: () => import('../../views/system/index.vue'),
    meta: {
      title: '首页'
    }
  }
]
