---
title: cloneElement
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react/src/jsx/ReactJSXElement.js`

参数：

| 键名     | 类型                               | 描述                             |
| -------- | ---------------------------------- | -------------------------------- |
| element  |                                    | 要克隆的 React 元素。            |
| config   | 一个包含属性和特性的对象           | 元素配置                         |
| children | 可以是单个元素、元素数组或混合内容 | 要添加到克隆元素中的额外子元素。 |

逻辑：

## 1、验证

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_1.jfif)

## 2、复制原始属性

 ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_2.jfif)

## 3、提取保留名称（key和ref）

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_3.jfif)

## 4、保留所有者

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_4.jfif)

## 5、处理配置

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_5.jfif)

## 6、默认属性处理

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_6.jfif)

## 7、子元素处理

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_7.jfif)

## 8、创建克隆元素

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_8.jfif)

## 9、验证子元素的键

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_9.jfif)

## 10、返回克隆元素

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/cloneElement_10.jfif)
