---
title: onActionError
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

目的：在动作执行出错时，确保队列中所有待处理的动作都被标记为失败，并通知相关的监听器。通过将 actionQueue.action 设置为 null，它还阻止了后续动作的执行。

参数：

| 键名        | 类型 | 描述     |
| ----------- | ---- | -------- |
| actionQueue |      | 动作队列 |
| actionNode  |      | 动作节点 |
| error       |      |          |

逻辑：

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/onActionError.jfif)
