<template>
  <div>
    <!-- 基础用法 -->
    <DemoBlock title="基础用法">
      <Button @click="showBasic">轻提示</Button>
    </DemoBlock>

    <!-- 图标 -->
    <DemoBlock title="图标">
      <Space wrap>
        <Button @click="showSuccess">成功</Button>
        <Button @click="showFail">失败</Button>
        <Button @click="showLoading">加载中</Button>
      </Space>
    </DemoBlock>

    <!-- 位置 -->
    <DemoBlock title="位置">
      <Space wrap>
        <Button @click="showTop">顶部</Button>
        <Button @click="showCenter">中央</Button>
        <Button @click="showBottom">底部</Button>
      </Space>
    </DemoBlock>

    <!-- 更多功能 -->
    <DemoBlock title="更多功能">
      <Space wrap>
        <Button @click="showLong">长时间</Button>
        <Button @click="showNoAutoClose">不自动关闭</Button>
        <Button @click="showAndClose">显示后手动关闭</Button>
        <Button @click="clearAll">清除所有</Button>
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toast from '../../../../../src/components/toast'
import Button from '../../../../../src/components/button/Button.vue'
import Space from '../../../../../src/components/space/Space.vue'
import DemoBlock from '../../../../.vitepress/theme/components/DemoBlock.vue'

const handler = ref<ReturnType<typeof Toast.show> | null>(null)

const showBasic = () => {
  Toast.show({
    content: 'Hello World, This is a long text',
    afterClose: () => {
      console.log('Toast closed')
    },
  })
}

const showSuccess = () => {
  Toast.success('保存成功')
}

const showFail = () => {
  Toast.fail('名称已存在')
}

const showLoading = () => {
  Toast.loading('加载中…')
}

const showTop = () => {
  Toast.show({
    content: '顶部提示',
    position: 'top',
  })
}

const showCenter = () => {
  Toast.show({
    content: '中央提示',
    position: 'center',
  })
}

const showBottom = () => {
  Toast.show({
    content: '底部提示',
    position: 'bottom',
  })
}

const showLong = () => {
  Toast.show({
    content: '这是一个长时间的提示',
    duration: 5000,
  })
}

const showNoAutoClose = () => {
  Toast.show({
    content: '不会自动关闭',
    duration: 0,
  })
}

const showAndClose = () => {
  handler.value = Toast.show({
    content: '3秒后手动关闭',
    duration: 0,
  })

  setTimeout(() => {
    handler.value?.close()
  }, 3000)
}

const clearAll = () => {
  Toast.clear()
}
</script>
