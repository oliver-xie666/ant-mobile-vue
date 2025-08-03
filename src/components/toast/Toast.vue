<template>
  <Mask
    :visible="visible"
    destroy-on-close
    :opacity="0"
    :disable-body-scroll="!maskClickable"
    :get-container="getContainer"
    :after-close="afterClose"
    :style="maskStyle"
    :class="maskClass"
    :stop-propagation="stopPropagation"
  >
    <div :class="`${classPrefix}-wrap`">
      <div
        :class="mainClass"
        :style="{ top: topPosition }"
      >
        <div v-if="iconElement" :class="`${classPrefix}-icon`">
          <component :is="iconElement" />
        </div>
        <AutoCenter>{{ content }}</AutoCenter>
      </div>
    </div>
  </Mask>
</template>

<script setup lang="ts">
import { computed, type CSSProperties, type Component } from 'vue'
import Mask from '../mask/Mask.vue'
import AutoCenter from '../auto-center/AutoCenter.vue'
import SpinLoading from '../spin-loading/SpinLoading.vue'
import { CheckOutline, CloseOutline } from './icons'
import type { PropagationEvent } from '../../utils/with-stop-propagation'

const classPrefix = 'adm-toast'

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: CSSProperties
  maskClassName?: string
  maskClickable?: boolean
  content?: string
  icon?: 'success' | 'fail' | 'loading' | Component
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  visible?: boolean
  getContainer?: HTMLElement | (() => HTMLElement) | null
  stopPropagation?: PropagationEvent[]
}

// 显式导出类型
export type { ToastProps }

const props = withDefaults(defineProps<ToastProps>(), {
  maskClickable: true,
  stopPropagation: () => ['click'],
  position: 'center',
  visible: false,
})

// 图标元素计算
const iconElement = computed(() => {
  if (props.icon === null || props.icon === undefined) return null

  switch (props.icon) {
    case 'success':
      return CheckOutline
    case 'fail':
      return CloseOutline
    case 'loading':
      return SpinLoading
    default:
      return props.icon
  }
})

// 位置计算
const topPosition = computed(() => {
  switch (props.position) {
    case 'top':
      return '20%'
    case 'bottom':
      return '80%'
    default:
      return '50%'
  }
})

// 主要元素的class
const mainClass = computed(() => [
  `${classPrefix}-main`,
  props.icon ? `${classPrefix}-main-icon` : `${classPrefix}-main-text`
])

// Mask的class
const maskClass = computed(() => [
  `${classPrefix}-mask`,
  props.maskClassName
])

// Mask的样式
const maskStyle = computed((): CSSProperties => ({
  pointerEvents: props.maskClickable ? 'none' : 'auto',
  ...props.maskStyle,
}))
</script>

<style lang="less">
@class-prefix-toast: ~'adm-toast';

.@{class-prefix-toast}-mask {
  .@{class-prefix-toast}-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .@{class-prefix-toast}-main {
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    max-width: 204px;
    max-height: 70%;
    overflow: auto;
    color: white;
    word-break: break-all;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    pointer-events: all;
    font-size: var(--adm-font-size-7);
    line-height: 1.5;
    box-sizing: border-box;
    text-align: initial;
  }

  .@{class-prefix-toast}-main-text {
    padding: 12px;
    min-width: 0;
  }

  .@{class-prefix-toast}-main-icon {
    padding: 35px 12px;
    min-width: 150px;

    .@{class-prefix-toast}-icon {
      text-align: center;
      margin-bottom: 8px;
      font-size: 36px;
      line-height: 1;
    }
  }
}

// SpinLoading 在 Toast 中的特殊样式
.@{class-prefix-toast}-icon {
  .adm-spin-loading {
    --size: 48px;
    --color: white;
    margin: 0 auto 8px;
  }
}
</style>
