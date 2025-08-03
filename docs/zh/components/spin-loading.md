# SpinLoading 旋转加载

旋转动画样式的加载指示器，适用于需要展示加载状态的场景。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时
- 需要一个较为精致的加载动画时
- 相比 DotLoading，SpinLoading 视觉效果更加丰富

## 代码演示

<code src="./spin-loading/demos/demo1.vue"></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 线条颜色，等效于手动设置 `--color` CSS 变量 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --color | 线条颜色 | `var(--adm-color-weak)` |
| --size | 大小 | `32px` |

## 大小控制

`SpinLoading` 的大小可以通过 CSS 变量 `--size` 进行控制：

```css
.custom-spin-loading {
  --size: 48px;
}
```

或者直接在样式中设置：

```vue
<SpinLoading :style="{ '--size': '48px' }" />
```

## 主题定制

### 颜色

可以通过 `color` 属性或 CSS 变量来自定义颜色：

```vue
<!-- 使用预设颜色 -->
<SpinLoading color="primary" />

<!-- 使用自定义颜色 -->
<SpinLoading color="#ff6600" />

<!-- 使用 CSS 变量 -->
<SpinLoading :style="{ '--color': 'red' }" />
```