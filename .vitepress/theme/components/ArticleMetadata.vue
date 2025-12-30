<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter, page } = useData()
const route = useRoute()

// Estimation logic
const words = ref(0)
const readTime = ref(0)

function calculateReadStats() {
    // We can access the raw content via page.value? No, page.value content is usually rendered or snippet.
    // However, simpler is to just select the DOM content on mount.
    // Relying on DOM is safer for accurate visual word count.
    
    // Wait for DOM
    setTimeout(() => {
        const content = document.querySelector('.vp-doc')
        if (!content) return
        
        const text = content.innerText || ''
        const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length
        const en = (text.match(/[a-zA-Z0-9_\u0392-\u03c9]+[\u4e00-\u9fa5]*/g) || []).length
        const count = cn + en
        
        words.value = count
        // Estimate: 400 words per minute for reading? 
        readTime.value = Math.ceil(count / 400)
    }, 100)
}

onMounted(() => {
    calculateReadStats()
})

watch(() => route.path, () => {
    calculateReadStats()
})

// Format data
const date = computed(() => {
  const d = frontmatter.value.date
  if (!d) return ''
  return new Date(d).toLocaleDateString('zh-CN')
})

const tags = computed(() => {
  return frontmatter.value.tags || []
})
</script>

<template>
  <div class="article-metadata" v-if="frontmatter.layout !== 'home'">
    <div class="meta-item">
      <span class="icon">📝</span>
      <span class="text">约 {{ words }} 字</span>
    </div>
    <div class="meta-item">
      <span class="icon">⏱️</span>
      <span class="text">大约 {{ readTime }} 分钟</span>
    </div>
    <div class="meta-item" v-if="tags.length">
      <span class="icon">🏷️</span>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="meta-item" v-if="date">
      <span class="icon">📅</span>
      <span class="text">{{ date }}</span>
    </div>
  </div>
</template>

<style scoped>
.article-metadata {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 16px;
  background-color: transparent; /* Changed from fbfbfb to transparent based on feedback intent, but Paiad uses a bar. */
  /* To match the Paiad look (clean row under title), we keep it minimal. */
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  border-bottom: 1px dashed var(--vp-c-divider);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon {
  opacity: 0.7;
}

.tags {
  display: flex;
  gap: 6px;
}

.tag {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.dark .tag {
    background: rgba(16, 185, 129, 0.2);
}
</style>
