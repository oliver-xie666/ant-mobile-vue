// Vue版本的国际化composable
import { useData } from 'vitepress'
import { computed } from 'vue'

export function useTrans() {
  const { lang, localeIndex } = useData()

  const isZh = computed(() => lang.value === 'zh-CN')
  const isEn = computed(() => lang.value === 'en-US')

  // 翻译函数
  function trans<T>(en: T, zh: T): T {
    return isZh.value ? zh : en
  }

  // 添加语言标识属性
  trans.zh = isZh
  trans.en = isEn

  return {
    trans,
    isZh,
    isEn,
    lang,
    localeIndex
  }
}

// 获取当前语言路径
export function useLocalePath() {
  const { lang } = useData()

  const getLocalePath = (path: string): string => {
    if (lang.value === 'zh-CN') {
      // 中文为默认语言，不需要前缀
      return path
    }
    // 英文添加 /en 前缀
    return `/en${path}`
  }

  return {
    getLocalePath,
    lang
  }
}

// 语言切换
export function useLanguageSwitch() {
  const { lang } = useData()

  const switchLanguage = (targetLang: 'zh-CN' | 'en-US') => {
    const currentPath = window.location.pathname
    let newPath: string

    if (targetLang === 'zh-CN') {
      // 切换到中文，去掉 /en 前缀
      newPath = currentPath.replace(/^\/en/, '') || '/'
    } else {
      // 切换到英文，添加 /en 前缀
      if (currentPath.startsWith('/en')) {
        newPath = currentPath
      } else {
        newPath = `/en${currentPath}`
      }
    }

    window.location.href = newPath
  }

  return {
    currentLang: lang,
    switchLanguage
  }
}
