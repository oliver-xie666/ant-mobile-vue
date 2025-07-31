export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Chrome > 40',
        'ff > 31',
        'ie 11',
        'last 2 versions',
        '> 1%',
        'iOS >= 7',
        'Android >= 4.0',
      ],
    },
    // 暂时完全禁用px-to-viewport转换
    // 确保文档在PC端正常显示固定像素值
    // 组件库的移动端适配将在后续单独配置
  },
}
