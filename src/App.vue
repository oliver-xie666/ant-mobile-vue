<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/button/Button.vue'
import DotLoading from './components/dot-loading/DotLoading.vue'

const loading = ref(false)

const handleAsyncClick = async () => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
}

const handleClick = () => {
  console.log('Button clicked!')
}

</script>

<template>
  <div class="demo-container">
    <h1>Ant Mobile Vue - Button Component Demo</h1>

    <section class="demo-section">
      <h2>基础按钮</h2>
      <div class="demo-group">
        <Button @click="handleClick">Default</Button>
        <Button color="primary" @click="handleClick">Primary</Button>
        <Button color="success" @click="handleClick">Success</Button>
        <Button color="warning" @click="handleClick">Warning</Button>
        <Button color="danger" @click="handleClick">Danger</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>按钮填充</h2>
      <div class="demo-group">
        <Button color="primary" fill="solid">Solid</Button>
        <Button color="primary" fill="outline">Outline</Button>
        <Button color="primary" fill="none">None</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>按钮尺寸</h2>
      <div class="demo-group">
        <Button size="mini">Mini</Button>
        <Button size="small">Small</Button>
        <Button size="middle">Middle</Button>
        <Button size="large">Large</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>按钮形状</h2>
      <div class="demo-group">
        <Button shape="default">Default</Button>
        <Button shape="rounded">Rounded</Button>
        <Button shape="rectangular">Rectangular</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>加载状态</h2>
      <div class="demo-group">
        <Button :loading="loading" @click="loading = !loading">
          {{ loading ? 'Loading...' : 'Toggle Loading' }}

        </Button>
        <Button loading="auto" color="primary" @click="handleAsyncClick">
          Async Action
        </Button>
        <Button loading loadingText="Loading...">Loading Button</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-group">
        <Button disabled>Disabled</Button>
        <Button color="primary" disabled>Primary Disabled</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>块级按钮</h2>
      <div class="demo-group">
        <Button block color="primary">Block Button</Button>
        <Button block color="success" fill="outline">Block Outline</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>Loading 组件</h2>
      <div class="demo-group">
        <DotLoading />
        <DotLoading color="primary" />
        <DotLoading color="white" style="background: #333; padding: 10px;" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 30px;
}

.demo-section h2 {
  margin-bottom: 15px;
  color: var(--adm-color-text);
  font-size: 18px;
}

.demo-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.demo-group .adm-button {
  margin-right: 12px;
  margin-bottom: 8px;
}

.demo-group .adm-button.adm-button-block {
  margin-right: 0;
  margin-bottom: 12px;
}
</style>
