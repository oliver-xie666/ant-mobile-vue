# 常见问题

## 安装和使用

### Q: 如何安装 ant-mobile-vue？

A: 你可以通过 npm、yarn 或 pnpm 来安装：

```bash
npm install ant-mobile-vue
# 或
yarn add ant-mobile-vue
# 或
pnpm add ant-mobile-vue
```

### Q: 是否需要引入样式文件？

A: 是的，你需要手动引入样式文件：

```js
import 'ant-mobile-vue/dist/style.css'
```

### Q: 支持按需引入吗？

A: 支持。推荐使用 `unplugin-vue-components` 来实现自动按需引入：

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

## 样式和主题

### Q: 如何自定义主题？

A: ant-mobile-vue 使用 CSS 变量技术，你可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  --adm-color-primary: #a062d4;
  --adm-color-success: #00b578;
  /* 更多变量... */
}
```

详细请参考：[主题定制](/guide/theming)

### Q: 为什么我的自定义样式不生效？

A: 可能的原因：

1. **优先级问题**：尝试使用 `:root:root` 提高优先级
2. **选择器错误**：检查 CSS 选择器是否正确
3. **CSS 变量名错误**：确认变量名是否正确

### Q: 如何在深色模式下使用？

A: ant-mobile-vue 本身不提供深色模式，但你可以通过 CSS 变量实现：

```css
.dark {
  --adm-color-background: #000000;
  --adm-color-text: #ffffff;
  /* 更多深色变量... */
}
```

## TypeScript

### Q: 类型定义在哪里？

A: ant-mobile-vue 内置了完整的 TypeScript 类型定义，安装后即可使用。

### Q: 如何获得更好的类型提示？

A: 确保在 `tsconfig.json` 中配置了正确的类型：

```json
{
  "compilerOptions": {
    "types": ["ant-mobile-vue/global"]
  }
}
```

## 兼容性

### Q: 支持哪些浏览器？

A: ant-mobile-vue 支持现代浏览器：

- Chrome >= 51
- Firefox >= 54
- Safari >= 10
- iOS Safari >= 10
- Android Browser >= 51

### Q: 支持 SSR 吗？

A: 支持 SSR，但需要注意一些事项：

1. 某些组件依赖 DOM API，需要在客户端渲染
2. 样式可能需要特殊处理

### Q: 在 Nuxt.js 中如何使用？

A: 需要创建插件：

```js
// plugins/ant-mobile-vue.client.js
import AntMobileVue from 'ant-mobile-vue'
import 'ant-mobile-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(AntMobileVue)
})
```

## 性能

### Q: 如何减少包体积？

A: 建议：

1. 使用按需引入
2. 启用 Tree Shaking
3. 使用 CDN

### Q: 组件渲染性能如何？

A: ant-mobile-vue 基于 Vue 3 的 Composition API，具有良好的性能表现。如果遇到性能问题：

1. 检查是否有不必要的重新渲染
2. 使用 `v-memo` 优化列表渲染
3. 合理使用 `shallowRef` 和 `shallowReactive`

## 开发

### Q: 如何参与开发？

A: 欢迎参与开发：

1. Fork 项目仓库
2. 创建功能分支
3. 提交 Pull Request

详细请参考：[贡献指南](https://github.com/oliver-xie666/ant-mobile-vue/blob/main/CONTRIBUTING.md)

### Q: 如何报告 Bug？

A: 请通过 GitHub Issues 报告 Bug，包含：

1. 复现步骤
2. 期望结果
3. 实际结果
4. 环境信息

## 迁移

### Q: 从其他 UI 库迁移需要注意什么？

A: 主要注意：

1. API 差异
2. 样式差异
3. 行为差异

详细请参考：[迁移指南](/guide/migration)

### Q: 从 React 版本迁移需要注意什么？

A: 虽然组件名称和 API 基本一致，但需要注意：

1. Vue 的数据绑定语法
2. 事件处理方式
3. 插槽使用方式

## 其他

### Q: 组件没有我需要的功能怎么办？

A: 你可以：

1. 提交 Feature Request
2. 自己实现并提交 PR
3. 基于现有组件进行扩展

### Q: 商业使用是否需要授权？

A: ant-mobile-vue 使用 MIT 开源协议，可以免费用于商业项目。

### Q: 如何获得技术支持？

A: 你可以通过以下方式获得帮助：

1. GitHub Issues
2. GitHub Discussions
3. 阅读文档和示例代码

如果你的问题没有在这里找到答案，欢迎在 [GitHub Issues](https://github.com/oliver-xie666/ant-mobile-vue/issues) 中提问。