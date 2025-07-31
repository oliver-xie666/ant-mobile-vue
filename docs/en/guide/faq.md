# FAQ

## Installation and Usage

### Q: How to install ant-mobile-vue?

A: You can install via npm, yarn, or pnpm:

```bash
npm install ant-mobile-vue
# or
yarn add ant-mobile-vue
# or
pnpm add ant-mobile-vue
```

### Q: Do I need to import style files?

A: Yes, you need to manually import the style file:

```js
import 'ant-mobile-vue/dist/style.css'
```

### Q: Does it support on-demand imports?

A: Yes. We recommend using `unplugin-vue-components` for automatic on-demand imports:

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

## Styling and Theming

### Q: How to customize themes?

A: ant-mobile-vue uses CSS variables technology. You can customize themes by overriding CSS variables:

```css
:root {
  --adm-color-primary: #a062d4;
  --adm-color-success: #00b578;
  /* More variables... */
}
```

For details, see: [Theming](/en/guide/theming)

### Q: Why aren't my custom styles working?

A: Possible reasons:

1. **Priority issues**: Try using `:root:root` to increase priority
2. **Wrong selectors**: Check if CSS selectors are correct
3. **Wrong CSS variable names**: Confirm variable names are correct

### Q: How to use in dark mode?

A: ant-mobile-vue doesn't provide built-in dark mode, but you can implement it with CSS variables:

```css
.dark {
  --adm-color-background: #000000;
  --adm-color-text: #ffffff;
  /* More dark variables... */
}
```

## TypeScript

### Q: Where are the type definitions?

A: ant-mobile-vue includes complete TypeScript type definitions out of the box.

### Q: How to get better type hints?

A: Make sure to configure the correct types in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["ant-mobile-vue/global"]
  }
}
```

## Compatibility

### Q: Which browsers are supported?

A: ant-mobile-vue supports modern browsers:

- Chrome >= 51
- Firefox >= 54
- Safari >= 10
- iOS Safari >= 10
- Android Browser >= 51

### Q: Does it support SSR?

A: Yes, SSR is supported, but note:

1. Some components rely on DOM APIs and need client-side rendering
2. Styles may need special handling

### Q: How to use in Nuxt.js?

A: You need to create a plugin:

```js
// plugins/ant-mobile-vue.client.js
import AntMobileVue from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(AntMobileVue)
})
```

## Performance

### Q: How to reduce bundle size?

A: Recommendations:

1. Use on-demand imports
2. Enable Tree Shaking
3. Use CDN

### Q: How's the component rendering performance?

A: ant-mobile-vue is based on Vue 3's Composition API and has good performance. If you encounter performance issues:

1. Check for unnecessary re-renders
2. Use `v-memo` to optimize list rendering
3. Use `shallowRef` and `shallowReactive` appropriately

## Development

### Q: How to contribute to development?

A: Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

For details, see: [Contributing Guide](https://github.com/oliver-xie666/ant-mobile-vue/blob/main/CONTRIBUTING.md)

### Q: How to report bugs?

A: Please report bugs via GitHub Issues, including:

1. Reproduction steps
2. Expected result
3. Actual result
4. Environment information

## Migration

### Q: What should I pay attention to when migrating from other UI libraries?

A: Main considerations:

1. API differences
2. Style differences
3. Behavior differences

For details, see: [Migration Guide](/en/guide/migration)

### Q: What should I pay attention to when migrating from the React version?

A: While component names and APIs are mostly consistent, note:

1. Vue data binding syntax
2. Event handling methods
3. Slot usage

## Others

### Q: What if a component doesn't have the functionality I need?

A: You can:

1. Submit a Feature Request
2. Implement it yourself and submit a PR
3. Extend based on existing components

### Q: Do I need authorization for commercial use?

A: ant-mobile-vue uses the MIT open source license and can be used freely in commercial projects.

### Q: How to get technical support?

A: You can get help through:

1. GitHub Issues
2. GitHub Discussions
3. Read documentation and example code

If your question isn't answered here, feel free to ask in [GitHub Issues](https://github.com/oliver-xie666/ant-mobile-vue/issues).