import { renderImperatively } from '../../utils/render-imperatively'
import { getDefaultConfig } from '../config-provider'
import Dialog from './Dialog.vue'
import type { DialogShowProps, DialogShowHandler, DialogAlertProps, DialogConfirmProps } from './types'

// 存储所有打开的Dialog关闭函数
export const closeFnSet = new Set<() => void>()

// Dialog.show方法
export function show(props: DialogShowProps): DialogShowHandler {
  const handler = renderImperatively(Dialog, {
    ...props,
    visible: true,
    destroyOnClose: true,
    afterClose: () => {
      closeFnSet.delete(handler.close)
      props.afterClose?.()
    }
  })

  closeFnSet.add(handler.close)
  return handler
}

// Dialog.alert方法
export function alert(props: DialogAlertProps): Promise<void> {
  const { locale } = getDefaultConfig()
  const confirmText = props.confirmText || locale.Dialog.ok

  return new Promise<void>((resolve) => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          text: confirmText,
        },
      ],
      onAction: props.onConfirm,
      onClose: () => {
        props.onClose?.()
        resolve()
      },
    })
  })
}

// Dialog.confirm方法
export function confirm(props: DialogConfirmProps): Promise<boolean> {
  const { locale } = getDefaultConfig()
  const confirmText = props.confirmText || locale.common.confirm
  const cancelText = props.cancelText || locale.common.cancel

  return new Promise<boolean>((resolve) => {
    show({
      ...props,
      closeOnAction: true,
      onClose: () => {
        props.onClose?.()
        resolve(false)
      },
      actions: [
        [
          {
            key: 'cancel',
            text: cancelText,
            onClick: async () => {
              await props.onCancel?.()
              resolve(false)
            },
          },
          {
            key: 'confirm',
            text: confirmText,
            bold: true,
            onClick: async () => {
              await props.onConfirm?.()
              resolve(true)
            },
          },
        ],
      ],
    })
  })
}

// Dialog.clear方法
export function clear(): void {
  closeFnSet.forEach(close => {
    close()
  })
}
