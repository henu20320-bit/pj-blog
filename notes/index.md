---
title: 笔记目录
---

<script setup>
import { data as notes } from '../.vitepress/theme/utils/notes.data'
</script>

# 笔记目录

这里收录通过整理、抓取或学习沉淀下来的笔记内容。

共收录 **{{ notes.length }}** 篇笔记，点击标题可以直接进入正文。

<div class="directory-list">
  <article v-for="(note, index) in notes" :key="note.url" class="directory-item">
    <div class="directory-order">{{ String(index + 1).padStart(2, '0') }}</div>
    <div class="directory-main">
      <h2>
        <a :href="note.url">{{ note.title }}</a>
      </h2>
      <p class="directory-meta">
        <span>{{ note.url }}</span>
        <span v-if="note.date">{{ note.date.string }}</span>
        <span v-else>未填写日期</span>
      </p>
      <p v-if="note.excerpt" class="directory-excerpt" v-html="note.excerpt"></p>
    </div>
  </article>
</div>

<style scoped>
.directory-list {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}

.directory-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(90, 140, 255, 0.06), rgba(255, 255, 255, 0));
}

.directory-order {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  padding-top: 0.25rem;
}

.directory-main h2 {
  margin: 0;
  font-size: 1.3rem;
}

.directory-main h2 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.directory-main h2 a:hover {
  color: var(--vp-c-brand-1);
}

.directory-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0.45rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.directory-excerpt {
  margin: 0.75rem 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .directory-item {
    grid-template-columns: 1fr;
  }

  .directory-order {
    justify-content: flex-start;
    padding-top: 0;
  }
}
</style>
