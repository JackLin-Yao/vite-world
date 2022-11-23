<template>
  <div>系统设置
    <wmenu></wmenu>
  </div>
</template>

<script setup>
import wmenu from '@/components/AsideMenu.jsx';

let data = [
  {
    icon: 'Edit',
    name: '编辑',
    index: '/dashboard'
  },
  {
    icon: 'Edit',
    name: '编辑1',
    index: '/dashboard1'
  },
  {
    icon: 'Edit',
    name: '编辑2',
    index: '/dashboard2'
  },
  {
    icon: 'Edit',
    name: '编辑3',
    index: '/dashboard3'
  }
]
</script>

<style lang="scss" scoped>

</style>
