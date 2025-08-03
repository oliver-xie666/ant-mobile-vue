import { ref, watchEffect, type Ref } from 'vue'

export function useRefState<T>(initialState: T | (() => T)) {
  // 计算初始值
  const initialValue = typeof initialState === 'function'
    ? (initialState as () => T)()
    : initialState

  // 响应式状态
  const state = ref<T>(initialValue) as Ref<T>

  // ref引用，始终包含最新的状态值
  const stateRef = ref<T>(initialValue) as Ref<T>

  // 同步state和stateRef
  watchEffect(() => {
    stateRef.value = state.value
  })

  // 状态设置函数
  const setState = (newState: T | ((prev: T) => T)) => {
    const nextValue = typeof newState === 'function'
      ? (newState as (prev: T) => T)(state.value)
      : newState
    state.value = nextValue
  }

  return [state, setState, stateRef] as const
}
