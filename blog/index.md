---
title: 文章列表
---

<script setup>
import { data as posts } from '../.vitepress/theme/utils/posts.data'
</script>

# 文章列表

<div class="post-list">
  <article v-for="post in posts" :key="post.url" class="post-item">
    <h2>
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <p class="post-date">{{ post.date.string }}</p>
    <p v-if="post.excerpt" class="post-excerpt" v-html="post.excerpt"></p>
  </article>
</div>

<style scoped>
.post-list {
  margin-top: 2rem;
}

.post-item {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-item:last-child {
  border-bottom: none;
}

.post-item h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.post-item h2 a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s;
}

.post-item h2 a:hover {
  color: var(--vp-c-brand-2);
}

.post-date {
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.post-excerpt {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
