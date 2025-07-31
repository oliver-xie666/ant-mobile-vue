# Ant Mobile Vue 迁移计划

> 基于 ant-design-mobile (React) 像素级迁移到 Vue3 + Vite 的详细计划

## 项目概述

本项目旨在将 ant-design-mobile (React 版本) 完全像素级还原迁移为 Vue3 版本，包括所有组件、文档、样式和功能特性。

**源项目**: ant-design-mobile v5.41.0-alpha.1 (React)  
**目标项目**: ant-mobile-vue (Vue3 + Vite)  
**迁移标准**: 像素级还原，功能完全一致  

## 🚀 当前进度

**✅ 基础设施**: 100% 完成  
- 项目配置与规范 ✅  
- 开发工具链配置 ✅  
- 样式系统 ✅  
- 组件系统架构 ✅  

**✅ 已完成组件**: 5个  
- Button 按钮  
- DotLoading 点状加载  
- Divider 分割线  
- Space 间距  
- Tag 标签  

**🔄 进行中组件**: 0个  

**📊 总体进度**: 基础设施完成 + 5/70+ 组件 (约15%)

---

## 📋 项目配置与规范

### ✅ 已完成
- [x] 基础 Vue3 + Vite 项目创建
- [x] 基础 TypeScript 配置
- [x] **代码规范配置** ✅
  - [x] ESLint 配置匹配源项目标准
  - [x] Prettier 配置匹配源项目标准
  - [x] Stylelint 配置用于样式检查
  - [x] EditorConfig 配置
- [x] **提交规范配置** ✅
  - [x] commitlint 安装配置
  - [x] conventional commit 规范配置
  - [x] husky git hooks 设置
  - [x] lint-staged 预提交检查

---

## 🛠 开发工具链配置

### ✅ 已完成
- [x] **基础构建配置** ✅
  - [x] Vite 基础构建配置
  - [x] Less 预处理器配置
  - [x] 热重载配置
  - [x] TypeScript 编译配置

### ⏳ 待完成
- [ ] **构建配置优化** (优先级: 中)
  - [ ] 添加 bundle 分析工具
  - [ ] 配置生产环境优化

- [ ] **开发体验优化** (优先级: 中)
  - [ ] 添加开发服务器代理
  - [ ] 配置 source map

---

## 📚 文档系统

### ⏳ 待完成
- [ ] **文档框架选择与配置** (优先级: 高)
  - [ ] 选择文档框架 (推荐 VitePress 或 Docusaurus)
  - [ ] 配置文档主题和样式
  - [ ] 建立文档目录结构

- [ ] **文档内容迁移** (优先级: 高)
  - [ ] 迁移快速开始文档
  - [ ] 迁移组件文档结构
  - [ ] 建立 demo 演示系统
  - [ ] 配置多语言支持 (中英文)

---

## 🎨 样式系统

### ✅ 已完成
- [x] **CSS 架构设计** ✅
  - [x] Less 预处理器配置
  - [x] CSS 变量系统建立 (匹配源项目)
  - [x] 全局样式配置
  - [x] 组件样式管理规范

### ⏳ 待完成
- [ ] **样式工具** (优先级: 中)
  - [ ] 配置 PostCSS 插件
  - [ ] 添加 autoprefixer
  - [ ] 配置 px2rem 或类似工具

---

## 🧩 组件系统架构

### ✅ 已完成
- [x] **基础架构** ✅
  - [x] 组件基础类型定义建立
  - [x] withNativeProps 工具函数创建 (Vue版本)
  - [x] mergeProps 工具函数创建
  - [x] 组件样式管理规范建立

- [x] **工具函数迁移** ✅
  - [x] 核心工具函数迁移 (native-props, validate, can-use-dom)
  - [x] Vue3 组合式API 适配
  - [x] 基础 composables 系统建立

### ⏳ 待完成
- [ ] **扩展功能** (优先级: 中)
  - [ ] 高级 hooks/composables 开发
  - [ ] 主题切换功能
  - [ ] 国际化支持

---

## 📦 组件迁移计划

> **重要**: 每次迁移新组件前，必须重新检索源项目和当前项目的最新状态

### 第一批 - 基础组件 (优先级: 高) ✅ 已完成
- [x] **Button 按钮** ✅ 
  - [x] 组件逻辑迁移
  - [x] 样式迁移 (pixel perfect)
  - [x] TypeScript 类型定义
  - [x] 演示页面
  - [ ] 单元测试
  - [ ] 文档和 demo

- [x] **Space 间距** ✅
  - [x] 组件逻辑迁移
  - [x] 样式迁移
  - [x] 类型定义
  - [x] 演示页面
  - [ ] 测试用例
  - [ ] 文档

- [x] **Divider 分割线** ✅
  - [x] 组件迁移
  - [x] 样式适配
  - [x] 演示页面
  - [ ] 文档迁移

- [x] **Tag 标签** ✅
  - [x] 组件逻辑迁移
  - [x] 样式迁移 (pixel perfect)
  - [x] TypeScript 类型定义
  - [x] 演示页面
  - [ ] 单元测试
  - [ ] 文档

### 第二批 - 反馈组件 (优先级: 高)
- [x] **Loading 加载中** 🔄 部分完成
  - [x] DotLoading 点状加载 ✅
  - [ ] SpinLoading 旋转加载
  
- [ ] **Toast 轻提示**
- [ ] **Dialog 对话框**
- [ ] **Modal 弹窗**

### 第三批 - 表单组件 (优先级: 高)
- [ ] **Input 输入框**
- [ ] **TextArea 文本域**
- [ ] **Checkbox 复选框**
- [ ] **Radio 单选框**
- [ ] **Switch 开关**
- [ ] **Slider 滑动输入条**
- [ ] **Stepper 步进器**
- [ ] **Form 表单**

### 第四批 - 选择器组件 (优先级: 中)
- [ ] **Picker 选择器**
- [ ] **PickerView 选择器视图**
- [ ] **DatePicker 日期选择器**
- [ ] **DatePickerView 日期选择器视图**
- [ ] **Selector 选择组**
- [ ] **Cascader 级联选择**
- [ ] **CascaderView 级联选择视图**

### 第五批 - 导航组件 (优先级: 中)
- [ ] **NavBar 导航栏**
- [ ] **TabBar 标签栏**
- [ ] **Tabs 标签页**
- [ ] **CapsuleTabs 胶囊标签页**
- [ ] **JumboTabs 复杂标签页**

### 第六批 - 数据展示组件 (优先级: 中)
- [ ] **List 列表**
- [ ] **Card 卡片**
- [ ] **Collapse 折叠面板**
- [ ] **Grid 宫格**
- [ ] **Image 图片**
- [ ] **Avatar 头像**
- [ ] **Badge 徽标**
- [ ] **Tag 标签**
- [ ] **Steps 步骤条**
- [ ] **ProgressBar 进度条**
- [ ] **ProgressCircle 环形进度条**

### 第七批 - 高级组件 (优先级: 中)
- [ ] **Swiper 滑块视图**
- [ ] **ImageViewer 图片查看器**
- [ ] **ImageUploader 图片上传器**
- [ ] **InfiniteScroll 无限滚动**
- [ ] **PullToRefresh 下拉刷新**
- [ ] **AutoCenter 自动居中**
- [ ] **Ellipsis 文本省略**

### 第八批 - 特殊组件 (优先级: 低)
- [ ] **Calendar 日历**
- [ ] **CalendarPicker 日历选择器**
- [ ] **CalendarPickerView 日历选择器视图**
- [ ] **Rate 评分**
- [ ] **Slider 滑动输入条**
- [ ] **NumberKeyboard 数字键盘**
- [ ] **PasscodeInput 密码输入框**
- [ ] **SearchBar 搜索栏**
- [ ] **IndexBar 索引栏**

### 第九批 - 其他组件
- [ ] **ActionSheet 动作面板**
- [ ] **Popup 弹出层**
- [ ] **CenterPopup 中央弹出层**
- [ ] **Popover 气泡卡片**
- [ ] **Mask 背景蒙层**
- [ ] **NoticeBar 通告栏**
- [ ] **PageIndicator 分页符**
- [ ] **Result 结果**
- [ ] **ResultPage 结果页面**
- [ ] **Empty 空状态**
- [ ] **ErrorBlock 异常**
- [ ] **Skeleton 骨架屏**
- [ ] **SafeArea 安全区**
- [ ] **SideBar 侧边导航**
- [ ] **TreeSelect 树选择**
- [ ] **CheckList 可勾选列表**
- [ ] **Dropdown 下拉菜单**
- [ ] **FloatingBubble 浮动气泡**
- [ ] **FloatingPanel 浮动面板**
- [ ] **Footer 页脚**
- [ ] **ScrollMask 滚动遮罩**
- [ ] **Segmented 分段控制器**
- [ ] **SwipeAction 滑动操作**
- [ ] **VirtualInput 虚拟输入框**
- [ ] **WaterMark 水印**

---

## 🧪 测试系统

### ⏳ 待完成
- [ ] **单元测试框架** (优先级: 高)
  - [ ] 配置 Vitest
  - [ ] 配置 Vue Test Utils
  - [ ] 建立测试工具函数
  - [ ] 配置覆盖率报告

- [ ] **E2E 测试** (优先级: 中)
  - [ ] 配置 Playwright
  - [ ] 建立页面测试用例
  - [ ] 配置 CI/CD 集成

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

## 🌍 国际化

### ⏳ 待完成
- [ ] **i18n 配置** (优先级: 低)
  - [ ] 配置 Vue i18n
  - [ ] 建立语言包结构
  - [ ] 迁移源项目的多语言文件

---

## 📊 性能优化

### ⏳ 待完成
- [ ] **包体积优化** (优先级: 中)
  - [ ] 按需引入机制
  - [ ] 代码分割策略
  - [ ] 依赖优化

- [ ] **运行时性能** (优先级: 中)
  - [ ] 组件懒加载
  - [ ] 虚拟滚动优化
  - [ ] 内存泄漏检查

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
│   │   ├── Button.vue  # 组件实现
│   │   ├── button.less # 样式文件
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

---

## 🔄 开发流程

1. **开始新组件迁移前**:
   - 重新检索源项目该组件的最新实现
   - 分析组件的所有功能和 API
   - 制定详细的迁移计划

2. **迁移过程中**:
   - 先实现组件逻辑
   - 再进行样式迁移 (像素级对比)
   - 添加 TypeScript 类型
   - 编写单元测试
   - 完善文档和示例

3. **完成组件后**:
   - 在真实场景中测试
   - 对比源组件确保一致性
   - 更新文档
   - 提交代码并更新此 TODO

---

## 📝 项目信息

**远程仓库**: https://github.com/oliver-xie666/ant-mobile-vue.git  
**Node.js 版本**: ^20.19.0 || >=22.12.0  
**包管理器**: pnpm  
**开始时间**: 2024  
**预估完成时间**: 待评估  

---

*此文档将随项目进展持续更新，每完成一项任务请及时更新状态*