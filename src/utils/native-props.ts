import type { VNode } from 'vue'
import { cloneVNode } from 'vue'
import type { NativeProps } from '../types/native-props'

// 重新导出类型以保持向后兼容
export type { NativeProps, BaseProps, WithNativePropsOptions } from '../types/native-props'

export function withNativeProps<T extends Record<string, unknown>>(
  props: T & NativeProps,
  element: VNode,
): VNode {
  const p = {
    ...element.props,
  }

  if (props.class) {
    p.class = [element.props?.class, props.class].filter(Boolean).join(' ')
  }

  if (props.style) {
    p.style = {
      ...element.props?.style,
      ...props.style,
    }
  }

  if (props.tabindex !== undefined) {
    p.tabindex = props.tabindex
  }

  // Handle data-* and aria-* attributes
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key]
    }
  }

  return cloneVNode(element, p)
}
