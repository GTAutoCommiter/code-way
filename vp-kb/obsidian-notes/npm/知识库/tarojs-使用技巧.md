---
id: npm-tarojs-useNote
slug: /npm-tarojs-useNote
title: 【tarojs】使用技巧
date: 2024-06-23T00:00:00.000Z
tags:
  - npm/知识库
---

# 项目相关

## Q：如何在不同项目中分别使用不同版本的taro

* A：

  1. 安装指定版本taro至开发依赖

     ````bash
     yarn add @tarojs/cli@2.2.11 --D
     ````

  2. 检测是否安装指定版本taro

     ````bash
     yarn taro -V
     ````

  3. 跑项目

     ````bash
     yarn taro xxx
     ````

## Q：如何处理键盘遮挡input框？

* A：在input的点击事件，或者获取焦点的事件中，添加下面api即可

  ````jsx
  document.querySelector('#inputId').scrollIntoView();
  ````

# 微信小程序

## 微信小程序无法获取window

* 坑：微信小程无法获取window，但是微信开发工具可以获取window
* 处理方法：
  * Taro.getSystemInfoSync();

# 抖音小程序

