---
title: FiberNode
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiber.js`

目的：用于创建一个新的 Fiber 节点。

参数：

| 键名         | 类型   | 描述                                      |
| ------------ | ------ | ----------------------------------------- |
| this         | object |                                           |
| tag          | string | 表示 Fiber 的类型，例如函数组件、类组件等 |
| pendingProps |        | 新的 props                                |
| key          | string | 用于标识 Fiber 的唯一性                   |
| mode         | string |                                           |

逻辑：

## 1、设置基本属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/FiberNode_1.jfif)

## 2、设置Fiber结构相关属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/FiberNode_2.jfif)

## 3、设置模式和效果标志

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/FiberNode_3.jfif)

> 备用 Fiber：alternate 用于指向该 Fiber 的备用版本，以支持 React 的双缓冲机制。

## 4、设置性能测量

* 如果启用了 enableProfilerTimer，则初始化性能测量相关的字段。

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/FiberNode_4.jfif)

## 5、设置开发模式调试相关属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/FiberNode_5.jfif)
