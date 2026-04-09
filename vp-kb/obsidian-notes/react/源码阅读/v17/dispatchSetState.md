---
title: dispatchSetState
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

参数：

| 键名   | 类型        | 描述             |
| ------ | ----------- | ---------------- |
| fiber  | Fiber       | fiber对象        |
| queue  | UpdateQueue | 更新队列         |
| action | 一个函数    | 用于处理状态更新 |

逻辑：

## 1、开发模式检查

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_1.jfif)

## 2、请求更新车道

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_2.jfif)

## 3、创建更新对象

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_3.jfif)

## 4、渲染阶段更新

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_4.jfif)

## 5、非渲染阶段更新

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_5.jfif)

## 6、调度更新

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_6.jfif)

## 7、开发工具标记

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/dispatchSetState_7.jfif)
