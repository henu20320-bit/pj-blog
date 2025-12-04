---
title: VitePress 简介
date: 2025-12-03
tags:
  - vitepress
  - 技术
---

# VitePress 简介

VitePress 是一个专为构建快速、以内容为中心的网站而设计的静态站点生成器（SSG）。

## 主要特性

- **Vite 驱动**：瞬间启动服务和热更新（HMR）。
- **Vue 3**：在 Markdown 中使用 Vue 组件。
- **默认主题**：开箱即用的精美默认主题。

> "VitePress 是 VuePress 的小兄弟。"

### 代码示例

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<button @click="count++">计数: {{ count }}</button>
```
