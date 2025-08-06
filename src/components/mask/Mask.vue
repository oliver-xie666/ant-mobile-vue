<template>
  <Teleport :to="getContainer" :disabled="!getContainer" v-if="shouldRender">
    <Transition
      name="adm-mask"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="visible"
        ref="maskRef"
        :class="[classPrefix, $attrs.class].filter(Boolean) as string[]"
        :style="[maskStyle, $attrs.style].filter(Boolean) as any[]"
        aria-hidden="true"
        @click="handleMaskClick"
        v-bind="{ ...stopPropagationHandlers, ...$attrs }"
      >
        <!-- 辅助功能按钮 -->
        <div
          v-if="onMaskClick"
          :class="`${classPrefix}-aria-button`"
          role="button"
          :aria-label="locale?.Mask?.name || '遮罩层'"
          @click="handleMaskClick"
        />
        <!-- 内容区域 -->
        <div :class="`${classPrefix}-content`">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, type CSSProperties } from 'vue'
import { useLockScroll } from '../../composables/use-lock-scroll'
import { useShouldRender } from '../../utils/should-render'
import { useStopPropagation } from '../../utils/with-stop-propagation'
import { useConfig } from '../config-provider'
import type { NativeProps } from '../../utils/native-props'

// 禁用属性自动继承，手动处理
defineOptions({
  inheritAttrs: false
})

const classPrefix = 'adm-mask'

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
}

const colorRecord: Record<string, string> = {
  black: '0, 0, 0',
  white: '255, 255, 255',
}

export type PropagationEvent = 'click' | 'touchstart'

export interface MaskProps extends /* @vue-ignore */ NativeProps<'--z-index'> {
  visible?: boolean
  onMaskClick?: (event: MouseEvent) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  color?: 'white' | 'black' | (string & {})
  opacity?: 'default' | 'thin' | 'thick' | number
  getContainer?: HTMLElement | (() => HTMLElement) | null
  afterShow?: () => void
  afterClose?: () => void
  stopPropagation?: PropagationEvent[]
}

// 显式导出类型，使其可以被外部导入
// 类型由 index.ts 统一导出

const props = withDefaults(defineProps<MaskProps>(), {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: () => ['click'],
})

const emit = defineEmits<{
  maskClick: [event: MouseEvent]
  close: []
}>()

// 配置和国际化
const config = useConfig()
const locale = computed(() => config?.locale)

// 组件引用
const maskRef = ref<HTMLElement | null>(null)

// 滚动锁定
const shouldLockScroll = computed(() => props.visible && props.disableBodyScroll)
useLockScroll(maskRef, shouldLockScroll)

// 渲染控制
const shouldRender = useShouldRender(
  computed(() => props.visible),
  computed(() => props.forceRender),
  computed(() => props.destroyOnClose)
)

// 背景样式计算
const background = computed(() => {
  const opacity = opacityRecord[props.opacity as keyof typeof opacityRecord] ?? props.opacity
  const rgb = colorRecord[props.color]
  return rgb ? `rgba(${rgb}, ${opacity})` : props.color
})

// 组件样式
const maskStyle = computed((): CSSProperties => ({
  background: background.value,
  display: props.visible ? undefined : 'none',
}))

// 事件冒泡阻止
const stopPropagationHandlers = useStopPropagation(props.stopPropagation || [])

// 点击处理
const handleMaskClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    props.onMaskClick?.(e)
    emit('maskClick', e)
  }
}

// 动画生命周期
const onEnter = () => {
  // 进入动画开始
}

const onAfterEnter = () => {
  props.afterShow?.()
}

const onLeave = () => {
  // 离开动画开始
}

const onAfterLeave = () => {
  props.afterClose?.()
}
</script>

<style lang="less">
@class-prefix-mask: ~'adm-mask';

.@{class-prefix-mask} {
  --z-index: var(--adm-mask-z-index, 1000);

  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index);
  display: block;
  width: 100%;
  height: 100%;

  &-aria-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &-content {
    z-index: 1;
  }
}

// 过渡动画
.adm-mask-enter-active,
.adm-mask-leave-active {
  transition: opacity 0.2s ease;
}

.adm-mask-enter-from,
.adm-mask-leave-to {
  opacity: 0;
}

.adm-mask-enter-to,
.adm-mask-leave-from {
  opacity: 1;
}
</style>
