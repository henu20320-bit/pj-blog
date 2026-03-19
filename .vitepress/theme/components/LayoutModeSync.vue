<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

function isSectionIndex(path: string) {
  return path === '/blog/' || path === '/blog/index.html' || path === '/notes/' || path === '/notes/index.html'
}

function isReadingPage(path: string) {
  if (!path.startsWith('/blog/') && !path.startsWith('/notes/')) return false
  return !isSectionIndex(path)
}

function syncBodyClass(path: string) {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('reading-page', isReadingPage(path))
}

onMounted(() => {
  syncBodyClass(route.path)
})

watch(() => route.path, path => {
  syncBodyClass(path)
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.classList.remove('reading-page')
})
</script>

<template></template>
