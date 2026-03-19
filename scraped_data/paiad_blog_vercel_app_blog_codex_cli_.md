# Source: https://paiad-blog.vercel.app/blog/codex-cli/

[ Skip to content ](https://paiad-blog.vercel.app/blog/codex-cli/#VPContent)
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
  * [Codex CLI 基础使用](https://paiad-blog.vercel.app/blog/codex-cli/#codex-cli-%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8)
    * [安装方式](https://paiad-blog.vercel.app/blog/codex-cli/#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)
  * [命令使用指南](https://paiad-blog.vercel.app/blog/codex-cli/#%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)
    * [交互式命令](https://paiad-blog.vercel.app/blog/codex-cli/#%E4%BA%A4%E4%BA%92%E5%BC%8F%E5%91%BD%E4%BB%A4)
    * [配置管理](https://paiad-blog.vercel.app/blog/codex-cli/#%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86)
  * [使用指南](https://paiad-blog.vercel.app/blog/codex-cli/#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)
    * [Codex CLI 配置流程](https://paiad-blog.vercel.app/blog/codex-cli/#codex-cli-%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B)
  * [总结](https://paiad-blog.vercel.app/blog/codex-cli/#%E6%80%BB%E7%BB%93)


#  🚀Codex 
约 501 字大约 2 分钟
CodexOpenAIAICLI
2025-11-16
> Codex CLI 是 OpenAI 开发的本地终端编码助手，可以在终端中运行，读取、修改和执行本地代码。
### [Codex CLI 基础使用](https://paiad-blog.vercel.app/blog/codex-cli/#codex-cli-%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8)
#### [安装方式](https://paiad-blog.vercel.app/blog/codex-cli/#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)
npm 安装Homebrew 安装系统要求更新版本
npm 安装
```
# 全局安装Codex CLI
npm i -g @openai/codex

# 启动Codex CLI
codex
```

Homebrew 安装
```
# 使用Homebrew安装
brew install codex

# 启动Codex CLI
codex
```

系统要求
```
# 支持平台
- macOS
- Linux
- Windows (实验性支持，推荐使用WSL)

# 账户要求
需要ChatGPT Plus、Pro、Business、Edu或Enterprise计划
```

更新版本
```
# 定期更新到最新版本
npm i -g @openai/codex@latest
```

### [命令使用指南](https://paiad-blog.vercel.app/blog/codex-cli/#%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)
#### [交互式命令](https://paiad-blog.vercel.app/blog/codex-cli/#%E4%BA%A4%E4%BA%92%E5%BC%8F%E5%91%BD%E4%BB%A4)
```
# 启动Codex CLI交互界面
codex

# 在特定目录启动
codex /path/to/project

# 常用交互命令
/init     # 创建AGENTS.md文件，包含Codex使用说明
/status   # 显示当前会话配置
/approvals # 选择Codex可以无需批准执行的操作
/model    # 选择模型和推理强度
/review   # 审查代码变更和发现问题
```

#### [配置管理](https://paiad-blog.vercel.app/blog/codex-cli/#%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86)
```
# 模型选择
/model gpt-4o-mini

# 设置推理强度
/model --reasoning-effort high

# 配置批准模式
/approvals auto  # 自动批准所有操作
/approvals ask   # 询问每个操作
/approvals none  # 不批准任何操作
```

### [使用指南](https://paiad-blog.vercel.app/blog/codex-cli/#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)
#### [Codex CLI 配置流程](https://paiad-blog.vercel.app/blog/codex-cli/#codex-cli-%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B)
  1. 安装 Codex CLI
使用 npm 或 Homebrew 安装 Codex CLI
  2. 登录账户
启动 Codex CLI 并登录 OpenAI 账户
  3. 配置项目
在项目目录中运行 `/init` 创建配置
  4. 设置批准模式
使用 `/approvals` 命令配置操作权限
  5. 开始编码
描述任务，让 Codex CLI 协助编码


### [总结](https://paiad-blog.vercel.app/blog/codex-cli/#%E6%80%BB%E7%BB%93)
Codex CLI 作为本地终端编码助手，为开发者提供了强大的 AI 编程支持。通过交互式命令和智能代码操作，能够显著提升开发效率。结合 cc-switch 工具可以更好地管理配置和集成，让 Codex CLI 的使用更加便捷高效。
最后更新于: 2026/3/1 00:05
贡献者: paiad
0%
