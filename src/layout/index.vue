<template>
  <el-container>
    <el-aside width="250px">
      <AdminMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AdminHeader />
      </el-header>
      <el-main>
        <el-scrollbar height="100vh">
          <tag-list></tag-list>
          <router-view></router-view>
        </el-scrollbar>

      </el-main>
    </el-container>
  </el-container>

</template>

<script setup>
import AdminMenu from './components/AdminMenu.vue';
import AdminHeader from './components/AdminHeader.vue';
import TagList from './components/TagList.vue';
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  // weight: 100vh;
  /* overflow: hidden; */
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  width: auto;
  background-color: #ffefef;
  color: #333;
}

.el-main {
  background-color: #f7fafc;
  color: #333;
  padding: 10px 0px 10px 10px !important;
}
</style>
