<template>
  <div>
    <div class="demo-section-header">
      <div class="demo-section-title">基础用法</div>
    </div>
    <div class="demo-section-content">
      <Space direction="vertical" block>
        <Button
          block
          @click="showBasicAlert"
        >
          最简单的弹窗
        </Button>

        <Button
          block
          @click="showMaskClickAlert"
        >
          点击遮罩关闭
        </Button>

        <Button
          block
          @click="showCloseButtonAlert"
        >
          显示关闭图标
        </Button>
      </Space>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">操作按钮</div>
    </div>
    <div class="demo-section-content">
      <Space direction="vertical" block>
        <Button
          block
          @click="showCustomActions"
        >
          自定义按钮
        </Button>

        <div class="demo-description">
          如果你想完全自由地控制按钮区域，那么可以通过 actions 参数来自定义操作按钮
        </div>

        <Divider />

        <Button
          block
          @click="showAsyncSuccess"
        >
          异步操作执行成功
        </Button>

        <Button
          block
          @click="showAsyncFail"
        >
          异步操作执行失败
        </Button>

        <div class="demo-description">
          onAction、onConfirm、onCancel、onClick 这些事件函数都支持返回一个 Promise，通过这种方式，可以让按钮在执行异步操作的时候变为加载状态
        </div>

        <Button
          block
          @click="showNoActions"
        >
          无操作按钮
        </Button>

        <div class="demo-description">
          当你不设置操作按钮时，可以把 Modal 当作一个普通的弹层来使用
        </div>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../../../src/components/button'
import Space from '../../../../../src/components/space'
import Divider from '../../../../../src/components/divider'
import Modal from '../../../../../src/components/modal'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const showBasicAlert = () => {
  Modal.alert({
    content: '人在天边月上明',
    onConfirm: () => {
      console.log('Confirmed')
    },
  })
}

const showMaskClickAlert = () => {
  Modal.alert({
    content: '点击遮罩关闭',
    closeOnMaskClick: true,
  })
}

const showCloseButtonAlert = () => {
  Modal.alert({
    title: '带关闭图标的弹窗',
    content: '右上角有个关闭的小图标，点击它也可以关闭弹窗',
    showCloseButton: true,
  })
}

const showCustomActions = () => {
  Modal.show({
    content: '人在天边月上明，风初紧，吹入画帘旌',
    closeOnAction: true,
    actions: [
      {
        key: 'online',
        text: '在线阅读',
        primary: true,
      },
      {
        key: 'download',
        text: '下载文件',
      },
      {
        key: 'share',
        text: '分享',
      },
    ],
  })
}

const showAsyncSuccess = () => {
  Modal.confirm({
    content: '是否提交申请',
    onConfirm: async () => {
      await sleep(3000)
      // 这里应该显示Toast，但我们还没有迁移Toast的指令式API
      console.log('提交成功')
    },
  })
}

const showAsyncFail = () => {
  Modal.confirm({
    content: '是否提交申请',
    onConfirm: async () => {
      await sleep(3000)
      console.log('提交失败')
      throw new Error()
    },
  })
}

const showNoActions = () => {
  Modal.show({
    content: '点击遮罩关闭',
    closeOnMaskClick: true,
  })
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

.demo-description {
  font-size: 14px;
  color: var(--adm-color-text-secondary);
  margin: 8px 0;
  line-height: 1.5;
}
</style>
