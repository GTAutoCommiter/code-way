---
title: jsxProd
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react/src/jsx/ReactJSXElement.js`

目的：专门用于在生产环境中创建React元素

参数：

| 键名     | 类型                              | 描述               |
| -------- | --------------------------------- | ------------------ |
| type     | 字符串或一个React组件（类或函数） | 元素类型           |
| config   | 一个包含属性和特性的对象          | 元素配置           |
| maybeKey | 字符串                            | 可能包含元素的 key |

逻辑：

## 1、初始化key和ref

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_1.jfif)

## 2、确定key

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_2.jfif)

## 3、确定ref

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_3.jfif)

## 4、处理props

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_4.jfif)

## 5、默认Props

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_5.jfif)

## 6、创建React元素

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/jsxProd_6.jfif)
