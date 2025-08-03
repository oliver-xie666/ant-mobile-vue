<template>
  <div class="main-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ currentHeroConfig.title }}</h1>
          <p class="hero-description">{{ currentHeroConfig.description }}</p>
          <div class="hero-actions">
            <a
              v-for="action in currentHeroConfig.actions"
              :key="action.text"
              :href="action.link"
            >
              <Button
                :color="action.type"
                shape="rounded"
                :class="action === currentHeroConfig.actions[0] ? 'btn-left' : 'btn-right'"
              >
                {{ action.text }}
              </Button>
            </a>
          </div>
        </div>
        <div class="hero-phone">
          <div class="phone-container">
            <img
              class="phone-image"
              :src="currentHeroConfig.phone.image"
              :alt="currentHeroConfig.phone.alt"
            />
            <!-- 手机屏幕内的装饰元素 -->
            <div class="phone-decorations">
              <div class="decoration decoration-1"></div>
              <div class="decoration decoration-2"></div>
              <div class="decoration decoration-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Introduction -->
    <div class="product-introduce">
      <div class="container">
        <div class="product-grid">
          <div
            v-for="feature in currentProductIntroduce"
            :key="feature.title"
            class="product-item"
          >
            <img :src="feature.image" :alt="feature.title" height="32" />
            <div class="product-item-title">{{ feature.title }}</div>
            <div class="product-item-description">{{ feature.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Resource -->
    <div class="product-resource">
      <div class="container">
        <div class="resource-grid">
          <div
            v-for="resource in getProductResource(isWideScreen, isEnglish)"
            :key="resource.title"
            class="resource-card"
          >
            <div
              class="resource-content"
              :style="{ backgroundImage: `url(${resource.backgroundImage})` }"
            >
              <div class="resource-info">
                <img :src="resource.image" :alt="resource.title" />
                <div class="resource-text">
                  <h3>{{ resource.title }}</h3>
                  <p>{{ resource.description }}</p>
                </div>
              </div>
              <a
                :href="resource.buttonLink"
                :target="resource.target || '_self'"
              >
                <Button color="primary" shape="rounded">
                  {{ resource.buttonText }}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Values -->
    <div class="design-values">
      <div class="container">
        <div
          v-for="designValue in currentProductDesignValues"
          :key="designValue.title"
          class="design-value-section"
        >
          <div class="design-value-content">
            <h2>{{ designValue.title }}</h2>
            <p>{{ designValue.description }}</p>
            <div class="design-icons">
              <div
                v-for="icon in designValue.icons"
                :key="icon.text"
                class="design-icon"
              >
                <div class="lottie-container">
                  <!-- 这里可以集成Lottie动画 -->
                  <div class="lottie-placeholder">{{ icon.text.slice(0, 1) }}</div>
                </div>
                <span>{{ icon.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Guides -->
    <div class="guides-section">
      <div class="container">
        <div class="guides-grid">
          <div
            v-for="guide in getGuides(isWideScreen, isEnglish)"
            :key="guide.title"
            class="guide-card"
          >
            <div
              class="guide-content"
              :style="{ backgroundImage: `url(${guide.backgroundImage})` }"
            >
              <div class="guide-info">
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.description }}</p>
              </div>
              <a :href="guide.buttonLink">
                <Button color="primary" shape="rounded">
                  {{ guide.buttonText }}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations -->
    <div class="recommendations">
      <div class="container">
        <h2>{{ isEnglish ? 'Resources' : '精品资源' }}</h2>
        <div class="recommend-grid">
          <div
            v-for="recommend in getRecommends(isEnglish)"
            :key="recommend.title"
            class="recommend-card"
          >
            <a :href="recommend.link" target="_blank">
              <img :src="recommend.image" :alt="recommend.title" />
              <div class="recommend-info">
                <h4>{{ recommend.title }}</h4>
                <p>{{ recommend.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Users -->
    <div class="users-section">
      <div class="container">
        <h2>{{ isEnglish ? 'Who is using' : '谁在使用' }}</h2>
        <div class="users-grid">
          <a
            v-for="user in users"
            :key="user.name"
            :href="user.href || '#'"
            :target="user.href ? '_blank' : '_self'"
            class="user-card"
          >
            <img :src="user.image" :alt="user.name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
import { Button } from '@/components'
import {
  productIntroduce,
  productIntroduceEn,
  getProductResource,
  productDesignValues,
  productDesignValuesEn,
  getGuides,
  getRecommends,
  users,
  heroConfig,
  heroConfigEn,
} from './config'

const { lang } = useData()
const isWideScreen = ref(true)

// 根据语言选择配置
const currentHeroConfig = computed(() => {
  return lang.value === 'en-US' ? heroConfigEn : heroConfig
})

const currentProductIntroduce = computed(() => {
  return lang.value === 'en-US' ? productIntroduceEn : productIntroduce
})

const currentProductDesignValues = computed(() => {
  return lang.value === 'en-US' ? productDesignValuesEn : productDesignValues
})

const isEnglish = computed(() => lang.value === 'en-US')

onMounted(() => {
  const updateScreenSize = () => {
    isWideScreen.value = window.innerWidth > 450
  }

  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)

  return () => {
    window.removeEventListener('resize', updateScreenSize)
  }
})
</script>
