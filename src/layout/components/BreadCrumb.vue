<template>
  <el-breadcrumb class="bred" separator="/">
    <el-breadcrumb-item v-for="item in tabs"></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from "vue-router";
//面包屑数据
const tabs = ref([]);
//获取当前路由
const route = useRoute();
console.log("🚀 ~ file: BreadCrumb.vue ~ line 14 ~ route", route)
route.path
console.log("🚀 ~ file: BreadCrumb.vue ~ line 16 ~ route.path", route.path)
const getBredcrumb = () => {

};
getBredcrumb();
watch(
  () => route.path,
  () => getBredcrumb()
);
</script>

<style lang="scss" scoped>

</style>
