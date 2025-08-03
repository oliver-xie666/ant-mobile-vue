import { inject, provide, reactive, computed, type InjectionKey } from 'vue'
import { zhCN } from '../../locales'
import type { Config } from './types'

// 默认配置
export const defaultConfigRef = reactive<Config>({
  locale: zhCN,
})

// 设置默认配置
export function setDefaultConfig(config: Partial<Config>) {
  Object.assign(defaultConfigRef, config)
}

// 获取默认配置
export function getDefaultConfig(): Config {
  return defaultConfigRef
}

// ConfigProvider 的注入 key
export const ConfigProviderKey: InjectionKey<Config> = Symbol('ConfigProvider')

// 使用配置的 composable
export function useConfig(): Config {
  const config = inject(ConfigProviderKey, null)
  return computed(() => ({
    ...getDefaultConfig(),
    ...config,
  })).value
}

// 提供配置的函数
export function provideConfig(config: Partial<Config>) {
  const parentConfig = inject(ConfigProviderKey, null)
  const mergedConfig = computed(() => ({
    ...getDefaultConfig(),
    ...parentConfig,
    ...config,
  }))

  provide(ConfigProviderKey, mergedConfig.value)
  return mergedConfig
}
