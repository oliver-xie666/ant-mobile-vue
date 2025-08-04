import type { Component } from 'vue'
import type { NativeProps } from '../../utils/native-props'

type AriaProps = {
  // These props currently are only used internally. They are not exported to users:
  role?: string
  'aria-valuenow'?: number
  'aria-valuemax'?: number
  'aria-valuemin'?: number
  'aria-label'?: string
}

export interface InputProps
  extends /* @vue-ignore */ NativeProps<
      '--font-size' | '--color' | '--placeholder-color' | '--text-align'
    >,
    AriaProps {
  modelValue?: string
  defaultValue?: string
  clearable?: boolean
  clearIcon?: Component
  onlyShowClearWhenFocus?: boolean
  onClear?: () => void
  onEnterPress?: (e: KeyboardEvent) => void
  min?: number
  max?: number
  // 原生属性
  maxlength?: number
  minlength?: number
  autocomplete?: string
  autofocus?: boolean
  pattern?: string
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  type?: string
  name?: string
  autocapitalize?: string
  autocorrect?: string
  step?: string
  id?: string
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  enterkeyhint?: string
}

export interface InputRef {
  clear: () => void
  focus: () => void
  blur: () => void
  nativeElement: HTMLInputElement | null
}

export interface InputEmits {
  'update:modelValue': [value: string]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  paste: [e: ClipboardEvent]
  keydown: [e: KeyboardEvent]
  keyup: [e: KeyboardEvent]
  compositionstart: [e: CompositionEvent]
  compositionend: [e: CompositionEvent]
  click: [e: MouseEvent]
  clear: []
  'enter-press': [e: KeyboardEvent]
}
