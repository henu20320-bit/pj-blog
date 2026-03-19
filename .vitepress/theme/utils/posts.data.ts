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
      .filter(({ url }) => !url.includes('/blog/index'))
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || fallbackTitleFromUrl(url),
        url,
        excerpt,
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
