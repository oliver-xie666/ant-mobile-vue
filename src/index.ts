// 样式
import './styles'

// 组件导出（支持按需引入）
export { default as Button } from './components/button'
export { default as DotLoading } from './components/dot-loading'
export { default as Divider } from './components/divider'
export { default as Space } from './components/space'
export { default as Tag } from './components/tag'

// 类型导出
export type { ButtonProps } from './components/button/types'
export type { DotLoadingProps } from './components/dot-loading/types'
export type { DividerProps } from './components/divider/types'
export type { SpaceProps } from './components/space/types'
export type { TagProps } from './components/tag/types'

// 导出工具函数
export * from './utils/native-props'
export * from './utils/with-default-props'
export * from './utils/validate'
export * from './utils/can-use-dom'
export * from './utils/merge-locale'
export * from './utils/replace-message'
export * from './utils/noop'
export * from './utils/sleep'
export * from './utils/get-scroll-parent'
export * from './utils/supports-passive'
export * from './utils/theme'

// 导出 Composables
export * from './composables'

// 导出国际化
export * from './locales'

// 导出类型定义
export * from './types'

// 全局安装函数
import type { App } from 'vue'
import Button from './components/button'
import DotLoading from './components/dot-loading'
import Divider from './components/divider'
import Space from './components/space'
import Tag from './components/tag'

const components = [Button, DotLoading, Divider, Space, Tag]

export const install = (app: App): App => {
  components.forEach(component => {
    const name = component.name || component.__name || component.displayName
    if (name) {
      app.component(name, component)
    }
  })
  return app
}

// 默认导出（支持app.use()）
export default {
  install,
  version: '0.0.0',
}
