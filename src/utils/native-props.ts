import type { CSSProperties, VNode } from 'vue'
import { cloneVNode } from 'vue'

export type NativeProps<S extends string = never> = {
  class?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabindex?: number
} & Record<`data-${string}` | `aria-${string}`, string>

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
