<template>
  <Button
    :key="action.key"
    @click="handleClick"
    :class="{
      'adm-dialog-button': true,
      'adm-dialog-button-bold': !!action.bold
    }"
    fill="none"
    shape="rectangular"
    block
    :color="action.danger ? 'danger' : 'primary'"
    loading="auto"
    :disabled="action.disabled"
  >
    {{ action.text }}
  </Button>
</template>

<script setup lang="ts">
import Button from '../button'
import type { Action } from './types'

defineOptions({
  name: 'DialogActionButton'
})

interface Props {
  action: Action
}

defineProps<Props>()

const emit = defineEmits<{
  action: []
}>()

const handleClick = async () => {
  emit('action')
}
</script>
