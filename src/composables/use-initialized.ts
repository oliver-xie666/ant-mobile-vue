import { ref, watch, type Ref } from 'vue'

export function useInitialized(check: boolean | Ref<boolean>) {
  const initializedRef = ref(false)

  const updateInitialized = () => {
    const checkValue = typeof check === 'boolean' ? check : check.value
    if (checkValue) {
      initializedRef.value = true
    }
  }

  // 初始化检查
  updateInitialized()

  // 如果是ref，监听变化
  if (typeof check !== 'boolean') {
    watch(check, updateInitialized)
  }

  return initializedRef
}
