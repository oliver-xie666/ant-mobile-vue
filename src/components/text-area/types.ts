import type { VNode } from 'vue'

export interface TextAreaProps {
  // 原生属性
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  readOnly?: boolean
  name?: string
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
  onCompositionStart?: (e: CompositionEvent) => void
  onCompositionEnd?: (e: CompositionEvent) => void
  onClick?: (e: MouseEvent) => void
  onKeyDown?: (e: KeyboardEvent) => void

  // 组件属性
  onChange?: (val: string) => void
  value?: string
  defaultValue?: string
  placeholder?: string
  rows?: number
  maxLength?: number
  showCount?: boolean | ((length: number, maxLength?: number) => VNode)
  autoSize?:
    | boolean
    | {
        minRows?: number
        maxRows?: number
      }
  id?: string
  onEnterPress?: (e: KeyboardEvent) => void
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'

  // 样式属性
  style?: string | Record<string, any>
  class?: string | Record<string, any>
}

export interface TextAreaEmits {
  'update:modelValue': (value: string) => void
  'change': (value: string) => void
  'focus': (e: FocusEvent) => void
  'blur': (e: FocusEvent) => void
  'compositionstart': (e: CompositionEvent) => void
  'compositionend': (e: CompositionEvent) => void
  'click': (e: MouseEvent) => void
  'keydown': (e: KeyboardEvent) => void
  'enterPress': (e: KeyboardEvent) => void
}

export interface TextAreaRef {
  clear: () => void
  focus: () => void
  blur: () => void
  nativeElement: HTMLTextAreaElement | null
}
