<template>
  <el-icon class="icons" @click="setCollapse">
    <component :is="status ? Fold : Expand" />
  </el-icon>
</template>

<script setup>
import { computed } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";
import { useCollapseStore } from '@/stores/collapse';
/**
 * 获取store
 */
const store = useCollapseStore();
/**
 * 获取collapse
 */
const status = computed(() => {
  return !store.getCollapse;
})
/**
 * 改变collapse
 */
const setCollapse = () => {
  store.setCollapse(!store.getCollapse)
}

</script>

<style lang="scss" scoped>

</style>
