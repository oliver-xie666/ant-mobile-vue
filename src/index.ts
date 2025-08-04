// 样式
import './styles'

// 组件导出（支持按需引入）
export { default as AutoCenter } from './components/auto-center'
export { default as Button } from './components/button'
export { default as CenterPopup } from './components/center-popup'
export { default as Dialog } from './components/dialog'
export { default as DotLoading } from './components/dot-loading'
export { default as Divider } from './components/divider'
export { default as Input } from './components/input'
export { default as Mask } from './components/mask'
export { default as Modal } from './components/modal'
export { default as Space } from './components/space'
export { default as SpinLoading } from './components/spin-loading'
export { default as Tag } from './components/tag'
export { default as Toast } from './components/toast'

// 类型导出
export type { AutoCenterProps } from './components/auto-center/types'
export type { ButtonProps } from './components/button/types'
export type { CenterPopupProps } from './components/center-popup/types'
export type { DialogProps, Action, DialogShowProps, DialogShowHandler, DialogAlertProps, DialogConfirmProps } from './components/dialog/types'
export type { DotLoadingProps } from './components/dot-loading/types'
export type { DividerProps } from './components/divider/types'
export type { InputProps, InputRef } from './components/input/types'
export type { MaskProps, PropagationEvent } from './components/mask/types'
export type { ModalProps, Action as ModalAction, ModalShowProps, ModalShowHandler, ModalAlertProps, ModalConfirmProps } from './components/modal/types'
export type { SpaceProps } from './components/space/types'
export type { SpinLoadingProps } from './components/spin-loading/types'
export type { TagProps } from './components/tag/types'
export type { ToastProps, ToastShowProps, ToastHandler } from './components/toast/types'

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
import AutoCenter from './components/auto-center'
import Button from './components/button'
import CenterPopup from './components/center-popup'
import Dialog from './components/dialog'
import DotLoading from './components/dot-loading'
import Divider from './components/divider'
import Input from './components/input'
import Mask from './components/mask'
import Modal from './components/modal'
import Space from './components/space'
import SpinLoading from './components/spin-loading'
import Tag from './components/tag'

const components = [AutoCenter, Button, CenterPopup, Dialog, DotLoading, Divider, Input, Mask, Modal, Space, SpinLoading, Tag]

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
  version: '0.0.1',
}
