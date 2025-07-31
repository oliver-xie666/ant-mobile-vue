# Import on Demand

To avoid importing the entire component library and causing excessive bundle size, ant-mobile-vue supports multiple ways of on-demand importing.

## Automatic On-demand Import (Recommended)

### Using unplugin-vue-components

This is the most recommended approach, enabling automatic on-demand import of components and styles:

#### 1. Install Plugin

```bash
npm install unplugin-vue-components -D
```

#### 2. Configure Vite

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

#### 3. Configure Webpack

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

#### 4. Use Components Directly

After configuration, you can use components directly in Vue files without manual imports:

```vue
<template>
  <div>
    <Button type="primary">Button</Button>
    <Space direction="vertical">
      <Tag color="primary">Tag 1</Tag>
      <Tag color="success">Tag 2</Tag>
    </Space>
  </div>
</template>

<script setup>
// No need to import, plugin handles it automatically
</script>
```

The plugin will automatically transform to:

```vue
<script setup>
import { Button, Space, Tag } from 'ant-mobile-vue'
</script>
```

## Manual On-demand Import

If you don't want to use the automatic import plugin, you can also manually import components on demand.

### 1. Import Components

```vue
<template>
  <div>
    <Button type="primary">Button</Button>
    <Tag color="primary">Tag</Tag>
  </div>
</template>

<script setup>
import { Button, Tag } from 'ant-mobile-vue'
</script>
```

### 2. Import Styles

With manual on-demand imports, you need to import styles separately:

```js
// main.js
import 'ant-mobile-vue/es/button/style'
import 'ant-mobile-vue/es/tag/style'
```

Or import in CSS files:

```css
/* styles/ant-mobile-vue.css */
@import 'ant-mobile-vue/es/button/style/index.css';
@import 'ant-mobile-vue/es/tag/style/index.css';
```

## Using babel-plugin-import

If you're using Babel, you can configure `babel-plugin-import` for on-demand imports:

### 1. Install Plugin

```bash
npm install babel-plugin-import -D
```

### 2. Configure Babel

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

### 3. Usage

```js
import { Button, Tag } from 'ant-mobile-vue'
```

Will be automatically transformed to:

```js
import Button from 'ant-mobile-vue/es/button'
import 'ant-mobile-vue/es/button/style'
import Tag from 'ant-mobile-vue/es/tag'
import 'ant-mobile-vue/es/tag/style'
```

## Tree Shaking

Modern bundlers (like Vite, Webpack 5) support Tree Shaking, which automatically removes unused code.

Ensure your `package.json` has the correct configuration:

```json
{
  "sideEffects": false
}
```

Or mark only style files as having side effects:

```json
{
  "sideEffects": ["*.css", "*.less"]
}
```

## Comparing Different Methods

| Method | Pros | Cons | Rating |
|--------|------|------|--------|
| unplugin-vue-components | Automatic, no manual imports needed | Requires configuration | ⭐⭐⭐⭐⭐ |
| Manual on-demand import | Full control | Requires manual maintenance | ⭐⭐⭐ |
| babel-plugin-import | Automatic transformation | Depends on Babel | ⭐⭐⭐⭐ |
| Tree Shaking | Simple | May not be precise enough | ⭐⭐⭐⭐ |

## Best Practices

### 1. Recommend Using Automatic On-demand Import

For most projects, we recommend using `unplugin-vue-components`:

- Great developer experience
- Automatically handles style imports
- Supports multiple bundlers

### 2. Style On-demand Import

Ensure you only import styles for components you use:

```js
// ❌ Imports all styles
import 'ant-mobile-vue/dist/style.css'

// ✅ Only imports styles for used components
import 'ant-mobile-vue/es/button/style'
import 'ant-mobile-vue/es/tag/style'
```

### 3. Combine Usage

You can combine global components with on-demand imports:

```js
// main.js - Register commonly used components
import { createApp } from 'vue'
import { Button, Space } from 'ant-mobile-vue'

const app = createApp(App)
app.use(Button)
app.use(Space)
```

```vue
<!-- Import special components on demand in pages -->
<script setup>
import { DatePicker } from 'ant-mobile-vue'
</script>
```

### 4. Check Bundle Results

Use bundle analysis tools to check final bundle size:

```bash
# Vite
npx vite-bundle-analyzer

# Webpack
npm install webpack-bundle-analyzer -D
```

With proper on-demand import configuration, you can significantly reduce your project's bundle size and improve application performance.