<template>
  <div class="button-demos">
    <div class="demo-section">
      <h4>填充模式</h4>
      <Space wrap>
        <Button color="primary" fill="solid">
          Solid
        </Button>
        <Button color="primary" fill="outline">
          Outline
        </Button>
        <Button color="primary" fill="none">
          None
        </Button>
      </Space>
    </div>

    <div class="demo-section">
      <h4>块级按钮</h4>
      <Button block color="primary" size="large">
        Block Button
      </Button>
    </div>

    <div class="demo-section">
      <h4>按钮尺寸</h4>
      <Space wrap align="center">
        <Button size="mini" color="primary">
          Mini
        </Button>
        <Button size="small" color="primary">
          Small
        </Button>
        <Button size="middle" color="primary">
          Middle
        </Button>
        <Button size="large" color="primary">
          Large
        </Button>
      </Space>
    </div>

    <div class="demo-section">
      <h4>语义按钮</h4>
      <Space wrap>
        <Button @click="handleClick">
          Default
        </Button>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../../../src/components/button/Button.vue'
import Space from '../../../../../src/components/space/Space.vue'

const handleClick = () => {
  alert('hello.')
}

// Auto loading handler moved to demo2
</script>

<style scoped>
.button-demos {
  padding: 16px;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-section h4 {
  margin: 0 0 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.demo-section:last-child {
  margin-bottom: 0;
}
</style>
