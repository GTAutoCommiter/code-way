---
id: frontend-bable-note
slug: /frontend-bable-note
title: 【Bable】学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - 前端
---

# 基本知识

## Q：是什么？

* A：JavaScript 编译器。

## Q：能干啥？

* A：主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中

## Q：如何添加配置文件？

* A：
  * 方法一：babel.config.* ：新建文件，位于项目根目录
    * `babel.config.js`
    * `babel.config.json`
  * 方法二：.babelrc.* ：新建文件，位于项目根目录
    * `.babelrc`
    * `.babelrc.js`
    * `.babelrc.json`
  * 方法三：`package.json` 中 `babel`：不需要创建文件，在原有文件基础上写
