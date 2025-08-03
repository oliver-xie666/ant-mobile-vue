# Toast

Lightweight feedback on the result of an operation that disappears without user action.

## When to Use

It is suitable for use when the change of page content cannot directly reflect the operation result.

## Demos

<code src="./toast/demos/demo1.vue"></code>

## API

### Imperative API

`Toast` only supports Imperative calls.

### Toast.show

The `show` method supports passing in a `props` object, which contains the following props:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| afterClose | Callback after `Toast` is completely closed | `() => void` | - |
| content | `Toast` text content | `string` | - |
| duration | Prompt duration, if it is `0`, it will not be closed automatically | `number` | `2000` |
| getContainer | The customized parent container of the light prompt | `HTMLElement \| (() => HTMLElement) \| null` | `null` |
| icon | `Toast` icon | `'success' \| 'fail' \| 'loading' \| Component` | - |
| maskClassName | `Toast` mask class name | `string` | - |
| maskClickable | Whether allowed to click the background | `boolean` | `true` |
| maskStyle | `Toast` mask style | `CSSProperties` | - |
| position | Vertical display position | `'top' \| 'bottom' \| 'center'` | `'center'` |
| stopPropagation | Stop the propagation of some events. | `PropagationEvent[]` | `['click']` |

> Only one light reminder is allowed to pop up at the same time, and the newly appeared `Toast` will squeeze out the previously displayed `Toast`.

You can also pass in a string directly, and `Toast.show` will automatically use it as `content`.

The return value of the `show` method is a component controller, which contains the following properties:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| close | To close the current `Toast` | `() => void` | - |

### Toast.success

Show success status toast.

```ts
Toast.success(content: string, duration?: number)
```

### Toast.fail

Show fail status toast.

```ts
Toast.fail(content: string, duration?: number)
```

### Toast.loading

Show loading status toast, will not auto close by default.

```ts
Toast.loading(content: string, duration?: number)
```

### Toast.info

Show info status toast (without icon).

```ts
Toast.info(content: string, duration?: number)
```

### Toast.clear

Turn off `Toast` in all displays.

### Toast.config

Global configuration, supports configuring `duration`, `position` and `maskClickable`:

```ts
Toast.config({ 
  duration: 1000, 
  position: 'top',
  maskClickable: false 
})
```

## Design Philosophy

The Toast component serves as a lightweight feedback component with the following features:

- **Non-blocking Interaction**: Does not prevent users from continuing operations
- **Auto Dismiss**: Configurable auto-close duration
- **Imperative API**: Clean API, easy to call in logic
- **Status Distinction**: Different states for success/fail/loading/info
- **Flexible Position**: Supports top/center/bottom positions
- **Queue Management**: Only shows one at a time, avoiding stacking

## Use Cases

- **Operation Feedback**: Save success, delete completed and other operation result prompts
- **Status Reminders**: Loading, network error and other status reminders
- **Lightweight Tips**: Simple information prompts that don't require user confirmation
- **Temporary Notifications**: Briefly displayed notification information

## Notes

- Toast uses imperative API and cannot be used directly in templates
- Only one Toast will be displayed at the same time, new ones will replace old ones
- Loading type Toast will not auto close by default, need to manually call `clear()` or returned `close()` method
- It's recommended to call `Toast.clear()` when component is destroyed to avoid memory leaks