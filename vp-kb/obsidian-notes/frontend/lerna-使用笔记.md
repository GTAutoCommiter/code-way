---
id: frontend-lerna--note
slug: /frontend-lerna-note
title: 【lerna】使用笔记
date: 2024-06-27T00:00:00.000Z
tags:
  - 前端
---

## 错误处理

### lerna ERR! Cannot initialize lerna because your package manager has not been configured to use `workspaces`, and you have not explicitly specified any packages to operate on

【原因】在执行`lerna init`之前先执行`npm init`

【解决方法】将`package.json`文件删除再执行`lerna init`
