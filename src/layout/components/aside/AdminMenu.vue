<template>
  <div class="nav-menu" :style="{ width: isCollapse ? '64px' : '250px' }">
    <!-- <span class="menu-logo">OA　|　鼎泰高科协同办公 </span> -->
    <el-menu :collapse="isCollapse" :collapse-transition="false" unique-opened :router="true"
      :default-active="activeIndex">
      <el-scrollbar>
        <el-collapse @change="handleChange">
          <el-collapse-item title="采购协同" name="1">
            <menu-item></menu-item>
          </el-collapse-item>
          <el-collapse-item title="销售协同" name="2">
            <menu-item></menu-item>
          </el-collapse-item>
          <el-collapse-item title="配置管理" name="3">
            <menu-item></menu-item>
          </el-collapse-item>
        </el-collapse>
      </el-scrollbar>
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

const handleChange = (e) => {
  console.log("🚀 ~ file: AdminMenu.vue ~ line 50 ~ handleChange ~ e", e)
}

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

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

    .el-collapse-item__header {
      text-align: center;
      font-size: 99px;
      white-space: nowrap;
    }
  }
}
</style>
