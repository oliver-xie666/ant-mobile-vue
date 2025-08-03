<template>
  <span
    :class="classes"
    :style="tagStyle"
    @click="onClick"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { NativeProps } from '../../utils/native-props'

const classPrefix = 'adm-tag'

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-text-secondary, #666666)',
  primary: 'var(--adm-color-primary, #1677ff)',
  success: 'var(--adm-color-success, #00b578)',
  warning: 'var(--adm-color-warning, #ff8f1f)',
  danger: 'var(--adm-color-danger, #ff3141)',
}

export interface TagProps extends /* @vue-ignore */ NativeProps<
  '--border-color' | '--background-color' | '--text-color' | '--border-radius'
> {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | (string & {})
  fill?: 'solid' | 'outline'
  round?: boolean
  onClick?: (e: MouseEvent) => void
}

// 显式导出类型，使其可以被外部导入
export type { TagProps }

const props = withDefaults(defineProps<TagProps>(), {
  color: 'default' as const,
  fill: 'solid' as const,
  round: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => [
  classPrefix,
  {
    [`${classPrefix}-round`]: props.round,
  },
  props.class,
])

const tagStyle = computed(() => {
  const color = colorRecord[props.color] ?? props.color

  const style: CSSProperties & {
    '--border-color': string
    '--text-color': string
    '--background-color': string
  } = {
    '--border-color': color,
            '--text-color': props.fill === 'outline' ? color : '#fff',
    '--background-color': props.fill === 'outline' ? 'transparent' : color,
    ...props.style,
  }

  return style
})

const onClick = (event: MouseEvent) => {
  emit('click', event)
  props.onClick?.(event)
}
</script>

<style lang="less">
@class-prefix-tag: ~'adm-tag';

.@{class-prefix-tag} {
  --border-radius: var(--adm-tag-border-radius, 2px);

  padding: 2px 4px;
  font-size: var(--adm-font-size-3);
  line-height: 1;
  font-weight: normal;
  background: var(--background-color);
  color: var(--text-color);
  display: inline-block;
  white-space: nowrap;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  cursor: pointer;

  &-round {
    border-radius: 100px;
  }
}
</style>
