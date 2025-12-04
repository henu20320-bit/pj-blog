import { createContentLoader } from 'vitepress'

export interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
    excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw
            .filter(({ url }) => !url.includes('/blog/index'))
            .map(({ url, frontmatter, excerpt }) => {
                const date = formatDate(frontmatter.date)
                if (!date) return null

                return {
                    title: frontmatter.title || 'Untitled',
                    url,
                    excerpt,
                    date
                }
            })
            .filter((post): post is Post => post !== null)
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function formatDate(raw: string): Post['date'] | null {
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
