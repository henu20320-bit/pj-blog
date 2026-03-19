import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  } | null
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(({ url }) => !isDirectoryPage(url))
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || fallbackTitleFromUrl(url),
        url,
        excerpt: normalizeExcerpt(excerpt),
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => {
        if (a.date && b.date) {
          return b.date.time - a.date.time
        }

        if (a.date) return -1
        if (b.date) return 1

        return a.title.localeCompare(b.title, 'zh-CN')
      })
  }
})

function isDirectoryPage(url: string) {
  return url === '/blog/' || url === '/blog/index' || url === '/blog/index.html'
}

function formatDate(raw?: string): Post['date'] | null {
  if (!raw) return null

  const date = new Date(raw)
  if (isNaN(date.getTime())) return null

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

function fallbackTitleFromUrl(url: string): string {
  const slug = url.split('/').filter(Boolean).pop() || 'untitled'
  return decodeURIComponent(slug)
}

function normalizeExcerpt(excerpt?: string) {
  if (!excerpt) return undefined

  const text = excerpt
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!text) return undefined

  const shortText = text.length > 120 ? `${text.slice(0, 120).trim()}...` : text
  return `<span>${escapeHtml(shortText)}</span>`
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
