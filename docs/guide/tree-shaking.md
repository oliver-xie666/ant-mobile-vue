# 按需引入

Ant Mobile Vue 支持基于 ES modules 的 tree shaking，可以减少打包后的代码体积。

## 🌟 使用方式

### 方式一：手动按需引入

手动引入所需的组件和样式：

```typescript
// 引入组件
import { Button } from 'ant-mobile-vue/lib/button'
import { Tag } from 'ant-mobile-vue/lib/tag'

// 引入样式
import 'ant-mobile-vue/lib/button/index.css'
import 'ant-mobile-vue/lib/tag/index.css'
```

### 方式二：babel-plugin-import 自动引入

安装 `babel-plugin-import`：

```bash
npm install babel-plugin-import --save-dev
```

在 `babel.config.js` 或 `.babelrc` 中配置：

```javascript
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-mobile-vue',
        libraryDirectory: 'lib',
        style: true,
      },
      'ant-mobile-vue'
    ]
  ]
}
```

然后可以直接按需引入：

```typescript
import { Button, Tag } from 'ant-mobile-vue'
```

编译后会自动转换为：

```typescript
import Button from 'ant-mobile-vue/lib/button'
import Tag from 'ant-mobile-vue/lib/tag'
import 'ant-mobile-vue/lib/button/index.css'
import 'ant-mobile-vue/lib/tag/index.css'
```

## 📦 支持的组件

当前支持按需引入的组件：

| 组件名称 | 引入路径 | 说明 |
| --- | --- | --- |
| Button | `ant-mobile-vue/lib/button` | 按钮组件 |
| DotLoading | `ant-mobile-vue/lib/dot-loading` | 点状加载组件 |
| Divider | `ant-mobile-vue/lib/divider` | 分割线组件 |
| Space | `ant-mobile-vue/lib/space` | 间距组件 |
| Tag | `ant-mobile-vue/lib/tag` | 标签组件 |

## 🎯 TypeScript 支持

所有组件都包含完整的 TypeScript 类型定义：

```typescript
import type { ButtonProps } from 'ant-mobile-vue/lib/button'
import type { TagProps } from 'ant-mobile-vue/lib/tag'

const buttonProps: ButtonProps = {
  color: 'primary',
  size: 'large'
}
```

## 🔧 Vite 支持

Vite 原生支持 ES modules 的 tree shaking，无需额外配置：

```typescript
// vite.config.ts 无需特殊配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
```

## 📊 体积对比

使用按需引入可以显著减少打包体积：

| 引入方式 | 打包体积 | 说明 |
| --- | --- | --- |
| 完整引入 | ~150KB | 包含所有组件和样式 |
| 按需引入(5个组件) | ~45KB | 仅包含使用的组件 |
| 按需引入(1个组件) | ~12KB | 最小化引入 |

## ⚠️ 注意事项

1. **样式引入**：确保引入对应的 CSS 文件，否则组件样式会丢失
2. **全局样式**：如果需要全局样式变量，可以额外引入：
   ```typescript
   import 'ant-mobile-vue/lib/global.css'
   ```
3. **构建缓存**：修改 babel 配置后，建议清除构建缓存

## 🌍 在不同环境中使用

### Create Vue

```javascript
// babel.config.js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-mobile-vue',
        libraryDirectory: 'lib',
        style: true,
      }
    ]
  ]
}
```

### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['ant-mobile-vue']
  },
  css: ['ant-mobile-vue/lib/global.css']
})
```

### Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'import',
                {
                  libraryName: 'ant-mobile-vue',
                  libraryDirectory: 'lib',
                  style: true,
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
```