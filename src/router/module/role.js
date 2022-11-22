export default [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../../views/role/admin.vue'),
    meta: {
      title: '管理员'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../../views/role/user.vue'),
    meta: {
      title: '用户'
    }
  }
]
