<template>
  <div>
    <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">

      <menu-item></menu-item>
    </el-menu>
  </div>
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
  height: 100vh;
  text-align: center;

  .menu-logo {
    display: inline-block;
    height: 25px;
    line-height: 25px;
  }

}
</style>
