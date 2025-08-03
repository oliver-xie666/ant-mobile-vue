import { createApp, ref, nextTick, h, Component } from 'vue'
import { canUseDom } from './can-use-dom'

export interface ImperativeProps {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

export interface ImperativeHandler {
  close: () => void
  replace: (component: Component, props?: Record<string, unknown>) => void
  isRendered?: () => boolean
}

interface InstanceWrapper {
  component: Component
  props: Record<string, unknown>
  visible: boolean
  onClose?: () => void
  afterClose?: () => void
}

export function renderImperatively(
  component: Component,
  props: Record<string, unknown> = {}
): ImperativeHandler {
  if (!canUseDom) {
    return {
      close: () => {},
      replace: () => {},
      isRendered: () => false,
    }
  }

  // 创建容器元素
  const container = document.createElement('div')
  document.body.appendChild(container)

  // 包装组件状态
  const state = ref<InstanceWrapper>({
    component,
    props,
    visible: false,
    onClose: undefined,
    afterClose: undefined,
  })

  // 创建包装组件
  const WrapperComponent = {
    setup() {
      const handleClose = () => {
        state.value.visible = false
        state.value.onClose?.()
      }

      const handleAfterClose = () => {
        app.unmount()
        document.body.removeChild(container)
        state.value.afterClose?.()
      }

      return {
        state,
        handleClose,
        handleAfterClose,
      }
    },
    render() {
      const { component: Comp, props: compProps, visible } = state.value

      return h(Comp, {
        ...compProps,
        visible,
        onClose: this.handleClose,
        afterClose: this.handleAfterClose,
      })
    },
  }

  // 创建应用实例
  const app = createApp(WrapperComponent)
  let mounted = false

  // h函数已在顶部导入

  // 挂载应用
  app.mount(container)
  mounted = true

  // 延迟显示，确保DOM已挂载
  nextTick(() => {
    if (mounted) {
      state.value.visible = true
    }
  })

  return {
    close: () => {
      if (mounted) {
        state.value.visible = false
      } else {
        // 如果还未挂载，直接清理
        app.unmount()
        if (document.body.contains(container)) {
          document.body.removeChild(container)
        }
        state.value.afterClose?.()
      }
    },
    replace: (newComponent: Component, newProps = {}) => {
      if (mounted) {
        // 先触发当前组件的afterClose
        state.value.afterClose?.()

        // 更新组件和属性
        state.value.component = newComponent
        state.value.props = newProps
        state.value.visible = true
      }
    },
    isRendered: () => mounted,
  }
}

// 简化版本，专门用于Toast等简单场景
export function createImperativeRenderer() {
  let currentHandler: ImperativeHandler | null = null

  const render = (component: Component, props: Record<string, unknown> = {}): ImperativeHandler => {
    // 如果有现有的实例，先关闭
    if (currentHandler) {
      currentHandler.close()
    }

    currentHandler = renderImperatively(component, props)
    return currentHandler
  }

  const clear = () => {
    if (currentHandler) {
      currentHandler.close()
      currentHandler = null
    }
  }

  return { render, clear }
}
