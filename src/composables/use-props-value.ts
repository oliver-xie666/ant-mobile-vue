import { ref, type Ref, watch } from 'vue'

export type UsePropsValueOptions<T> = {
  value?: T
  defaultValue: T
  onChange?: (v: T) => void
}

export function usePropsValue<T>(options: UsePropsValueOptions<T>) {
  const { value, defaultValue, onChange } = options

  // 内部状态
  const innerState = ref<T>(value !== undefined ? value : defaultValue) as Ref<T>

  // 监听外部value变化
  watch(
    () => value,
    (newValue) => {
      if (newValue !== undefined) {
        innerState.value = newValue
      }
    },
    { immediate: true }
  )

  // 状态设置函数
  const setState = (v: T | ((prev: T) => T), forceTrigger: boolean = false) => {
    const nextValue = typeof v === 'function' ? (v as (prev: T) => T)(innerState.value) : v

    if (!forceTrigger && nextValue === innerState.value) return

    // 如果有外部value控制，不更新内部状态
    if (value === undefined) {
      innerState.value = nextValue
    }

    onChange?.(nextValue)
  }

  return [
    value !== undefined ? value : innerState.value,
    setState
  ] as const
}
