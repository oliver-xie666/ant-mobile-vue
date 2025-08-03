<template>
  <div class="icon-demo-all">
    <div class="icon-grid">
      <div
        v-for="icon in iconList"
        :key="icon.name"
        class="icon-item"
        @click="copyIconName(icon.name)"
      >
        <div class="icon-display">
          <component :is="icon.component" :size="24" />
        </div>
        <div class="icon-name">{{ icon.name }}</div>
      </div>
    </div>

    <div v-if="copyMessage" class="copy-message">
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, h } from 'vue'

// 模拟图标组件（实际使用时应该从ant-mobile-vue-icons导入）
const MockIcon = ({ name }) => h('div', {
  style: {
    width: '24px',
    height: '24px',
    backgroundColor: '#1677ff',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold'
  }
}, name.slice(0, 2))

const iconList = reactive([
  { name: 'AntOutline', component: () => MockIcon({ name: 'Ant' }) },
  { name: 'CheckOutline', component: () => MockIcon({ name: 'Ch' }) },
  { name: 'CloseOutline', component: () => MockIcon({ name: 'Cl' }) },
  { name: 'SearchOutline', component: () => MockIcon({ name: 'Se' }) },
  { name: 'MoreOutline', component: () => MockIcon({ name: 'Mo' }) },
  { name: 'LeftOutline', component: () => MockIcon({ name: 'Le' }) },
  { name: 'RightOutline', component: () => MockIcon({ name: 'Ri' }) },
  { name: 'UpOutline', component: () => MockIcon({ name: 'Up' }) },
  { name: 'DownOutline', component: () => MockIcon({ name: 'Do' }) },
  { name: 'AddOutline', component: () => MockIcon({ name: 'Ad' }) },
  { name: 'MinusOutline', component: () => MockIcon({ name: 'Mi' }) },
  { name: 'EditOutline', component: () => MockIcon({ name: 'Ed' }) },
  { name: 'DeleteOutline', component: () => MockIcon({ name: 'De' }) },
  { name: 'ShareOutline', component: () => MockIcon({ name: 'Sh' }) },
  { name: 'HeartOutline', component: () => MockIcon({ name: 'He' }) },
  { name: 'StarOutline', component: () => MockIcon({ name: 'St' }) },
  { name: 'HomeOutline', component: () => MockIcon({ name: 'Ho' }) },
  { name: 'UserOutline', component: () => MockIcon({ name: 'Us' }) },
])

const copyMessage = ref('')

const copyIconName = async (name) => {
  try {
    await navigator.clipboard.writeText(`import { ${name} } from 'ant-mobile-vue-icons'`)
    copyMessage.value = `已复制 ${name} 的导入代码`
    setTimeout(() => {
      copyMessage.value = ''
    }, 2000)
  } catch {
    copyMessage.value = '复制失败，请手动复制'
    setTimeout(() => {
      copyMessage.value = ''
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.icon-demo-all {
  padding: 16px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid var(--adm-color-border);
  border-radius: var(--adm-radius-s);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: var(--adm-color-primary);
    background-color: rgb(22 119 255 / 5%);
  }
}

.icon-display {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-name {
  font-size: 12px;
  color: var(--adm-color-text-secondary);
  text-align: center;
  word-break: break-all;
}

.copy-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--adm-color-text);
  color: var(--adm-color-white);
  padding: 8px 16px;
  border-radius: var(--adm-radius-s);
  font-size: 14px;
  z-index: 1000;
}

@media (width <= 768px) {
  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }

  .icon-item {
    padding: 8px;
  }
}
</style>
