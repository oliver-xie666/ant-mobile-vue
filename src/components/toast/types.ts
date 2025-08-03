import type { CSSProperties, Component } from 'vue'
import type { PropagationEvent } from '../../utils/with-stop-propagation'

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: CSSProperties
  maskClassName?: string
  maskClickable?: boolean
  content?: string
  icon?: 'success' | 'fail' | 'loading' | Component
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  visible?: boolean
  getContainer?: HTMLElement | (() => HTMLElement) | null
  stopPropagation?: PropagationEvent[]
}

export type ToastShowProps = Omit<ToastProps, 'visible'>

export interface ToastHandler {
  close: () => void
}
