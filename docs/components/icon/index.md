# Icon 图标

图标是在一个单独的 npm 包中，如果你想使用图标，需要先安装它：

```bash
npm install --save ant-mobile-vue-icons
# or
yarn add ant-mobile-vue-icons
# or
pnpm add ant-mobile-vue-icons
```

然后从这个包中引入你所需要的图标即可：

```js
import { AntOutline } from 'ant-mobile-vue-icons'
```

由于主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

## 图标列表

<DemoBlock>
  <IconDemoAll />
</DemoBlock>

## 使用示例

<DemoBlock>
  <IconDemoSingle />
</DemoBlock>

## API

### Icon 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 图标颜色 | `string` | `currentColor` |
| size | 图标大小 | `string \| number` | `inherit` |

### 常用图标

#### 基础图标
- AntOutline
- CheckOutline
- CloseOutline
- SearchOutline
- MoreOutline

#### 方向图标  
- LeftOutline
- RightOutline
- UpOutline
- DownOutline

#### 功能图标
- AddOutline
- MinusOutline
- EditOutline
- DeleteOutline
- ShareOutline

更多图标请查看完整的图标列表。

## 自定义图标

如果你需要自定义图标，可以参考以下方式：

```vue
<template>
  <svg 
    viewBox="0 0 1024 1024" 
    :style="{ 
      width: size, 
      height: size, 
      fill: color 
    }"
  >
    <path d="your-svg-path" />
  </svg>
</template>

<script setup>
interface Props {
  size?: string | number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 'inherit',
  color: 'currentColor'
})
</script>
```