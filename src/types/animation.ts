// 动画和过渡相关类型定义

// 动画持续时间
export type AnimationDuration = number | 'fast' | 'normal' | 'slow'

// 动画延迟
export type AnimationDelay = number

// 动画迭代次数
export type AnimationIterationCount = number | 'infinite'

// 动画填充模式
export type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both'

// 动画播放状态
export type AnimationPlayState = 'running' | 'paused'

// 动画方向
export type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'

// 过渡缓动函数
export type TransitionTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | `steps(${number})`
  | `steps(${number}, start)`
  | `steps(${number}, end)`

// 动画关键帧
export interface AnimationKeyframe {
  offset?: number
  [property: string]: any
}

// 动画选项
export interface AnimationOptions {
  duration?: AnimationDuration
  delay?: AnimationDelay
  iterationCount?: AnimationIterationCount
  direction?: AnimationDirection
  fillMode?: AnimationFillMode
  playState?: AnimationPlayState
  timingFunction?: TransitionTimingFunction
}

// 过渡选项
export interface TransitionOptions {
  duration?: number
  delay?: number
  timingFunction?: TransitionTimingFunction
  property?: string | string[]
}

// 弹性动画配置
export interface SpringConfig {
  tension?: number
  friction?: number
  mass?: number
  velocity?: number
  precision?: number
}

// 手势动画配置
export interface GestureConfig {
  threshold?: number
  velocity?: number
  direction?: 'horizontal' | 'vertical' | 'all'
}

// 滚动动画配置
export interface ScrollAnimationConfig {
  duration?: number
  easing?: TransitionTimingFunction
  behavior?: 'auto' | 'smooth'
}

// 淡入淡出类型
export type FadeType = 'in' | 'out' | 'inOut'

// 滑动类型
export type SlideType = 'up' | 'down' | 'left' | 'right'

// 缩放类型
export type ScaleType = 'in' | 'out'

// 旋转类型
export type RotateType = 'clockwise' | 'counterclockwise'

// 动画预设
export type AnimationPreset =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'rotate'
  | 'bounce'
  | 'shake'
  | 'pulse'
  | 'flip'

// 过渡名称
export type TransitionName = string

// 动画回调函数
export type AnimationCallback = () => void

// 动画事件处理器
export interface AnimationEventHandlers {
  onStart?: AnimationCallback
  onEnd?: AnimationCallback
  onCancel?: AnimationCallback
  onIteration?: AnimationCallback
}

// 过渡事件处理器
export interface TransitionEventHandlers {
  onBeforeEnter?: AnimationCallback
  onEnter?: AnimationCallback
  onAfterEnter?: AnimationCallback
  onBeforeLeave?: AnimationCallback
  onLeave?: AnimationCallback
  onAfterLeave?: AnimationCallback
}
