<template>

  <el-menu :collapse="isCollapse" default-active="2">
    <span class="menu-logo">OA　|　鼎泰高科协同办公</span>
    <menu-item></menu-item>
  </el-menu>

</template>

<script setup>
import { computed } from 'vue'
import MenuItem from './MenuItem.vue';
import { useCollapseStore } from '@/stores/collapse';
/**
 * 获取store
 */
const store = useCollapseStore();
/**
 * 获取collapse
 */
const isCollapse = computed(() => {
  return store.getCollapse;
})
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  text-align: center;
  overflow: hidden;

  .menu-logo {
    display: inline-block;
    height: 25px;
    line-height: 25px;
  }

}
</style>
