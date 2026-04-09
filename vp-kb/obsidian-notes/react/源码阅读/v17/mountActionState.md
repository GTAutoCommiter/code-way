---
title: mountActionState
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

参数：

| 键名             | 类型           | 描述             |
| ---------------- | -------------- | ---------------- |
| action           | 一个函数       | 用于处理状态更新 |
| initialStateProp |                | 初始状态值       |
| permalink        | string（可选） |                  |

逻辑：

## 1、初始状态设置

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountActionState_1.jfif)

## 2、状态hook初始化

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountActionState_2.jfif)

## 3、挂载pending状态

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountActionState_3.jfif)

## 4、动作队列hook

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountActionState_4.jfif)

## 5、返回值

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountActionState_5.jfif)

> 这个方法的核心是为组件提供一个可以管理异步状态更新的机制，允许在组件中使用类似于 `useState` 的方式来处理复杂的异步操作。通过将状态更新封装在 action 中，开发者可以更灵活地管理组件的状态变化。
