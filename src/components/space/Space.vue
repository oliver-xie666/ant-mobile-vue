<template>
  <div
    :class="classes"
    @click="onClick"
  >
    <template
      v-for="(child, index) in children"
      :key="index"
    >
      <div
        v-if="isValidChild(child)"
        :class="`${classPrefix}-item`"
      >
        <component
          :is="child"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, Comment, Text } from 'vue'
import type { VNode } from 'vue'
import type { NativeProps } from '../../utils/native-props'

const classPrefix = 'adm-space'

export interface SpaceProps extends /* @vue-ignore */ NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'> {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
  onClick?: (event: MouseEvent) => void
}

const props = withDefaults(defineProps<SpaceProps>(), {
  direction: 'horizontal',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const slots = useSlots()

const classes = computed(() => [
  classPrefix,
  {
    [`${classPrefix}-wrap`]: props.wrap,
    [`${classPrefix}-block`]: props.block,
    [`${classPrefix}-${props.direction}`]: true,
    [`${classPrefix}-align-${props.align}`]: !!props.align,
    [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
  },
  props.class,
])

const children = computed(() => {
  return slots.default?.() || []
})

const isValidChild = (child: VNode) => {
  // 过滤掉注释节点和空文本节点
  if (child.type === Comment) return false
  if (child.type === Text) {
    const text = child.children as string
    return text && text.trim().length > 0
  }
  return true
}

const onClick = (event: MouseEvent) => {
  emit('click', event)
  props.onClick?.(event)
}
</script>

<style lang="less">
@class-prefix-space: ~'adm-space';

.@{class-prefix-space}-item {
  flex: none;
}

.@{class-prefix-space} {
  display: inline-flex;

  --gap: 8px;
  --gap-vertical: var(--gap);
  --gap-horizontal: var(--gap);

  &-vertical {
    flex-direction: column;
    > .@{class-prefix-space}-item {
      margin-bottom: var(--gap-vertical);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-horizontal {
    flex-direction: row;

    &:not(:empty) {
      margin-right: calc(var(--gap-horizontal) * -1);
    }
    > .@{class-prefix-space}-item {
      margin-right: var(--gap-horizontal);
    }
    &.@{class-prefix-space}-wrap {
      flex-wrap: wrap;
      margin-bottom: calc(var(--gap-vertical) * -1);
      > .@{class-prefix-space}-item {
        padding-bottom: var(--gap-vertical);
      }
    }
  }

  &.@{class-prefix-space}-block {
    display: flex;
  }

  &-align {
    &-center {
      align-items: center;
    }

    &-start {
      align-items: flex-start;
    }

    &-end {
      align-items: flex-end;
    }

    &-baseline {
      align-items: baseline;
    }
  }

  &-justify {
    &-center {
      justify-content: center;
    }

    &-start {
      justify-content: flex-start;
    }

    &-end {
      justify-content: flex-end;
    }

    &-between {
      justify-content: space-between;
    }

    &-around {
      justify-content: space-around;
    }

    &-evenly {
      justify-content: space-evenly;
    }

    &-stretch {
      justify-content: stretch;
    }
  }
}
</style>
