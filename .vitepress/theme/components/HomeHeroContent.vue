<script setup>
import { onMounted } from 'vue'

const openSearch = () => {
    // Try to click the search button in the navbar if it exists
    const searchBtn = document.querySelector('.VPNavBarSearchButton')
    if (searchBtn && searchBtn.click) {
        searchBtn.click()
    } else {
        // Fallback: Dispatch standard keyboard shortcut for doc search (Ctrl+K or Cmd+K)
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }))
    }
}

const aiLinks = [
    { icon: '🐳', link: 'https://www.deepseek.com/' },
    { icon: '🤖', link: '#' },
    { icon: '⚡', link: '#' },
    { icon: '🌲', link: '#' },
    { icon: '☀️', link: '#' },
]
</script>

<template>
  <div class="home-hero-content">
    <img src="/avatar.png" class="hero-avatar" alt="Avatar" />
    
    <div class="search-trigger" @click="openSearch">
      <span class="icon">🔍</span>
      <span class="placeholder">Can the paradoxes of time travel be resolved?</span>
      <div class="shortcut">
        <span class="arrow">→</span>
      </div>
    </div>

    <div class="ai-links">
      <a 
        v-for="(item, index) in aiLinks" 
        :key="index" 
        :href="item.link" 
        target="_blank" 
        class="ai-link"
      >
        <span class="ai-icon">{{ item.icon }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home-hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
  width: 100%;
}

.hero-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.hero-avatar:hover {
  transform: scale(1.05);
}

.search-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 12px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 99px;
  cursor: text;
  transition: border-color 0.25s, background-color 0.25s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.search-trigger:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-mute);
}

.icon {
  margin-right: 12px;
  font-size: 1.1em;
  opacity: 0.6;
}

.placeholder {
  flex: 1;
  font-size: 16px;
  color: var(--vp-c-text-2);
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shortcut .arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.ai-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.ai-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  transition: transform 0.2s, box-shadow 0.2s;
  font-size: 24px;
  text-decoration: none;
}

.ai-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
