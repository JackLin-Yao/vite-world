<template>
  <el-container>
    <el-aside width="isCollapse ? '50px' : '250px'">
      <AdminMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AdminHeader />
      </el-header>
      <el-main>
        <tag-list></tag-list>
        <el-scrollbar>
          <RouterView />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup>
import AdminMenu from './components/AdminMenu.vue';
import AdminHeader from './components/AdminHeader.vue';
import TagList from './components/TagList.vue';
import { computed } from 'vue'
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
.el-container {
  height: 100vh;
  // weight: 100vh;

}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  /* height: 100vh; */
  /* width: auto; */
  background-color: #ffefef;
  color: #333;
  overflow: hidden;
}

.el-main {
  background-color: #f7fafc;
  color: #333;
  padding: 10px 0px 10px 10px !important;
  overflow: hidden;
}
</style>
