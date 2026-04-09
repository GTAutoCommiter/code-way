---
title: 快速开始
---

# 🚀 快速开始

欢迎使用基于 VitePress 的高级知识库系统。

## 如何写作？

1. 在项目根目录的 `obsidian-notes/` 文件夹中创建 Markdown 文件。
2. 如果有图片，请放入 `obsidian-notes/_assets/`。
3. 如果想为文章添加标签，请在 Frontmatter 中添加：
   ```yaml
   ---
   title: 我的第一篇笔记
   tags: [前端, TypeScript]
   ---
   ```

## 如何预览？

运行以下命令：
```bash
pnpm run docs:dev
```
脚本会自动将 `obsidian-notes` 中的内容同步到 `docs` 并生成标签索引页。
