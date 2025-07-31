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
    // 自定义规则可以在这里添加
  },
}
