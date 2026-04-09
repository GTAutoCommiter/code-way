---
id: htmlAndCss-html-box-model
slug: /htmlAndCss-html-box-model
title: W3C盒模型和怪异盒模型
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/html
---

# 前言

【目的】

* 通过总结小伙伴们面试涉及到的问题，来进行前端知识的查漏补缺
* 给准备面试的小伙伴总结知识，也帮助自己更深入的了解前端知识。



【内容】

* 首先将介绍相关内容
* 然后列出常见的面试题型。



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。



---



# 知识介绍

## 啥是W3C盒模型？

* 又称**标准盒模型**
* box-sizing:**content-box**（*意味着content包含在width里*）

![](https://6d69-mianshiya-2g3ifawi5a19f176-1256524210.tcb.qcloud.la/img/1642785410392-632899)

* 盒子总**宽**=左右margin+左右border+左右padding+**width**
  * width=content
* 盒子总**高**=上下margin+上下border+上下padding+height



## 啥是怪异盒模型？

* 又称**IE盒模型**
* box-sizing:**border-box**（*意味着border和padding包含在width里*）

![](https://6d69-mianshiya-2g3ifawi5a19f176-1256524210.tcb.qcloud.la/img/1642785305496-780745)

* 盒子总**宽**=左右margin+**width**
  * **width**=左右border+左右padding+content
* 盒子总高=左右margin+**height**
  * height=上下border+上下padding+content



# 面试常见题目

> 考察点1：**计算盒子总宽、总高。**

【相关题目链接】

[**以下的选项，正确的盒子宽高计算公式是（）**](https://www.mianshiya.com/qd/54ad1eea61fdece80dbb87216015a45d)

[**关于盒子宽度下列正确的是（）**](https://www.mianshiya.com/qd/54ad1eea61fd1a0d0da3c9ce07c9b833)

[**如何计算一个盒子的真实宽度？**](https://www.mianshiya.com/qd/5b049cc861ddbfa2049846dc5ffc11db)

[**当前盒子高度100px，文字大小20px，文字上边距是20px，此时文字行高是多少（）**](https://www.mianshiya.com/qd/617ef50c61fbd5540304e8944c55b76b)

[**以下关于盒子模型描述正确的是：**](https://www.mianshiya.com/qd/54ad1eea61d3be5002ce65aa4dfe7638)

.......



> 考察点2：**盒子模型控件了解**

【相关题目链接】

[**以下描述中，哪些是盒子模型的组件（）**](https://www.mianshiya.com/qd/54ad1eea61fdee760dbbab6f4f28a5e2)

[**以下选项中，哪个属性是控制盒子之间的距离的（）**](https://www.mianshiya.com/qd/617ef50c61fdee1d034bc8b15bdb3192)

.......



> 考察点3：**对盒子模型样式的应用**

【相关题目链接】

[**盒模型 - border-box**](https://www.mianshiya.com/qd/54ad1eea61c5d50f0056b4c402defd91)

[**盒模型 - content-box**](https://www.mianshiya.com/qd/17e3426e61c5d4ed004efdb63804d738)

.......



# 结语

【感谢】

***感谢程序员鱼皮提供[面试鸭](https://www.mianshiya.com/)平台!!!***

***感谢各位读者能看到最后!!!***
