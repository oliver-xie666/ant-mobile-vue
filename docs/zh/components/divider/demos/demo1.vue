<template>
  <div>
    <DemoBlock title="基础分割线">
      <Divider />
    </DemoBlock>

    <DemoBlock title="带内容的分割线">
      <Divider>默认内容在中间</Divider>
      <Divider content-position="left">左侧内容</Divider>
      <Divider content-position="right">右侧内容</Divider>
    </DemoBlock>

    <DemoBlock title="自定义样式">
      <Divider
        :style="{
          color: '#1677ff',
          borderColor: '#1677ff',
          borderStyle: 'dashed',
        }"
      >
        自定义样式
      </Divider>
    </DemoBlock>

    <DemoBlock title="竖向分割线">
      <div>
        Text
        <Divider direction="vertical" />
        <a href="#">Link</a>
        <Divider direction="vertical" />
        <a href="#">Link</a>
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import Divider from '../../../../../src/components/divider/Divider.vue'
// 移除DemoBlock导入
</script>
