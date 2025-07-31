---
layout: home

title: Ant Mobile Vue
titleTemplate: 基于 Vue 3 的移动端组件库

hero:
  name: Ant Mobile Vue
  text: 移动端组件库
  tagline: 像素级还原 Ant Design Mobile，专为 Vue 3 打造
  image:
    src: /logo.svg
    alt: Ant Mobile Vue
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 查看组件
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/oliver-xie666/ant-mobile-vue

features:
  - icon: ⚡️
    title: Vue 3 + Vite
    details: 基于最新的 Vue 3 Composition API 和 Vite 构建工具，享受极速的开发体验
  - icon: 📱
    title: 移动端优化
    details: 专为移动端设计，支持触摸操作，响应式布局，完美适配各种移动设备
  - icon: 🎨
    title: 像素级还原
    details: 完全遵循 Ant Design Mobile 设计规范，确保每个组件都像素级一致
  - icon: 🛠️
    title: TypeScript
    details: 使用 TypeScript 编写，提供完整的类型定义，更好的开发体验和代码提示
  - icon: 🌈
    title: 主题定制
    details: 支持 CSS Variables，轻松定制主题色彩，满足不同场景的设计需求
  - icon: 📦
    title: 按需引入
    details: 支持 Tree Shaking，按需引入组件，减小打包体积，提升加载性能
---

## 快速体验

```bash
# 安装
npm install ant-mobile-vue

# 使用
import { Button } from 'ant-mobile-vue'
```

## 组件预览

在这里你可以看到一些核心组件的实际效果：

<DemoBlock>
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <Button type="primary">主要按钮</Button>
    <Button>默认按钮</Button>
    <Button type="primary" size="small">小按钮</Button>
    <Button loading>加载中</Button>
  </div>
</DemoBlock>

<DemoBlock>
  <div style="display: flex; gap: 12px; align-items: center;">
    <DotLoading />
    <span>加载中...</span>
  </div>
</DemoBlock>

<DemoBlock>
  <Space>
    <Tag color="primary">主要标签</Tag>
    <Tag color="success">成功标签</Tag>
    <Tag color="warning">警告标签</Tag>
    <Tag color="danger">危险标签</Tag>
  </Space>
</DemoBlock>

## 开发进度

**✅ 基础设施**: 100% 完成  
- 项目配置与规范 ✅  
- 开发工具链配置 ✅  
- 样式系统 ✅  
- 组件系统架构 ✅  
- 文档系统 ✅  

**✅ 已完成组件**: 5个  
- Button 按钮  
- DotLoading 点状加载  
- Divider 分割线  
- Space 间距  
- Tag 标签  

**📊 总体进度**: 基础设施完成 + 5/70+ 组件 (约15%)

## 为什么选择 Ant Mobile Vue？

- 🚀 **现代化**: 基于 Vue 3 和 Vite，享受最新的开发体验
- 🎯 **专业**: 像素级还原 Ant Design Mobile，保证设计一致性  
- 💪 **可靠**: TypeScript 全量支持，完善的类型定义
- 🔥 **高性能**: 按需加载，Tree Shaking，优化打包体积
- 📖 **完善文档**: 详细的文档和示例，快速上手