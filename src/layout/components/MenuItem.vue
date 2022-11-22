<template>
  <el-scrollbar>
    <template v-for="(item, index) in menuList" :key="index">
      <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(item2, index2) in item.children" :key="index2" index="item.path">
          <el-icon>
            <component :is="item2.icon"></component>
          </el-icon>
          <span>{{ item2.name }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
  </el-scrollbar>
</template>

<script setup>

import { reactive } from 'vue'
const menuList = reactive(
  [
    {
      name: "系统设置",
      icon: 'House',
      path: '/system'
    },
    {
      name: "角色管理",
      icon: 'House',
      children: [{

        name: "管理员",
        icon: 'House',
        path: '/admin'
      },
      {

        name: "用户",
        icon: 'House',
        path: '/user'
      },
      {

        name: "角色",
        icon: 'House',
        path: '/role'
      }
      ]
    }
  ]


)

</script>

<style lang="scss" scoped>

</style>
