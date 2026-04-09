---
title: mountEffect
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

参数：

| 键名   | 类型           | 描述                                                         |
| ------ | -------------- | ------------------------------------------------------------ |
| create | 一个函数       | 用于创建副作用。它可以返回一个清理函数，用于在组件卸载或副作用重新执行前清理上一次的副作用。 |
| deps   | 一个依赖项数组 | 用于决定副作用是否需要重新执行。如果数组中的值发生变化，副作用将会重新执行。 |

逻辑：

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountEffect_1.jfif)

# mountEffectImpl

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/mountEffect_2.jfif)
