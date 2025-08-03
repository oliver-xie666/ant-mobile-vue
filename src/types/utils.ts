// 工具类型定义

// 可选择的类型
export type Awaitable<T> = T | Promise<T>

// 函数类型
export type Fn<T = void> = () => T
export type AnyFn = (...args: any[]) => any

// 键值对类型
export type Recordable<T = any> = Record<string, T>

// 部分必需类型
export type PartialRequired<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>

// 深度部分类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// 数组元素类型
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never

// 非空类型
export type NonNullable<T> = T extends null | undefined ? never : T

// 字符串键类型
export type StringKeys<T> = Extract<keyof T, string>

// 数字键类型
export type NumberKeys<T> = Extract<keyof T, number>

// 值类型提取
export type ValueOf<T> = T[keyof T]

// 联合类型转交集类型
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

// 扁平化类型
export type Flatten<T> = T extends readonly (infer U)[] ? U : T

// 移除类型中的某些属性
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// 选择类型中的某些属性
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 可空类型
export type Nullable<T> = T | null

// 可选类型
export type Optional<T> = T | undefined

// 可为空或未定义的类型
export type Maybe<T> = T | null | undefined

// 时间相关类型
export type Timestamp = number
export type DateInput = Date | string | number

// 尺寸类型
export type Size = {
  width: number
  height: number
}

// 位置类型
export type Position = {
  x: number
  y: number
}

// 矩形类型
export type Rect = Position & Size

// 触摸方向类型
export type TouchDirection = 'horizontal' | 'vertical' | ''

// 滚动方向类型
export type ScrollDirection = 'up' | 'down' | 'left' | 'right'

// 动画缓动函数类型
export type EasingFunction = (t: number) => number

// 颜色值类型
export type ColorValue = string

// CSS长度值类型
export type CSSLength = string | number

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'auto'

// 语言代码类型
export type LanguageCode = 'zh-CN' | 'en-US'

// 设备类型
export type DeviceType = 'mobile' | 'tablet' | 'desktop'

// 网络状态类型
export type NetworkStatus = 'online' | 'offline'
