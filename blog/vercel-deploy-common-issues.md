---
title: Vercel部署常见问题
date: 2026-03-19
tags:
  - Vercel
  - 部署
  - 排障
---

# Vercel部署常见问题

这次给博客加文章目录页时，线上 Vercel 部署失败了一次。表面现象是 GitHub 已经推送成功，但 [https://lan-blog.vercel.app/blog/](https://lan-blog.vercel.app/blog/) 还是旧页面，Vercel 后台直接报错退出。

## 这次实际遇到的报错

Vercel 构建日志里的核心报错是：找不到 `entities/dist/commonjs/decode.js`。

这个问题有几个典型表现：

- 本地代码已经是新的，但线上页面一直不更新
- Vercel 的构建步骤停在 `vitepress build`
- 日志里出现 `Cannot find module '/vercel/path0/node_modules/entities/dist/commonjs/decode.js'`

## 为什么会这样

这次问题不是文章内容本身导致的，而是依赖树里 `entities` 这个包被安装成了一个不兼容的版本。VitePress 构建链里有子依赖仍然会去找 `dist/commonjs/decode.js`，但当前装到的包内容不完整，最后构建直接失败。

简单说，就是：

- 代码已经推上去了
- Vercel 也开始部署了
- 但依赖版本不兼容，导致构建阶段中断
- 所以线上仍然停留在旧版本

## 我是怎么排查的

排查时我主要做了这几步：

1. 先确认 GitHub 最新提交已经成功推送到 `main`
2. 再直接请求线上页面 HTML，确认线上确实还是旧内容
3. 本地复现 `vitepress build`，拿到和 Vercel 一致的错误
4. 检查 `package-lock.json`，确认 `entities` 被锁到了有问题的版本
5. 重新安装依赖并验证本地构建是否恢复正常

这一步很重要：如果本地也能复现同样的报错，基本就能排除 Vercel 平台配置问题，直接聚焦到项目依赖。

## 最终解决方案

这次的修复方式是给项目加上依赖覆盖，把 `entities` 固定到兼容版本：

```json
{
  "overrides": {
    "entities": "6.0.1"
  }
}
```

然后再执行一次依赖安装，更新锁文件并重新构建：

```bash
npm install
npm run build
```

本地构建通过后，再把 `package.json` 和 `package-lock.json` 推到 GitHub，Vercel 就会重新拉起部署。新的部署成功后，线上页面也就更新了。

## 这类问题的通用处理思路

如果以后博客在 Vercel 上又出现“推送成功但页面没更新”的情况，可以按这个顺序检查：

1. 先看 Vercel 的最新部署是不是 `Ready`
2. 如果不是，就进构建日志找第一条真正的报错
3. 在本地执行同样的构建命令复现问题
4. 检查 `package-lock.json` 有没有把关键依赖锁到奇怪版本
5. 修完依赖后重新安装并重新部署

## 一个很实用的经验

很多人会先怀疑缓存、域名或者 CDN，但这次问题证明：只要 Vercel 构建失败，线上页面不更新通常是必然结果。先看构建日志，往往比盲目刷新页面更有效。

## 小结

这次问题本质上是一个依赖兼容性问题，不是 Vercel 平台本身坏了。真正有效的处理方式不是反复重部署，而是先把本地构建修通，再让 Vercel 跑同样一套成功的依赖和构建流程。
