<template>
  <div>
    <DemoBlock title="基础用法">
      <DotLoading />
    </DemoBlock>

    <DemoBlock title="有颜色的">
      <div class="demo-flex">
        <DotLoading color="primary" />
        <DotLoading color="white" class="white-background" />
        <DotLoading color="#ff6430" />
      </div>
    </DemoBlock>

    <DemoBlock title="不同大小">
      <div class="demo-flex">
        <DotLoading class="size-16" />
        <DotLoading class="size-24" />
        <DotLoading class="size-32" />
      </div>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import DotLoading from '../../../../../src/components/dot-loading/DotLoading.vue'
// 移除DemoBlock导入
</script>

<style scoped>
.demo-flex {
  display: flex;
  gap: 16px;
  align-items: center;
}

.white-background {
  background: #1677ff;
  padding: 8px;
  border-radius: 4px;
}

.size-16 {
  font-size: 16px;
}

.size-24 {
  font-size: 24px;
}

.size-32 {
  font-size: 32px;
}
</style>
