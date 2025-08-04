<template>
  <Mask
    v-if="shouldRender"
    :visible="mergedVisible"
    :destroy-on-close="destroyOnClose"
    :force-render="forceRender"
    :disable-body-scroll="disableBodyScroll"
    :get-container="getContainer"
    :afterShow="afterShow"
    :afterClose="internalAfterClose"
    :z-index="zIndex"
    :opacity="mask ? undefined : 0"
    :class="[
      'adm-center-popup-wrap',
      maskClassName
    ].filter(Boolean) as string[]"
    :style="maskStyle"
    @click="onMaskClick"
    @close="handleClose"
  >
    <div
      v-if="mergedVisible || !destroyOnClose"
      :class="[
        'adm-center-popup',
        $attrs.class
      ].filter(Boolean) as string[]"
      :style="[popupStyle, style]"
      v-bind="withStopPropagation(['click'])"
      :role="role"
      :aria-label="($attrs['aria-label'] as string) || undefined"
    >
      <div
        v-if="showCloseButton"
        :class="'adm-center-popup-close'"
        @click="handleClose"
      >
        <component :is="closeIcon" />
      </div>
      <div
        :class="[
          'adm-center-popup-body',
          bodyClassName
        ]"
        :style="bodyStyle"
      >
        <slot />
      </div>
    </div>
  </Mask>
</template>

<script setup lang="ts">
import { computed, ref, watch, type CSSProperties, type Component } from 'vue'
import Mask from '../mask'
import CloseIcon from './CloseIcon.vue'
import { useShouldRender } from '../../utils/should-render'
import { withStopPropagation } from '../../utils/with-stop-propagation'
import type { GetContainer } from '../../utils/render-to-container'
import type { PropagationEvent } from '../../utils/with-stop-propagation'
import type { NativeProps } from '../../utils/native-props'

export interface CenterPopupProps extends /* @vue-ignore */ NativeProps {
  afterClose?: () => void
  afterShow?: () => void
  bodyClassName?: string
  bodyStyle?: CSSProperties
  closeOnMaskClick?: boolean
  closeIcon?: Component
  destroyOnClose?: boolean
  disableBodyScroll?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  mask?: boolean
  maskClassName?: string
  maskStyle?: CSSProperties
  onClose?: () => void
  onMaskClick?: (event: MouseEvent) => void
  showCloseButton?: boolean
  stopPropagation?: PropagationEvent[]
  visible?: boolean
  zIndex?: number
  role?: string
}

defineOptions({
  name: 'CenterPopup',
  inheritAttrs: false
})

const props = withDefaults(defineProps<CenterPopupProps>(), {
  closeOnMaskClick: false,
  closeIcon: () => CloseIcon,
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  mask: true,
  showCloseButton: false,
  visible: false,
  zIndex: 1000
})

const emit = defineEmits<{
  close: []
}>()

// 内部可见状态管理
const innerVisible = ref(props.visible)
const animating = ref(false)

const mergedVisible = computed(() => props.visible || animating.value)

// 条件渲染逻辑
const shouldRender = useShouldRender(mergedVisible, props.forceRender, props.destroyOnClose)

// 弹窗样式
const popupStyle = computed(() => ({
  '--z-index': props.zIndex,
  transform: mergedVisible.value ? 'scale(1)' : 'scale(0.8)',
  opacity: mergedVisible.value ? 1 : 0,
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
} as CSSProperties))

// 监听 visible 变化处理动画
watch(() => props.visible, (newVisible) => {
  if (newVisible !== innerVisible.value) {
    innerVisible.value = newVisible
    if (newVisible) {
      animating.value = true
      // 显示动画结束后
      setTimeout(() => {
        animating.value = false
        props.afterShow?.()
      }, 300)
    } else {
      animating.value = true
      // 隐藏动画结束后
      setTimeout(() => {
        animating.value = false
        props.afterClose?.()
      }, 300)
    }
  }
})

// 内部关闭处理
const internalAfterClose = () => {
  animating.value = false
  props.afterClose?.()
}

// 事件处理
const handleClose = () => {
  props.onClose?.()
  emit('close')
}

const onMaskClick = (event: MouseEvent) => {
  props.onMaskClick?.(event)
  if (props.closeOnMaskClick) {
    handleClose()
  }
}
</script>

<style lang="less">
.adm-center-popup-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  .adm-center-popup {
    position: relative;
    max-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px);
        background: var(--adm-color-background, #fff);
    border-radius: var(--adm-border-radius-4, 8px);
    overflow: hidden;

    &-close {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 1;
      padding: 4px;
      cursor: pointer;
      color: var(--adm-color-text-secondary, #999);

      &:hover {
        color: var(--adm-color-text, #333);
      }
    }

    &-body {
      position: relative;
    }
  }
}
</style>
