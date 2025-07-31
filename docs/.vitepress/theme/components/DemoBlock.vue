<template>
  <div class="demo-block">
    <div class="demo-content">
      <slot />
    </div>
    <div class="demo-code" v-if="$slots.code">
      <details>
        <summary>查看代码</summary>
        <div class="code-content">
          <slot name="code" />
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
// Demo block component for showcasing components
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-content {
  padding: 24px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-border);
}

.demo-code {
  background: var(--vp-code-block-bg);
}

.demo-code details {
  border: none;
}

.demo-code summary {
  padding: 12px 16px;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-border);
  font-size: 14px;
  color: var(--vp-c-text-2);
  user-select: none;
}

.demo-code summary:hover {
  background: var(--vp-c-bg-mute);
}

.code-content {
  padding: 0;
}

/* stylelint-disable selector-pseudo-class-no-unknown */
.code-content :deep(pre) {
  margin: 0;
  border-radius: 0;
}
</style>
