<template>
  <CenterPopup
    :class="['adm-modal', $attrs.class].filter(Boolean) as string[]"
    :style="$attrs.style as any"
    :afterClose="afterClose"
    :afterShow="afterShow"
    :showCloseButton="showCloseButton"
    :closeOnMaskClick="closeOnMaskClick"
    :onClose="onClose"
    :visible="visible"
    :getContainer="getContainer"
    :bodyStyle="bodyStyle"
    :bodyClassName="[
      'adm-modal-body',
      image && 'adm-modal-with-image',
      bodyClassName
    ].filter(Boolean).join(' ')"
    :maskStyle="maskStyle"
    :maskClassName="maskClassName"
    :stopPropagation="stopPropagation"
    :disableBodyScroll="disableBodyScroll"
    :destroyOnClose="destroyOnClose"
    :forceRender="forceRender"
  >
    <div v-if="image" class="adm-modal-image-container">
      <img :src="image" alt="modal header image" style="width: 100%" />
    </div>

    <div v-if="header" class="adm-modal-header">
      <AutoCenter>
        <template v-if="typeof header === 'string'">{{ header }}</template>
        <component v-else :is="header" />
      </AutoCenter>
    </div>

    <div v-if="title" class="adm-modal-title">
      <template v-if="typeof title === 'string'">{{ title }}</template>
      <component v-else :is="title" />
    </div>

    <div class="adm-modal-content">
      <AutoCenter v-if="typeof content === 'string'">{{ content }}</AutoCenter>
      <component v-else :is="content" />
    </div>

    <Space
      direction="vertical"
      block
      :class="[
        'adm-modal-footer',
        actions.length === 0 && 'adm-modal-footer-empty'
      ].filter(Boolean) as string[]"
    >
      <ModalActionButton
        v-for="(action, index) in actions"
        :key="action.key"
        :action="action"
        @action="handleAction(action, index)"
      />
    </Space>
  </CenterPopup>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import CenterPopup from '../center-popup'
import AutoCenter from '../auto-center'
import Space from '../space'
import ModalActionButton from './ModalActionButton.vue'
import type { ModalProps, Action } from './types'

defineOptions({
  name: 'AdmModal',
  inheritAttrs: false
})

type Props = ModalProps

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
    props.onClose?.()
    emit('update:visible', false)
    emit('close')
  }
}
</script>

<style lang="less">
@import url('./modal.less');
</style>
