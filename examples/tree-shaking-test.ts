// 测试按需引入功能
// 这个文件用于验证按需引入是否正常工作

// 方式1：手动按需引入
import Button from '../lib/button'
import Tag from '../lib/tag'
import '../lib/button/index.css'
import '../lib/tag/index.css'

// 方式2：从主包导出引入（babel-plugin-import会处理）
import { Button as Button2, Tag as Tag2 } from '../src'

// 方式3：类型引入
import type { ButtonProps, TagProps } from '../src'

console.log('Tree-shaking test:')
console.log('Button:', Button)
console.log('Tag:', Tag)
console.log('Button2:', Button2)
console.log('Tag2:', Tag2)

// 类型测试
const buttonProps: ButtonProps = {
  color: 'primary',
  size: 'large'
}

const tagProps: TagProps = {
  color: 'success',
  fill: 'outline'
}

console.log('Type test passed:', buttonProps, tagProps)

export {
  Button,
  Tag,
  Button2,
  Tag2,
  type ButtonProps,
  type TagProps,
}
