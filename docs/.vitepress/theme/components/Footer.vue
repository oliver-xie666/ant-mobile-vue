<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-sections">
        <div
          v-for="section in currentFooterConfig.sections"
          :key="section.title"
          class="footer-section"
        >
          <h4>{{ section.title }}</h4>
          <div class="footer-links">
            <a
              v-for="link in section.links"
              :key="link.text"
              :href="link.href"
              :target="link.target || '_self'"
            >
              {{ link.text }}
              <span v-if="link.desc" class="link-desc">{{ link.desc }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 社交图标 -->
      <div class="footer-social">
        <div class="social-links">
          <a href="https://github.com/oliver-xie666/ant-mobile-vue" target="_blank" class="social-link">
            <svg viewBox="0 0 1024 1024" width="20" height="20">
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>
            </svg>
          </a>
          <a href="https://twitter.com/antdesignui" target="_blank" class="social-link">
            <svg viewBox="0 0 1024 1024" width="20" height="20">
              <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75.2-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 85.4c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 842 590.2 842 426.9c0-7.9-.2-15.7-.6-23.4a286.96 286.96 0 0 0 86.6-85.2z"/>
            </svg>
          </a>
          <a href="https://www.zhihu.com/column/antdesign" target="_blank" class="social-link">
            <svg viewBox="0 0 1024 1024" width="20" height="20">
              <path d="M564.7 230.1V803h84l23.4 94.3L756.3 803h131.5V230.1H564.7zm247.7 497h-52.2l-47.4 44.4-12.6-44.4h-84.4V309.6h196.6v417.5zM526.1 840.6c-15.8 0-31.5-2.1-46.8-6.2l-84.1 67.7 22.4-67.7c-58.3-24.5-96.4-72.4-96.4-127.9 0-79.3 73.8-143.5 164.9-143.5s164.9 64.2 164.9 143.5c0 79.2-73.8 143.4-164.9 143.4z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>
            {{ currentFooterConfig.copyright.text }}
            <a :href="currentFooterConfig.copyright.linkHref" target="_blank">
              {{ currentFooterConfig.copyright.linkText }}
            </a>
            {{ currentFooterConfig.copyright.description }}
          </p>
          <p class="footer-tech">
            {{ currentFooterConfig.tech.prefix }}
            <template v-for="(link, index) in currentFooterConfig.tech.links" :key="link.text">
              <a :href="link.href" :target="link.target">{{ link.text }}</a>
              <span v-if="index < currentFooterConfig.tech.links.length - 1"> + </span>
            </template>
          </p>
        </div>
        <div class="footer-made-by">
          <p>
            {{ currentFooterConfig.madeBy.text }}
            <a :href="currentFooterConfig.madeBy.authorHref" target="_blank">
              {{ currentFooterConfig.madeBy.author }}
            </a>
          </p>
          <p class="footer-version">
            Version {{ version }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import { footerConfig, footerConfigEn } from './config'

const { lang } = useData()
const version = ref('0.0.1')

const isEnglish = computed(() => lang.value === 'en-US')
const currentFooterConfig = computed(() => {
  return isEnglish.value ? footerConfigEn : footerConfig
})
</script>
