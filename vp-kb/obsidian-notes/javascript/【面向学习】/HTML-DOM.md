---
id: javascript-htmlDom
slug: /javascript-htmlDom
title: 【学习笔记】【JavaScript】【菜鸟编程】HTML-DOM
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---
# 前言

【目的】


【学习资源】

[HTML DOM 教程-菜鸟编程](https://www.runoob.com/htmldom/htmldom-tutorial.html)


# DOM 简介

## 啥是DOM？

* 文档对象模型

  * DOM=Document Object Model

* 是 HTML 和 XML 文档的编程接口

  * 中立于平台和语言的接口

* DOM 以树结构表达 HTML 文档

  * **HTML DOM树形结构**

    ![](https://www.runoob.com/images/htmltree.gif)


## DOM 能干啥？

* 允许程序和脚本动态地访问
* 更新文档的内容、结构和样式。



# 节点

* 在 HTML DOM 中，所有事物都是节点。
* DOM 是被视为节点树的 HTML。
* HTML 文档中的所有内容都是节点。
  * 文档节点：整个文档
  * 元素节点：每个 HTML 元素
  * 文本节点：HTML 元素内的文本
  * 属性节点：每个 HTML 属性
  * 注释节点：注释



## 节点树

*示例*

![](https://www.runoob.com/wp-content/uploads/2013/09/ct_htmltree.gif)



### 节点树中的节点彼此拥有层级关系

> 父节点

* 父节点拥有子节点

> 子节点



> 同胞节点
