<script setup>
const openSearch = () => {
  const searchBtn = document.querySelector('.VPNavBarSearch .DocSearch-Button')
  if (searchBtn && searchBtn.click) {
    searchBtn.click()
    return
  }

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }))
}

const aiLinks = [
  { icon: '🐋', link: 'https://www.deepseek.com/' },
  { icon: '🤖', link: '#' },
  { icon: '🌲', link: 'https://obsidian-note-ruby.vercel.app/' },
  { icon: '☀️', link: 'https://paiad-blog.vercel.app/' }
]
</script>

<template>
  <div class="home-hero-container">
    <div class="hero-card">
      <div class="avatar-wrapper">
        <img src="/avatar-plume.png" class="hero-avatar" alt="Avatar" />
      </div>

      <h1 class="hero-title">欢迎来到我的博客</h1>
      <div class="search-trigger" @click="openSearch">
        <span class="icon">🔍</span>
        <span class="placeholder">试着搜索博客或笔记，或者从目录页开始逛逛</span>
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
  </div>
</template>

<style scoped>
.home-hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 20px 40px;
  min-height: 60vh;
}

.hero-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 800px;
  padding: 60px 40px 50px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  margin-top: 50px;
}

.dark .hero-card {
  background: rgba(30, 41, 59, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.avatar-wrapper {
  position: absolute;
  top: -70px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.dark .avatar-wrapper {
  background: rgba(30, 30, 30, 0.3);
  border-color: rgba(255, 255, 255, 0.1);
}

.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  display: block;
}

.hero-avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  background: -webkit-linear-gradient(120deg, #0077b6 30%, #48cae4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 50px;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  line-height: 1.3;
  padding: 0 10px;
}

.dark .hero-title {
  background: -webkit-linear-gradient(120deg, #38bdf8 30%, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.search-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  cursor: text;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.dark .search-trigger {
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
}

.search-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand);
}

.icon {
  margin-right: 12px;
  font-size: 1.2em;
  opacity: 0.7;
}

.placeholder {
  flex: 1;
  font-size: 1rem;
  color: var(--vp-c-text-2);
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
  background: rgba(0, 0, 0, 0.05);
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.ai-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

.ai-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.dark .ai-link {
  background: rgba(255, 255, 255, 0.05);
}

.ai-link:hover {
  transform: translateY(-4px) scale(1.05);
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.dark .ai-link:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>

