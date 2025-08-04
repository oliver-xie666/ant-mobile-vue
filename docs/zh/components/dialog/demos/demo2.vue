<template>
  <div>
    <DemoBlock title="内容区域">
      <Space direction="vertical" block>
        <Button
          block
          @click="showCustomContent"
        >
          自定义内容区域
        </Button>
        <Button
          block
          @click="showWithImageAndTitle"
        >
          有标题和图片
        </Button>
        <Button
          block
          @click="showLongContent"
        >
          超长文本
        </Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="获取点击结果">
      <Space direction="vertical" block>
        <Button
          block
          @click="waitForAlert"
        >
          等待 alert 完成
        </Button>
        <div :style="{ color: 'var(--adm-color-text-secondary)', fontSize: '12px', margin: '12px 0' }">
          alert 和 confirm 方法都会返回一个 Promise，你可以通过这个 Promise 实现等待弹窗关闭
        </div>
        <Divider />
        <Button
          block
          @click="waitForConfirm"
        >
          等待 confirm 完成
        </Button>
        <div :style="{ color: 'var(--adm-color-text-secondary)', fontSize: '12px', margin: '12px 0' }">
          confirm 返回的是 Promise&lt;boolean&gt; 你可以通过这个 boolean 来判断用户是点击的确认还是取消
        </div>
      </Space>
    </DemoBlock>

    <DemoBlock title="声明式">
      <Space direction="vertical" block>
        <Button block @click="visible = true">
          显示对话框
        </Button>
        <Dialog
          v-model:visible="visible"
          content="人在天边月上明"
          :closeOnAction="true"
          :actions="[
            {
              key: 'confirm',
              text: '我知道了'
            }
          ]"
        />
        <div :style="{ color: 'var(--adm-color-text-secondary)', fontSize: '12px', margin: '12px 0' }">
          你可以手动控制 visible 状态
        </div>
      </Space>
    </DemoBlock>

    <DemoBlock title="自定义关闭操作">
      <Space direction="vertical" block>
        <Button
          block
          @click="showImperative"
        >
          显示对话框
        </Button>
        <div :style="{ color: 'var(--adm-color-text-secondary)', fontSize: '12px', margin: '12px 0' }">
          你可以根据需求，自定义关闭弹窗的时机
        </div>
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Button from '../../../../../src/components/button/Button.vue'
import Space from '../../../../../src/components/space/Space.vue'
import Divider from '../../../../../src/components/divider/Divider.vue'
import Dialog from '../../../../../src/components/dialog'
import Toast from '../../../../../src/components/toast'

const visible = ref(false)

// 自定义内容区域 - 模拟ExclamationCircleFill图标
const showCustomContent = () => {
  Dialog.alert({
    header: h('div', {
      style: {
        fontSize: '64px',
        color: 'var(--adm-color-warning)',
        textAlign: 'center'
      }
    }, '⚠️'),
    title: '注意',
    content: h('div', [
      h('div', '请用手机拍摄手持工牌照，注意保持照片清晰'),
      h('div', [
        '详情说明请查阅',
        h('a', { style: { color: 'var(--adm-color-primary)' } }, '操作指引')
      ])
    ])
  })
}

// 有标题和图片
const showWithImageAndTitle = () => {
  Dialog.alert({
    image: 'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
    title: '手持工牌照示例',
    content: '请用手机拍摄手持工牌照，注意保持照片清晰'
  })
}

// 超长文本
const showLongContent = () => {
  const longText = '这是一段很长的文本内容，用来演示对话框在内容过长时的滚动效果。' +
    '当内容超出对话框的最大高度时，内容区域会变为可滚动状态，用户可以通过滚动来查看全部内容。' +
    '这样可以确保对话框不会因为内容过多而占据整个屏幕，保持良好的用户体验。' +
    '在实际使用中，我们建议尽量保持对话框内容的简洁性，避免在对话框中放置过多的信息。' +
    '如果确实需要展示大量信息，可以考虑使用其他组件，如页面跳转或者抽屉组件。' +
    '这段文本只是为了演示滚动效果，在实际开发中应该根据具体需求来组织内容。' +
    '对话框应该主要用于重要信息的提示和简单的用户操作确认。'

  Dialog.confirm({
    title: '提示',
    content: longText
  })
}

// 等待alert完成
const waitForAlert = async () => {
  await Dialog.alert({
    content: '人在天边月上明'
  })
  Toast.show({ content: '已关闭', position: 'bottom' })
}

// 等待confirm完成
const waitForConfirm = async () => {
  const result = await Dialog.confirm({
    content: '人在天边月上明'
  })
  if (result) {
    Toast.show({ content: '点击了确认', position: 'bottom' })
  } else {
    Toast.show({ content: '点击了取消', position: 'bottom' })
  }
}

// 自定义关闭操作
let handler: { close: () => void } | null = null

const showImperative = () => {
  handler = Dialog.show({
    content: '人在天边月上明，风初紧，吹入画帘旌',
    actions: [
      {
        key: 'close',
        text: '关闭',
        onClick: () => {
          if (Math.random() > 0.5) {
            handler?.close()
          } else {
            Toast.show('再试一下')
          }
        }
      }
    ]
  })
}
</script>
