import Modal from './Modal.vue'
import { show, alert, confirm, clear } from './methods'

// 导出类型
export type { ModalProps, Action, ModalShowProps, ModalShowHandler, ModalAlertProps, ModalConfirmProps } from './types'

// 为Modal组件添加静态方法
const ModalWithMethods = Modal as typeof Modal & {
  show: typeof show
  alert: typeof alert
  confirm: typeof confirm
  clear: typeof clear
}

ModalWithMethods.show = show
ModalWithMethods.alert = alert
ModalWithMethods.confirm = confirm
ModalWithMethods.clear = clear

export default ModalWithMethods
export { Modal, show, alert, confirm, clear }