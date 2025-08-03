<template>
  <div :class="classPrefix">
    <div :class="`${classPrefix}-content`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NativeProps } from '../../utils/native-props'

const classPrefix = 'adm-auto-center'

export interface AutoCenterProps extends /* @vue-ignore */ NativeProps {
  // AutoCenter组件只需要基础的NativeProps，没有其他特殊属性
  _?: never // 防止空接口错误
}

// 显式导出类型，使其可以被外部导入
export type { AutoCenterProps }

// AutoCenter组件不需要处理props，只需要声明类型
defineProps<AutoCenterProps>()
</script>

<style lang="less">
@class-prefix-auto-center: ~'adm-auto-center';

.@{class-prefix-auto-center} {
  display: flex;
  justify-content: center;

  &-content {
    flex: 0 1 auto;
  }
}
</style>
