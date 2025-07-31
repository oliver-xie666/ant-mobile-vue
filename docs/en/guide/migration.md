# Migration Guide

This guide will help you migrate from other UI libraries to ant-mobile-vue.

## Migrating from Ant Design Mobile (React)

If you're migrating from the React version of Ant Design Mobile to the Vue version, here are some differences to note.

### API Differences

Most component APIs remain consistent, but there are some Vue-specific changes:

#### Event Handling

```jsx
// React version
<Button onClick={handleClick}>Button</Button>

// Vue version
<Button @click="handleClick">Button</Button>
```

#### Data Binding

```jsx
// React version
<Input value={inputValue} onChange={setInputValue} />

// Vue version
<Input v-model="inputValue" />
```

#### Slots vs Children

```jsx
// React version
<Modal>
  <div>Modal content</div>
</Modal>

// Vue version
<Modal>
  <template #default>
    <div>Modal content</div>
  </template>
</Modal>
```

### Component Import

```js
// React version
import { Button, Space } from 'antd-mobile'

// Vue version
import { Button, Space } from 'ant-mobile-vue'
```

### Style Import

```js
// React version
import 'antd-mobile/dist/antd-mobile.css'

// Vue version
import 'ant-mobile-vue/dist/style.css'
```

## Migrating from Vant

### Component Name Comparison

| Vant | ant-mobile-vue | Description |
|------|----------------|-------------|
| van-button | Button | Button component |
| van-cell | List.Item | List item |
| van-field | Input | Input field |
| van-popup | Popup | Popup layer |
| van-picker | Picker | Picker |

### API Differences

#### Button Component

```vue
<!-- Vant -->
<van-button type="primary" size="large">Button</van-button>

<!-- ant-mobile-vue -->
<Button color="primary" size="large">Button</Button>
```

#### Input Component

```vue
<!-- Vant -->
<van-field v-model="value" label="Label" placeholder="Please input" />

<!-- ant-mobile-vue -->
<Input v-model="value" label="Label" placeholder="Please input" />
```

## Migrating from NutUI

### Component Comparison

| NutUI | ant-mobile-vue | Description |
|-------|----------------|-------------|
| nut-button | Button | Button |
| nut-cell | List.Item | Cell |
| nut-input | Input | Input |
| nut-popup | Popup | Popup |

### Main Differences

1. **Namespace**: NutUI uses `nut-` prefix, ant-mobile-vue doesn't use prefix
2. **Style variables**: ant-mobile-vue uses CSS variables with `--adm-*` prefix
3. **API design**: Some component APIs may differ

## General Migration Steps

### 1. Install Dependencies

```bash
# Uninstall old UI library
npm uninstall vant
# or
npm uninstall @nutui/nutui

# Install ant-mobile-vue
npm install ant-mobile-vue
```

### 2. Update Style Imports

```js
// Remove old style imports
// import 'vant/lib/index.css'
// import '@nutui/nutui/dist/style.css'

// Add new style import
import 'ant-mobile-vue/dist/style.css'
```

### 3. Update Component Imports

```js
// Update component imports
import { Button, Space, Tag } from 'ant-mobile-vue'
```

### 4. Update Component Usage

Update component usage one by one, paying attention to API differences.

### 5. Update Theme Configuration

```css
/* Update CSS variables */
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  /* More variables... */
}
```

## Common Issues

### Q: What if styles break after migration?

A: Possible causes and solutions:

1. **CSS variable conflicts**: Check for leftover old CSS variables
2. **Style priority**: Use `:root:root` to increase priority
3. **Component structure differences**: Check if component DOM structure has changed

### Q: What if I can't find the corresponding component in ant-mobile-vue?

A: You can:

1. Check the [component list](/en/components/button) to confirm if it's implemented
2. Use similar components as alternatives
3. Submit a Feature Request
4. Implement it yourself and contribute to the community

### Q: Migration tool recommendations

A: Recommended tools to assist migration:

1. **Regular expression replacement**: Batch replace component names and import paths
2. **ESLint rules**: Custom rules to check migration completeness
3. **Code inspection tools**: Ensure nothing is missed

## Migration Checklist

- [ ] Remove old UI library dependencies
- [ ] Install ant-mobile-vue
- [ ] Update style imports
- [ ] Update component imports
- [ ] Update component usage
- [ ] Update theme configuration
- [ ] Test all page functionality
- [ ] Check console errors
- [ ] Verify styles are correct
- [ ] Performance testing

## Getting Help

If you encounter issues during migration:

1. Check [FAQ](/en/guide/faq)
2. Search [GitHub Issues](https://github.com/oliver-xie666/ant-mobile-vue/issues)
3. Submit a new Issue
4. Join [GitHub Discussions](https://github.com/oliver-xie666/ant-mobile-vue/discussions)

We're committed to making the migration process as smooth as possible. If you have any suggestions or encounter problems, please feel free to give us feedback!