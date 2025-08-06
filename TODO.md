# Ant Mobile Vue 迁移计划

> 基于 ant-design-mobile (React) 像素级迁移到 Vue3 + Vite 的详细计划

## 项目概述

本项目旨在将 ant-design-mobile (React 版本) 完全像素级还原迁移为 Vue3 版本，包括所有组件、文档、样式和功能特性。

**源项目**: ant-design-mobile v5.41.0-alpha.1 (React)
**目标项目**: ant-mobile-vue (Vue3 + Vite)
**迁移标准**: 像素级还原，功能完全一致

## 🚀 当前进度

**✅ 基础设施**: 100% 完成

- 项目配置与规范 ✅ (ESLint/Prettier/husky完整配置)
- 开发工具链配置 ✅ (Vite/TypeScript/Less完整配置)
- 样式系统 ✅ (CSS变量/主题系统/PostCSS完整配置)
- 组件系统架构 ✅ (核心架构90%完成，基础功能完全可用)

**✅ 已完成组件**: 15个 (像素级还原，功能完整)

- Button 按钮 (支持所有variants和交互状态)
- DotLoading 点状加载 (SVG动画，主题色支持)
- Divider 分割线 (基础分割线功能)
- Space 间距 (灵活布局，响应式支持)
- Tag 标签 (多种颜色和填充模式)
- SpinLoading 旋转加载 (流畅动画，颜色定制)
- AutoCenter 自动居中 (智能对齐，轻量布局)
- Mask 背景蒙层 (动画过渡，滚动锁定，层级管理)
- Toast 轻提示 (指令式API，状态图标，位置控制)
- Dialog 对话框 (支持图片/标题/内容/操作按钮，完整指令式API)
- Input 输入框 (支持所有输入类型，完整表单功能)
- Mask 背景蒙层 (动画过渡，滚动锁定，层级管理)
- Modal 模态框 (支持图片/标题/内容/操作按钮，完整指令式API)
- Space 间距 (灵活布局，响应式支持)
- SpinLoading 旋转加载 (流畅动画，颜色定制)
- Tag 标签 (多种颜色和填充模式)
- TextArea 文本域 (支持自动高度、字符计数、最大长度限制)

**🔄 进行中组件**: 0个 (第三批表单组件准备中)

**📊 总体进度**: 基础设施100% + 文档系统98% + 组件文档100% + 15/83 组件完成 (约18%) + 第三批表单组件准备中

---

## 📋 项目配置与规范

### ✅ 已完成

- [X] 基础 Vue3 + Vite 项目创建
- [X] 基础 TypeScript 配置
- [X] **代码规范配置** ✅
  - [X] ESLint 配置匹配源项目标准
  - [X] Prettier 配置匹配源项目标准
  - [X] Stylelint 配置用于样式检查
  - [X] EditorConfig 配置
- [X] **提交规范配置** ✅
  - [X] commitlint 安装配置
  - [X] conventional commit 规范配置
  - [X] husky git hooks 设置
  - [X] lint-staged 预提交检查

---

## 🛠 开发工具链配置

### ✅ 已完成

- [X] **基础构建配置** ✅
  - [X] Vite 基础构建配置
  - [X] Less 预处理器配置
  - [X] 热重载配置
  - [X] TypeScript 编译配置

### ⏳ 待完成

- [ ] **构建配置优化** (优先级: 中)

  - [ ] 添加 bundle 分析工具
  - [ ] 配置生产环境优化
- [ ] **开发体验优化** (优先级: 中)

  - [ ] 添加开发服务器代理
  - [ ] 配置 source map

---

## 📚 文档系统

> **🎉 文档系统完成度: 98%** - 框架/主题/交互/多语言/组件文档全部完成，仅剩搜索优化等细节

### ✅ 已完成

- [X] **文档框架选择与配置** ✅

  - [X] 选择并配置 VitePress 文档框架
  - [X] 配置文档主题和导航结构
  - [X] 建立完整的文档目录结构
  - [X] 集成组件演示系统
- [X] **像素级UI还原** ✅ 已完成

  - [X] 重新设计VitePress主题匹配ant-design-mobile外观
  - [X] 复制首页Hero区域（蓝色渐变背景、交互式手机图片）
  - [X] 复制产品介绍白色卡片区域
  - [X] 复制设计语言与开发资源区域
  - [X] 复制导航栏设计（透明背景、白色文字、搜索框）
  - [X] 适配移动端响应式设计
  - [X] 使用相同的字体、颜色、间距、背景图片等
- [X] **文档内容建立** ✅

  - [X] 创建所有已迁移组件的详细文档
  - [X] 建立快速开始指南
  - [X] 配置本地搜索功能
  - [X] 完成Button、DotLoading、Divider、Space、Tag组件文档

### ✅ 已完成

- [X] **文档内容完善** ✅ 已完成
  - [X] 建立主题定制指南
  - [X] 配置多语言支持 (中英文)
  - [X] 创建完整的指南文档（CSS变量、国际化、FAQ、迁移指南、按需引入等）
  - [X] 建立Vue版本的文档工具函数和composables
  - [X] 创建资源页面和404页面
  - [X] 完善组件演示的交互性 ✅ (CodeDemo/DemoPreview组件完整实现)

### ✅ 已完成

- [X] **组件文档补全** ✅ 已完成所有现有组件
  - [X] Button 组件详细文档和演示 ✅ (完整API文档+2个演示+中英文)
  - [X] DotLoading 组件详细文档和演示 ✅ (完整API文档+演示+中英文)
  - [X] Divider 组件详细文档和演示 ✅ (完整API文档+演示+中英文)
  - [X] Space 组件详细文档和演示 ✅ (完整API文档+演示+中英文)
  - [X] Tag 组件详细文档和演示 ✅ (完整API文档+演示+中英文)
  - [X] 建立组件 API 文档标准模板 ✅ (统一的文档模板已建立)
  - [X] 创建交互式演示样例 ✅ (CodeDemo组件完整实现)

### ⏳ 待完成

- [ ] **新组件文档** (优先级: 高，随组件开发进行)
- [ ] **文档体验优化** (优先级: 中)

  - [ ] 改进搜索功能准确性
  - [X] 添加代码复制功能 ✅ (完整的clipboard API实现)
  - [ ] 建立组件关系图谱展示
  - [ ] 配置文档站点性能优化
  - [ ] 添加文档反馈收集机制
- [ ] **开发文档补充** (优先级: 中)

  - [ ] 创建组件开发指南
  - [ ] 建立设计 Token 文档
  - [ ] 完善贡献者指南
  - [ ] 添加故障排查文档
  - [ ] 建立版本迁移指南

---

## 🎨 样式系统

### ✅ 已完成

- [X] **CSS 架构设计** ✅
  - [X] Less 预处理器配置
  - [X] CSS 变量系统建立 (匹配源项目)
  - [X] 全局样式配置
  - [X] 组件样式管理规范

### ✅ 已完成

- [X] **样式工具** ✅
  - [X] PostCSS 插件配置
  - [X] autoprefixer 自动添加浏览器前缀
  - [X] postcss-px-to-viewport 移动端适配
  - [X] .browserslistrc 浏览器兼容性配置

---

## 🧩 组件系统架构

> **🎉 核心架构完成度: 90%** - 基础架构和工具函数迁移完全完成，扩展功能基本完成

### ✅ 已完成

- [X] **基础架构** ✅ 完全完成

  - [X] 组件基础类型定义建立 ✅ (完整的TypeScript类型体系)
  - [X] withNativeProps 工具函数创建 ✅ (Vue版本完善实现)
  - [X] mergeProps 工具函数创建 ✅ (支持多参数合并)
  - [X] 组件样式管理规范建立 ✅
- [X] **工具函数迁移** ✅ 完全完成

  - [X] 核心工具函数迁移 ✅ (native-props, validate, can-use-dom等)
  - [X] Vue3 组合式API 适配 ✅ (完整的composables系统)
  - [X] 基础 composables 系统建立 ✅ (6个核心composables)

### ⏳ 待完成

- [ ] **组件依赖关系管理** (优先级: 高)

  - [ ] 建立组件依赖关系图谱
  - [ ] 创建组件间通信规范
  - [ ] 设计组件组合使用模式
  - [ ] 建立组件版本兼容性矩阵
  - [ ] 优化组件加载顺序和依赖注入
- [ ] **组件架构优化** (优先级: 高)

  - [ ] 统一组件生命周期管理
  - [ ] 建立组件错误边界处理
  - [ ] 优化组件内存使用策略
  - [ ] 建立组件状态管理最佳实践
  - [ ] 创建可复用的组件逻辑抽象
- [X] **扩展功能** 🔄 基本完成 (仅插件系统设计待完成)

  - [X] 高级 hooks/composables 开发 ✅ (usePropsValue/useRefState/useLockScroll/useTouch等完整实现)
  - [X] 主题切换功能 ✅ (useTheme composable完整实现)
  - [X] 国际化支持 ✅ (基础系统已建立，locales/类型/工具函数完成)
  - [ ] 插件系统设计 (优先级: 低)

---

## 🌐 全局基础设施迁移计划

> **关键优先级**: 在继续迁移更多组件之前，必须先完善全局基础设施

### 🔥 **第一优先级 - 立即启动** (预计1-2周)

#### 📋 国际化系统建设 ✅ 已完成

- [X] **建立国际化目录结构**
  - [X] 创建 `src/locales/` 目录
  - [X] 迁移 `base.ts` 英文基础语言包
  - [X] 迁移 `zh-CN.ts` 中文语言包
  - [X] 迁移 `en-US.ts` 英文语言包
  - [X] 创建 `index.ts` 统一导出

#### 🛠 核心工具函数迁移 ✅ 已完成

- [X] **基础工具函数补全**
  - [X] `can-use-dom.ts` ✅ 已有
  - [X] `merge-locale.ts` - 国际化合并工具
  - [X] `replace-message.ts` - 消息模板替换
  - [X] `noop.ts` - 空函数
  - [X] `sleep.ts` - 延迟函数
  - [X] `validate.ts` - 验证工具 ✅
  - [X] `native-props.ts` - 优化现有实现 ✅ (Vue版本已完善)

#### ⚙️ ConfigProvider 组件 ✅ 已完成

- [X] **全局配置系统**
  - [X] 创建 `src/components/config-provider/` 目录
  - [X] 实现 `ConfigProvider.vue` 组件
  - [X] 创建 `useConfig` composable
  - [X] 支持国际化配置
  - [X] 支持组件个性化配置
  - [X] 建立默认配置系统

### 📈 **第二优先级 - 紧随其后** (预计1-2周)

#### 🎭 Vue3 Composables 开发 ✅ 已完成

- [X] **Vue版本的核心hooks**
  - [X] `useConfig` - 配置系统hook ✅ (已在ConfigProvider中实现)
  - [X] `usePropsValue` - 受控组件hook
  - [X] `useRefState` - 状态管理hook
  - [X] `useInitialized` - 初始化检查hook
  - [X] `useLockScroll` - 滚动锁定hook
  - [X] `useTouch` - 触摸事件hook

#### 📋 全局类型定义完善 ✅ 已完成

- [X] **类型系统补全**
  - [X] `Locale` 类型定义 ✅ (已在locales中完成)
  - [X] `Config` 配置类型 ✅ (已在config-provider中完成)
  - [X] `NativeProps` 通用Props类型 ✅ (创建Vue3版本)
  - [X] 组件通用类型抽象 ✅ (完整的组件基础类型)
  - [X] 工具函数类型定义 ✅ (工具类型和动画类型)
  - [X] 创建 `src/types/` 目录结构
  - [X] 建立完整的TypeScript类型体系
  - [X] 更新主入口文件导出所有类型

### 📊 **第三优先级 - 后续完善** (预计1周)

#### 🎨 主题系统扩展 ✅ 已完成

- [X] **主题配置增强**
  - [X] 扩展CSS变量系统 ✅ (完整的主题变量定义)
  - [X] 建立主题切换机制 ✅ (useTheme composable)
  - [X] 支持暗色模式 ✅ (完整的暗色主题支持)
  - [X] 创建主题配置工具 ✅ (主题工具函数库)
  - [X] 重新组织主题文件结构 ✅ (theme-default.less, theme-dark.less)
  - [X] 支持系统主题偏好自动切换 ✅
  - [X] 建立主题配置类型定义 ✅
  - [X] 创建主题管理器和工具函数 ✅

---

## 📦 组件迁移计划

> **重要**: 每次迁移新组件前，必须重新检索源项目和当前项目的最新状态

### 第一批 - 基础组件 (优先级: 高) ✅ 已完成

- [X] **Button 按钮** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档和 demo
- [X] **Space 间距** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移
  - [X] 类型定义
  - [X] 演示页面
  - [X] 测试用例
  - [X] 文档
- [X] **Divider 分割线** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档迁移
- [X] **Tag 标签** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **DotLoading 点状加载** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **AutoCenter 自动居中** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **Mask 背景蒙层** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档

### 第二批 - 反馈组件 (优先级: 高) 🔄 进行中

- [X] **SpinLoading 旋转加载** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **Toast 轻提示** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **Dialog 对话框** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **Modal 弹窗** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档

### 第三批 - 表单组件 (优先级: 高)

- [X] **Input 输入框** ⏳

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [X] **TextArea 文本域** ✅

  - [X] 组件逻辑迁移
  - [X] 样式迁移 (pixel perfect)
  - [X] TypeScript 类型定义
  - [X] 演示页面
  - [X] 单元测试
  - [X] 文档
- [ ] **Checkbox 复选框**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Radio 单选框**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Switch 开关**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Slider 滑动输入条**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Stepper 步进器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Form 表单**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第四批 - 选择器组件 (优先级: 中)

- [ ] **Picker 选择器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **PickerView 选择器视图**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **DatePicker 日期选择器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **DatePickerView 日期选择器视图**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Selector 选择组**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Cascader 级联选择**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CascaderView 级联选择视图**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第五批 - 导航组件 (优先级: 中)

- [ ] **NavBar 导航栏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **TabBar 标签栏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Tabs 标签页**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CapsuleTabs 胶囊标签页**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **JumboTabs 复杂标签页**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第六批 - 数据展示组件 (优先级: 中)

- [ ] **List 列表**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Card 卡片**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Collapse 折叠面板**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Grid 宫格**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Image 图片**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Avatar 头像**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Badge 徽标**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Steps 步骤条**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ProgressBar 进度条**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ProgressCircle 环形进度条**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第七批 - 高级组件 (优先级: 中)

- [ ] **Swiper 滑块视图**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ImageViewer 图片查看器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ImageUploader 图片上传器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **InfiniteScroll 无限滚动**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **PullToRefresh 下拉刷新**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **AutoCenter 自动居中**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Ellipsis 文本省略**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第八批 - 特殊组件 (优先级: 低)

- [ ] **Calendar 日历**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CalendarPicker 日历选择器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CalendarPickerView 日历选择器视图**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Rate 评分**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **NumberKeyboard 数字键盘**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **PasscodeInput 密码输入框**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **SearchBar 搜索栏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **IndexBar 索引栏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第九批 - 其他组件 (优先级: 低)

- [ ] **ActionSheet 动作面板**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Popup 弹出层**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CenterPopup 中央弹出层**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Popover 气泡卡片**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Mask 背景蒙层**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **NoticeBar 通告栏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **PageIndicator 分页符**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Result 结果**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ResultPage 结果页面**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Empty 空状态**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ErrorBlock 异常**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Skeleton 骨架屏**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **SafeArea 安全区**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **SideBar 侧边导航**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **TreeSelect 树选择**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **CheckList 可勾选列表**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Dropdown 下拉菜单**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **FloatingBubble 浮动气泡**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **FloatingPanel 浮动面板**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Footer 页脚**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **ScrollMask 滚动遮罩**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **Segmented 分段控制器**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **SwipeAction 滑动操作**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **VirtualInput 虚拟输入框**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档
- [ ] **WaterMark 水印**

  - [ ] 组件逻辑迁移
  - [ ] 样式迁移 (pixel perfect)
  - [ ] TypeScript 类型定义
  - [ ] 演示页面
  - [ ] 单元测试
  - [ ] 文档

---

## 🧪 测试系统

### ✅ 已完成

- [X] **单元测试框架** ✅

  - [X] 配置 Vitest ✅
  - [X] 配置 Vue Test Utils ✅
  - [X] 建立测试工具函数 ✅ (createMount, getStyle, createAsyncFunction)
  - [ ] 配置覆盖率报告
  - [ ] 建立组件测试标准规范
- [X] **组件测试补全** ✅

  - [X] Button 组件单元测试 ✅
  - [X] DotLoading 组件单元测试 ✅
  - [X] Divider 组件单元测试 ✅
  - [X] Space 组件单元测试 ✅
  - [X] Tag 组件单元测试 ✅
  - [ ] 建立测试覆盖率基准 (>90%)

### ⏳ 待完成

- [ ] **测试质量保证** (优先级: 高)

  - [ ] 建立测试最佳实践文档
  - [ ] 创建组件测试模板
  - [ ] 配置测试数据工厂
  - [ ] 建立视觉回归测试
  - [ ] 配置性能测试基准
- [ ] **E2E 测试** (优先级: 中)

  - [X] 配置 Playwright ✅
  - [ ] 建立页面测试用例
  - [ ] 配置 CI/CD 集成
  - [ ] 建立跨浏览器测试矩阵

---

## 🚀 构建与发布

### ⏳ 待完成

- [ ] **构建配置** (优先级: 中)

  - [ ] 配置多格式输出 (ESM, CJS, UMD)
  - [ ] 配置 TypeScript 声明文件生成
  - [ ] 优化 Tree Shaking
  - [ ] 配置 CSS 提取和压缩
- [ ] **发布流程** (优先级: 低)

  - [ ] 配置 semantic-release
  - [ ] 建立 changelog 生成
  - [ ] 配置 NPM 发布流程

---

## 🔄 质量保证与CI/CD

### ⏳ 待完成

- [ ] **CI/CD 流水线** (优先级: 高)

  - [ ] 配置 GitHub Actions 工作流
  - [ ] 建立多环境部署策略 (dev/staging/prod)
  - [ ] 配置自动化测试流水线
  - [ ] 建立代码质量检查门禁
  - [ ] 配置自动化发布流程
- [ ] **代码质量监控** (优先级: 高)

  - [ ] 集成 SonarQube 代码分析
  - [ ] 配置 CodeClimate 质量监控
  - [ ] 建立代码覆盖率报告
  - [ ] 配置安全扫描检查
  - [ ] 建立技术债务跟踪
- [ ] **自动化检查** (优先级: 中)

  - [ ] 配置依赖漏洞扫描
  - [ ] 建立许可证合规检查
  - [ ] 配置性能回归检测
  - [ ] 建立浏览器兼容性检查
  - [ ] 配置无障碍性检查

---

## 🌍 国际化

### ✅ 已完成

- [X] **基础i18n配置** ✅
  - [X] 建立语言包结构 ✅ (locales目录完整)
  - [X] 迁移源项目的多语言文件 ✅ (zh-CN, en-US, base)
  - [X] 创建国际化工具函数 ✅ (merge-locale, replace-message)

### ⏳ 待完成

- [ ] **高级i18n配置** (优先级: 低)
  - [ ] 配置 Vue i18n 插件集成
  - [ ] 添加动态语言切换功能
  - [ ] 完善文档多语言支持

---

## 📊 性能优化

### ⏳ 待完成

- [ ] **包体积优化** (优先级: 高)

  - [ ] 实现完整的按需引入机制
    - [ ] 配置 babel-plugin-import
    - [ ] 创建组件索引映射
    - [ ] 支持样式按需加载
    - [ ] 建立依赖分析工具
  - [ ] 代码分割策略
    - [ ] 组件级别代码分割
    - [ ] 路由级别代码分割
    - [ ] 第三方库代码分割
  - [ ] 依赖优化
    - [ ] 移除未使用的依赖
    - [ ] 优化依赖包大小
    - [ ] 配置 external 依赖
- [ ] **运行时性能** (优先级: 中)

  - [ ] 组件懒加载
    - [ ] 实现组件异步加载
    - [ ] 配置加载状态指示
    - [ ] 优化加载优先级
  - [ ] 虚拟滚动优化
    - [ ] 长列表虚拟化
    - [ ] 无限滚动优化
    - [ ] 滚动性能监控
  - [ ] 内存泄漏检查
    - [ ] 建立内存使用监控
    - [ ] 组件销毁检查
    - [ ] 事件监听器清理
- [ ] **性能监控与分析** (优先级: 中)

  - [ ] 建立性能基准测试
  - [ ] 配置 bundle 分析工具
  - [ ] 实现性能监控面板
  - [ ] 建立性能回归检测
  - [ ] 配置 Core Web Vitals 监控

---

## 🔧 开发规范

### 代码风格

```javascript
// ESLint 配置基于源项目标准
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
```

### 样式规范

- **必须使用Less预处理器**，禁止直接写CSS
- **禁止在Vue单文件组件中写样式**，样式必须单独写成.less文件并引入
- 使用Less嵌套语法和BEM命名规范
- 每个组件的样式文件命名：`ComponentName.less`

### 提交规范

```
feat: 新功能
fix: 修复bug
enhance: 功能增强
chore: 构建过程或辅助工具的变动
test: 增加测试
docs: 文档修改
refactor: 重构
style: 样式修改
revert: 撤销之前的commit
```

### 目录结构规范

```
src/
├── components/          # 组件目录
│   ├── button/         # 按钮组件
│   │   ├── index.ts    # 导出文件
│   │   ├── Button.vue  # 组件实现 (禁止包含<style>)
│   │   ├── Button.less # 样式文件 (必须独立文件)
│   │   └── types.ts    # 类型定义
├── composables/        # 组合式函数
├── utils/              # 工具函数
├── styles/             # 全局样式
└── types/              # 类型定义
```

---

## ⚠️ 注意事项

1. **像素级还原要求**: 每个组件的视觉效果必须与源项目完全一致
2. **功能完整性**: 所有 API 和功能都必须保持一致
3. **类型安全**: 必须提供完整的 TypeScript 类型定义
4. **性能要求**: 性能不能低于源项目
5. **兼容性**: 支持现代浏览器，与源项目兼容性要求一致
6. **依赖管理**: 在迁移过程中，能使用第三方库的一定使用库，尽量避免手写实现。优先使用源项目相同的依赖库。

---

## 🔄 开发流程

1. **开始新组件迁移前**:

   - 重新检索源项目该组件的最新实现
   - 分析组件的所有功能和 API
   - 制定详细的迁移计划
2. **迁移过程中**:

   - 先实现组件逻辑
   - 创建独立的.less样式文件 (禁止在Vue文件中写样式)
   - 再进行样式迁移 (像素级对比)
   - 添加 TypeScript 类型
   - **必须运行并修复所有lint检查** (eslint, stylelint, prettier)
   - **必须运行并修复所有TypeScript类型错误** (`pnpm run type-check`)
   - 编写单元测试
   - 完善文档和示例
3. **完成组件后**:

   - 在真实场景中测试
   - 对比源组件确保一致性
   - 更新文档
   - **提交前检查**: 运行 `pnpm run type-check`、`pnpm run lint`、`pnpm run stylelint` 和 `pnpm run test:unit` 确保无错误
   - 提交代码并更新此 TODO

---

## 🎯 待改进项行动计划

### 🔥 **高优先级待改进项** (立即启动)

1. **组件测试补全** - 为已完成的5个组件添加完整单元测试

   - 目标: 达到90%+测试覆盖率
   - 时间估计: 1-2周
2. **组件依赖关系管理** - 建立清晰的组件架构

   - 优化组件间通信和依赖注入
   - 时间估计: 1周
3. **组件文档补全** - 完善已完成组件的详细文档

   - 添加完整的API文档和交互演示
   - 时间估计: 1周
4. **按需引入机制实现** - 完善包体积优化

   - 支持组件和样式按需加载
   - 时间估计: 1-2周

### 📈 **中优先级待改进项** (后续推进)

1. **CI/CD流水线建设** - 建立自动化质量保证体系
2. **性能监控与分析** - 建立性能基准和回归检测
3. **文档体验优化** - 改进搜索、交互等用户体验

### 🔄 **执行策略**

1. **并行执行**: 测试补全与文档完善可以同时进行
2. **迭代改进**: 每完成一个组件的测试和文档，立即发布更新
3. **质量优先**: 所有改进都必须通过代码审查和自动化检查

---

## 📝 项目信息

**远程仓库**: https://github.com/oliver-xie666/ant-mobile-vue.git
**Node.js 版本**: ^20.19.0 || >=22.12.0
**包管理器**: pnpm
**开始时间**: 2024
**预估完成时间**: 待评估

---

*此文档将随项目进展持续更新，每完成一项任务请及时更新状态*
