<template>
  <nav class="navbar">
    <div class="left-part">
      <div class="navbar-brand">
        <img :src="navbarConfig.logo.image" :alt="navbarConfig.logo.title" />
        <span class="title">{{ navbarConfig.logo.title }}</span>
        <span class="version">{{ navbarConfig.logo.version }}</span>
      </div>
    </div>
    <div class="middle-part">
      <div class="navbar-search">
        <input type="text" :placeholder="navbarConfig.search.placeholder" />
      </div>
    </div>
    <div class="right-part">
      <nav>
        <span v-for="navItem in navbarConfig.nav" :key="navItem.text">
          <a
            :href="navItem.link"
            :target="navItem.target || '_self'"
          >
            {{ navItem.text }}
          </a>
        </span>
      </nav>
    </div>
  </nav>
</template>

<script setup>
import { navbarConfig } from './config'
</script>
