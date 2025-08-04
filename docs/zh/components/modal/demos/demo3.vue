<template>
  <div>
    <div class="demo-section-header">
      <div class="demo-section-title">关闭所有弹窗</div>
    </div>
    <div class="demo-section-content">
      <Button block @click="continuousShow">
        连续展示弹窗
      </Button>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">打开后立即关闭</div>
    </div>
    <div class="demo-section-content">
      <Button
        block
        @click="openAndClose"
      >
        打开后立即关闭
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import Button from '../../../../../src/components/button'
import Modal from '../../../../../src/components/modal'

const continuousShow = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      Modal.alert({
        content: h(Button, {
          onClick: () => Modal.clear()
        }, () => 'close all'),
        onConfirm: () => {
          console.log('Confirmed')
        },
      })
    }, i * 100)
  }
}

const openAndClose = () => {
  Modal.alert({
    content: 'test',
    onClose: () => {
      console.log('onClose')
    },
    afterClose: () => {
      console.log('afterClose')
    },
  })
  Modal.clear()
}
</script>

<style lang="less" scoped>
.demo-section-header {
  padding: 12px;
  border-bottom: 1px solid var(--adm-border-color);
  margin-top: 24px;

  &:first-child {
    margin-top: 0;
  }
}

.demo-section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.demo-section-content {
  padding: 12px;
}
</style>
