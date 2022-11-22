export default [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../../views/role/admin.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../../views/role/user.vue')
  },
  {
    path: '/role',
    name: 'role',
    component: () => import('../../views/role/role.vue')
  }
]
