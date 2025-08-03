import type { CSSProperties, VNodeProps, AllowedComponentProps } from 'vue'

// Vue3版本的NativeProps类型定义
export type NativeProps<S extends string = never> = {
  class?: string | string[] | Record<string, boolean>
  style?: CSSProperties & Partial<Record<S, string>>
  tabindex?: number
} & VNodeProps & AllowedComponentProps

// 扩展的HTML原生属性
export type NativeHTMLProps = {
  id?: string
  title?: string
  role?: string
  'data-testid'?: string
} & Record<`data-${string}`, string | number | boolean> & Record<`aria-${string}`, string | number | boolean>

// 组件基础Props类型
export type BaseProps<S extends string = never> = NativeProps<S> & NativeHTMLProps

// withNativeProps工具函数的参数类型
export type WithNativePropsOptions<P extends NativeProps> = P & {
  [key: string]: unknown
}

// 事件处理器类型
export type EventHandler<T = Event> = (event: T) => void

// 组件尺寸枚举
export type ComponentSize = 'mini' | 'small' | 'middle' | 'large'

// 组件状态枚举
export type ComponentStatus = 'default' | 'success' | 'warning' | 'danger'

// 组件形状枚举
export type ComponentShape = 'default' | 'rounded' | 'rectangular'

// 组件填充类型
export type ComponentFill = 'solid' | 'outline' | 'none'
