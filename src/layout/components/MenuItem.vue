<template>
  <el-scrollbar>
    <template v-for="(item, index) in menuList" :key="index">
      <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(item2, index2) in item.children" :key="index2" index="item.path">
          <el-icon>
            <component :is="item2.meta.icon"></component>
          </el-icon>
          <span>{{ item2.name }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
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
      path: "/system",
      component: "Layout",
      name: "system",
      meta: {
        title: "系统管理",
        icon: "Setting",
        roles: ["sys:manage"],
      },
      children: [
        {
          path: "/userList",
          component: "/system/User/UserList",
          name: "userList",
          meta: {
            title: "员工管理",
            icon: "UserFilled",
            roles: ["sys:user"],
          },
        },
        {
          path: "/roleList",
          component: "/system/Role/RoleList",
          name: "roleList",
          meta: {
            title: "角色管理",
            icon: "Wallet",
            roles: ["sys:role"],
          },
        },
        {
          path: "/menuList",
          component: "/system/Menu/MenuList",
          name: "menuList",
          meta: {
            title: "菜单管理",
            icon: "Menu",
            roles: ["sys:menu"],
          },
        },
      ],
    },
    {
      path: "/memberRoot",
      component: "Layout",
      name: "memberRoot",
      meta: {
        title: "会员管理",
        icon: "Setting",
        roles: ["sys:memberRoot"],
      },
      children: [
        {
          path: "/cardType",
          component: "/member/CardType",
          name: "cardType",
          meta: {
            title: "会员卡类型",
            icon: "UserFilled",
            roles: ["sys:cardType"],
          },
        },
        {
          path: "/memberList",
          component: "/member/MemberList",
          name: "memberList",
          meta: {
            title: "会员管理",
            icon: "Wallet",
            roles: ["sys:memberList"],
          },
        },
        {
          path: "/myFee",
          component: "/system/MyFee",
          name: "myFee",
          meta: {
            title: "我的充值",
            icon: "Menu",
            roles: ["sys:myFee"],
          },
        },
      ],
    },
  ]



)

</script>

<style lang="scss" scoped>

</style>
