---
title: createFiberFromTypeAndProps
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiber.js`

目的：根据 React 元素的类型和属性创建一个新的 Fiber 节点。

参数：

| 键名         | 类型       | 描述                     |
| ------------ | ---------- | ------------------------ |
| type         | Any        | React 元素的类型         |
| key          | string     | 元素的唯一键。           |
| pendingProps | Object     | 该元素的待处理属性。     |
| Owner        |            | 元素的所有者，用于调试。 |
| mode         | TypeOfMode | fiber 应该以何种模式运行 |
| lanes        | Lanes      | 工作的优先级             |

逻辑：

## 1、Fiber 标签确定

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberFromTypeAndProps_1.jfif)

## 2、特殊情况处理

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberFromTypeAndProps_2.jfif)

## 3、错误处理

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberFromTypeAndProps_3.jfif)

## 4、创建Fiber并返回

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberFromTypeAndProps_4.jfif)

> 这个函数对于 React 的协调过程至关重要，因为它决定了不同类型的元素在 Fiber 树中的表示方式。
