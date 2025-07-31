<template>
  <div
    :class="classes"
    :style="{ color: actualColor }"
  >
    <svg
      height="1em"
      viewBox="0 0 100 40"
      style="vertical-align: -0.125em"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-100.000000, -71.000000)">
          <g transform="translate(95.000000, 71.000000)">
            <g transform="translate(5.000000, 0.000000)">
              <rect
                v-for="i in 3"
                :key="i - 1"
                fill="currentColor"
                :x="20 + (i - 1) * 26"
                y="16"
                width="8"
                height="8"
                rx="2"
              >
                <animate
                  attributeName="y"
                  from="16"
                  to="16"
                  dur="2s"
                  :begin="`${(i - 1) * 0.2}s`"
                  repeatCount="indefinite"
                  values="16; 6; 26; 16; 16"
                  keyTimes="0; 0.1; 0.3; 0.4; 1"
                />
              </rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed }

 from 'vue'
import type { NativeProps }

 from '../../utils/native-props'

const classPrefix = 'adm-dot-loading'

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export interface DotLoadingProps extends /* @vue-ignore */ NativeProps {
  color?: 'default' | 'primary' | 'white' | (string & {})
}

const props = withDefaults(defineProps<DotLoadingProps>(), {
  color: 'default',
})

const classes = computed(() => [
  'adm-loading',
  classPrefix,
  props.class,
])

const actualColor = computed(() => {
  return colorRecord[props.color] ?? props.color
})
</script>

<style lang="less">
.adm-dot-loading {
  display: inline-block;
}
</style>
