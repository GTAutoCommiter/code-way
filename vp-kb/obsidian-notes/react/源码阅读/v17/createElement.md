---
title: createElement
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react/src/jsx/ReactJSXElement.js`

参数：

| 键名     | 类型                               | 描述             |
| -------- | ---------------------------------- | ---------------- |
| type     | 字符串或一个React组件（类或函数）  | 元素类型         |
| config   | 一个包含属性和特性的对象           | 元素配置         |
| children | 可以是单个元素、元素数组或混合内容 | 当前元素的子元素 |

逻辑：

## 1. 初始化变量

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-1.jfif)

## 2. 提取 key 和 ref

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-2_1.jfif)

## 3. 复制属性

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement_3.jfif)

## 4. 处理子元素

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement_4.jfif)

## 5. 默认属性

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement_5.jfif)

## 6. 开发模式警告

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement_6.jfif)

## 7. 返回React元素

   ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement_7.jfif)
