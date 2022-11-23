<template>
  <template v-for="(item, index) in menuList" :key="index">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item v-for="(item2, index2) in item.children" :key="index2" :index="item2.path">
        <el-icon>
          <component :is="item2.meta.icon"></component>
        </el-icon>
        <span>{{ item2.meta.title }}</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>

import { reactive } from 'vue'

const menuList = reactive(

  [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: '',
      meta: {
        title: '首页',
        icon: 'Edit'
      }
    },

    {
      name: 'role',
      meta: {
        title: '角色管理',
        icon: 'Edit'
      },
      component: '',
      children: [
        {
          path: '/admin',
          name: 'admin',
          meta: {
            title: '管理员',
            icon: 'Edit'
          },
        },
        {
          path: '/user',
          name: 'user',
          meta: {
            title: '用户',
            icon: 'Edit'
          },
        }

      ]
    },
    {
      path: '/system',
      name: 'system',
      meta: {
        title: '系统设置',
        icon: 'Edit'
      },
      component: '',
    }
  ]


)

</script>

<style lang="scss" scoped>

</style>
