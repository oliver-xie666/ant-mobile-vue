import { createApp, h, type VNode } from 'vue'
import Modal from './Modal.vue'
import type { ModalShowProps, ModalShowHandler, ModalAlertProps, ModalConfirmProps } from './types'
import { canUseDom } from '../../utils/can-use-dom'
import { useConfig } from '../config-provider'

// 全局状态管理
const modalApps = new Set<ReturnType<typeof createApp>>()
export const closeFnSet = new Set<() => void>()

// 清理所有Modal实例
function cleanup() {
  modalApps.forEach(app => {
    try {
      app.unmount()
    } catch {}
  })
  modalApps.clear()
}

// 显示Modal的基础方法
export function show(props: ModalShowProps): ModalShowHandler {
  if (!canUseDom) {
    return { close: () => {} }
  }

  // 创建容器
  const container = document.createElement('div')
  document.body.appendChild(container)

  // 创建handlers
  const handleClose = () => {
    try {
      if (modalApps.has(app)) {
        app.unmount()
        modalApps.delete(app)
      }
      if (document.body.contains(container)) {
        document.body.removeChild(container)
      }
    } catch {}
    closeFnSet.delete(handleClose)
    props.afterClose?.()
  }

  const handleAfterClose = () => {
    props.afterClose?.()
  }

  // 创建Modal包装组件
  const ModalWrapper = {
    setup() {
      return { handleClose, handleAfterClose }
    },
    render(): VNode {
      return h(Modal, {
        ...props,
        visible: true,
        onClose: handleClose,
        afterClose: handleAfterClose,
      })
    },
  }

  // 创建并挂载应用
  const app = createApp(ModalWrapper)
  modalApps.add(app)
  app.mount(container)

  closeFnSet.add(handleClose)

  return {
    close: handleClose
  }
}

// Alert方法 - 简单的确认弹窗
export function alert(props: ModalAlertProps): Promise<void> {
  const { locale } = useConfig()

  return new Promise<void>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: props.confirmText || locale.Modal?.ok || '我知道了',
          primary: true,
          onClick: async () => {
            await props.onConfirm?.()
          }
        },
      ],
      onClose: () => {
        props.onClose?.()
        resolve()
      },
    })
  })
}

// Confirm方法 - 确认/取消弹窗
export function confirm(props: ModalConfirmProps): Promise<boolean> {
  const { locale } = useConfig()

  return new Promise<boolean>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      onClose: () => {
        props.onClose?.()
        resolve(false)
      },
      actions: [
        {
          key: 'confirm',
          text: props.confirmText || locale.common?.confirm || '确认',
          primary: true,
          onClick: async () => {
            await props.onConfirm?.()
            resolve(true)
          },
        },
        {
          key: 'cancel',
          text: props.cancelText || locale.common?.cancel || '取消',
          onClick: async () => {
            await props.onCancel?.()
            resolve(false)
          },
        },
      ],
    })
  })
}

// 清理所有Modal实例
export function clear() {
  closeFnSet.forEach(close => {
    close()
  })
  closeFnSet.clear()
  cleanup()
}
