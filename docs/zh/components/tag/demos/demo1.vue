<template>
  <div>
    <DemoBlock title="基础用法">
      <Tag>123</Tag>
    </DemoBlock>

    <DemoBlock title="线框标签">
      <Space>
        <Tag color="primary" fill="outline">
          Primary
        </Tag>
        <Tag color="#87d068" fill="outline">
          #87d068
        </Tag>
        <Tag color="#ff6430" fill="outline">
          #ff6430
        </Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title="语义标签">
      <Space>
        <Tag color="default">Default</Tag>
        <Tag color="primary">测试</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title="圆角标签">
      <Tag round color="#2db7f5">
        kongxin
      </Tag>
    </DemoBlock>

    <DemoBlock title="自定义颜色">
      <Space>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title="通过 CSS 变量个性化">
      <Space>
        <Tag
          color="primary"
          fill="outline"
          class="custom-border-radius"
        >
          Primary
        </Tag>
        <Tag
          color="success"
          fill="outline"
          class="custom-background"
        >
          Success
        </Tag>
        <Tag
          color="warning"
          class="custom-text-color"
        >
          Warning
        </Tag>
        <Tag
          color="danger"
          fill="outline"
          class="custom-border-color"
        >
          Danger
        </Tag>
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import Tag from '../../../../../src/components/tag/Tag.vue'
import Space from '../../../../../src/components/space/Space.vue'
// 移除DemoBlock导入
</script>

<style scoped>
.custom-border-radius {
  --border-radius: 6px;
}

.custom-background {
  --background-color: #c8f7c5;
}

.custom-text-color {
  --text-color: var(--adm-color-text);
}

.custom-border-color {
  --border-color: var(--adm-color-weak);
}
</style>
