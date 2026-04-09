---
id: htmlAndCss-html-aboutDoctype
slug: /htmlAndCss-html-aboutDoctype
title: 关于doctype
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/html
---

# 前言

每个html第一个指令是`<!DOCTYPE html>`，但是你知道这个是什么？有什么用？这篇文章或许可以让你了解到

* doctype指令基础知识
* 浏览器渲染方式



---

# 知识介绍

## 初识doctype指令

1. 在哪？——每个html文件开头第一行。
2. 是啥？——文档类型声明，是一个指令，但不是HTML标签
3. 能干啥？——用于告诉浏览器当前 HTMl 版本的指令
4. 为什么？——因为要告诉浏览器以何种方式(标准模式 或 怪异模式)来渲染页面



### Q：如何指定某个doctype版本？

1. 在指令后添加指定版本号

   ````html
   <!DOCTYPE 指定版本号>
   ````

   常见doctype

   |         版本          | 使用表现性、废弃元素 | frameset |
   | :-------------------: | :------------------: | :------: |
   |    HTML4.01 strict    |        不允许        |  不允许  |
   | HTML4.01 Transitional |         允许         |  不允许  |
   |   HTML4.01 Frameset   |         允许         |   允许   |
   |    XHTML1.0 Strict    |        不允许        |  不允许  |
   | XHTML1.0 Transitional |         允许         |  不允许  |
   |  XHTML 1.0 Frameset   |         允许         |   允许   |
   |        HTML 5         |                      |          |

   * 【巧记】

     * 带`strict`（严格版）的都不允许，带`frameset`（基于框架版）的都允许
     * 带`transitional`（过渡版）的允许一半，拒绝一半。

     

## 浏览器渲染方式

### 标准模式（又称：严格模式）

* 浏览器按 W3C 标准解析执行代码
  * 排版和JS 运作模式是 以该浏览器支持的最高标准运行。（瞻前）



### 怪异模式（又称：混杂模式）

* 使用浏览器自己的方式解析执行代码
  * 向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。（顾后）
* DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

> PS：两种不同的渲染方式会导致盒子模型的不同——[ 了解详情：W3C盒模型和怪异盒模型](https://www.cnblogs.com/lao-jiaweijarvee/p/16341282.html)



### Q：如何判断目前使用的模式？ 

1. `F12`打开控制台

2. 输入`alert($.support.boxModel);`
   * `true`：标准模式
   * `false`：怪异模式



### Q：如何让浏览器进入不同的模式？

* 浏览器渲染方式的选择，与你网页中的 DTD 声明直接相关
  * DTD 声明定义了标准文档的类型（严格模式解析）文档类型
    * 会使浏览器使用相应的方式加载网页并显示
  * 忽略 DTD 声明
    * 将使网页进入混杂模式


