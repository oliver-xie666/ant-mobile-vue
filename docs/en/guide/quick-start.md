# Quick Start

This guide will help you get started with ant-mobile-vue quickly.

## Installation

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

## Import Styles

You need to import the CSS file manually:

```js
import 'ant-mobile-vue/dist/style.css'
```

## Usage

### Full Import

```js
// main.js
import { createApp } from 'vue'
import AntMobileVue from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AntMobileVue)
app.mount('#app')
```

### On-demand Import (Recommended)

```js
// main.js
import { createApp } from 'vue'
import { Button, Space, Tag } from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button).use(Space).use(Tag)
app.mount('#app')
```

### Single Component Import

```vue
<template>
  <div>
    <Button color="primary">Primary Button</Button>
    <Space direction="vertical">
      <Tag color="success">Success Tag</Tag>
      <Tag color="warning">Warning Tag</Tag>
    </Space>
  </div>
</template>

<script setup>
import { Button, Space, Tag } from 'ant-mobile-vue'
</script>
```

## Development Environment Setup

### Vite

If you're using Vite, we recommend adding the following configuration to `vite.config.js`:

```js
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

### Webpack

For Webpack users, add the following configuration:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
}
```

### TypeScript

If you're using TypeScript, add type declarations to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["ant-mobile-vue/global"]
  }
}
```

## Automatic Import (Recommended)

For better development experience, we recommend using `unplugin-vue-components` for automatic component imports:

### Installation

```bash
npm install unplugin-vue-components -D
```

### Configuration

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import { AntMobileVueResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    Components({
      resolvers: [AntMobileVueResolver()]
    })
  ]
}
```

After configuration, you can use components directly without manual imports:

```vue
<template>
  <div>
    <Button color="primary">Button</Button>
    <Space>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
    </Space>
  </div>
</template>

<script setup>
// No need to import, the plugin handles it automatically
</script>
```

## Theme Customization

ant-mobile-vue uses CSS variables for theme customization. You can customize the theme by overriding CSS variables:

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;
}
```

For more details, see [Theme Customization](/en/guide/theming).

## Example Application

Here's a complete example application:

```vue
<template>
  <div class="app">
    <Space direction="vertical" :size="16">
      <Button color="primary" block>Primary Button</Button>
      <Button color="success" block>Success Button</Button>
      <Button color="warning" block>Warning Button</Button>
      <Button color="danger" block>Danger Button</Button>
      
      <Divider>Tags</Divider>
      
      <Space wrap>
        <Tag color="primary">Primary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
      </Space>
      
      <Divider>Loading</Divider>
      
      <DotLoading color="primary" />
    </Space>
  </div>
</template>

<script setup>
import { Button, Space, Tag, Divider, DotLoading } from 'ant-mobile-vue'
</script>

<style>
.app {
  padding: 16px;
}
</style>
```

## Next Steps

- Learn about [Theme Customization](/en/guide/theming)
- Explore [Components](/en/components/button)
- Check out [CSS Variables](/en/guide/css-variables)
- Read the [FAQ](/en/guide/faq)

## Need Help?

- Check our [FAQ](/en/guide/faq)
- Search [GitHub Issues](https://github.com/oliver-xie666/ant-mobile-vue/issues)
- Join our [GitHub Discussions](https://github.com/oliver-xie666/ant-mobile-vue/discussions)