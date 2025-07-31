export default {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/docs/.vitepress/theme/styles/global*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'selector-class-pattern': null,
        'no-descending-specificity': null,
      },
    },
  ],
  rules: {
    // 允许双斜线注释（Less 语法）
    'no-invalid-double-slash-comments': null,
    // 允许 unknown @ rules （Less 变量和混合）
    'at-rule-no-unknown': null,
    // 允许 vendor 前缀
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    // 允许 empty sources
    'no-empty-source': null,
    // 允许第三方库的类名格式（VitePress、DocSearch等）
    'selector-class-pattern': null,
    // 允许第三方样式覆盖时的优先级问题
    'no-descending-specificity': null,
    // 自定义规则可以在这里添加
  },
}
