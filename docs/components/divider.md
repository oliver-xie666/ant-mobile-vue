# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文字/链接进行分割，例如表格的操作列

## 代码演示

### 基础用法

<DemoBlock>
  <div>
    <p>这是第一段内容。</p>
    <Divider />
    <p>这是第二段内容。</p>
    <Divider />
    <p>这是第三段内容。</p>
  </div>
</DemoBlock>

### 带文字的分割线

<DemoBlock>
  <div>
    <p>上面的内容</p>
    <Divider>中间文字</Divider>
    <p>下面的内容</p>
    <Divider>更多内容</Divider>
    <p>更多内容在这里</p>
  </div>
</DemoBlock>

### 文字位置

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <Divider content-position="left">左侧文字</Divider>
    </div>
    <div>
      <Divider content-position="center">居中文字</Divider>
    </div>
    <div>
      <Divider content-position="right">右侧文字</Divider>
    </div>
  </div>
</DemoBlock>

### 竖直分割线

<DemoBlock>
  <div style="display: flex; align-items: center; gap: 8px;">
    <span>文字</span>
    <Divider direction="vertical" />
    <a href="#">链接</a>
    <Divider direction="vertical" />
    <a href="#">另一个链接</a>
  </div>
</DemoBlock>

### 自定义样式

<DemoBlock>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <Divider style="color: #1677ff; border-color: #1677ff; font-weight: bold;">
        蓝色分割线
      </Divider>
    </div>
    <div>
      <Divider style="border-style: dashed;">
        虚线分割线
      </Divider>
    </div>
    <div>
      <Divider style="border-width: 2px; border-color: #ff4d4f;">
        加粗红色分割线
      </Divider>
    </div>
  </div>
</DemoBlock>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentPosition | 内容位置 | `'left' \| 'center' \| 'right'` | `'center'` |
| direction | 分割线方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 分割线中的内容 |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --border-color | 分割线颜色 | `var(--adm-color-border)` |
| --border-style | 分割线样式 | `solid` |
| --border-width | 分割线宽度 | `1px` |
| --text-color | 文字颜色 | `var(--adm-color-text-secondary)` |
| --font-size | 文字大小 | `14px` |
| --gap | 文字与分割线间距 | `16px` |

## 设计指导

### 使用场景

- **内容分组**：将页面内容按逻辑分组，提升可读性
- **区域划分**：在表单、列表等界面中划分不同功能区域
- **视觉层次**：建立清晰的信息层次结构

### 文字位置选择

- **居中**：最常用的方式，适合大部分场景
- **左对齐**：适合信息流从左到右的阅读习惯
- **右对齐**：适合特殊的设计需求或者右对齐的内容布局

### 竖直分割线

- 主要用于行内元素的分割
- 常见于导航菜单、面包屑、操作按钮组等
- 注意控制高度和对齐方式

### 样式建议

- 保持分割线的一致性，避免在同一页面使用多种样式
- 分割线颜色应与整体设计保持协调
- 文字内容应简洁明了，避免过长的描述