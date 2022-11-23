

import { defineComponent, onMounted, ref, useAttrs } from 'vue';

export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array,
      required: true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    },
  },
  setup(props, ctx) {
    // 函数会返回一段jsx的代码
    let renderMenu = (data) => {
      return data.map((item) => {
        // 每个菜单的图标
        icon = item.icon;
        // 处理sub-menu的插槽
        let slots = {
          title: () => {
            return <>
              <el-icon>< icon /></el-icon>
              <span>{item.name}</span>
            </>
          }
        }
        // 递归渲染children
        if (item.children && itemchildren.length) {
          return (
            <el-sub-menu index={itemindex} v-slots={slots}>
              {renderMenu(itemchildren)}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item index={itemindex}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    let attrs = useAttrs()
    return () => {
      return (
        <el-menu
          default-active={defaultActive}
          router={router}
          {...attrs}
        >
          {renderMenu(data)}
        </el-menu>
      )
    }
  }
})
