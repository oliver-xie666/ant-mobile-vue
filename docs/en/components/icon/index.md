# Icon

The icons are in a separate npm package. If you want to use the icons, you need to install it first:

```bash
npm install --save ant-mobile-vue-icons
# or
yarn add ant-mobile-vue-icons
# or
pnpm add ant-mobile-vue-icons
```

Then just import the icons you need from this package:

```js
import { AntOutline } from 'ant-mobile-vue-icons'
```

Since the mainstream build tools automatically do Tree-Shaking, only the icons you use will be packaged in, so you don't have to worry about package size.

## Icon List

<DemoBlock>
  <IconDemoAll />
</DemoBlock>

## Example

<DemoBlock>
  <IconDemoSingle />
</DemoBlock>

## API

### Icon Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Icon color | `string` | `currentColor` |
| size | Icon size | `string \| number` | `inherit` |

### Common Icons

#### Basic Icons
- AntOutline
- CheckOutline
- CloseOutline
- SearchOutline
- MoreOutline

#### Direction Icons  
- LeftOutline
- RightOutline
- UpOutline
- DownOutline

#### Function Icons
- AddOutline
- MinusOutline
- EditOutline
- DeleteOutline
- ShareOutline

For more icons, please check the complete icon list.

## Custom Icons

If you need custom icons, you can refer to the following approach:

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