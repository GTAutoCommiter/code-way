---
title: updateActionState
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

目的：主要作用是更新组件的状态。用于 React 的内部状态管理，特别是在处理异步状态更新时。

参数：

| 键名         | 类型           | 描述                                   |
| ------------ | -------------- | -------------------------------------- |
| action       | 一个函数       | 接收当前状态和动作参数，返回新的状态。 |
| initialState |                | 初始状态                               |
| permalink    | string（可选） |                                        |

逻辑：

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/updateActionState.jfif)

