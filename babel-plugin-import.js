// Babel plugin configuration for tree-shaking
module.exports = {
  libraryName: 'ant-mobile-vue',
  libraryDirectory: 'lib', // 指向lib目录
  style: true, // 自动引入样式
  camel2DashComponentName: false, // 保持组件名称格式
  transformToDefaultImport: true,
  customName: (name) => {
    // 将组件名转换为正确的路径
    const componentMap = {
      'Button': 'button',
      'DotLoading': 'dot-loading',
      'Divider': 'divider',
      'Space': 'space',
      'Tag': 'tag',
    }

    const componentPath = componentMap[name]
    if (componentPath) {
      return `ant-mobile-vue/lib/${componentPath}`
    }

    // 如果没找到映射，使用kebab-case转换
    return `ant-mobile-vue/lib/${name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`
  },
  styleLibraryName: 'ant-mobile-vue',
  customStyleName: (name) => {
    const componentMap = {
      'Button': 'button',
      'DotLoading': 'dot-loading',
      'Divider': 'divider',
      'Space': 'space',
      'Tag': 'tag',
    }

    const componentPath = componentMap[name]
    if (componentPath) {
      return `ant-mobile-vue/lib/${componentPath}/index.css`
    }

    return `ant-mobile-vue/lib/${name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}/index.css`
  }
}

// 使用示例配置
module.exports.exampleConfig = {
  // .babelrc.js 或 babel.config.js 中的配置
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-mobile-vue',
        libraryDirectory: 'lib',
        style: true,
      },
      'ant-mobile-vue'
    ]
  ]
}
