---
id: javascript-program-design-json
slug: /javascript-program-design-json
title: JSON
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript高级程序设计
---

# 解析与序列化

## JSON.stringfy()

### Q：如何使用？

* A：

  ````javascript
  JSON.stringify(value, replacer, space)
  ````

  * `value`：目标值

  * `replacer`：

    | 类型            | 结果                                                         |
    | --------------- | ------------------------------------------------------------ |
    | 函数            | 序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理 |
    | 数组            | 只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中 |
    | null 或者未提供 | 对象所有的属性都会被序列化                                   |

  * `space`：指定缩进用的空白字符串


## JSON.parse

### Q：干了什么？

* A：将 JSON 字符串解析为 JavaScript 值。

  
