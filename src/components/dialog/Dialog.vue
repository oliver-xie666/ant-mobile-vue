<template>
  <CenterPopup
    :class="['adm-dialog', className]"
    :style="style"
    :afterClose="afterClose"
    :afterShow="afterShow"
    :onMaskClick="handleMaskClick"
    :visible="visible"
    :getContainer="getContainer"
    :bodyStyle="bodyStyle"
    :bodyClassName="[
      'adm-dialog-body',
      image && 'adm-dialog-with-image',
      bodyClassName
    ]"
    :maskStyle="maskStyle"
    :maskClassName="maskClassName"
    :stopPropagation="stopPropagation"
    :disableBodyScroll="disableBodyScroll"
    :destroyOnClose="destroyOnClose"
    :forceRender="forceRender"
    role="dialog"
    :aria-label="$attrs['aria-label']"
    @close="handleClose"
  >
    <!-- Image -->
    <div
      v-if="image"
      :class="'adm-dialog-image-container'"
    >
            <img
        :src="image"
        alt="dialog header image"
        :style="{ width: '100%' }"
      />
    </div>

    <!-- Header -->
    <div
      v-if="header"
      :class="'adm-dialog-header'"
    >
      <AutoCenter>
        <component :is="header" v-if="typeof header !== 'string'" />
        <template v-else>{{ header }}</template>
      </AutoCenter>
    </div>

    <!-- Title -->
    <div
      v-if="title"
      :class="'adm-dialog-title'"
    >
      <component :is="title" v-if="typeof title !== 'string'" />
      <template v-else>{{ title }}</template>
    </div>

    <!-- Content -->
    <div
      :class="[
        'adm-dialog-content',
        !content && 'adm-dialog-content-empty'
      ]"
    >
      <AutoCenter v-if="typeof content === 'string'">
        {{ content }}
      </AutoCenter>
      <component :is="content" v-else-if="content" />
    </div>

    <!-- Footer -->
    <div :class="'adm-dialog-footer'">
      <div
        v-for="(row, index) in actions"
        :key="index"
        :class="'adm-dialog-action-row'"
      >
        <DialogActionButton
          v-for="(action, actionIndex) in (Array.isArray(row) ? row : [row])"
          :key="action.key"
          :action="action"
          @action="handleAction(action, actionIndex)"
        />
      </div>
    </div>
  </CenterPopup>
</template>

<script setup lang="ts">
import CenterPopup from '../center-popup'
import AutoCenter from '../auto-center'
import DialogActionButton from './DialogActionButton.vue'
import type { DialogProps, Action } from './types'

defineOptions({
  name: 'AdmDialog',
  inheritAttrs: false
})

interface Props extends DialogProps {
  _?: never
}

const props = withDefaults(defineProps<Props>(), {
  actions: () => [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: undefined
})

const emit = defineEmits<{
  close: []
  action: [action: Action, index: number]
  'update:visible': [visible: boolean]
}>()

const handleAction = async (action: Action, index: number) => {
  await Promise.all([
    action.onClick?.(),
    props.onAction?.(action, index)
  ])

  emit('action', action, index)

  if (props.closeOnAction) {
    // 直接调用onClose，不通过handleClose避免重复事件处理
    props.onClose?.()
    emit('update:visible', false)
  }
}

const handleClose = () => {
  props.onClose?.()
  emit('close')
  emit('update:visible', false)
}

const handleMaskClick = () => {
  if (props.closeOnMaskClick) {
    handleClose()
  }
}
</script>

<style lang="less">
@import url('./dialog.less');
</style>
