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
  let matched = route.matched.filter((item) => {
    return item.meta && item.meta.title
  })
  let secondMatched = matched[1];
  console.log("🚀 ~ file: BreadCrumb.vue ~ line 25 ~ getBredcrumb ~ secondMatched", secondMatched)
  if (secondMatched == 'dashboard') {


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
