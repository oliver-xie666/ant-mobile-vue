# Input

Entering content through the keyboard is the most basic form field wrapper.

## When to Use

It is generally used in form pages to collect information, and provides two types of text boxes and selection boxes.

The `Input` component is layout-independent. It only includes the most basic input box part. If you want to add borders, titles, or some operation buttons to it, you can use it with the `List` or `Form` components.

## Demos

<CodeDemo src="input/demos/demo1.vue" title="Basic Usage" />

<CodeDemo src="input/demos/demo2.vue" title="Advanced Usage" />

## Input

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| clearable | Whether to enable the clear icon, the input box will be cleared after clicking the clear icon | `boolean` | `false` |
| clearIcon | Custom clear icon | `Component` | - |
| defaultValue | The default value | `string` | - |
| disabled | Whether it is disabled or not | `boolean` | `false` |
| id | The `id` of the `input` element, usually used with `label` | `string` | - |
| max | Maximum value, only valid when `type` is `number` | `number` | - |
| min | Minimum value, only valid when `type` is `number` | `number` | - |
| modelValue / v-model | The input value | `string` | - |
| onlyShowClearWhenFocus | If `true`, the clear button will only be displayed when the input box is focused. If `false`, the clear button will still be displayed after the input box loses focus. | `boolean` | `true` |
| placeholder | The prompt text | `string` | - |
| readonly | Whether it is readonly or not | `boolean` | `false` |

In addition, the following native attributes are supported: `maxlength` `minlength` `autocomplete` `autofocus` `enterkeyhint` `pattern` `inputmode` `type` `onFocus` `onBlur` `autocapitalize` `autocorrect` `onKeydown` `onKeyup` `onCompositionstart` `onCompositionend` `onClick` `step`

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:modelValue | Triggered when the input content is changed | `(value: string) => void` |
| clear | Triggered after clicking the clear button | `() => void` |
| enter-press | The callback when Enter key is pressed | `(e: KeyboardEvent) => void` |
| focus | Triggered when the input box gets focus | `(e: FocusEvent) => void` |
| blur | Triggered when the input box loses focus | `(e: FocusEvent) => void` |

### Methods

You can get the Input instance and call instance methods through ref:

| Method | Description | Type |
| --- | --- | --- |
| blur | Make the input box lose focus | `() => void` |
| clear | Clear the input box content | `() => void` |
| focus | Make the input box get focus | `() => void` |
| nativeElement | Get the native input element | `HTMLInputElement \| null` |

### CSS Variables

| Property | Description | Default |
| --- | --- | --- |
| --color | Text color | `var(--adm-color-text)` |
| --font-size | Font size | `var(--adm-font-size-9)` |
| --placeholder-color | Placeholder text color | `var(--adm-color-light)` |
| --text-align | Text alignment | `left` |