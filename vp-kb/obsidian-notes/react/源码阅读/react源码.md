---
id: react-source-code
slug: /react-source-code
title: react源码解读
date: 2022-05-10T00:00:00.000Z
tags:
  - react/源码阅读
---



## React架构

### react16前：

* 协调器（Reconciler）：对比新旧 VDOM 找不同
* 渲染器（Renderer）：将最新的 VDOM 转 真实DOM 渲染到页面上。

### react16后：

* 调度器（Scheduler）：调度更新
* 协调器（Reconciler）：决定更新的内容
* 渲染器（Renderer）：将更新的内容渲染到视图中
  * 只有`渲染器`会执行渲染视图操作。

## 组件更新流程

### react16前

* 协调器（Reconciler）：
  1. JSX 转 VDOM
  2. 新旧 VDOM 作比较`（老架构是 递归遍历 VDOM，不能中断）`
  3. 递归结束，通知 Renderer（渲染器）
* 渲染器（Renderer）：
  1. 将最新的 VDOM 渲染到页面上

### react16后

* 调度器（Scheduler）：

  1. `设置任务的优先级`，优先级高的推入

* 协调器（Reconciler）：

  1. VDOM 转 Fiber

  2. 对变化的 Fiber 节点打上标记 flag。

     * 对可复用的节点打上修改的标记
     * 剩余的旧节点打上删除标记
     * 新节点打上新增标记。

     > 在协调器这一步，`就已经清楚了节点是增还是改还是删`

* 渲染器（Renderer）：

  1. 根据 Reconciler 打的标记，直接渲染

     > 因为上一步已经知道 Fiber 节点是如何变化的，所以渲染的时候就会很快

### 对比

|                 | react16前 | react16后 |
| --------------- | --------- | --------- |
| Reconcilerl流程 | 不可中断  |           |

