// 全局类型定义统一导出

// 基础类型
export type {
  NativeProps,
  BaseProps,
  WithNativePropsOptions,
  NativeHTMLProps,
  EventHandler,
  ComponentSize,
  ComponentStatus,
  ComponentShape,
  ComponentFill,
} from './native-props'

// 组件类型
export type {
  ComponentProps,
  ButtonBaseProps,
  InputBaseProps,
  PickerBaseProps,
  PopupBaseProps,
  ListBaseProps,
  IconComponent,
  RenderFunction,
  ComponentSlots,
  ComponentEmits,
  ComponentInstance,
} from './component'

// 工具类型
export type {
  Awaitable,
  Fn,
  AnyFn,
  Recordable,
  PartialRequired,
  DeepPartial,
  ArrayElement,
  NonNullable,
  StringKeys,
  NumberKeys,
  ValueOf,
  UnionToIntersection,
  Flatten,
  Omit,
  Pick,
  Nullable,
  Optional,
  Maybe,
  Timestamp,
  DateInput,
  Size,
  Position,
  Rect,
  TouchDirection,
  ScrollDirection,
  EasingFunction,
  ColorValue,
  CSSLength,
  ThemeMode,
  LanguageCode,
  DeviceType,
  NetworkStatus,
} from './utils'

// 动画类型
export type {
  AnimationDuration,
  AnimationDelay,
  AnimationIterationCount,
  AnimationFillMode,
  AnimationPlayState,
  AnimationDirection,
  TransitionTimingFunction,
  AnimationKeyframe,
  AnimationOptions,
  TransitionOptions,
  SpringConfig,
  GestureConfig,
  ScrollAnimationConfig,
  FadeType,
  SlideType,
  ScaleType,
  RotateType,
  AnimationPreset,
  TransitionName,
  AnimationCallback,
  AnimationEventHandlers,
  TransitionEventHandlers,
} from './animation'

// 国际化类型（从locales重新导出）
export type { Locale } from '../locales/base'

// 配置类型（从config-provider重新导出）
export type { Config, ConfigProviderProps } from '../components/config-provider/types'

// Composables类型（从composables重新导出）
export type { UsePropsValueOptions } from '../composables/use-props-value'

// 主题相关类型（从utils重新导出）
export type { ThemeConfig } from '../utils/theme'
