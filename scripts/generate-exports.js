#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 组件列表 - 在这里维护所有组件
const components = [
  'auto-center',
  'button',
  'center-popup',
  'config-provider',
  'dialog',
  'dot-loading',
  'divider',
  'input',
  'mask',
  'modal',
  'space',
  'spin-loading',
  'tag',
  'text-area',
  'toast'
]

// 生成组件exports配置
const generateComponentExports = () => {
  const exports = {}

  components.forEach(component => {
    exports[`./lib/${component}`] = {
      import: `./lib/${component}/index.js`,
      require: `./lib/${component}/index.js`,
      types: `./lib/${component}/index.d.ts`
    }
  })

  return exports
}

// 完整的exports配置
const exportsConfig = {
  ".": {
    import: "./lib/index.js",
    require: "./lib/index.js",
    types: "./lib/index.d.ts"
  },
  "./lib/*": "./lib/*",
  ...generateComponentExports(),
  "./lib/*/index.css": "./lib/*/index.css"
}

// 读取package.json
const packageJsonPath = path.join(__dirname, '../package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

// 更新exports配置
packageJson.exports = exportsConfig

// 写回package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n')

console.log('✅ Exports configuration generated successfully!')
console.log(`📦 Configured ${components.length} components:`)
components.forEach(component => {
  console.log(`   - ${component}`)
})
