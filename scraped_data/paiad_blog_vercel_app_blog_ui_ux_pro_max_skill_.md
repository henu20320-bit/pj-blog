# Source: https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/

[ Skip to content ](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#VPContent)
[![](https://paiad-blog.vercel.app/image/sunflower.png)![](https://paiad-blog.vercel.app/image/sunflower.png)𝑷𝒂𝒊𝒂𝒅](https://paiad-blog.vercel.app/)
搜索文档`Ctrl``K`
Main Navigation[首页](https://paiad-blog.vercel.app/)[博客](https://paiad-blog.vercel.app/blog/)[归档](https://paiad-blog.vercel.app/blog/archives/)
笔记
Windmill
[](https://paiad-blog.vercel.app/notes/python/)
[](https://paiad-blog.vercel.app/notes/math/)
[](https://paiad-blog.vercel.app/blog/leetcode/)
更多
Crabapple
[](https://paiad-blog.vercel.app/github-repo/)
[](https://paiad-blog.vercel.app/site/guide/)
[留言板](https://paiad-blog.vercel.app/chat/)
[](https://paiad-blog.vercel.app/latest/news/)[](https://paiad-blog.vercel.app/site/)[](https://github.com/paiad)[](https://theme-plume.vuejs.press/guide/intro/)
外观
[](https://paiad-blog.vercel.app/latest/news/)[](https://paiad-blog.vercel.app/site/)[](https://github.com/paiad)[](https://theme-plume.vuejs.press/guide/intro/)
此页内容
  * [数据规模](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%95%B0%E6%8D%AE%E8%A7%84%E6%A8%A1)
  * [安装](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%AE%89%E8%A3%85)
    * [CLI 方式](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#cli-%E6%96%B9%E5%BC%8F)
    * [其他 CLI 命令](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%85%B6%E4%BB%96-cli-%E5%91%BD%E4%BB%A4)
    * [手动安装](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85)
  * [前置依赖](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%89%8D%E7%BD%AE%E4%BE%9D%E8%B5%96)
  * [使用方式](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)
    * [示例 Prompt](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E7%A4%BA%E4%BE%8B-prompt)
  * [工作原理](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
  * [支持的技术栈](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%94%AF%E6%8C%81%E7%9A%84%E6%8A%80%E6%9C%AF%E6%A0%88)


#  🎨UI/UX Design 
约 650 字大约 2 分钟
UIUX
2026-01-01
> UI/UX Pro Max 是一个可搜索的设计知识库，涵盖 UI 风格、配色方案、字体配对、图表类型、产品推荐、UX 指南及技术栈最佳实践。作为 AI 编程助手（Claude Code、Cursor、Windsurf、Antigravity 等）的 `skill`/`workflow` 运行。
注
  * Skill = 给 AI 一本参考手册，AI 按手册做事
  * MCP = 给 AI 一套工具箱，AI 可以调用工具执行任务


### [数据规模](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%95%B0%E6%8D%AE%E8%A7%84%E6%A8%A1)
类别 | 数量 | 描述  
---|---|---  
UI Styles | 57 | Glassmorphism、Claymorphism、Minimalism、Brutalism、Neumorphism、Bento Grid 等  
Color Palettes | 95 | 按行业分类：SaaS、E-commerce、Healthcare、Fintech、Beauty 等  
Font Pairings | 56 | 含 Google Fonts 导入代码  
Chart Types | 24 | Dashboard 与 Analytics 场景推荐  
Tech Stacks | 8 | React、Next.js、Vue、Svelte、SwiftUI、React Native、Flutter、HTML+Tailwind  
UX Guidelines | 98 | 最佳实践、反模式、无障碍规则  
### [安装](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%AE%89%E8%A3%85)
#### [CLI 方式](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#cli-%E6%96%B9%E5%BC%8F)
  1. 全局安装 CLI


```
npm install -g uipro-cli
```

  1. 进入项目目录并初始化


```
cd /path/to/your/project

# 选择对应的 AI 助手
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity
uipro init --ai copilot     # GitHub Copilot
uipro init --ai kiro        # Kiro
uipro init --ai all         # 全部
```

#### [其他 CLI 命令](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%85%B6%E4%BB%96-cli-%E5%91%BD%E4%BB%A4)
```
uipro versions              # 查看可用版本
uipro update                # 更新至最新版本
uipro init --version v1.0.0 # 安装指定版本
```

#### [手动安装](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85)
复制对应目录至项目：
AI 助手 | 目录结构  
---|---  
Claude Code | `.claude/skills/ui-ux-pro-max/`  
Cursor |  `.cursor/commands/` + `.shared/ui-ux-pro-max/`  
Windsurf |  `.windsurf/workflows/` + `.shared/ui-ux-pro-max/`  
Antigravity |  `.agent/workflows/` + `.shared/ui-ux-pro-max/`  
GitHub Copilot |  `.github/prompts/` + `.shared/ui-ux-pro-max/`  
Kiro |  `.kiro/steering/` + `.shared/ui-ux-pro-max/`  
### [前置依赖](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%89%8D%E7%BD%AE%E4%BE%9D%E8%B5%96)
搜索脚本依赖 Python 3.x：
```
# 检查版本
python3 --version

# macOS
brew install python3

# Ubuntu/Debian
sudo apt update && sudo apt install python3

# Windows
winget install Python.Python.3.12
```

### [使用方式](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)
不同 AI 助手的调用方式略有差异：
AI 助手 | 调用方式  
---|---  
Claude Code | 自然语言请求，自动激活  
Cursor / Windsurf / Antigravity |  `/ui-ux-pro-max` 斜杠命令  
GitHub Copilot / Kiro | 输入 `/` 选择 `ui-ux-pro-max`  
#### [示例 Prompt](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E7%A4%BA%E4%BE%8B-prompt)
```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
Make a mobile app UI for e-commerce
```

### [工作原理](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
  1. 发起请求（build、design、create、implement、review、fix、improve）
  2. Skill 自动搜索设计数据库，匹配风格、配色、字体、指南
  3. 根据产品类型和需求，推荐最佳设计系统
  4. 生成代码，包含正确的色彩、字体、间距及最佳实践


### [支持的技术栈](https://paiad-blog.vercel.app/blog/ui-ux-pro-max-skill/#%E6%94%AF%E6%8C%81%E7%9A%84%E6%8A%80%E6%9C%AF%E6%A0%88)
  * HTML + Tailwind（默认）
  * React / Next.js
  * Vue / Svelte
  * SwiftUI / React Native / Flutter


在 prompt 中指定技术栈，或使用默认的 HTML + Tailwind。
最后更新于: 2026/1/1 22:42
贡献者: paiad
0%
