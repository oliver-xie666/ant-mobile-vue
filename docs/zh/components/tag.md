# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度
- 进行分类

## 代码演示

### 基础用法

<DemoBlock>
  <Space wrap>
    <Tag>默认标签</Tag>
    <Tag color="primary">主要标签</Tag>
    <Tag color="success">成功标签</Tag>
    <Tag color="warning">警告标签</Tag>
    <Tag color="danger">危险标签</Tag>
  </Space>
</DemoBlock>

### 填充模式

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">实心填充（默认）</p>
      <Space wrap>
        <Tag color="primary" fill="solid">实心标签</Tag>
        <Tag color="success" fill="solid">实心标签</Tag>
        <Tag color="warning" fill="solid">实心标签</Tag>
        <Tag color="danger" fill="solid">实心标签</Tag>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">描边填充</p>
      <Space wrap>
        <Tag color="primary" fill="outline">描边标签</Tag>
        <Tag color="success" fill="outline">描边标签</Tag>
        <Tag color="warning" fill="outline">描边标签</Tag>
        <Tag color="danger" fill="outline">描边标签</Tag>
      </Space>
    </div>
  </div>
</DemoBlock>

### 圆角样式

<DemoBlock>
  <Space wrap>
    <Tag round>圆角标签</Tag>
    <Tag color="primary" round>圆角主要</Tag>
    <Tag color="success" round>圆角成功</Tag>
    <Tag color="warning" round>圆角警告</Tag>
    <Tag color="danger" round>圆角危险</Tag>
  </Space>
</DemoBlock>

### 自定义颜色

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">自定义背景色</p>
      <Space wrap>
        <Tag style="background-color: #87d068; color: white;">绿色</Tag>
        <Tag style="background-color: #108ee9; color: white;">蓝色</Tag>
        <Tag style="background-color: #2db7f5; color: white;">青色</Tag>
        <Tag style="background-color: #f50; color: white;">红色</Tag>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">渐变背景</p>
      <Space wrap>
        <Tag style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); color: white;">
          渐变1
        </Tag>
        <Tag style="background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); color: white;">
          渐变2
        </Tag>
        <Tag style="background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%); color: white;">
          渐变3
        </Tag>
      </Space>
    </div>
  </div>
</DemoBlock>

### 不同大小

<DemoBlock>
  <Space wrap align="center">
    <Tag style="font-size: 12px; padding: 2px 6px;">小标签</Tag>
    <Tag>默认标签</Tag>
    <Tag style="font-size: 16px; padding: 6px 12px;">大标签</Tag>
  </Space>
</DemoBlock>

### 配合其他组件

<DemoBlock>
  <Space direction="vertical" size="large">
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">状态标记</p>
      <Space wrap>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>订单状态：</span>
          <Tag color="warning">待付款</Tag>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>物流状态：</span>
          <Tag color="primary">运输中</Tag>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>完成状态：</span>
          <Tag color="success">已完成</Tag>
        </div>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">分类标记</p>
      <Space wrap>
        <Tag fill="outline">前端</Tag>
        <Tag fill="outline">React</Tag>
        <Tag fill="outline">Vue</Tag>
        <Tag fill="outline">TypeScript</Tag>
        <Tag fill="outline">JavaScript</Tag>
      </Space>
    </div>
    <div>
      <p style="margin: 0 0 8px 0; font-weight: bold;">热门标签</p>
      <Space wrap>
        <Tag color="danger" round>热门</Tag>
        <Tag color="warning" round>推荐</Tag>
        <Tag color="success" round>新品</Tag>
        <Tag color="primary" round>限时</Tag>
      </Space>
    </div>
  </Space>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 标签颜色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline'` | `'solid'` |
| round | 是否为圆角 | `boolean` | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 标签内容 |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --background-color | 背景颜色 | - |
| --text-color | 文字颜色 | - |
| --border-color | 边框颜色 | - |
| --border-radius | 圆角大小 | `2px` |
| --padding-horizontal | 水平内边距 | `8px` |
| --padding-vertical | 垂直内边距 | `2px` |
| --font-size | 字体大小 | `12px` |

## 设计指导

### 颜色语义

- **default（灰色）**：中性信息，无特殊含义
- **primary（蓝色）**：重要信息，主要操作相关
- **success（绿色）**：成功状态，正面信息
- **warning（橙色）**：警告信息，需要注意
- **danger（红色）**：危险状态，错误信息

### 填充模式选择

- **solid（实心）**：需要强调的重要标签，视觉权重较高
- **outline（描边）**：次要信息标签，视觉权重较低，不抢夺主要内容注意力

### 使用建议

- **保持一致性**：在同一界面中保持标签样式的一致性
- **合理使用颜色**：避免过度使用彩色标签，保持页面视觉平衡
- **语义化**：颜色选择应该符合用户的认知习惯
- **控制数量**：避免在同一区域使用过多标签，影响信息层次

### 常见搭配

- **与列表配合**：在列表项中标记状态或分类
- **与卡片配合**：在卡片中标记重要信息
- **与表格配合**：在表格中标记状态列
- **与搜索配合**：作为筛选标签或搜索结果标记

### 交互建议

- **可点击标签**：如果标签可点击，应该有明确的hover状态
- **可删除标签**：提供删除功能的标签应该有删除按钮
- **状态变化**：状态类标签应该能够反映实时状态变化