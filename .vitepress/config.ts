import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface SidebarItem {
  text: string
  link: string
}

function toDisplayTitle(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getBlogSidebar() {
  const blogDir = path.resolve(__dirname, '../blog')

  const items: SidebarItem[] = fs
    .readdirSync(blogDir)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(blogDir, file)
      const source = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(source)

      return {
        text: typeof data.title === 'string' && data.title.trim() ? data.title.trim() : toDisplayTitle(slug),
        link: `/blog/${encodeURI(slug)}`
      }
    })
    .sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))

  return [
    {
      text: '最近文章',
      items
    }
  ]
}

export default defineConfig({
  title: 'lanlan',
  description: '一个 VitePress 博客模板',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://chinese-fonts-cdn.deno.dev/packages/maple-mono-cn/dist/MapleMono-CN-SemiBoldItalic/result.css' }]
  ],

  vite: {
    server: {
      watch: {
        ignored: ['!**/blog/**']
      }
    }
  },

  themeConfig: {
    logo: '☀️',
    siteTitle: 'lanlan',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/blog/' }
    ],

    sidebar: {
      '/blog/': getBlogSidebar()
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/henu20320-bit'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><image href="/link-icon.svg" width="24" height="24" /></svg>'
        },
        link: 'https://github.com/henu20320-bit'
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文章',
                buttonAriaLabel: '搜索文章'
              },
              modal: {
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    }
  }
})
