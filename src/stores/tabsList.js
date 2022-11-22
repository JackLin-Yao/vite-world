import { defineStore } from 'pinia'


export const useTabListStore = defineStore('tabListStore', {
  state: () => {
    return {
      tabList: []
    }
  },
  getters: {
    getTabs(state) {
      return state.tabList
    }
  },
  actions: {
    addTab(tab) {
      //判断是否已经存在，如果不存在，才放入
      if (this.tabList.some(item => item.path === tab.path)) return;
      this.tabList.push(tab);
    }
  }
})
