import { show, clear, config, success, fail, loading, info } from './methods'

export type { ToastShowProps, ToastHandler, ToastProps } from './types'

const Toast = {
  show,
  clear,
  config,
  success,
  fail,
  loading,
  info,
}

export default Toast
export { Toast }
