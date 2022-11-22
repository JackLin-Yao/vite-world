import { defineStore } from 'pinia'
/**
 * 收缩菜单栏公共状态
 */
export const useCollapseStore = defineStore('collapseStore', {
  state: () => {
    return {
      collapse: false,
      asideWidth: '250px'
    }
  },
  getters: {
    getCollapse(state) {
      return state.collapse
    },

  },
  actions: {
    setCollapse(collapse) {
      this.collapse = collapse;
    },

  }
})
