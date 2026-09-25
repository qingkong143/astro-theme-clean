---
title: 主题能做什么
date: 2026-09-18
cover: '/images/banner-600w.webp'
categories: 演示
tags: [Astro, 主题]
abbrlink: theme-features
brief: 搜索、暗色模式、追番、音乐馆、友链和 TODO，页面清单和对应文件。
---

Astro Clean 面向个人博客，页面尽量少，配置尽量集中。

## 页面

| 路径 | 作用 |
| --- | --- |
| `/` | 首页文章列表和侧栏 |
| `/posts/[slug]/` | 文章详情 |
| `/archive/` | 按时间归档 |
| `/categories/` `/tags/` | 分类和标签列表 |
| `/about/` | 关于 |
| `/friend/` | 友链 |
| `/bangumi/` | 追番 |
| `/todo/` | 任务清单 |
| `/music/` | 全屏音乐馆 |

## 内置能力

- **搜索**：顶部按钮拉取 `/search-index.json`，按标题、摘要、分类、标签过滤。
- **暗色模式**：顶栏切换，偏好存在 `localStorage`。
- **评论**：Twikoo，默认关闭，避免演示站打到别人的环境。
- **播放器**：首页侧栏 APlayer + Meting；音乐馆是独立全屏页。
- **外链卡片**：Markdown 里用 `link-card` 代码块。
- **图片灯箱**：文章里的图片可以点开放大。

## 主要文件

- 站点配置：`src/data/site.ts`
- 文章集合：`src/content/blog/`
- 全局样式：`src/styles/global.css`
- GitHub Pages：`.github/workflows/deploy.yml`

更细的字段说明在 `ASTRO_THEME_GUIDE.md`。
