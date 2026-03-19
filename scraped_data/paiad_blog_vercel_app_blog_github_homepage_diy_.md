# Source: https://paiad-blog.vercel.app/blog/github-homepage-diy/

[ Skip to content ](https://paiad-blog.vercel.app/blog/github-homepage-diy/#VPContent)
[![](https://paiad-blog.vercel.app/image/sunflower.png)![](https://paiad-blog.vercel.app/image/sunflower.png)𝑷𝒂𝒊𝒂𝒅](https://paiad-blog.vercel.app/)
搜索文档`Ctrl``K`
Main Navigation[首页](https://paiad-blog.vercel.app/)[博客](https://paiad-blog.vercel.app/blog/)[归档](https://paiad-blog.vercel.app/blog/archives/)
笔记
Windmill
[](https://paiad-blog.vercel.app/notes/python/)
[](https://paiad-blog.vercel.app/notes/math/)
[](https://paiad-blog.vercel.app/fund/)
[](https://paiad-blog.vercel.app/blog/leetcode/)
更多
Crabapple
[](https://paiad-blog.vercel.app/github-repo/)
[](https://paiad-blog.vercel.app/agent-guide/)
Crack
[](https://paiad-blog.vercel.app/notes/crack-software/wps/)
[留言板](https://paiad-blog.vercel.app/chat/)
[](https://paiad-blog.vercel.app/site/)[](https://paiad-blog.vercel.app/latest/news/)[](https://github.com/paiad)[](https://theme-plume.vuejs.press/guide/intro/)
外观
[](https://paiad-blog.vercel.app/site/)[](https://paiad-blog.vercel.app/latest/news/)[](https://github.com/paiad)[](https://theme-plume.vuejs.press/guide/intro/)
此页内容
  * [快速开始](https://paiad-blog.vercel.app/blog/github-homepage-diy/#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
  * [README 模板](https://paiad-blog.vercel.app/blog/github-homepage-diy/#readme-%E6%A8%A1%E6%9D%BF)
  * [贪吃蛇动画（Optional）](https://paiad-blog.vercel.app/blog/github-homepage-diy/#%E8%B4%AA%E5%90%83%E8%9B%87%E5%8A%A8%E7%94%BB-optional)
  * [3D 贡献图绘制（Optional）](https://paiad-blog.vercel.app/blog/github-homepage-diy/#_3d-%E8%B4%A1%E7%8C%AE%E5%9B%BE%E7%BB%98%E5%88%B6-optional)


#  👻自定义Github主页 
约 816 字大约 3 分钟
GithubHomepage
2025-02-21
### [快速开始](https://paiad-blog.vercel.app/blog/github-homepage-diy/#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)
  1. 创建同名仓库
新建一个与你 GitHub 用户名**完全相同** 的仓库
  2. 添加 README.md
在 `main` 分支创建 `README.md` 文件
  3. 编写个人介绍
参考下方模板，自定义你的主页内容


### [README 模板](https://paiad-blog.vercel.app/blog/github-homepage-diy/#readme-%E6%A8%A1%E6%9D%BF)
基础模板
基础模板
```
# 👋 Hi, I'm [你的名字]

## 🌟 关于我

- 🔭 我目前正在从事 **[项目名称或工作内容]**。
- 🌱 我正在学习 **[技能/技术]**。
- 💬 你可以向我咨询 **[领域/主题]**。
- 📫 如何联系我：[Email](mailto:your-email@example.com) | [LinkedIn](https://www.linkedin.com/in/your-profile) | [Twitter](https://twitter.com/your-handle)
- 😄 代词：He/Him | She/Her | They/Them
- ⚡ 趣味事实：我喜欢 **[兴趣爱好]**！

---

## 🚀 我的 GitHub 统计

<!-- 动态生成的 GitHub 统计卡片 -->

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=你的用户名&show_icons=true&title_color=ffffff&icon_color=0074D9&text_color=f0f0f0&bg_color=151515)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=你的用户名&layout=compact&title_color=ffffff&icon_color=0074D9&text_color=f0f0f0&bg_color=151515)

---

## 📈 我的 GitHub 活动图

<!-- GitHub 贡献网格 -->

![](https://github.com/你的用户名/你的用户名/blob/output/github-contribution-grid-snake-dark.svg)

---

## 🛠️ 技能

### 编程语言

- Python, JavaScript, Java, C++

### 框架与库

- React, Node.js, Flask, TensorFlow

### 工具与平台

- Git, Docker, Kubernetes, AWS

---

## 📌 推荐项目

### 1. **[项目名称](https://github.com/你的用户名/项目链接)**

一个简短的描述，说明该项目解决了什么问题以及它的亮点。

### 2. **[另一个项目](https://github.com/你的用户名/项目链接)**

另一个有趣的项目，附带简要说明。

---

## 🤝 联系方式

- [GitHub Profile](https://github.com/你的用户名)
- [LinkedIn](https://www.linkedin.com/in/your-profile)
- [Twitter](https://twitter.com/your-handle)
- [个人网站](https://your-website.com)

---

## 🎉 感谢访问！

如果你对我的项目感兴趣，或者想合作，请随时联系我！😊
```

### [贪吃蛇动画（Optional）](https://paiad-blog.vercel.app/blog/github-homepage-diy/#%E8%B4%AA%E5%90%83%E8%9B%87%E5%8A%A8%E7%94%BB-optional)
![](https://img.paiad.top/Pai3141/Pai3141@output/github-contribution-grid-snake-dark.svg)
  1. 创建 Actions 工作流
在仓库中创建 `.github/workflows/snake.yml` 文件：
snake.yml
snake.yml
```
name: generate animation

on:
  schedule:
    - cron: "0 */24 * * *"
  workflow_dispatch:
  push:
    branches:
      - master

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - name: 生成 github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: 推送到 output 分支
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

  2. 配置权限
进入 **Settings → Actions → General** ，将 Workflow permissions 改为 `Read and write permissions`
  3. 运行工作流
在 **Actions** 页面手动执行 `generate animation` 工作流
  4. 引用 SVG
在 `README.md` 中添加：
```
![](https://github.com/用户名/用户名/blob/output/github-contribution-grid-snake-dark.svg)
```



### [3D 贡献图绘制（Optional）](https://paiad-blog.vercel.app/blog/github-homepage-diy/#_3d-%E8%B4%A1%E7%8C%AE%E5%9B%BE%E7%BB%98%E5%88%B6-optional)
![](https://img.paiad.top/Pai3141/PictureBed@main/img/github-3d-e1.png)
```
name: GitHub-Profile-3D-Contrib

on:
  schedule: # 03:00 JST == 18:00 UTC
    - cron: "0 18 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: generate-github-profile-3d-contrib
    steps:
      - uses: actions/checkout@v3
      - uses: yoshi389111/github-profile-3d-contrib@0.7.1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          USERNAME: ${{ github.repository_owner }}
      - name: Commit & Push
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add -A .
          git commit -m "generated"
          git push
```

最后更新于: 2026/3/1 00:05
贡献者: paiad
0%
