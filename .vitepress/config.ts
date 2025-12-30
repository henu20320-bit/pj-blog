import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Helper to get blog posts
function getBlogSidebar() {
  const blogDir = path.resolve(__dirname, '../blog')
  const files = fs.readdirSync(blogDir)

  const items = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const name = file.replace('.md', '')
      // In a real app we might read frontmatter for the title, 
      // but here we just capitalize the filename for simplicity
      const text = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      return {
        text: text,
        link: `/blog/${name}`
      }
    })

  return [
    {
      text: '最近文章',
      items: items
    }
  ]
}

export default defineConfig({
  title: "lanlan",
  description: "一个 VitePress 博客模板",

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  vite: {

    server: {
      watch: {
        // 监听整个 blog 目录（包括新增文件）
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
      { icon: 'github', link: 'https://github.com/henu20320-bit' },
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
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
