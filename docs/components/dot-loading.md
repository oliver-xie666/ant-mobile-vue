# DotLoading 点状加载

指示某个任务的执行状态。

## 何时使用

用于页面和区块的加载中状态，提供用户等待反馈。

## 代码演示

### 基础用法

<DemoBlock>
  <div style="display: flex; gap: 12px; align-items: center;">
    <DotLoading />
    <span>加载中...</span>
  </div>
</DemoBlock>

### 自定义颜色

<DemoBlock>
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; gap: 8px; align-items: center;">
      <DotLoading color="#1677ff" />
      <span>蓝色</span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <DotLoading color="#00b96b" />
      <span>绿色</span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <DotLoading color="#ff4d4f" />
      <span>红色</span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <DotLoading color="#faad14" />
      <span>橙色</span>
    </div>
  </div>
</DemoBlock>

### 不同主题下的表现

<DemoBlock>
  <div style="display: flex; gap: 16px; align-items: center;">
    <div style="background: #f5f5f5; padding: 12px; border-radius: 8px;">
      <DotLoading />
    </div>
    <div style="background: #1f1f1f; padding: 12px; border-radius: 8px;">
      <DotLoading color="white" />
    </div>
    <div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); padding: 12px; border-radius: 8px;">
      <DotLoading color="white" />
    </div>
  </div>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 加载指示器的颜色 | `string` | `'#1677ff'` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --color | 加载指示器的颜色 | `#1677ff` |
| --size | 单个点的大小 | `8px` |
| --gap | 点之间的间距 | `2px` |

## 设计指导

### 使用场景

- **页面加载**：当页面内容较多，需要时间加载时
- **异步操作**：如数据提交、文件上传等操作的等待状态
- **分步加载**：在分步骤的操作流程中，指示当前步骤的处理状态

### 颜色选择

- **默认蓝色**：适用于大部分场景
- **品牌色**：与应用主题色保持一致
- **语义色**：根据操作类型选择对应颜色（成功、警告、错误等）

### 最佳实践

- 在明确的加载时间范围内使用
- 避免长时间显示加载状态而无进度反馈
- 在深色背景下注意颜色对比度
- 配合适当的提示文字使用