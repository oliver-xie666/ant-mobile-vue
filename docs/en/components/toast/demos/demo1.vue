<template>
  <div>
    <!-- Basic Usage -->
    <DemoBlock title="Basic Usage">
      <Button @click="showBasic">Show Toast</Button>
    </DemoBlock>

    <!-- Icons -->
    <DemoBlock title="Icons">
      <Space wrap>
        <Button @click="showSuccess">Success</Button>
        <Button @click="showFail">Fail</Button>
        <Button @click="showLoading">Loading</Button>
      </Space>
    </DemoBlock>

    <!-- Position -->
    <DemoBlock title="Position">
      <Space wrap>
        <Button @click="showTop">Top</Button>
        <Button @click="showCenter">Center</Button>
        <Button @click="showBottom">Bottom</Button>
      </Space>
    </DemoBlock>

    <!-- More Features -->
    <DemoBlock title="More Features">
      <Space wrap>
        <Button @click="showLong">Long Duration</Button>
        <Button @click="showNoAutoClose">No Auto Close</Button>
        <Button @click="showAndClose">Manual Close</Button>
        <Button @click="clearAll">Clear All</Button>
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
  Toast.success('Save success')
}

const showFail = () => {
  Toast.fail('Name already exists')
}

const showLoading = () => {
  Toast.loading('Loading…')
}

const showTop = () => {
  Toast.show({
    content: 'Top toast',
    position: 'top',
  })
}

const showCenter = () => {
  Toast.show({
    content: 'Center toast',
    position: 'center',
  })
}

const showBottom = () => {
  Toast.show({
    content: 'Bottom toast',
    position: 'bottom',
  })
}

const showLong = () => {
  Toast.show({
    content: 'This is a long duration toast',
    duration: 5000,
  })
}

const showNoAutoClose = () => {
  Toast.show({
    content: 'Will not auto close',
    duration: 0,
  })
}

const showAndClose = () => {
  handler.value = Toast.show({
    content: 'Close manually after 3s',
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
