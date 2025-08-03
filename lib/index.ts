import type { App } from 'vue'

// 导入所有组件
import Button from '../src/components/button'
import DotLoading from '../src/components/dot-loading'
import Divider from '../src/components/divider'
import Space from '../src/components/space'
import Tag from '../src/components/tag'

// 导入样式
import '../src/global/index.less'

// 组件列表
const components = [
  Button,
  DotLoading,
  Divider,
  Space,
  Tag,
]

// 全局安装函数
const install = (app: App): App => {
  components.forEach(component => {
    app.component(component.name || component.displayName, component)
  })
  return app
}

// 完整导出
export {
  // 组件导出
  Button,
  DotLoading,
  Divider,
  Space,
  Tag,

  // 安装函数
  install,
}

// 组件类型导出
export type { ButtonProps } from '../src/components/button/types'
export type { DotLoadingProps } from '../src/components/dot-loading/types'
export type { DividerProps } from '../src/components/divider/types'
export type { SpaceProps } from '../src/components/space/types'
export type { TagProps } from '../src/components/tag/types'

// 默认导出（支持app.use(AntMobileVue)）
export default {
  install,
  version: '0.0.0',
}
