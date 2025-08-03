import type { Component, VNode } from 'vue'
import type { BaseProps, ComponentSize, ComponentStatus, ComponentShape, ComponentFill } from './native-props'

// 组件通用Props类型
export interface ComponentProps extends BaseProps {
  // 组件可见性
  visible?: boolean
  // 组件禁用状态
  disabled?: boolean
  // 组件加载状态
  loading?: boolean
}

// 按钮组件相关类型
export interface ButtonBaseProps extends ComponentProps {
  size?: ComponentSize
  color?: ComponentStatus | 'primary'
  fill?: ComponentFill
  shape?: ComponentShape
  block?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}

// 输入组件基础类型
export interface InputBaseProps extends ComponentProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  readonly?: boolean
  clearable?: boolean
  maxLength?: number
}

// 选择器组件基础类型
export interface PickerBaseProps extends ComponentProps {
  value?: unknown
  defaultValue?: unknown
  placeholder?: string
  multiple?: boolean
}

// 弹窗组件基础类型
export interface PopupBaseProps extends ComponentProps {
  visible?: boolean
  mask?: boolean
  maskClosable?: boolean
  destroyOnClose?: boolean
  zIndex?: number
  getContainer?: () => HTMLElement
}

// 列表组件基础类型
export interface ListBaseProps extends ComponentProps {
  loading?: boolean
  finished?: boolean
  error?: boolean
}

// 图标组件类型
export type IconComponent = Component | VNode | string

// 渲染函数类型
export type RenderFunction<T = unknown> = (params: T) => VNode | string | number

// 组件插槽类型
export interface ComponentSlots {
  default?: () => VNode | VNode[]
  [key: string]: ((...args: unknown[]) => VNode | VNode[]) | undefined
}

// 组件事件类型
export interface ComponentEmits {
  [key: string]: (...args: unknown[]) => boolean | void
}

// 组件实例类型
export interface ComponentInstance {
  $el: HTMLElement
  [key: string]: unknown
}
