# 按需引入

为了避免引入整个组件库导致包体积过大，ant-mobile-vue 支持多种按需引入的方式。

## 自动按需引入（推荐）

### 使用 unplugin-vue-components

这是最推荐的方式，可以实现自动按需引入组件和样式：

#### 1. 安装插件

```bash
npm install unplugin-vue-components -D
```

#### 2. 配置 Vite

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntMobileVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntMobileVueResolver()]
    })
  ]
})
```

#### 3. 配置 Webpack

```js
// webpack.config.js
const Components = require('unplugin-vue-components/webpack')
const { AntMobileVueResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  plugins: [
    Components({
      resolvers: [AntMobileVueResolver()]
    })
  ]
}
```

#### 4. 直接使用组件

配置完成后，你可以直接在 Vue 文件中使用组件，无需手动引入：

```vue
<template>
  <div>
    <Button type="primary">按钮</Button>
    <Space direction="vertical">
      <Tag color="primary">标签1</Tag>
      <Tag color="success">标签2</Tag>
    </Space>
  </div>
</template>

<script setup>
// 无需引入，插件会自动处理
</script>
```

插件会自动转换为：

```vue
<script setup>
import { Button, Space, Tag } from 'ant-mobile-vue'
</script>
```

## 手动按需引入

如果你不想使用自动引入插件，也可以手动按需引入组件。

### 1. 引入组件

```vue
<template>
  <div>
    <Button type="primary">按钮</Button>
    <Tag color="primary">标签</Tag>
  </div>
</template>

<script setup>
import { Button, Tag } from 'ant-mobile-vue'
</script>
```

### 2. 引入样式

手动按需引入时，你需要单独引入样式：

```js
// main.js
import 'ant-mobile-vue/es/button/style'
import 'ant-mobile-vue/es/tag/style'
```

或者在 CSS 文件中引入：

```css
/* styles/ant-mobile-vue.css */
@import 'ant-mobile-vue/es/button/style/index.css';
@import 'ant-mobile-vue/es/tag/style/index.css';
```

## 使用 babel-plugin-import

如果你使用 Babel，可以配置 `babel-plugin-import` 来实现按需引入：

### 1. 安装插件

```bash
npm install babel-plugin-import -D
```

### 2. 配置 Babel

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-mobile-vue',
        libraryDirectory: 'es',
        style: true
      },
      'ant-mobile-vue'
    ]
  ]
}
```

### 3. 使用

```js
import { Button, Tag } from 'ant-mobile-vue'
```

会被自动转换为：

```js
import Button from 'ant-mobile-vue/es/button'
import 'ant-mobile-vue/es/button/style'
import Tag from 'ant-mobile-vue/es/tag'
import 'ant-mobile-vue/es/tag/style'
```

## Tree Shaking

现代打包工具（如 Vite、Webpack 5）支持 Tree Shaking，可以自动删除未使用的代码。

确保你的 `package.json` 中有正确的配置：

```json
{
  "sideEffects": false
}
```

或者只对样式文件标记副作用：

```json
{
  "sideEffects": ["*.css", "*.less"]
}
```

## 对比不同方式

| 方式 | 优点 | 缺点 | 推荐指数 |
|------|------|------|----------|
| unplugin-vue-components | 自动化，无需手动引入 | 需要配置 | ⭐⭐⭐⭐⭐ |
| 手动按需引入 | 完全控制 | 需要手动维护 | ⭐⭐⭐ |
| babel-plugin-import | 自动转换 | 依赖 Babel | ⭐⭐⭐⭐ |
| Tree Shaking | 简单 | 可能不够精确 | ⭐⭐⭐⭐ |

## 最佳实践

### 1. 推荐使用自动按需引入

对于大部分项目，推荐使用 `unplugin-vue-components`：

- 开发体验好
- 自动处理样式引入
- 支持多种打包工具

### 2. 样式按需引入

确保只引入用到的组件样式：

```js
// ❌ 引入了全部样式
import 'ant-mobile-vue/dist/style.css'

// ✅ 只引入用到的组件样式
import 'ant-mobile-vue/es/button/style'
import 'ant-mobile-vue/es/tag/style'
```

### 3. 组合使用

你可以将全局组件和按需引入组合使用：

```js
// main.js - 注册常用组件
import { createApp } from 'vue'
import { Button, Space } from 'ant-mobile-vue'

const app = createApp(App)
app.use(Button)
app.use(Space)
```

```vue
<!-- 页面中按需引入特殊组件 -->
<script setup>
import { DatePicker } from 'ant-mobile-vue'
</script>
```

### 4. 检查打包结果

使用打包分析工具检查最终的包体积：

```bash
# Vite
npx vite-bundle-analyzer

# Webpack
npm install webpack-bundle-analyzer -D
```

通过合理的按需引入配置，可以显著减少项目的包体积，提升应用性能。