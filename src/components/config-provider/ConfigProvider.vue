<script setup lang="ts">
import { provideConfig } from './config-provider'
import type { ConfigProviderProps } from './types'

defineOptions({
  name: 'ConfigProvider',
})

const props = withDefaults(defineProps<ConfigProviderProps>(), {})

// 提供配置到子组件
const { children, ...config } = props
provideConfig(config)
</script>

<template>
  <slot />
</template>
