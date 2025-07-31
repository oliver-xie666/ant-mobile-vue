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
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375, // 设计稿宽度
      unitPrecision: 6, // 转换后的小数位数
      propList: ['*'], // 要转换的属性
      viewportUnit: 'vw', // 转换后的单位
      fontViewportUnit: 'vw', // 字体转换后的单位
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
      minPixelValue: 1, // 最小转换像素值
      mediaQuery: false, // 媒体查询中是否转换
      replace: true, // 是否替换属性值
      exclude: [/node_modules/], // 排除文件夹
      landscape: false, // 是否处理横屏情况
    },
  },
}
