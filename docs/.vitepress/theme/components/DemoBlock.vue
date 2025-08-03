<template>
  <div class="demoBlock">
    <div class="title" v-if="title">{{ title }}</div>
    <div
      class="main"
      :style="{
        padding,
        background,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  padding?: string
  background?: string
}

withDefaults(defineProps<Props>(), {
  padding: '12px 12px',
  background: 'var(--adm-color-background)',
})
</script>

<style scoped lang="less">
.demoBlock {
  margin-bottom: 12px;

  &:last-of-type {
    padding-bottom: 32px;
  }
}

.title {
  padding: 12px 12px 8px;
  color: #697b8c;
  font-size: 14px;
}

html[data-prefers-color-scheme='dark'] {
  .title {
    color: #959da6;
  }
}

.main {
  border-right: none;
  border-left: none;
}
</style>
