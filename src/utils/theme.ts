import type { CSSProperties } from 'vue'
import { canUseDom } from './can-use-dom'
import type { ThemeMode, ColorValue } from '../types'

// 主题配置接口
export interface ThemeConfig {
  // 主色系
  primary?: ColorValue
  success?: ColorValue
  warning?: ColorValue
  danger?: ColorValue

  // 扩展色彩
  yellow?: ColorValue
  orange?: ColorValue
  wathet?: ColorValue

  // 文本颜色
  text?: ColorValue
  textSecondary?: ColorValue
  weak?: ColorValue
  light?: ColorValue

  // 背景颜色
  background?: ColorValue
  backgroundBody?: ColorValue
  box?: ColorValue
  fillContent?: ColorValue

  // 边框颜色
  border?: ColorValue

  // 字体设置
  fontFamily?: string
  fontSizeMain?: string

  // 圆角
  radiusS?: string
  radiusM?: string
  radiusL?: string

  // 间距
  spacingXs?: string
  spacingSm?: string
  spacingMd?: string
  spacingLg?: string
  spacingXl?: string
  spacingXxl?: string
}

// 默认主题配置
export const defaultThemeConfig: Required<ThemeConfig> = {
  // 主色系
  primary: '#1677ff',
  success: '#00b578',
  warning: '#ff8f1f',
  danger: '#ff3141',

  // 扩展色彩
  yellow: '#ff9f18',
  orange: '#ff6430',
  wathet: '#e7f1ff',

  // 文本颜色
  text: '#333333',
  textSecondary: '#666666',
  weak: '#999999',
  light: '#cccccc',

  // 背景颜色
  background: '#ffffff',
  backgroundBody: '#ffffff',
  box: '#f5f5f5',
  fillContent: '#f5f5f5',

  // 边框颜色
  border: '#eeeeee',

  // 字体设置
  fontFamily: "-apple-system, blinkmacsystemfont, 'Helvetica Neue', helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif",
  fontSizeMain: '13px',

  // 圆角
  radiusS: '4px',
  radiusM: '8px',
  radiusL: '12px',

  // 间距
  spacingXs: '4px',
  spacingSm: '8px',
  spacingMd: '12px',
  spacingLg: '16px',
  spacingXl: '20px',
  spacingXxl: '24px',
}

// 暗色主题配置
export const darkThemeConfig: Required<ThemeConfig> = {
  ...defaultThemeConfig,

  // 主色系（暗色调整）
  primary: '#3086ff',
  success: '#34b368',
  warning: '#ffa930',
  danger: '#ff4a58',

  // 扩展色彩（暗色调整）
  yellow: '#ffa930',
  orange: '#e65a2b',
  wathet: '#0d2543',

  // 文本颜色（暗色主题）
  text: '#e6e6e6',
  textSecondary: '#b3b3b3',
  weak: '#808080',
  light: '#4d4d4d',

  // 背景颜色（暗色主题）
  background: '#1a1a1a',
  backgroundBody: '#1a1a1a',
  box: '#0a0a0a',
  fillContent: '#0a0a0a',

  // 边框颜色（暗色主题）
  border: '#2b2b2b',
}

// 将主题配置转换为CSS变量对象
export function themeConfigToCSSVars(config: Partial<ThemeConfig>): CSSProperties {
  const cssVars: CSSProperties = {}

  // 映射配置到CSS变量
  const configMap: Record<keyof ThemeConfig, string> = {
    primary: '--adm-color-primary',
    success: '--adm-color-success',
    warning: '--adm-color-warning',
    danger: '--adm-color-danger',
    yellow: '--adm-color-yellow',
    orange: '--adm-color-orange',
    wathet: '--adm-color-wathet',
    text: '--adm-color-text',
    textSecondary: '--adm-color-text-secondary',
    weak: '--adm-color-weak',
    light: '--adm-color-light',
    background: '--adm-color-background',
    backgroundBody: '--adm-color-background-body',
    box: '--adm-color-box',
    fillContent: '--adm-color-fill-content',
    border: '--adm-color-border',
    fontFamily: '--adm-font-family',
    fontSizeMain: '--adm-font-size-main',
    radiusS: '--adm-radius-s',
    radiusM: '--adm-radius-m',
    radiusL: '--adm-radius-l',
    spacingXs: '--adm-spacing-xs',
    spacingSm: '--adm-spacing-sm',
    spacingMd: '--adm-spacing-md',
    spacingLg: '--adm-spacing-lg',
    spacingXl: '--adm-spacing-xl',
    spacingXxl: '--adm-spacing-xxl',
  }

  // 转换配置到CSS变量
  Object.entries(config).forEach(([key, value]) => {
    const cssVar = configMap[key as keyof ThemeConfig]
    if (cssVar && value !== undefined) {
      ;(cssVars as any)[cssVar] = value
    }
  })

  return cssVars
}

// 应用主题配置到DOM
export function applyThemeConfig(config: Partial<ThemeConfig>, target?: HTMLElement) {
  if (!canUseDom) return

  const element = target || document.documentElement
  const cssVars = themeConfigToCSSVars(config)

  // 应用CSS变量
  Object.entries(cssVars).forEach(([property, value]) => {
    element.style.setProperty(property, value as string)
  })
}

// 获取当前主题配置
export function getCurrentThemeConfig(): Partial<ThemeConfig> {
  if (!canUseDom) return {}

  const computedStyle = getComputedStyle(document.documentElement)
  const config: Partial<ThemeConfig> = {}

  const configMap: Record<string, keyof ThemeConfig> = {
    '--adm-color-primary': 'primary',
    '--adm-color-success': 'success',
    '--adm-color-warning': 'warning',
    '--adm-color-danger': 'danger',
    '--adm-color-yellow': 'yellow',
    '--adm-color-orange': 'orange',
    '--adm-color-wathet': 'wathet',
    '--adm-color-text': 'text',
    '--adm-color-text-secondary': 'textSecondary',
    '--adm-color-weak': 'weak',
    '--adm-color-light': 'light',
    '--adm-color-background': 'background',
    '--adm-color-background-body': 'backgroundBody',
    '--adm-color-box': 'box',
    '--adm-color-fill-content': 'fillContent',
    '--adm-color-border': 'border',
    '--adm-font-family': 'fontFamily',
    '--adm-font-size-main': 'fontSizeMain',
    '--adm-radius-s': 'radiusS',
    '--adm-radius-m': 'radiusM',
    '--adm-radius-l': 'radiusL',
    '--adm-spacing-xs': 'spacingXs',
    '--adm-spacing-sm': 'spacingSm',
    '--adm-spacing-md': 'spacingMd',
    '--adm-spacing-lg': 'spacingLg',
    '--adm-spacing-xl': 'spacingXl',
    '--adm-spacing-xxl': 'spacingXxl',
  }

  // 读取CSS变量值
  Object.entries(configMap).forEach(([cssVar, configKey]) => {
    const value = computedStyle.getPropertyValue(cssVar).trim()
    if (value) {
      config[configKey] = value
    }
  })

  return config
}

// 重置主题配置
export function resetThemeConfig(theme: 'light' | 'dark' = 'light') {
  const config = theme === 'dark' ? darkThemeConfig : defaultThemeConfig
  applyThemeConfig(config)
}

// 创建主题变量字符串（用于动态样式）
export function createThemeVars(config: Partial<ThemeConfig>): string {
  const cssVars = themeConfigToCSSVars(config)

  return Object.entries(cssVars)
    .map(([property, value]) => `${property}: ${value}`)
    .join('; ')
}

// 主题工具类
export const themeUtils = {
  applyThemeConfig,
  getCurrentThemeConfig,
  resetThemeConfig,
  createThemeVars,
  themeConfigToCSSVars,
  defaultThemeConfig,
  darkThemeConfig,
}
