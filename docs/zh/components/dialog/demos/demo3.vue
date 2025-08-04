<template>
  <DemoBlock title="关闭所有对话框">
    <Button block @click="continuousShow">
      连续展示对话框
    </Button>
  </DemoBlock>
</template>

<script setup lang="ts">
import { h } from 'vue'
import Button from '../../../../../src/components/button/Button.vue'
import Dialog from '../../../../../src/components/dialog'

// 连续展示
const continuousShow = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      Dialog.alert({
        content: h(Button, { onClick: () => Dialog.clear() }, () => 'close all'),
        onConfirm: () => {
          console.log('Confirmed')
        }
      })
    }, i * 500)
  }
}
</script>
