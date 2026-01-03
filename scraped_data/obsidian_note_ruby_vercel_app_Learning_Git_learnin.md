# Source: https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-13-vs2022-git-%E5%AF%B9%E7%85%A7%E8%A1%A8-%E5%B8%AE%E5%8A%A9%E4%BD%A0%E7%90%86%E8%A7%A3

[跳至主要內容](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#main-content)
[![](https://cdn.jsdelivr.net/gh/qqqqzh/blogPicture@main/image/20251229005827659.png)JustQ](https://obsidian-note-ruby.vercel.app/)
[首页](https://obsidian-note-ruby.vercel.app/)
[Learning](https://obsidian-note-ruby.vercel.app/Learning/)
[Tools](https://obsidian-note-ruby.vercel.app/Tools/)
[V2 文档](https://theme-hope.vuejs.press/zh/)
[](https://github.com/qqqqzh)
  * [博客主页](https://obsidian-note-ruby.vercel.app/)
  * Learning
    * AI Learning
    * Blog Learning
    * Git Learning
      * [Commit 规范](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/Git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83.html)
      * [Git 基础教程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html)
      * [VSCode Git 集成](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/VScode%E4%BD%BF%E7%94%A8git%E8%AF%A6%E8%A7%A3.html)
      * [回退版本](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%E5%9B%9E%E9%80%80%E7%89%88%E6%9C%AC.html)
      * [配置代理](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/Git%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86.html)
    * Java Learning
    * 前端 Learning
  * Tools


  1. [博客主页](https://obsidian-note-ruby.vercel.app/)
  2. [Learning](https://obsidian-note-ruby.vercel.app/Learning/)
  3. [Git Learning](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/)
  4. [Git 基础教程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html)


#  Git 学习指南
JustQ2025/11/30大约 3 分钟Git-learninggittutorialguideversion-controlbeginner
* * *
此页内容
  * [✨ 1. Git 是什么？](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-1-git-%E6%98%AF%E4%BB%80%E4%B9%88)
  * [✨ 2. Git 基本区概念](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-2-git-%E5%9F%BA%E6%9C%AC%E5%8C%BA%E6%A6%82%E5%BF%B5)
  * [✨ 3. Git 核心命令速查表](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-3-git-%E6%A0%B8%E5%BF%83%E5%91%BD%E4%BB%A4%E9%80%9F%E6%9F%A5%E8%A1%A8)
  *     * [🔹 初始化/克隆](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9D%E5%A7%8B%E5%8C%96-%E5%85%8B%E9%9A%86)
    * [🔹 查看状态](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9F%A5%E7%9C%8B%E7%8A%B6%E6%80%81)
    * [🔹 添加到暂存区](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9A%82%E5%AD%98%E5%8C%BA)
    * [🔹 提交](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8F%90%E4%BA%A4)
    * [🔹 推送到远程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8E%A8%E9%80%81%E5%88%B0%E8%BF%9C%E7%A8%8B)
    * [🔹 拉取远程最新（取最新 + 自动合并）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E5%8F%96%E8%BF%9C%E7%A8%8B%E6%9C%80%E6%96%B0-%E5%8F%96%E6%9C%80%E6%96%B0-%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
    * [🔹 从远程拉最新但不自动合并](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E4%BB%8E%E8%BF%9C%E7%A8%8B%E6%8B%89%E6%9C%80%E6%96%B0%E4%BD%86%E4%B8%8D%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
  * [✨ 4. 分支管理](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-4-%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86)
  *     * [🔹 查看分支](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9F%A5%E7%9C%8B%E5%88%86%E6%94%AF)
    * [🔹 创建分支](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF)
    * [🔹 切换分支（签出）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF-%E7%AD%BE%E5%87%BA)
    * [🔹 创建并切换](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9B%E5%BB%BA%E5%B9%B6%E5%88%87%E6%8D%A2)
  * [✨ 5. 分支合并（merge）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-5-%E5%88%86%E6%94%AF%E5%90%88%E5%B9%B6-merge)
  * [✨ 6. 冲突解决原则](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-6-%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3%E5%8E%9F%E5%88%99)
  * [✨ 7. 远程仓库（推送/拉取）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-7-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93-%E6%8E%A8%E9%80%81-%E6%8B%89%E5%8F%96)
  *     * [🔹 推送](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8E%A8%E9%80%81)
    * [🔹 拉取并自动合并](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E5%8F%96%E5%B9%B6%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
    * [🔹 拉远程但不合并（安全）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E8%BF%9C%E7%A8%8B%E4%BD%86%E4%B8%8D%E5%90%88%E5%B9%B6-%E5%AE%89%E5%85%A8)
  * [✨ 8. 强制覆盖更新（谨慎！）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-8-%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9B%B4%E6%96%B0-%E8%B0%A8%E6%85%8E)
  *     * [🔹 本地覆盖成远程最新](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9C%AC%E5%9C%B0%E8%A6%86%E7%9B%96%E6%88%90%E8%BF%9C%E7%A8%8B%E6%9C%80%E6%96%B0)
    * [🔹 强推（覆盖远程）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%BC%BA%E6%8E%A8-%E8%A6%86%E7%9B%96%E8%BF%9C%E7%A8%8B)
  * [✨ 9. Git 常见工作流（最推荐）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-9-git-%E5%B8%B8%E8%A7%81%E5%B7%A5%E4%BD%9C%E6%B5%81-%E6%9C%80%E6%8E%A8%E8%8D%90)
  *     * [🔥 一般开发流程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%A5-%E4%B8%80%E8%88%AC%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B)
  * [✨ 10. Git 忽略文件（.gitignore）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-10-git-%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6-gitignore)
  * [✨ 11. 常识与最佳实践](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-11-%E5%B8%B8%E8%AF%86%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
  * [✨ 12. 图示：典型 Git 流程图](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-12-%E5%9B%BE%E7%A4%BA-%E5%85%B8%E5%9E%8B-git-%E6%B5%81%E7%A8%8B%E5%9B%BE)
  * [✨ 13. VS2022 Git 对照表（帮助你理解）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-13-vs2022-git-%E5%AF%B9%E7%85%A7%E8%A1%A8-%E5%B8%AE%E5%8A%A9%E4%BD%A0%E7%90%86%E8%A7%A3)


# [📘 Git 学习指南](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%93%98-git-%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97)
## [✨ 1. Git 是什么？](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-1-git-%E6%98%AF%E4%BB%80%E4%B9%88)
Git 是一个 **分布式版本控制系统** ，用于：
  * 管理代码版本
  * 多人协作开发
  * 追踪修改历史
  * 分支开发与合并


核心理念：  
👉 **每个人都是一个完整仓库，分布式，安全快速。**
* * *
## [✨ 2. Git 基本区概念](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-2-git-%E5%9F%BA%E6%9C%AC%E5%8C%BA%E6%A6%82%E5%BF%B5)
Git 有三大区域：
区域 | 作用  
---|---  
工作区（Working Directory） | 你能看到并编辑的文件  
暂存区（Staging Area） | 计划提交的文件  
本地仓库（Local Repository） | 你的本地提交历史  
远程仓库（Remote Repository） | GitHub / Gitee 上的仓库  
流程示意图：
```
工作区 → 暂存区 → 本地仓库 → 远程仓库
```

* * *
## [✨ 3. Git 核心命令速查表](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-3-git-%E6%A0%B8%E5%BF%83%E5%91%BD%E4%BB%A4%E9%80%9F%E6%9F%A5%E8%A1%A8)
### [🔹 初始化/克隆](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9D%E5%A7%8B%E5%8C%96-%E5%85%8B%E9%9A%86)
```
git init
git clone <url>
```

### [🔹 查看状态](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9F%A5%E7%9C%8B%E7%8A%B6%E6%80%81)
```
git status
```

### [🔹 添加到暂存区](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9A%82%E5%AD%98%E5%8C%BA)
```
git add <file>
git add .
```

### [🔹 提交](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8F%90%E4%BA%A4)
```
git commit -m "message"
```

### [🔹 推送到远程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8E%A8%E9%80%81%E5%88%B0%E8%BF%9C%E7%A8%8B)
```
git push origin 分支名
```

### [🔹 拉取远程最新（取最新 + 自动合并）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E5%8F%96%E8%BF%9C%E7%A8%8B%E6%9C%80%E6%96%B0-%E5%8F%96%E6%9C%80%E6%96%B0-%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
```
git pull
```

### [🔹 从远程拉最新但不自动合并](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E4%BB%8E%E8%BF%9C%E7%A8%8B%E6%8B%89%E6%9C%80%E6%96%B0%E4%BD%86%E4%B8%8D%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
```
git fetch
```

* * *
## [✨ 4. 分支管理](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-4-%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86)
### [🔹 查看分支](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9F%A5%E7%9C%8B%E5%88%86%E6%94%AF)
```
git branch
git branch -a   # 含远程
```

### [🔹 创建分支](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF)
```
git branch 新分支
```

### [🔹 切换分支（签出）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%87%E6%8D%A2%E5%88%86%E6%94%AF-%E7%AD%BE%E5%87%BA)
```
git checkout 分支名
```

或新版：
```
git switch 分支名
```

### [🔹 创建并切换](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%88%9B%E5%BB%BA%E5%B9%B6%E5%88%87%E6%8D%A2)
```
git checkout -b 分支名
```

* * *
## [✨ 5. 分支合并（merge）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-5-%E5%88%86%E6%94%AF%E5%90%88%E5%B9%B6-merge)
把 master 最新代码合到当前分支：
```
git checkout qzh
git merge master
```

把某功能分支合到 master：
```
git checkout master
git merge qzh
```

* * *
## [✨ 6. 冲突解决原则](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-6-%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3%E5%8E%9F%E5%88%99)
如果合并时出现冲突，文件会出现：
```
<<<<<<< HEAD
你的内容
=======
对方分支内容
>>>>>>> master
```

处理步骤：
  1. 打开文件解决冲突（选择或合并内容）
  2. 保存
  3. 执行：


```
git add .
git commit
```

* * *
## [✨ 7. 远程仓库（推送/拉取）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-7-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93-%E6%8E%A8%E9%80%81-%E6%8B%89%E5%8F%96)
### [🔹 推送](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8E%A8%E9%80%81)
```
git push origin 分支
```

### [🔹 拉取并自动合并](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E5%8F%96%E5%B9%B6%E8%87%AA%E5%8A%A8%E5%90%88%E5%B9%B6)
```
git pull
```

### [🔹 拉远程但不合并（安全）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%8B%89%E8%BF%9C%E7%A8%8B%E4%BD%86%E4%B8%8D%E5%90%88%E5%B9%B6-%E5%AE%89%E5%85%A8)
```
git fetch
```

* * *
## [✨ 8. 强制覆盖更新（谨慎！）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-8-%E5%BC%BA%E5%88%B6%E8%A6%86%E7%9B%96%E6%9B%B4%E6%96%B0-%E8%B0%A8%E6%85%8E)
### [🔹 本地覆盖成远程最新](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E6%9C%AC%E5%9C%B0%E8%A6%86%E7%9B%96%E6%88%90%E8%BF%9C%E7%A8%8B%E6%9C%80%E6%96%B0)
```
git fetch
git reset --hard origin/master
```

### [🔹 强推（覆盖远程）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%B9-%E5%BC%BA%E6%8E%A8-%E8%A6%86%E7%9B%96%E8%BF%9C%E7%A8%8B)
```
git push -f
```

👉 **非必要不要使用！会覆盖团队历史记录。**
* * *
## [✨ 9. Git 常见工作流（最推荐）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-9-git-%E5%B8%B8%E8%A7%81%E5%B7%A5%E4%BD%9C%E6%B5%81-%E6%9C%80%E6%8E%A8%E8%8D%90)
### [🔥 一般开发流程](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%94%A5-%E4%B8%80%E8%88%AC%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B)
```
拉取 master 最新
↓
从 master 开一个新分支
↓
写代码
↓
提交到个人分支
↓
合并回 master
```

对应命令：
```
git checkout master
git pull
git checkout -b feature_xxx
# 编码...
git add .
git commit -m "xxx"
git push origin feature_xxx
# 发起合并请求 PR/MR 或本地合并
```

* * *
## [✨ 10. Git 忽略文件（.gitignore）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-10-git-%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6-gitignore)
常见忽略内容：
```
bin/
obj/
*.exe
*.log
*.cache
node_modules/
.env
.idea/
.vs/
```

生成文件：
```
echo "node_modules/" >> .gitignore
```

* * *
## [✨ 11. 常识与最佳实践](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-11-%E5%B8%B8%E8%AF%86%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
  * 不要在 master 上直接写代码
  * 每个功能都开一个自己的分支
  * 提交信息要简洁、明确，如：
```
fix: 修复登录 bug
feat: 新增用户管理页面
refactor: 重构配方管理模块
```

  * 经常 `git pull` 保持分支最新
  * 合并之前先保证分支是干净的


* * *
## [✨ 12. 图示：典型 Git 流程图](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-12-%E5%9B%BE%E7%A4%BA-%E5%85%B8%E5%9E%8B-git-%E6%B5%81%E7%A8%8B%E5%9B%BE)
```
       +----------------------+
       |      master          |
       |   (稳定主分支)       |
       +----------+-----------+
                  |
        git checkout -b qzh
                  |
                  v
       +----------------------+
       |       qzh            |
       | (开发你的功能)       |
       +----------+-----------+
                  |
         git add + commit
                  |
         git merge master
                  |
                  v
       最终合并回 master
```

* * *
## [✨ 13. VS2022 Git 对照表（帮助你理解）](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%E2%9C%A8-13-vs2022-git-%E5%AF%B9%E7%85%A7%E8%A1%A8-%E5%B8%AE%E5%8A%A9%E4%BD%A0%E7%90%86%E8%A7%A3)
VS2022 按钮 | 对应 Git 操作  
---|---  
提交 | git commit  
推送 | git push  
拉取 | git pull  
签出 | git checkout（切换分支）  
同步 | fetch + pull  
分支新建 | git branch / checkout -b  
合并 | merge  
* * *
# [🎉 结束语](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.html#%F0%9F%8E%89-%E7%BB%93%E6%9D%9F%E8%AF%AD)
这份《Git 学习指南》已经足够支撑你：
  * 日常开发
  * 团队协作
  * 多分支开发
  * 二次合并
  * 冲突处理
  * VS2022 Git 使用


如果你需要，我还可以继续给你：
📌 一份 **Git 常见错误大全（如冲突、拒绝推送、分支乱了等）**  
📌 一份 **Git + VS2022 全流程图（含截图）**  
📌 帮你生成 **Git 学习路线图 PDF**
告诉我需要吗？
[在 GitHub 上编辑此页](https://github.com/qqqqzh/edit/main/src/Learning/Git-learning/%F0%9F%93%98%20Git%20%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97.md)
最近更新: 2025/12/30 01:44
贡献者: Quzhenghao
[ Commit 规范](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/Git%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83.html)[下一页 VSCode Git 集成 ](https://obsidian-note-ruby.vercel.app/Learning/Git-learning/VScode%E4%BD%BF%E7%94%A8git%E8%AF%A6%E8%A7%A3.html)
默认页脚
Copyright © 2026 JustQ 
