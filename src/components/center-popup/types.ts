import type { CSSProperties } from 'vue'
import type { GetContainer } from '../../utils/render-to-container'
import type { PropagationEvent } from '../../utils/with-stop-propagation'
import type { NativeProps } from '../../utils/native-props'

export interface CenterPopupProps extends /* @vue-ignore */ NativeProps {
  afterClose?: () => void
  afterShow?: () => void
  bodyClassName?: string
  bodyStyle?: CSSProperties
  closeOnMaskClick?: boolean
  closeIcon?: Component
  destroyOnClose?: boolean
  disableBodyScroll?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  mask?: boolean
  maskClassName?: string
  maskStyle?: CSSProperties
  onClose?: () => void
  onMaskClick?: (event: MouseEvent) => void
  showCloseButton?: boolean
  stopPropagation?: PropagationEvent[]
  visible?: boolean
  zIndex?: number
  role?: string
}
