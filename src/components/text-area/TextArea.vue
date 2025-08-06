<template>
  <div :class="classPrefix" :style="$attrs.style as any">
    <textarea
      ref="nativeTextAreaRef"
      :class="`${classPrefix}-element`"
      :rows="computedRows"
      :value="currentValue"
      :placeholder="placeholder"
      :id="id"
      :auto-complete="autoComplete"
      :auto-focus="autoFocus"
      :disabled="disabled"
      :readonly="readOnly"
      :name="name"
      :enter-key-hint="enterKeyHint"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @click="handleClick"
      @keydown="handleKeydown"
    />

    <div v-if="showCountContent" :class="`${classPrefix}-count`">
      {{ showCountContent }}
    </div>

    <component v-if="showCountNode" :is="showCountNode" />

    <textarea
      v-if="autoSize"
      ref="hiddenTextAreaRef"
      :class="`${classPrefix}-element ${classPrefix}-element-hidden`"
      :value="currentValue"
      :rows="computedRows"
      aria-hidden="true"
      readonly
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { defineOptions } from 'vue'
import runes from 'runes2'
import type { TextAreaProps, TextAreaEmits, TextAreaRef } from './types'

defineOptions({
  name: 'AdmTextArea',
  inheritAttrs: false
})

const classPrefix = 'adm-text-area'

const props = withDefaults(defineProps<TextAreaProps>(), {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: ''
})

const emit = defineEmits<TextAreaEmits>()

// 引用
const nativeTextAreaRef = ref<HTMLTextAreaElement | null>(null)
const hiddenTextAreaRef = ref<HTMLTextAreaElement | null>(null)
const heightRef = ref<string>('auto')
const compositingRef = ref(false)

// 状态管理 - 使用value而不是modelValue
const currentValue = ref(props.value ?? props.defaultValue)

// 监听外部value变化
watch(() => props.value, (newValue) => {
  if (newValue !== undefined) {
    currentValue.value = newValue
  }
}, { immediate: true })

// 计算属性
const computedRows = computed(() => {
  let rows = props.rows
  if (typeof props.autoSize === 'object') {
    if (props.autoSize.maxRows && rows > props.autoSize.maxRows) {
      rows = props.autoSize.maxRows
    }
    if (props.autoSize.minRows && rows < props.autoSize.minRows) {
      rows = props.autoSize.minRows
    }
  }
  return rows
})

const valueLength = computed(() => runes(currentValue.value).length)

const showCountContent = computed(() => {
  if (props.showCount && typeof props.showCount !== 'function') {
    return props.maxLength === undefined
      ? valueLength.value.toString()
      : `${valueLength.value}/${props.maxLength}`
  }
  return ''
})

const showCountNode = computed(() => {
  if (typeof props.showCount === 'function') {
    return props.showCount(valueLength.value, props.maxLength)
  }
  return null
})

// 事件处理
const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  let value = target.value

  // 只有在非输入法状态下才限制字符数
  if (props.maxLength && !compositingRef.value) {
    const runesArray = runes(value)
    if (runesArray.length > props.maxLength) {
      value = runesArray.slice(0, props.maxLength).join('')
    }
  }

  currentValue.value = value
  emit('update:modelValue', value)
  emit('change', value)
  props.onChange?.(value)
}

const handleFocus = (e: FocusEvent) => {
  emit('focus', e)
  props.onFocus?.(e)
}

const handleBlur = (e: FocusEvent) => {
  emit('blur', e)
  props.onBlur?.(e)
}

const handleCompositionStart = (e: CompositionEvent) => {
  compositingRef.value = true
  emit('compositionstart', e)
  props.onCompositionStart?.(e)
}

const handleCompositionEnd = (e: CompositionEvent) => {
  compositingRef.value = false
  if (props.maxLength) {
    const target = e.target as HTMLTextAreaElement
    const value = target.value
    const limitedValue = runes(value).slice(0, props.maxLength).join('')
    currentValue.value = limitedValue
    emit('update:modelValue', limitedValue)
    emit('change', limitedValue)
    props.onChange?.(limitedValue)
  }
  emit('compositionend', e)
  props.onCompositionEnd?.(e)
}

const handleClick = (e: MouseEvent) => {
  emit('click', e)
  props.onClick?.(e)
}

const handleKeydown = (e: KeyboardEvent) => {
  emit('keydown', e)
  props.onKeyDown?.(e)
  if (props.onEnterPress && (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13)) {
    emit('enterPress', e)
  }
}

// 自动调整高度
const updateHeight = () => {
  if (!props.autoSize) return

  const textArea = nativeTextAreaRef.value
  const hiddenTextArea = hiddenTextAreaRef.value

  if (!textArea) return

  textArea.style.height = heightRef.value

  if (!hiddenTextArea) return

  let height = hiddenTextArea.scrollHeight

  if (typeof props.autoSize === 'object') {
    const computedStyle = window.getComputedStyle(textArea)
    const lineHeight = parseFloat(computedStyle.lineHeight)

    if (props.autoSize.minRows) {
      height = Math.max(height, props.autoSize.minRows * lineHeight)
    }
    if (props.autoSize.maxRows) {
      height = Math.min(height, props.autoSize.maxRows * lineHeight)
    }
  }

  heightRef.value = `${height}px`
  textArea.style.height = `${height}px`
}

// 监听值变化，更新高度
watch([currentValue, () => props.autoSize], () => {
  nextTick(() => {
    updateHeight()
  })
})

// 暴露方法
const clear = () => {
  currentValue.value = ''
  emit('update:modelValue', '')
  emit('change', '')
  props.onChange?.('')
}

const focus = () => {
  nativeTextAreaRef.value?.focus()
}

const blur = () => {
  nativeTextAreaRef.value?.blur()
}

defineExpose<TextAreaRef>({
  clear,
  focus,
  blur,
  get nativeElement() {
    return nativeTextAreaRef.value
  }
})
</script>

<style lang="less" scoped>
@import url('./text-area.less');
</style>
