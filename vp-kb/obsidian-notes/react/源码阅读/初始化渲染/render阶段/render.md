---
id: react-source-code-renderStep-render
slug: /react-source-code-renderStep-render
title: render
date: 2024-07-17T00:00:00.000Z
tags:
  - react/源码阅读/初始化渲染/render阶段
---

## render

### `v18`

* 文件位置：

### `v17`

* 文件位置：`packages/react-dom/src/client/ReactDOMLegacy.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-v17-1.jfif)

  * 返回值，调用`legacyRenderSubtreeIntoContainer`
  
  * Q&A
  
    * Q：为啥返回值`legacyRenderSubtreeIntoContainer`需要判断是不是服务器端渲染？
  
      A：如果是服务器端渲染，需要复用传递的`container`内部的DOM元素，反之则不需要复用内部的DOM元素，而是删除`container`内部的内容。

## isValidContainer

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/isValidContainer-v17-1.jfif)

## 初始化FiberRoot——v17

### legacyRenderSubtreeIntoContainer

* 文件位置：`packages/react-dom/src/client/ReactDOMLegacy.js`

* 源码

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-legacyRenderSubtreeIntoContainer.jfif)

### legacyCreateRootFromDOMContainer

* 文件位置：`packages/react-dom/src/client/ReactDOMLegacy.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-legacyCreateRootFromDOMContainer.jfif)

### createLegacyRoot

* 文件位置：`packages/react-dom/src/client/ReactDOMRoot.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-createLegacyRoot.jfif)

  * `LegacyRoot`：请前往LegacyRoot了解详情

### ReactDOMBlockingRoot

* 文件位置：`packages/react-dom/src/client/ReactDOMRoot.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-reactDOMBlockingRoot.jfif)

### createRootImpl

* 文件位置：`packages/react-dom/src/client/ReactDOMRoot.js`

* 源码

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-createRootImpl.jfif)

### createContainer

* 文件位置：`packages/react-reconciler/src/ReactFiberReconciler.new.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-createContainer.jfif)

### createFiberRoot

* 文件位置：`packages/react-reconciler/src/ReactFiberRoot.new.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-createFiberRoot.jfif)

### FiberRootNode

* 文件位置：`packages/react-reconciler/src/ReactFiberRoot.new.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-FiberRootNode.jfif)

### initializeUpdateQueue

* 文件位置：`packages/react-reconciler/src/ReactUpdateQueue.new.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-initializeUpdateQueue.jfif)

### getPublicRootInstance

* 文件位置：`packages/react-reconciler/src/ReactFiberReconciler.old.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-getPublicRootInstance.jfif)

### updateContainer

* 文件位置：`packages/react-reconciler/src/ReactFiberReconciler.old.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-updateContainer.jfif)

### getContextForSubtree

* 文件位置：`packages/react-reconciler/src/ReactFiberReconciler.old.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-getContextForSubtree.jfif)

### enqueueUpdate

* 文件位置：`packages/react-reconciler/src/ReactUpdateQueue.old.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-enqueueUpdate.jfif)

### scheduleUpdateOnFiber

* 文件位置：`packages/react-reconciler/src/ReactFiberWorkLoop.old.js`
* 源码：

### getCurrentPriorityLevel

* 文件位置：`packages/react-reconciler/src/SchedulerWithReactIntegration.old.js`

* 源码：

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/render-getCurrentPriorityLevel.jfif)

  



