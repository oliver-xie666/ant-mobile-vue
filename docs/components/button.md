# Button 按钮

用于触发一个操作，如提交表单。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

按钮有五种类型：主要按钮、默认按钮、成功按钮、警告按钮和危险按钮。

<DemoBlock>
  <Space direction="vertical" block>
    <Button color="primary">主要按钮</Button>
    <Button>默认按钮</Button>
    <Button color="success">成功按钮</Button>
    <Button color="warning">警告按钮</Button>
    <Button color="danger">危险按钮</Button>
  </Space>

  <template #code>

```vue
<template>
  <Space direction="vertical" block>
    <Button color="primary">主要按钮</Button>
    <Button>默认按钮</Button>
    <Button color="success">成功按钮</Button>
    <Button color="warning">警告按钮</Button>
    <Button color="danger">危险按钮</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

  </template>
</DemoBlock>

### 填充模式

<DemoBlock>
  <Space direction="vertical" block>
    <Button color="primary" fill="solid">实心按钮</Button>
    <Button color="primary" fill="outline">线框按钮</Button>
    <Button color="primary" fill="none">幽灵按钮</Button>
  </Space>

  <template #code>

```vue
<template>
  <Space direction="vertical" block>
    <Button color="primary" fill="solid">实心按钮</Button>
    <Button color="primary" fill="outline">线框按钮</Button>
    <Button color="primary" fill="none">幽灵按钮</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

  </template>
</DemoBlock>

### 按钮尺寸

<DemoBlock>
  <Space wrap>
    <Button size="mini" color="primary">迷你</Button>
    <Button size="small" color="primary">小号</Button>
    <Button size="middle" color="primary">中号</Button>
    <Button size="large" color="primary">大号</Button>
  </Space>

  <template #code>

```vue
<template>
  <Space wrap>
    <Button size="mini" color="primary">迷你</Button>
    <Button size="small" color="primary">小号</Button>
    <Button size="middle" color="primary">中号</Button>
    <Button size="large" color="primary">大号</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

  </template>
</DemoBlock>

### 块级按钮

```vue
<template>
  <Space direction="vertical" block>
    <Button block color="primary">块级按钮</Button>
    <Button block color="primary" fill="outline">块级按钮</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

### 禁用状态

```vue
<template>
  <Space wrap>
    <Button disabled>禁用按钮</Button>
    <Button disabled color="primary">禁用按钮</Button>
    <Button disabled color="primary" fill="outline">禁用按钮</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

### 加载状态

<DemoBlock>
  <Space direction="vertical" block>
    <Button loading color="primary">加载中</Button>
    <Button loading loading-text="努力加载中..." color="primary">
      加载中
    </Button>
    <Button 
      :loading="loading" 
      color="primary" 
      @click="handleClick"
    >
      点击加载
    </Button>
  </Space>

  <template #code>

```vue
<template>
  <Space direction="vertical" block>
    <Button loading color="primary">加载中</Button>
    <Button loading loading-text="努力加载中..." color="primary">
      加载中
    </Button>
    <Button 
      :loading="loading" 
      color="primary" 
      @click="handleClick"
    >
      点击加载
    </Button>
  </Space>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Space } from 'ant-mobile-vue'

const loading = ref(false)

const handleClick = async () => {
  loading.value = true
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}
</script>
```

  </template>
</DemoBlock>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = async () => {
  loading.value = true
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
}
</script>

### 按钮形状

```vue
<template>
  <Space wrap>
    <Button shape="default">默认</Button>
    <Button shape="rounded" color="primary">圆角</Button>
    <Button shape="rectangular" color="success">直角</Button>
  </Space>
</template>

<script setup>
import { Button, Space } from 'ant-mobile-vue'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 按钮的颜色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline' \| 'none'` | `'solid'` |
| size | 大小 | `'mini' \| 'small' \| 'middle' \| 'large'` | `'middle'` |
| block | 是否是块级元素 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean \| 'auto'` | `false` |
| loadingText | 加载中的文字 | `string` | - |
| loadingIcon | 加载中的图标 | `Component` | - |
| shape | 按钮的形状 | `'default' \| 'rounded' \| 'rectangular'` | `'default'` |
| type | 原生 button 的 type 属性 | `'submit' \| 'reset' \| 'button'` | `'button'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | `(event: MouseEvent) => void` |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --text-color | 文字颜色 | - | - |
| --background-color | 背景颜色 | - | - |
| --border-color | 边框颜色 | - | - |
| --border-radius | 圆角 | `4px` | `--adm-button-border-radius` |
| --border-width | 边框宽度 | `1px` | `--adm-button-border-width` |
| --border-style | 边框样式 | `solid` | `--adm-button-border-style` |

## 设计指导

### 按钮类型选择

- **主要按钮**：用于主要操作，一个操作区域只能有一个主要按钮
- **默认按钮**：用于没有主次之分的一组行动点
- **成功按钮**：用于完成、确认类操作
- **警告按钮**：用于警告、需要谨慎操作的场景
- **危险按钮**：用于删除、移除等不可逆操作

### 按钮尺寸使用

- **大号按钮**：主要用于页面主要操作
- **中号按钮**：最常用的按钮尺寸
- **小号按钮**：用于较小的操作区域
- **迷你按钮**：用于极小的操作区域或表格中

### 填充模式选择

- **实心按钮**：最常用的按钮样式，适用于大部分场景
- **线框按钮**：用于次要操作或与实心按钮组合使用
- **幽灵按钮**：用于有颜色背景的场景