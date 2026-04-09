---
title: createFiber
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiber.js`

目的：使用类的方式创建一个新的FiberNode实例。

参数：

| 键名         | 类型       | 描述                                           |
| ------------ | ---------- | ---------------------------------------------- |
| tag          | WorkTag    | 这个参数表示 fiber 将要执行的工作类型。        |
| pendingProps | Object     | 新的 props，组件在下一次渲染时将接收的 props。 |
| key          | string     | 用于在其兄弟组件中唯一标识一个组件。           |
| mode         | TypeOfMode | fiber 应该以何种模式运行                       |

逻辑：

## 1、选择创建方法

根据 enableObjectFiber 标志的不同，React 可以选择使用类或对象字面量来创建 Fiber。

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiber_1.jfif)

## 对象字面量方式创建

> PS：构建属性与FiberNode一致

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberImpIObject.jfif)

## 类方式创建

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createFiberImplClass.jfif)

> React 内部用于高效管理组件渲染和更新的策略的一部分。FiberNode 实例是 React Fiber 架构的构建块，允许 React 在需要时暂停、中止或重用工作，从而使渲染过程更加灵活和高效。
