# 迁移指南

本指南将帮助你从其他 UI 库迁移到 ant-mobile-vue。

## 从 Ant Design Mobile (React) 迁移

如果你正在从 React 版本的 Ant Design Mobile 迁移到 Vue 版本，这里有一些需要注意的差异。

### API 差异

大部分组件的 API 保持一致，但有一些 Vue 特有的变化：

#### 事件处理

```jsx
// React 版本
<Button onClick={handleClick}>按钮</Button>

// Vue 版本
<Button @click="handleClick">按钮</Button>
```

#### 数据绑定

```jsx
// React 版本
<Input value={inputValue} onChange={setInputValue} />

// Vue 版本
<Input v-model="inputValue" />
```

#### 插槽 vs Children

```jsx
// React 版本
<Modal>
  <div>Modal 内容</div>
</Modal>

// Vue 版本
<Modal>
  <template #default>
    <div>Modal 内容</div>
  </template>
</Modal>
```

### 组件引入方式

```js
// React 版本
import { Button, Space } from 'antd-mobile'

// Vue 版本
import { Button, Space } from 'ant-mobile-vue'
```

### 样式引入

```js
// React 版本
import 'antd-mobile/dist/antd-mobile.css'

// Vue 版本
import 'ant-mobile-vue/dist/style.css'
```

## 从 Vant 迁移

### 组件名称对比

| Vant | ant-mobile-vue | 说明 |
|------|----------------|------|
| van-button | Button | 按钮组件 |
| van-cell | List.Item | 列表项 |
| van-field | Input | 输入框 |
| van-popup | Popup | 弹出层 |
| van-picker | Picker | 选择器 |

### API 差异

#### 按钮组件

```vue
<!-- Vant -->
<van-button type="primary" size="large">按钮</van-button>

<!-- ant-mobile-vue -->
<Button color="primary" size="large">按钮</Button>
```

#### 输入框组件

```vue
<!-- Vant -->
<van-field v-model="value" label="标签" placeholder="请输入" />

<!-- ant-mobile-vue -->
<Input v-model="value" label="标签" placeholder="请输入" />
```

## 从 NutUI 迁移

### 组件对比

| NutUI | ant-mobile-vue | 说明 |
|-------|----------------|------|
| nut-button | Button | 按钮 |
| nut-cell | List.Item | 单元格 |
| nut-input | Input | 输入框 |
| nut-popup | Popup | 弹出层 |

### 主要差异

1. **命名空间**：NutUI 使用 `nut-` 前缀，ant-mobile-vue 不使用前缀
2. **样式变量**：ant-mobile-vue 使用 `--adm-*` 前缀的 CSS 变量
3. **API 设计**：某些组件的 API 可能有所不同

## 通用迁移步骤

### 1. 安装依赖

```bash
# 卸载旧的 UI 库
npm uninstall vant
# 或
npm uninstall @nutui/nutui

# 安装 ant-mobile-vue
npm install ant-mobile-vue
```

### 2. 更新样式引入

```js
// 移除旧的样式引入
// import 'vant/lib/index.css'
// import '@nutui/nutui/dist/style.css'

// 添加新的样式引入
import 'ant-mobile-vue/dist/style.css'
```

### 3. 更新组件引入

```js
// 更新组件引入
import { Button, Space, Tag } from 'ant-mobile-vue'
```

### 4. 更新组件使用

逐个更新组件的使用方式，注意 API 差异。

### 5. 更新主题配置

```css
/* 更新 CSS 变量 */
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  /* 更多变量... */
}
```

## 常见问题

### Q: 迁移后样式出现问题怎么办？

A: 可能的原因和解决方案：

1. **CSS 变量冲突**：检查是否有旧的 CSS 变量残留
2. **样式优先级**：使用 `:root:root` 提高优先级
3. **组件结构差异**：检查组件的 DOM 结构是否发生变化

### Q: 某个组件在 ant-mobile-vue 中找不到对应的怎么办？

A: 你可以：

1. 查看[组件列表](/components/button)确认是否已经实现
2. 使用相似功能的组件替代
3. 提交 Feature Request
4. 自己实现并贡献给社区

### Q: 迁移工具推荐

A: 推荐使用以下工具辅助迁移：

1. **正则表达式替换**：批量替换组件名称和引入路径
2. **ESLint 规则**：自定义规则检查迁移完成度
3. **代码检查工具**：确保没有遗漏的地方

## 迁移检查清单

- [ ] 移除旧的 UI 库依赖
- [ ] 安装 ant-mobile-vue
- [ ] 更新样式引入
- [ ] 更新组件引入
- [ ] 更新组件使用方式
- [ ] 更新主题配置
- [ ] 测试所有页面功能
- [ ] 检查控制台错误
- [ ] 验证样式是否正确
- [ ] 性能测试

## 获得帮助

如果在迁移过程中遇到问题：

1. 查看[常见问题](/guide/faq)
2. 搜索 [GitHub Issues](https://github.com/oliver-xie666/ant-mobile-vue/issues)
3. 提交新的 Issue
4. 参与 [GitHub Discussions](https://github.com/oliver-xie666/ant-mobile-vue/discussions)

我们致力于让迁移过程尽可能顺滑，如果你有任何建议或遇到问题，欢迎反馈给我们！