import { ref, computed, watch, onMounted } from 'vue'
import { canUseDom } from '../utils/can-use-dom'
import type { ThemeMode } from '../types'

// 主题状态管理
const themeMode = ref<ThemeMode>('auto')
const systemTheme = ref<'light' | 'dark'>('light')

// 获取系统主题偏好
function getSystemTheme(): 'light' | 'dark' {
  if (!canUseDom) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// 应用主题到DOM
function applyTheme(theme: 'light' | 'dark') {
  if (!canUseDom) return

  const html = document.documentElement
  html.setAttribute('data-prefers-color-scheme', theme)
}

// 监听系统主题变化
function setupSystemThemeListener() {
  if (!canUseDom) return

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const handleChange = (e: MediaQueryListEvent) => {
    systemTheme.value = e.matches ? 'dark' : 'light'
  }

  // 兼容性处理
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleChange)
  } else {
    // Safari < 14 兼容性
    mediaQuery.addListener(handleChange)
  }

  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handleChange)
    } else {
      mediaQuery.removeListener(handleChange)
    }
  }
}

// 主题切换 composable
export function useTheme() {
  // 计算实际应用的主题
  const actualTheme = computed(() => {
    if (themeMode.value === 'auto') {
      return systemTheme.value
    }
    return themeMode.value
  })

  // 设置主题模式
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode

    // 存储到 localStorage
    if (canUseDom) {
      localStorage.setItem('adm-theme-mode', mode)
    }
  }

  // 切换主题（在 light 和 dark 之间切换）
  const toggleTheme = () => {
    const newMode = actualTheme.value === 'light' ? 'dark' : 'light'
    setThemeMode(newMode)
  }

  // 重置为系统主题
  const resetToSystemTheme = () => {
    setThemeMode('auto')
  }

  // 检查是否为暗色模式
  const isDark = computed(() => actualTheme.value === 'dark')

  // 检查是否为浅色模式
  const isLight = computed(() => actualTheme.value === 'light')

  // 检查是否为自动模式
  const isAuto = computed(() => themeMode.value === 'auto')

  // 获取当前主题模式
  const getThemeMode = () => themeMode.value

  // 获取实际主题
  const getActualTheme = () => actualTheme.value

  // 初始化主题
  const initTheme = () => {
    if (!canUseDom) return

    // 从 localStorage 恢复主题设置
    const savedMode = localStorage.getItem('adm-theme-mode') as ThemeMode
    if (savedMode && ['light', 'dark', 'auto'].includes(savedMode)) {
      themeMode.value = savedMode
    }

    // 获取系统主题
    systemTheme.value = getSystemTheme()

    // 设置系统主题监听器
    const cleanup = setupSystemThemeListener()

    // 应用初始主题
    applyTheme(actualTheme.value)

    return cleanup
  }

  // 监听主题变化并应用
  watch(actualTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  // 组件挂载时初始化
  onMounted(() => {
    initTheme()
  })

  return {
    // 状态
    themeMode: computed(() => themeMode.value),
    actualTheme,
    systemTheme: computed(() => systemTheme.value),
    isDark,
    isLight,
    isAuto,

    // 方法
    setThemeMode,
    toggleTheme,
    resetToSystemTheme,
    getThemeMode,
    getActualTheme,
    initTheme,
  }
}

// 全局主题管理实例
export const themeManager = {
  ...useTheme(),
}
