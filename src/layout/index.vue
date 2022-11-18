<template>
    <el-container>
      <el-aside width="200px">
      <AdminMenu/>
      </el-aside>
      <el-container>
        <el-header>
          <AdminHeader/>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    
</template>

<script setup>
import AdminMenu from './components/AdminMenu.vue';
import AdminHeader from './components/AdminHeader.vue';
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
  // width: auto;
  background-color: #ffefef;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
