import type { VNode, CSSProperties } from 'vue'
import type { GetContainer } from '../../utils/render-to-container'
import type { PropagationEvent } from '../../utils/with-stop-propagation'
import type { NativeProps } from '../../utils/native-props'

export interface Action extends /* @vue-ignore */ NativeProps {
  key: string | number
  text: VNode | string
  disabled?: boolean
  danger?: boolean
  bold?: boolean
  onClick?: () => void | Promise<void>
}

export interface DialogProps extends /* @vue-ignore */ NativeProps {
  afterClose?: () => void
  afterShow?: () => void
  bodyClassName?: string
  bodyStyle?: CSSProperties
  destroyOnClose?: boolean
  disableBodyScroll?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  maskClassName?: string
  maskStyle?: CSSProperties
  stopPropagation?: PropagationEvent[]
  visible?: boolean
  image?: string
  header?: VNode | string
  title?: VNode | string
  content?: VNode | string
  actions?: (Action | Action[])[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  onClose?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
}

export type DialogShowProps = Omit<DialogProps, 'visible' | 'destroyOnClose' | 'forceRender'>

export interface DialogShowHandler {
  close: () => void
}

export interface DialogAlertProps extends Omit<DialogProps, 'visible' | 'closeOnAction' | 'actions'> {
  confirmText?: VNode | string
  onConfirm?: () => void | Promise<void>
}

export interface DialogConfirmProps extends Omit<DialogProps, 'visible' | 'closeOnAction' | 'actions'> {
  confirmText?: VNode | string
  cancelText?: VNode | string
  onConfirm?: () => void | Promise<void>
  onCancel?: () => void | Promise<void>
}
