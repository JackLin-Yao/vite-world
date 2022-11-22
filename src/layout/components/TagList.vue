<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" closable>
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])


</script>

<style lang="scss" scoped>

</style>
