# 快速开始

## 安装

### npm
```bash
npm install ant-mobile-vue
```

### yarn
```bash
yarn add ant-mobile-vue
```

### pnpm
```bash
pnpm add ant-mobile-vue
```

## 使用

### 完整引入
```typescript
// main.ts
import { createApp } from 'vue'
import AntMobileVue from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AntMobileVue)
app.mount('#app')
```

### 按需引入（推荐）
```typescript
// main.ts
import { createApp } from 'vue'
import { Button, Space, Tag } from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button).use(Space).use(Tag)
app.mount('#app')
```

### 单组件引入
```vue
<template>
  <div>
    <Button color="primary">主要按钮</Button>
    <Space direction="vertical">
      <Tag color="success">成功标签</Tag>
      <Tag color="warning">警告标签</Tag>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Button, Space, Tag } from 'ant-mobile-vue'
</script>
```

## 开发环境配置

### Vite
如果你使用 Vite，建议在 `vite.config.ts` 中添加以下配置：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
```

### TypeScript
如果你使用 TypeScript，需要在 `tsconfig.json` 中添加类型声明：

```json
{
  "compilerOptions": {
    "types": ["ant-mobile-vue/global"]
  }
}
```

## 样式定制

Ant Mobile Vue 使用 CSS Variables 来定义主题，你可以通过覆盖这些变量来自定义主题：

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;
  
  --adm-font-size-main: 14px;
  --adm-line-height: 1.5;
}
```

## 按需加载优化

为了减小打包体积，推荐使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 实现自动按需引入：

### 安装
```bash
npm install -D unplugin-vue-components
```

### 配置
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntMobileVueResolver } from 'ant-mobile-vue/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntMobileVueResolver()],
    }),
  ],
})
```

这样配置后，你就可以直接在模板中使用组件，无需手动引入：

```vue
<template>
  <!-- 自动按需引入 -->
  <Button color="primary">按钮</Button>
  <Space>
    <Tag>标签1</Tag>
    <Tag>标签2</Tag>
  </Space>
</template>

<script setup lang="ts">
// 无需手动引入组件
</script>
```

## 下一步

- 📖 查看 [组件文档](/components/button) 了解具体用法
- 🎨 学习 [主题定制](/guide/theming) 自定义样式
- 💡 参考源项目 [Ant Design Mobile](https://mobile.ant.design/) 的设计规范