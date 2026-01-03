/**
 * VitePress 配置文件
 * 
 * 此文件定义了博客的核心配置,包括:
 * - 站点元数据(标题、描述等)
 * - 导航栏和侧边栏配置
 * - 主题配置
 * - 搜索功能配置
 */
import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

/**
 * 博客侧边栏项接口
 */
interface SidebarItem {
  text: string
  link: string
}

/**
 * 获取博客文章侧边栏配置
 * 
 * 功能说明:
 * 1. 自动扫描 blog 目录下的所有 .md 文件
 * 2. 将文件名转换为标题(首字母大写,连字符替换为空格)
 * 3. 生成侧边栏导航链接
 * 
 * @returns 侧边栏配置数组
 */
function getBlogSidebar() {
  // 获取 blog 目录的绝对路径
  const blogDir = path.resolve(__dirname, '../blog')

  // 读取目录下的所有文件
  const files = fs.readdirSync(blogDir)

  // 处理文件列表,生成侧边栏项
  const items: SidebarItem[] = files
    .filter(file => file.endsWith('.md'))  // 只保留 Markdown 文件
    .map(file => {
      const name = file.replace('.md', '')

      // 将文件名转换为可读标题
      // 例如: "hello-world" -> "Hello World"
      const text = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      return {
        text: text,
        link: `/blog/${name}`
      }
    })

  return [
    {
      text: '最近文章',
      items: items // 默认展开，不添加 collapsed 属性
    }
  ]
}

// 导出 VitePress 配置
export default defineConfig({
  // ========== 站点元数据 ==========
  title: "lanlan",
  description: "一个 VitePress 博客模板",

  // ========== HTML Head 配置 ==========
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://chinese-fonts-cdn.deno.dev/packages/maple-mono-cn/dist/MapleMono-CN-SemiBoldItalic/result.css' }]
  ],

  // ========== Vite 构建配置 ==========
  vite: {
    server: {
      watch: {
        // 监听 blog 目录的文件变化(包括新增文件)
        // 这样添加新文章时会自动刷新
        ignored: ['!**/blog/**']
      }
    }
  },

  // ========== 主题配置 ==========
  themeConfig: {
    // 网站 Logo 和标题
    logo: '☀️',
    siteTitle: 'lanlan',

    // ========== 导航栏配置 ==========
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/blog/' }
    ],

    // ========== 侧边栏配置 ==========
    sidebar: {
      '/blog/': getBlogSidebar()  // 博客页面使用动态生成的侧边栏
    },

    // ========== 社交链接配置 ==========
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

    // ========== 搜索功能配置 ==========
    search: {
      provider: 'local',  // 使用本地搜索
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
    },

    // ========== 右侧目录配置 ==========
    outline: {
      label: '页面导航', // 修改 "On this page" 为中文
      level: [2, 3]     // 显示 h2 和 h3 标题
    }
  }
})

