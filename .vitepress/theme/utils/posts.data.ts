/**
 * 博客文章数据加载器
 * 
 * 此文件使用 VitePress 的 createContentLoader API 来:
 * 1. 加载所有博客文章的元数据
 * 2. 提取文章摘要
 * 3. 按日期排序文章
 * 4. 格式化日期显示
 */
import { createContentLoader } from 'vitepress'

/**
 * 文章数据接口
 */
export interface Post {
    title: string              // 文章标题
    url: string                // 文章 URL 路径
    date: {                    // 发布日期
        time: number           // 时间戳(用于排序)
        string: string         // 格式化的日期字符串(用于显示)
    }
    excerpt: string | undefined  // 文章摘要
}

// 导出文章数据(由 VitePress 自动注入)
declare const data: Post[]
export { data }

/**
 * 内容加载器配置
 * 
 * 加载 blog 目录下的所有 Markdown 文件,并转换为 Post 对象数组
 */
export default createContentLoader('blog/*.md', {
    excerpt: true,  // 启用摘要提取

    /**
     * 转换函数:将原始内容转换为 Post 数组
     * 
     * @param raw - VitePress 提供的原始内容数组
     * @returns 处理后的文章列表,按日期倒序排列
     */
    transform(raw): Post[] {
        return raw
            // 过滤掉索引页面
            .filter(({ url }) => !url.includes('/blog/index'))

            // 转换为 Post 对象
            .map(({ url, frontmatter, excerpt }) => {
                const date = formatDate(frontmatter.date)

                // 如果日期无效,跳过该文章
                if (!date) return null

                return {
                    title: frontmatter.title || 'Untitled',
                    url,
                    excerpt,
                    date
                }
            })

            // 过滤掉无效的文章
            .filter((post): post is Post => post !== null)

            // 按日期倒序排序(最新的在前)
            .sort((a, b) => b.date.time - a.date.time)
    }
})

/**
 * 格式化日期字符串
 * 
 * @param raw - 原始日期字符串(来自 frontmatter)
 * @returns 格式化后的日期对象,如果日期无效则返回 null
 */
function formatDate(raw: string): Post['date'] | null {
    // 检查日期是否存在
    if (!raw) return null

    // 解析日期
    const date = new Date(raw)

    // 检查日期是否有效
    if (isNaN(date.getTime())) return null

    // 设置时间为中午(避免时区问题)
    date.setUTCHours(12)

    return {
        time: +date,  // 转换为时间戳
        string: date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}

