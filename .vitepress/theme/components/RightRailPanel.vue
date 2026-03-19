<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { data as posts } from '../utils/posts.data'
import { data as notes } from '../utils/notes.data'

const route = useRoute()

const blogCount = computed(() => posts.length)
const noteCount = computed(() => notes.length)
const latestPosts = computed(() => posts.slice(0, 3))
const latestNotes = computed(() => notes.slice(0, 3))

const currentSectionLabel = computed(() => {
  if (route.path.startsWith('/notes/')) return '笔记模式'
  return '博客模式'
})

const currentSummary = computed(() => {
  if (route.path.startsWith('/notes/')) {
    return '把抓取整理、课程笔记和复盘内容沉淀成自己的知识仓库。'
  }

  return '记录项目、面试准备和技术踩坑，把零散经验整理成稳定输出。'
})

const quickLinks = computed(() => {
  const baseLinks = [
    { title: '博客目录', desc: '查看全部博客文章', href: '/blog/' },
    { title: '笔记目录', desc: '进入知识笔记区', href: '/notes/' },
    { title: 'GitHub', desc: '查看项目与提交记录', href: 'https://github.com/henu20320-bit', external: true }
  ]

  if (route.path.startsWith('/notes/')) {
    return [
      { title: '最新笔记', desc: '继续阅读近期整理', href: latestNotes.value[0]?.url || '/notes/' },
      ...baseLinks
    ]
  }

  return [
    { title: '最新博客', desc: '直接进入最近更新', href: latestPosts.value[0]?.url || '/blog/' },
    ...baseLinks
  ]
})

const friendLinks = [
  {
    title: 'Paiad Blog',
    href: 'https://paiad-blog.vercel.app/blog/',
    desc: '轻盈的卡片布局和很舒服的右侧信息区。'
  },
  {
    title: 'Obsidian Note Ruby',
    href: 'https://obsidian-note-ruby.vercel.app/article/',
    desc: '带有数字花园气质的知识型页面组织方式。'
  }
]

const showPanel = computed(() => route.path.startsWith('/blog/') || route.path.startsWith('/notes/'))
const isReadingPage = computed(() => {
  if (!showPanel.value) return false
  return !['/blog/', '/blog/index.html', '/notes/', '/notes/index.html'].includes(route.path)
})
</script>

<template>
  <div v-if="showPanel" class="right-rail" :class="{ 'is-reading': isReadingPage }">
    <section class="rail-card rail-profile">
      <div class="profile-top">
        <div class="avatar-shell">
          <img src="/avatar-plume.png" alt="lanlan avatar" />
        </div>
        <div>
          <p class="eyebrow">{{ currentSectionLabel }}</p>
          <h2>lanlan</h2>
          <p class="subtitle">把博客做成自己的数字小屋</p>
        </div>
      </div>

      <p class="profile-copy">{{ currentSummary }}</p>

      <div class="profile-stats">
        <div class="stat-item">
          <span class="stat-value">{{ blogCount }}</span>
          <span class="stat-label">博客</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ noteCount }}</span>
          <span class="stat-label">笔记</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ blogCount + noteCount }}</span>
          <span class="stat-label">总记录</span>
        </div>
      </div>
    </section>

    <section class="rail-card">
      <div class="card-heading">
        <span class="heading-dot"></span>
        <h3>快速入口</h3>
      </div>

      <a
        v-for="item in quickLinks"
        :key="item.title"
        class="mini-link"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noreferrer' : undefined"
      >
        <span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.desc }}</small>
        </span>
        <em>→</em>
      </a>
    </section>

    <section class="rail-card">
      <div class="card-heading">
        <span class="heading-dot mint"></span>
        <h3>友情链接</h3>
      </div>

      <a
        v-for="friend in friendLinks"
        :key="friend.title"
        class="friend-link"
        :href="friend.href"
        target="_blank"
        rel="noreferrer"
      >
        <strong>{{ friend.title }}</strong>
        <small>{{ friend.desc }}</small>
      </a>
    </section>

    <section class="rail-card">
      <div class="card-heading">
        <span class="heading-dot sky"></span>
        <h3>最近更新</h3>
      </div>

      <div class="recent-group">
        <p class="recent-label">博客</p>
        <a v-for="post in latestPosts" :key="post.url" class="recent-item" :href="post.url">
          <span>{{ post.title }}</span>
          <small>{{ post.date?.string || '未写日期' }}</small>
        </a>
      </div>

      <div class="recent-group">
        <p class="recent-label">笔记</p>
        <a v-for="note in latestNotes" :key="note.url" class="recent-item" :href="note.url">
          <span>{{ note.title }}</span>
          <small>{{ note.date?.string || '未写日期' }}</small>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.right-rail {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 24px;
  padding-bottom: 24px;
}

.right-rail.is-reading {
  padding-top: 0;
}

.rail-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: 22px 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 255, 0.92));
  border: 1px solid rgba(125, 166, 214, 0.2);
  box-shadow:
    0 14px 30px rgba(77, 120, 168, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
}

.rail-card::before {
  content: '';
  position: absolute;
  inset: auto -20px -30px auto;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle, rgba(115, 182, 255, 0.18), transparent 68%);
  pointer-events: none;
}

.dark .rail-card {
  background:
    linear-gradient(180deg, rgba(30, 41, 59, 0.92), rgba(15, 23, 42, 0.96));
  border-color: rgba(148, 163, 184, 0.18);
  box-shadow:
    0 16px 34px rgba(2, 6, 23, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.profile-top {
  display: grid;
  grid-template-columns: 74px 1fr;
  align-items: center;
  gap: 14px;
}

.avatar-shell {
  width: 74px;
  height: 74px;
  border-radius: 22px;
  padding: 6px;
  background: linear-gradient(145deg, rgba(255, 219, 168, 0.55), rgba(145, 210, 255, 0.4));
  box-shadow: 0 10px 24px rgba(92, 148, 206, 0.18);
}

.avatar-shell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #4d8fd6;
}

.rail-profile h2 {
  margin: 0;
  font-size: 28px;
  line-height: 1.1;
}

.subtitle {
  margin: 6px 0 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.profile-copy {
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.75;
  font-size: 14px;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(125, 166, 214, 0.14);
}

.dark .stat-item {
  background: rgba(51, 65, 85, 0.5);
  border-color: rgba(148, 163, 184, 0.12);
}

.stat-value {
  font-size: 24px;
  font-weight: 800;
  color: #245d98;
}

.dark .stat-value {
  color: #7dd3fc;
}

.stat-label {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.card-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.card-heading h3 {
  margin: 0;
  font-size: 16px;
}

.heading-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #f7c873, #ed8f6a);
  box-shadow: 0 0 0 5px rgba(247, 200, 115, 0.14);
}

.heading-dot.mint {
  background: linear-gradient(135deg, #64d8cb, #6db8ff);
  box-shadow: 0 0 0 5px rgba(100, 216, 203, 0.14);
}

.heading-dot.sky {
  background: linear-gradient(135deg, #7db0ff, #8ae6ff);
  box-shadow: 0 0 0 5px rgba(125, 176, 255, 0.14);
}

.mini-link,
.friend-link,
.recent-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  padding: 12px 14px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.mini-link + .mini-link,
.friend-link + .friend-link {
  margin-top: 10px;
}

.mini-link,
.friend-link {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(125, 166, 214, 0.12);
}

.dark .mini-link,
.dark .friend-link,
.dark .recent-item {
  background: rgba(51, 65, 85, 0.42);
  border-color: rgba(148, 163, 184, 0.12);
}

.mini-link:hover,
.friend-link:hover,
.recent-item:hover {
  transform: translateY(-2px);
  border-color: rgba(54, 125, 196, 0.28);
  background: rgba(255, 255, 255, 0.88);
}

.dark .mini-link:hover,
.dark .friend-link:hover,
.dark .recent-item:hover {
  background: rgba(51, 65, 85, 0.72);
}

.mini-link span,
.friend-link,
.recent-item {
  display: flex;
  flex-direction: column;
}

.mini-link strong,
.friend-link strong {
  font-size: 14px;
}

.mini-link small,
.friend-link small,
.recent-item small {
  margin-top: 4px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.mini-link em {
  font-style: normal;
  color: #4d8fd6;
}

.recent-group + .recent-group {
  margin-top: 16px;
}

.recent-label {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.recent-item + .recent-item {
  margin-top: 10px;
}

.recent-item span {
  font-size: 14px;
  line-height: 1.5;
}
</style>
