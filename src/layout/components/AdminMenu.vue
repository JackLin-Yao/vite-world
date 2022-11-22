<template>
  <div class="nav-menu" :style="{ width: isCollapse ? '50px' : '250px' }">
    <!-- <span class="menu-logo">OA　|　鼎泰高科协同办公 </span> -->
    <el-menu :collapse="isCollapse" :collapse-transition="false" unique-opened :router="true"
      :default-active="activeIndex">
      <menu-item></menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import MenuItem from './MenuItem.vue';
import { useCollapseStore } from '@/stores/collapse';
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router';

const route = useRoute()
const activeIndex = ref(route.path)
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
.nav-menu {
  height: 100%;

  .el-menu {
    height: 100%;
    text-align: center;
    overflow: hidden;
    border: 0;

    .menu-logo {
      display: inline-block;
      height: 25px;
      line-height: 25px;
    }

  }
}
</style>
