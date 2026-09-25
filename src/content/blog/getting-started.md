---
title: 五分钟跑起来
date: 2026-09-10
cover: '/images/banner-800w.webp'
categories: 演示
tags: [Astro, 入门]
abbrlink: getting-started
brief: 安装依赖、改站点配置、写第一篇文章，然后部署到 GitHub Pages。
---

把这个仓库当成主题模板用：先在本地看效果，再把 `src/data/site.ts` 换成自己的信息。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址，首页、归档、搜索和文章页都应该能点。

## 改站点信息

打开 `src/data/site.ts`，至少改这几项：

- `title` / `subtitle` / `author` / `description`
- `social` 里的邮箱和 GitHub
- `comments.twikoo`：有评论服务再打开，没有就保持 `enable: false`
- `player.meting.id`：换成自己的网易云歌单 ID

同时把 `astro.config.mjs` 里的 `site` 改成实际域名。如果仓库不是 `username.github.io` 这种根站点，还要加上 `base: '/仓库名'`。

## 写文章

在 `src/content/blog/` 新建 Markdown：

```md
---
title: 我的第一篇文章
date: 2026-09-25
categories: 随笔
tags: [Blog]
brief: 首页显示的短摘要
abbrlink: my-first-post
---

这里写正文。
```

`abbrlink` 唯一时，文章路径是 `/posts/abbrlink/`。

## 构建

```bash
npm run build
npm run preview
```

推送到 `master` 后，`.github/workflows/deploy.yml` 会把 `dist/` 发到 GitHub Pages。
