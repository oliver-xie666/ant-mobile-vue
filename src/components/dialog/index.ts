import Dialog from './Dialog.vue'
import { withInstall } from '../../utils/with-install'
import { show, alert, confirm, clear } from './methods'

// 导出类型
export type {
  DialogProps,
  Action,
  DialogShowProps,
  DialogShowHandler,
  DialogAlertProps,
  DialogConfirmProps
} from './types'

// 创建带有静态方法的Dialog组件
const DialogWithMethods = withInstall(Dialog)

// 添加静态方法
DialogWithMethods.show = show
DialogWithMethods.alert = alert
DialogWithMethods.confirm = confirm
DialogWithMethods.clear = clear

export default DialogWithMethods
