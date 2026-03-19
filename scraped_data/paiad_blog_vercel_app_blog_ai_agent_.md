# Source: https://paiad-blog.vercel.app/blog/ai-agent/

[ Skip to content ](https://paiad-blog.vercel.app/blog/ai-agent/#VPContent)
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
  * [什么是大语言模型？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B)
  * [什么是 AI Agent？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF-ai-agent)
  * [搭建个人知识库](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93)
    * [Cherry Studio](https://paiad-blog.vercel.app/blog/ai-agent/#cherry-studio)
    * [ima.copilot](https://paiad-blog.vercel.app/blog/ai-agent/#ima-copilot)
  * [什么是 RAG？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF-rag)
  * [智能体](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%99%BA%E8%83%BD%E4%BD%93)
    * [智能体发展阶段](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%99%BA%E8%83%BD%E4%BD%93%E5%8F%91%E5%B1%95%E9%98%B6%E6%AE%B5)
    * [高阶智能体相关平台](https://paiad-blog.vercel.app/blog/ai-agent/#%E9%AB%98%E9%98%B6%E6%99%BA%E8%83%BD%E4%BD%93%E7%9B%B8%E5%85%B3%E5%B9%B3%E5%8F%B0)


#  🍒AI Agent 
约 607 字大约 2 分钟
AI Agent
2025-03-20
### [什么是大语言模型？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B)
> 大型语言模型是基于海量数据和庞大参数训练的 AI 系统，能够理解和生成人类语言，具有广泛的应用潜力。 它通过预训练掌握语言规律，再通过微调适配具体任务，是现代自然语言处理的核心技术。
### [什么是 AI Agent？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF-ai-agent)
> AI Agent 是一个感知环境、决策并行动的智能实体，具有自主性和目标导向性。 它可以是简单的规则系统，也可以是复杂的学习模型，广泛应用于自动化、交互和问题解决领域。简单来说，它是“能做事”的 AI。
AI Agent 架构图
![](https://img.paiad.top/img/AI%20Agent%E6%9E%B6%E6%9E%84%E5%9B%BE.png)
### [搭建个人知识库](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93)
> [![](https://cherry-ai.com/assets/cherry-logo-CtmH594q.svg)Cherry Studio](https://cherry-ai.com)
> [![](https://qbnovel.qq.com/static/353eac8f6c283745f02dddb66e7c6ec4f1c3252f8e6146d4ccd07ffaf70cfddc)ima.copilot](https://ima.qq.com/)
#### [Cherry Studio](https://paiad-blog.vercel.app/blog/ai-agent/#cherry-studio)
> 🍒 Cherry Studio is a desktop client that supports for multiple LLM providers. Support deepseek-r1.
#### [ima.copilot](https://paiad-blog.vercel.app/blog/ai-agent/#ima-copilot)
> ima.copilot（简称 ima）是一款以知识库为核心的智能工作台产品，已接入腾讯混元大模型和 DeepSeek R1 模型满血版。
### [什么是 RAG？](https://paiad-blog.vercel.app/blog/ai-agent/#%E4%BB%80%E4%B9%88%E6%98%AF-rag)
> RAG 是 Retrieval-Augmented Generation 的缩写，中文可以翻译为`“检索增强生成”`。它是一种结合了信息检索（Retrieval）和生成式模型（Generation）的技术， 广泛应用于自然语言处理（NLP）领域，特别是在构建智能问答系统、知识库对话系统等场景中。
> RAG 是一种`“检索+生成”`的混合技术，让 AI 更聪明、更贴近实际需求。
### [智能体](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%99%BA%E8%83%BD%E4%BD%93)
#### [智能体发展阶段](https://paiad-blog.vercel.app/blog/ai-agent/#%E6%99%BA%E8%83%BD%E4%BD%93%E5%8F%91%E5%B1%95%E9%98%B6%E6%AE%B5)
  1. 阶段 1：提示词立人设 GPTs, Cherry-Studio, 豆包等通过提示词，做一个简单的智能体，直接接入 LLM 交互。
  2. 阶段 2：工作流 定义工作流程，每一步可以指定不同的模型，应用就会按照我们设定的流程执行任务。
  3. 阶段 3：real 智能体 智能体根据人类设定的目标，自主进行任务拆分，工具选择，进度控制，实时目标后自主结案工作。


#### [高阶智能体相关平台](https://paiad-blog.vercel.app/blog/ai-agent/#%E9%AB%98%E9%98%B6%E6%99%BA%E8%83%BD%E4%BD%93%E7%9B%B8%E5%85%B3%E5%B9%B3%E5%8F%B0)
[![](https://img.paiad.top/icon/coze.png)Coze](https://www.coze.com)
[![](https://img.paiad.top/icon/dify-color.png)Dify](https://ima.qq.com/)
最后更新于: 2026/3/1 00:05
贡献者: paiad
你认为这篇文章怎么样？
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_agree.png)
0
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_look_down.png)
0
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png)
0
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png)
0
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_awkward.png)
0
  * ![](https://unpkg.com/@waline/emojis/tieba/tieba_sleep.png)
0


昵称
邮箱
网址
* * *
#### 预览:
[](https://guides.github.com/features/mastering-markdown/ "Markdown Guide")
0  字
登录提交
评论
  * 按正序
  * 按倒序
  * 按热度


Powered by [ Waline ](https://github.com/walinejs/waline) v3.8.0
0%
