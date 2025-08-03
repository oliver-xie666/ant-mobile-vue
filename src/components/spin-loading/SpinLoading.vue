<template>
  <div
    :class="classPrefix"
    :style="componentStyle"
  >
    <svg
      :class="`${classPrefix}-svg`"
      viewBox="0 0 32 32"
    >
      <circle
        :class="`${classPrefix}-fill`"
        fill="transparent"
        stroke-width="2"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="animatedStrokeDashoffset"
        stroke-linecap="square"
        r="15"
        cx="16"
        cy="16"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { NativeProps } from '../../utils/native-props'

const classPrefix = 'adm-spin-loading'

export interface SpinLoadingProps extends /* @vue-ignore */ NativeProps<'--color' | '--size'> {
  color?: 'default' | 'primary' | 'white' | (string & {})
}

// 显式导出类型，使其可以被外部导入
export type { SpinLoadingProps }

const props = withDefaults(defineProps<SpinLoadingProps>(), {
  color: 'default',
})

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

// 圆周长计算
const circumference = 15 * 3.14159265358979 * 2

// 动画相关
const animationFrame = ref<number>()
const animatedPercent = ref(80)
const direction = ref(1) // 1 为减少，-1 为增加

// 组件样式
const componentStyle = computed(() => ({
  '--color': colorRecord[props.color] ?? props.color,
  '--percent': animatedPercent.value,
}))

// 计算stroke-dashoffset
const animatedStrokeDashoffset = computed(() => {
  return (animatedPercent.value / 100) * circumference
})

// 动画逻辑
const animate = () => {
  // 模拟react-spring的循环动画效果：在30%到80%之间往返
  const step = 0.8 // 调整动画速度

  if (direction.value === 1) {
    // 从80%减少到30%
    animatedPercent.value -= step
    if (animatedPercent.value <= 30) {
      direction.value = -1
    }
  } else {
    // 从30%增加到80%
    animatedPercent.value += step
    if (animatedPercent.value >= 80) {
      direction.value = 1
    }
  }

  animationFrame.value = requestAnimationFrame(animate)
}

onMounted(() => {
  // 检查用户是否偏好减少动画
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    animate()
  }
})

onUnmounted(() => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
  }
})
</script>

<style lang="less">
@class-prefix-spin-loading: ~'adm-spin-loading';

.@{class-prefix-spin-loading} {
  --color: var(--adm-color-weak);
  --size: 32px;

  width: var(--size);
  height: var(--size);

  &-svg {
    width: 100%;
    height: 100%;
    animation: adm-spin-loading-rotate 0.8s infinite linear;

    > .@{class-prefix-spin-loading}-fill {
      stroke: var(--color);
    }
  }
}

@keyframes adm-spin-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
