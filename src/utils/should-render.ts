import { ref, watch, type Ref } from 'vue'
import { useInitialized } from '../composables/use-initialized'

export interface ShouldRenderProps {
  active: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
}

export function useShouldRender(
  active: boolean | Ref<boolean>,
  forceRender?: boolean | Ref<boolean>,
  destroyOnClose?: boolean | Ref<boolean>
) {
  const initialized = useInitialized(active)

  const shouldRender = ref(false)

  const updateShouldRender = () => {
    const activeValue = typeof active === 'boolean' ? active : active.value
    const forceRenderValue = typeof forceRender === 'boolean' ? forceRender : forceRender?.value
    const destroyOnCloseValue = typeof destroyOnClose === 'boolean' ? destroyOnClose : destroyOnClose?.value

    if (forceRenderValue) {
      shouldRender.value = true
      return
    }
    if (activeValue) {
      shouldRender.value = true
      return
    }
    if (!initialized.value) {
      shouldRender.value = false
      return
    }
    shouldRender.value = !destroyOnCloseValue
  }

  // 监听所有依赖变化（只监听ref类型的参数）
  const watchSources = [
    ...(typeof active !== 'boolean' ? [active] : []),
    ...(typeof forceRender !== 'boolean' && forceRender ? [forceRender] : []),
    ...(typeof destroyOnClose !== 'boolean' && destroyOnClose ? [destroyOnClose] : []),
    initialized
  ]

  watch(watchSources, updateShouldRender, {
    immediate: true
  })

  return shouldRender
}
