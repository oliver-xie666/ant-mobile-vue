<template>
  <div>
    <DemoBlock title="自定义图标">
      <Button>
        <Space>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <span>搜索</span>
        </Space>
      </Button>
    </DemoBlock>

    <DemoBlock title="形状">
      <Space wrap>
        <Button shape="default" color="primary">
          Default Button
        </Button>
        <Button block shape="rounded" color="primary">
          Rounded Button
        </Button>
        <Button block shape="rectangular" color="primary">
          Rectangular Button
        </Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="加载状态">
      <Space wrap>
        <Button loading color="primary" loading-text="正在加载">
          Loading
        </Button>
        <Button loading>Loading</Button>
        <Button
          loading="auto"
          @click="handleAutoLoading"
        >
          Auto Loading
        </Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="禁用状态">
      <Space wrap>
        <Button disabled>Disabled</Button>
        <Button disabled color="primary">
          Disabled
        </Button>
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../../../src/components/button/Button.vue'
import Space from '../../../../../src/components/space/Space.vue'
// 使用内联SVG图标替代

const handleAutoLoading = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>


