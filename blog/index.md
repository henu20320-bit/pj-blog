---
title: 文章目录
---

<script setup>
import { data as posts } from '../.vitepress/theme/utils/posts.data'
</script>

# 文章目录

共收录 **{{ posts.length }}** 篇文章，点击标题可以直接进入正文。

<div class="directory-list">
  <article v-for="(post, index) in posts" :key="post.url" class="directory-item">
    <div class="directory-order">{{ String(index + 1).padStart(2, '0') }}</div>
    <div class="directory-main">
      <h2>
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <p class="directory-meta">
        <span>{{ post.url }}</span>
        <span v-if="post.date">{{ post.date.string }}</span>
        <span v-else>未填写日期</span>
      </p>
      <p v-if="post.excerpt" class="directory-excerpt" v-html="post.excerpt"></p>
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
