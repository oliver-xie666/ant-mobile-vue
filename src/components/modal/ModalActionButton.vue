<template>
  <Button
    :key="props.action.key"
    @click="handleClick"
    :class="{
      'adm-modal-button': true,
      'adm-modal-button-primary': !!props.action.primary
    }"
    :fill="props.action.primary ? 'solid' : 'none'"
    :size="props.action.primary ? 'large' : 'middle'"
    block
    :color="props.action.danger ? 'danger' : 'primary'"
    loading="auto"
    :disabled="props.action.disabled"
  >
    {{ props.action.text }}
  </Button>
</template>

<script setup lang="ts">
import Button from '../button'
import type { Action } from './types'

interface Props {
  action: Action
}

const props = defineProps<Props>()

const emit = defineEmits<{
  action: []
}>()

const handleClick = async () => {
  emit('action')
}
</script>
