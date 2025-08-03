<template>
  <div class="icon-demo-single">
    <div class="demo-section">
      <h4>基础用法</h4>
      <div class="demo-row">
        <MockIcon name="Ant" :size="24" />
        <MockIcon name="Check" :size="24" />
        <MockIcon name="Close" :size="24" />
      </div>
      <div class="code-block">
        <pre><code>&lt;AntOutline /&gt;
&lt;CheckOutline /&gt;
&lt;CloseOutline /&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h4>自定义大小</h4>
      <div class="demo-row">
        <MockIcon name="Ant" :size="16" />
        <MockIcon name="Ant" :size="24" />
        <MockIcon name="Ant" :size="32" />
        <MockIcon name="Ant" :size="48" />
      </div>
      <div class="code-block">
        <pre><code>&lt;AntOutline :size="16" /&gt;
&lt;AntOutline :size="24" /&gt;
&lt;AntOutline :size="32" /&gt;
&lt;AntOutline :size="48" /&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h4>自定义颜色</h4>
      <div class="demo-row">
        <MockIcon name="Heart" :size="24" color="#ff3141" />
        <MockIcon name="Star" :size="24" color="#ff8f1f" />
        <MockIcon name="Home" :size="24" color="#00b578" />
        <MockIcon name="User" :size="24" color="#1677ff" />
      </div>
      <div class="code-block">
        <pre><code>&lt;HeartOutline :size="24" color="#ff3141" /&gt;
&lt;StarOutline :size="24" color="#ff8f1f" /&gt;
&lt;HomeOutline :size="24" color="#00b578" /&gt;
&lt;UserOutline :size="24" color="#1677ff" /&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h4>配合文字使用</h4>
      <div class="demo-row vertical">
        <div class="text-with-icon">
          <MockIcon name="Check" :size="16" color="#00b578" />
          <span>操作成功</span>
        </div>
        <div class="text-with-icon">
          <MockIcon name="Close" :size="16" color="#ff3141" />
          <span>操作失败</span>
        </div>
        <div class="text-with-icon">
          <MockIcon name="Search" :size="16" />
          <span>搜索</span>
        </div>
      </div>
      <div class="code-block">
        <pre><code>&lt;div class="text-with-icon"&gt;
  &lt;CheckOutline :size="16" color="#00b578" /&gt;
  &lt;span&gt;操作成功&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

// 模拟图标组件
const MockIcon = ({ name, size = 24, color = '#1677ff' }) => h('div', {
  style: {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: Math.max(8, size * 0.4) + 'px',
    fontWeight: 'bold',
    flexShrink: 0
  }
}, name.slice(0, 2))
</script>

<style lang="less" scoped>
.icon-demo-single {
  padding: 16px;
}

.demo-section {
  margin-bottom: 32px;

  h4 {
    margin: 0 0 16px;
    font-size: 16px;
    font-weight: 600;
    color: var(--adm-color-text);
  }
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  &.vertical {
    flex-direction: column;
    align-items: flex-start;
  }
}

.text-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: var(--adm-color-text);
    font-size: 14px;
  }
}

.code-block {
  background: var(--adm-color-box);
  border-radius: var(--adm-radius-s);
  padding: 12px;

  pre {
    margin: 0;

    code {
      font-family: SFMono-Regular, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      color: var(--adm-color-text);
    }
  }
}

@media (width <= 768px) {
  .demo-row {
    gap: 12px;

    &.vertical {
      gap: 8px;
    }
  }

  .text-with-icon {
    gap: 6px;

    span {
      font-size: 13px;
    }
  }
}
</style>
