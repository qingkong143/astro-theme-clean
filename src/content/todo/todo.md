---
title: 任务清单
lastUpdate: '2026-09-25'
---

# 主题

## 把站点信息改成自己的

> 创建：2026-09-01

打开 `src/data/site.ts`，改标题、作者、社交链接、评论和歌单。

## 写第一篇文章

> 创建：2026-09-01 · 完成：2026-09-10

在 `src/content/blog/` 新建 Markdown，补上 `title`、`date`、`cover` 和摘要。

## 部署到 GitHub Pages

> 创建：2026-09-05

仓库已带 Actions 工作流。把 `astro.config.mjs` 里的 `site` 改成自己的地址后推送即可。

# 内容

## 补一张头像和背景图

> 创建：2026-09-08

替换 `public/avatar/avatar.webp` 和 `public/images/banner.webp`。

## 打开评论

> 创建：2026-09-12

准备好 Twikoo 环境后，把 `comments.twikoo.enable` 设为 `true`，并填入 `envId`。
