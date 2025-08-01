<template>
  <div class="page-layout">
    <!-- 自定义导航栏 -->
    <Navbar />

    <!-- 页面内容区域，给内容留出导航栏的空间 -->
    <div class="page-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>

<style>
.page-layout {
  min-height: 100vh;
}
</style>
