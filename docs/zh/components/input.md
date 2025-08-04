# Input 输入框

通过键盘输入内容，是最基础的表单域包装。

## 何时使用

一般用在表单页进行信息的收集，提供文本框、选择框两种类型。

`Input` 组件是布局无关的， 它只包括了最基本的输入框部分，如果你想为它增加边框、标题、或是一些操作按钮，可以配合 `List` 或 `Form` 组件使用。

## 示例

<CodeDemo src="input/demos/demo1.vue" title="基础用法" />

<CodeDemo src="input/demos/demo2.vue" title="高级用法" />

## Input

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean` | `false` |
| clearIcon | 自定义清除图标 | `Component` | - |
| defaultValue | 默认值 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| id | `input` 元素的 `id`，常用来配合 `label` 使用 | `string` | - |
| max | 最大值，仅在 `type` 为 `number` 时生效 | `number` | - |
| min | 最小值，仅在 `type` 为 `number` 时生效 | `number` | - |
| modelValue / v-model | 输入值 | `string` | - |
| onlyShowClearWhenFocus | 如果 `true`，那么只有输入框聚焦时才会显示清除按钮；如果为 `false`，那么输入框失去焦点后依旧会显示清除按钮 | `boolean` | `true` |
| placeholder | 提示文本 | `string` | - |
| readonly | 是否只读 | `boolean` | `false` |

此外还支持以下原生属性：`maxlength` `minlength` `autocomplete` `autofocus` `enterkeyhint` `pattern` `inputmode` `type` `onFocus` `onBlur` `autocapitalize` `autocorrect` `onKeydown` `onKeyup` `onCompositionstart` `onCompositionend` `onClick` `step`

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| update:modelValue | 输入框内容变化时触发 | `(value: string) => void` |
| clear | 点击清除按钮后触发 | `() => void` |
| enter-press | 按下回车的回调 | `(e: KeyboardEvent) => void` |
| focus | 输入框聚焦时触发 | `(e: FocusEvent) => void` |
| blur | 输入框失焦时触发 | `(e: FocusEvent) => void` |

### 方法

通过 ref 可以获取到 Input 实例并调用实例方法：

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| blur | 让输入框失去焦点 | `() => void` |
| clear | 清空输入框内容 | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |
| nativeElement | 获取原生 input 元素 | `HTMLInputElement \| null` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --color | 文字颜色 | `var(--adm-color-text)` |
| --font-size | 字号 | `var(--adm-font-size-9)` |
| --placeholder-color | placeholder 文字颜色 | `var(--adm-color-light)` |
| --text-align | 文字对齐方式 | `left` |