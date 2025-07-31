# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距
- 可以设置各种水平对齐方式

## 代码演示

### 基础用法

<DemoBlock>
  <Space>
    <Button color="primary">按钮</Button>
    <Button>按钮</Button>
    <Button color="danger">按钮</Button>
  </Space>
</DemoBlock>

### 竖直间距

<DemoBlock>
  <Space direction="vertical">
    <Button color="primary" block>按钮1</Button>
    <Button block>按钮2</Button>
    <Button color="danger" block>按钮3</Button>
  </Space>
</DemoBlock>

### 间距大小

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">小间距</p>
      <Space size="small">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">中等间距（默认）</p>
      <Space size="middle">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">大间距</p>
      <Space size="large">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">自定义间距</p>
      <Space size="24px">
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </div>
  </div>
</DemoBlock>

### 对齐方式

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">起始对齐（默认）</p>
      <Space align="start" style="background: #f5f5f5; padding: 8px;">
        <Button size="large">大按钮</Button>
        <Button size="small">小按钮</Button>
        <Button>中按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">居中对齐</p>
      <Space align="center" style="background: #f5f5f5; padding: 8px;">
        <Button size="large">大按钮</Button>
        <Button size="small">小按钮</Button>
        <Button>中按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">结束对齐</p>
      <Space align="end" style="background: #f5f5f5; padding: 8px;">
        <Button size="large">大按钮</Button>
        <Button size="small">小按钮</Button>
        <Button>中按钮</Button>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">基线对齐</p>
      <Space align="baseline" style="background: #f5f5f5; padding: 8px;">
        <Button size="large">大按钮</Button>
        <span style="font-size: 14px;">文字</span>
        <Button size="small">小按钮</Button>
      </Space>
    </div>
  </div>
</DemoBlock>

### 自动换行

<DemoBlock>
  <Space wrap>
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
    <Button>按钮4</Button>
    <Button>按钮5</Button>
    <Button>按钮6</Button>
    <Button>按钮7</Button>
    <Button>按钮8</Button>
    <Button>按钮9</Button>
    <Button>按钮10</Button>
  </Space>
</DemoBlock>

### 块级元素

<DemoBlock>
  <Space direction="vertical" block>
    <Button color="primary" block>按钮1</Button>
    <Button block>按钮2</Button>
    <Button color="success" block>按钮3</Button>
  </Space>
</DemoBlock>

### 混合使用

<DemoBlock>
  <Space direction="vertical" size="large">
    <Space>
      <Button color="primary">主要操作</Button>
      <Button>次要操作</Button>
    </Space>
    <Space>
      <Tag color="primary">标签</Tag>
      <Tag color="success">标签</Tag>
      <Tag color="warning">标签</Tag>
    </Space>
    <Space align="center">
      <DotLoading />
      <span>加载中...</span>
    </Space>
  </Space>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | `'start'` |
| block | 是否渲染为块级元素 | `boolean` | `false` |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 间距大小 | `'small' \| 'middle' \| 'large' \| string \| number` | `'middle'` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 间距中的内容 |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --gap-horizontal | 水平间距 | - |
| --gap-vertical | 垂直间距 | - |

## 设计指导

### 间距大小选择

- **small (8px)**：紧密布局，适合功能相关性强的元素
- **middle (12px)**：标准间距，适合大部分场景
- **large (16px)**：宽松布局，适合需要明确分组的元素
- **自定义**：根据具体设计需求设置

### 使用建议

- **保持一致性**：在同一界面中保持间距的一致性
- **响应式设计**：在不同屏幕尺寸下可能需要调整间距
- **语义化分组**：通过间距大小来体现元素之间的关系紧密程度
- **避免过度使用**：不要为了使用 Space 而使用，简单的 margin 可能更合适

### 对齐方式指导

- **start**：默认方式，适合大部分左对齐的界面
- **center**：适合居中布局或者需要视觉平衡的场景
- **end**：适合右对齐的布局
- **baseline**：适合包含文字和其他元素混合的场景

### 与其他组件配合

- **与 Divider 配合**：用 Space 控制组件间距，用 Divider 进行视觉分割
- **与 Grid 配合**：Grid 用于二维布局，Space 用于一维间距
- **与 Flex 布局配合**：Space 本质上就是基于 Flex 的间距方案