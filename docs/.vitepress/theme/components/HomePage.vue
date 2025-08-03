<template>
  <div class="home-page">
    <!-- 导航栏组件 -->
    <Navbar />

    <!-- 主要内容组件 -->
    <Main />

    <!-- 底部组件 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
import './HomePage.less'
import './Navbar.less'
import './Main.less'
import './Footer.less'
</script>
