---
title: onActionSuccess
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactFiberHooks.js`

目的：当一个动作（action）成功执行完毕时，该方法被调用。更新相关的状态，并继续处理队列中的其他动作。通过这种方式，React 可以在动作完成后立即更新组件的状态，并触发必要的重新渲染。

参数：

| 键名        | 类型 | 描述         |
| ----------- | ---- | ------------ |
| actionQueue |      | 动作队列     |
| actionNode  |      | 当前动作节点 |
| nextState   |      |              |

逻辑：

## 1、更新动作节点状态

````javascript
// 更新动作节点状态,表示动作成功完成
actionNode.status = 'fulfilled';
actionNode.value = nextState;
````

## 2、通知监听器

````javascript
// 通知动作监听器,触发后续的渲染和其他副作用
notifyActionListeners(actionNode);
````

## 3、更新动作队列的状态

````javascript
// 更新队列的状态
// 将动作队列的状态更新为nextState——动作队列现在持有最新的状态
actionQueue.state = nextState;
````

## 4、处理动作队列

````javascript
// 处理动作队列
const last = actionQueue.pending;
// 检查动作队列中是否还有其他待处理的动作
if (last !== null) {
  const first = last.next;
  if (first === last) {
    // 如果当前动作是队列中的最后一个动作
    // 将pending 设置为null，表示没有待处理的动作
    actionQueue.pending = null;
  } else {
    // 队列中还有其他动作

    // 从队列中移除当前动作
    const next = first.next;
    last.next = next;

    // 执行下一个动作
    runActionStateAction(actionQueue, next);
  }
}
````

