# Astro Clean

基于 Astro 的静态博客主题。页面克制，配置集中在 `src/data/site.ts`，适合个人博客，也适合当作主题演示仓库直接 fork。

## 功能

- 首页文章列表、归档、分类、标签
- Markdown / MDX 文章，支持 `abbrlink`、封面、摘要
- 站内搜索（标题、摘要、分类、标签）
- 暗色模式
- 关于、友链、追番、TODO、音乐馆
- Twikoo 评论（默认关闭）
- APlayer + Meting 播放器
- GitHub Pages 自动部署

## 快速开始

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 开始改成自己的站点

1. 改 `src/data/site.ts`：标题、作者、社交链接、评论和歌单。
2. 改 `astro.config.mjs` 里的 `site`。项目页（`username.github.io/repo`）还要加 `base: '/repo'`。
3. 替换 `public/avatar/avatar.webp` 和 `public/images/banner.webp`。
4. 清空或改写 `src/content/blog/`、`src/content/about/about.md`、`src/content/todo/todo.md`、`src/data/bangumis.json`、`src/pages/friend.astro`。
5. 自定义域名时在 `public/CNAME` 写入域名；搜索引擎验证文件也放进 `public/`。

示例文章：

```md
---
title: 示例文章
date: 2026-09-25
categories: 随笔
tags: [Astro, Blog]
brief: 首页显示的短摘要
abbrlink: example-post
---

这里写正文。
```

字段说明和部署步骤见 [ASTRO_THEME_GUIDE.md](./ASTRO_THEME_GUIDE.md)。

## 目录

```txt
├─ astro.config.mjs              # 站点域名、Markdown、sitemap
├─ src/data/site.ts              # 主题主配置
├─ src/data/bangumis.json        # 追番数据
├─ src/content/blog/             # 文章
├─ src/content/about/            # 关于页
├─ src/content/todo/             # TODO 页
├─ src/pages/                    # 路由
├─ src/components/               # 卡片、侧栏、评论、追番
├─ public/                       # 头像、背景、字体
└─ .github/workflows/deploy.yml  # GitHub Pages
```

## 部署

仓库已包含 GitHub Actions。在仓库 Settings → Pages 把 Source 设为 `GitHub Actions`，推送到 `master` 即可。默认分支如果是 `main`，改一下 workflow 里的分支名。

评论、IndexNow 这类个人服务默认不接入。需要时再打开 `site.ts` 里的 Twikoo，或在构建后手动跑 `scripts/indexnow.mjs`。
