import { createApp, h } from 'vue'
import Toast from './Toast.vue'
import type { ToastShowProps, ToastHandler } from './types'
import { canUseDom } from '../../utils/can-use-dom'

// 全局状态管理
let currentApp: ReturnType<typeof createApp> | null = null
let currentContainer: HTMLElement | null = null
let currentTimeout: number | null = null

// 默认配置
const defaultProps = {
  duration: 2000,
  position: 'center' as const,
  maskClickable: true,
}

// 清理当前Toast
function cleanup() {
  if (currentTimeout) {
    window.clearTimeout(currentTimeout)
    currentTimeout = null
  }

  if (currentApp) {
    try {
      currentApp.unmount()
    } catch (error) {
      // 忽略卸载错误，应用可能已经被卸载
      console.debug('Toast app unmount error (ignored):', error)
    }
    currentApp = null
  }

  if (currentContainer) {
    try {
      if (document.body.contains(currentContainer)) {
        document.body.removeChild(currentContainer)
      }
    } catch (error) {
      // 忽略DOM移除错误
      console.debug('Toast container removal error (ignored):', error)
    }
    currentContainer = null
  }
}

// 显示Toast
export function show(p: ToastShowProps | string): ToastHandler {
  if (!canUseDom) {
    return { close: () => {} }
  }

  const props = {
    ...defaultProps,
    ...(typeof p === 'string' ? { content: p } : p),
  }

  // 清理已存在的Toast
  cleanup()

  // 创建新的容器
  currentContainer = document.createElement('div')
  document.body.appendChild(currentContainer)

  // 创建Toast包装组件
  const ToastWrapper = {
    setup() {
      const handleClose = () => {
        cleanup()
      }

      const handleAfterClose = () => {
        props.afterClose?.()
      }

      return { handleClose, handleAfterClose }
    },
    render() {
      return h(Toast, {
        ...props,
        visible: true,
        onClose: this.handleClose,
        afterClose: this.handleAfterClose,
      })
    },
  }

  // 创建并挂载应用
  try {
    currentApp = createApp(ToastWrapper)
    currentApp.mount(currentContainer)
  } catch (error) {
    console.error('Failed to create/mount Toast app:', error)
    cleanup()
    return { close: () => {} }
  }

  // 设置自动关闭定时器
  if (props.duration !== 0) {
    currentTimeout = window.setTimeout(() => {
      clear()
    }, props.duration)
  }

  // 返回控制器
  return {
    close: () => {
      clear()
    },
  }
}

// 清除所有Toast
export function clear() {
  cleanup()
}

// 全局配置
export function config(
  val: Pick<ToastShowProps, 'duration' | 'position' | 'maskClickable'>
) {
  if (val.duration !== undefined) {
    defaultProps.duration = val.duration
  }
  if (val.position !== undefined) {
    defaultProps.position = val.position
  }
  if (val.maskClickable !== undefined) {
    defaultProps.maskClickable = val.maskClickable
  }
}

// 快捷方法
export function success(content: string, duration?: number): ToastHandler {
  return show({
    content,
    icon: 'success',
    duration,
  })
}

export function fail(content: string, duration?: number): ToastHandler {
  return show({
    content,
    icon: 'fail',
    duration,
  })
}

export function loading(content: string, duration?: number): ToastHandler {
  return show({
    content,
    icon: 'loading',
    duration: duration ?? 0, // loading默认不自动关闭
  })
}

export function info(content: string, duration?: number): ToastHandler {
  return show({
    content,
    duration,
  })
}
