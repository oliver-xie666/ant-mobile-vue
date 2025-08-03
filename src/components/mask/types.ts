import type { NativeProps } from '../../utils/native-props'

export type PropagationEvent = 'click' | 'touchstart'

export interface MaskProps extends /* @vue-ignore */ NativeProps<'--z-index'> {
  visible?: boolean
  onMaskClick?: (event: MouseEvent) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  color?: 'white' | 'black' | (string & {})
  opacity?: 'default' | 'thin' | 'thick' | number
  getContainer?: HTMLElement | (() => HTMLElement) | null
  afterShow?: () => void
  afterClose?: () => void
  stopPropagation?: PropagationEvent[]
}
