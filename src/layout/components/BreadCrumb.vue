<template>
  <el-breadcrumb class="bred" separator="/">
    <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from "vue-router";
//面包屑数据
const tabs = ref([]);
//获取当前路由
const route = useRoute();
route.path
/**
 * 监听路由变化执行的操作
 */
const getBredcrumb = () => {
  //从路由里面获取所有有meta和title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  //判断第一个是否是首页,不是，构造一个
  const first = matched[0];
  if (first.path !== "/dashboard") {
    matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(matched);
  }
  tabs.value = matched;

};
getBredcrumb();
watch(
  () => route.path,
  () => getBredcrumb()
);
</script>

<style lang="scss" scoped>
.bred {
  margin-left: 20px;
}
</style>
