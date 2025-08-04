<template>
  <div
    :class="{
      'adm-input': true,
      'adm-input-disabled': disabled
    }"
    :style="$attrs.style as any"
  >
    <input
      ref="nativeInputRef"
      class="adm-input-element"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @paste="handlePaste"
      @keydown="handleKeydown"
      @keyup="handleKeyup"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @click="handleClick"
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :max="max"
      :min="min"
      :autocomplete="autocomplete"
      :enterkeyhint="enterkeyhint"
      :autofocus="autofocus"
      :pattern="pattern"
      :inputmode="inputmode"
      :type="type"
      :name="name"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :step="step"
      :role="role"
      :aria-valuenow="Number($attrs['aria-valuenow']) || undefined"
      :aria-valuemax="Number($attrs['aria-valuemax']) || undefined"
      :aria-valuemin="Number($attrs['aria-valuemin']) || undefined"
      :aria-label="String($attrs['aria-label'] || '')"
    />
    <div
      v-if="shouldShowClear"
      class="adm-input-clear"
      @mousedown.prevent
      @click="handleClear"
      :aria-label="locale.Input?.clear || '清除'"
    >
      <component v-if="clearIcon" :is="clearIcon" />
      <svg v-else viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { defineOptions } from 'vue'
import { bound } from '../../utils/bound'
import { getDefaultConfig } from '../config-provider'
import useInputHandleKeyDown from './useInputHandleKeyDown'
import type { InputProps, InputEmits, InputRef } from './types'

defineOptions({
  name: 'AdmInput',
  inheritAttrs: false
})

type Props = InputProps

const props = withDefaults(defineProps<Props>(), {
  defaultValue: '',
  onlyShowClearWhenFocus: true,
  type: 'text'
})

const emit = defineEmits<InputEmits>()

// 引用
const nativeInputRef = ref<HTMLInputElement | null>(null)

// 状态管理
const hasFocus = ref(false)
const compositionStartRef = ref(false)

// 计算属性
const currentValue = ref(props.modelValue ?? props.defaultValue)

// 监听外部value变化
watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined) {
    currentValue.value = newValue
  }
}, { immediate: true })

// 配置
const { locale } = getDefaultConfig()

// 清除按钮显示逻辑
const shouldShowClear = computed(() => {
  if (!props.clearable || !currentValue.value || props.readonly) return false
  if (props.onlyShowClearWhenFocus) {
    return hasFocus.value
  } else {
    return true
  }
})

// 数值检查（用于number类型）
function checkValue() {
  let nextValue = currentValue.value
  if (props.type === 'number') {
    const boundValue =
      nextValue &&
      bound(
        parseFloat(nextValue),
        props.min,
        props.max
      ).toString()
    // 修复以0开头的数字显示问题
    if (Number(nextValue) !== Number(boundValue)) {
      nextValue = boundValue
    }
  }
  if (nextValue !== currentValue.value) {
    currentValue.value = nextValue
    emit('update:modelValue', nextValue)
  }
}

// 键盘事件处理
const handleKeydown = useInputHandleKeyDown({
  onEnterPress: (e: KeyboardEvent) => {
    props.onEnterPress?.(e)
    emit('enter-press', e)
  },
  onKeyDown: (e: KeyboardEvent) => {
    emit('keydown', e)
  },
})

// 事件处理器
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  currentValue.value = target.value
  emit('update:modelValue', target.value)
}

const handleFocus = (e: FocusEvent) => {
  hasFocus.value = true
  emit('focus', e)
}

const handleBlur = (e: FocusEvent) => {
  hasFocus.value = false
  checkValue()
  emit('blur', e)
}

const handlePaste = (e: ClipboardEvent) => {
  emit('paste', e)
}

const handleKeyup = (e: KeyboardEvent) => {
  emit('keyup', e)
}

const handleCompositionStart = (e: CompositionEvent) => {
  compositionStartRef.value = true
  emit('compositionstart', e)
}

const handleCompositionEnd = (e: CompositionEvent) => {
  compositionStartRef.value = false
  emit('compositionend', e)
}

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}

const handleClear = () => {
  currentValue.value = ''
  emit('update:modelValue', '')
  props.onClear?.()
  emit('clear')

  // iOS兼容性处理
  // https://github.com/ant-design/ant-design-mobile/issues/5212
  if (navigator.userAgent.includes('iPhone') && compositionStartRef.value) {
    compositionStartRef.value = false
    nativeInputRef.value?.blur()
  }
}

// 暴露方法
const inputRef: InputRef = {
  clear: () => {
    currentValue.value = ''
    emit('update:modelValue', '')
  },
  focus: () => {
    nativeInputRef.value?.focus()
  },
  blur: () => {
    nativeInputRef.value?.blur()
  },
  get nativeElement() {
    return nativeInputRef.value
  }
}

defineExpose(inputRef)
</script>

<style lang="less">
@import url('./input.less');
</style>
