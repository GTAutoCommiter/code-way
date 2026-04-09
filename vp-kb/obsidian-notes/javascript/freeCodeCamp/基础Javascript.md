---
id: javascript-freeCodeCamp-base
slug: /javascript-freeCodeCamp-base
title: 【freeCodeCamp】基础Javascript
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/freeCodeCamp
---

# 注释

* javascript存在两种注释

  * 单行注释

    ````javascript
    //这是一个单行注释
    ````

  * 多行注释

    ````javascript
    /*
    这是一个多行
    注释
    */
    ````

* 注释主要用来

  * 解释你写的代码的作用
  * 让别人*和*你未来的自己更容易看懂代码

# 声明变量

* Javascript提供八种不同的数据类型

  | 数据类型  |         含义         |
  | :-------: | :------------------: |
  | undefined |        未定义        |
  |   null    |          空          |
  |  boolean  |        布尔型        |
  |  string   |        字符串        |
  |  symbol   |                      |
  |  number   |         数字         |
  |  bigint   | 可以表示任意大的整数 |
  |  object   |         对象         |

* 变量

  * 允许计算机以一种动态的形式来存储和操作数据
    * 通过操作**指向数据的指针**而***不是***数据本身来实现

* 变量声明需要关键字`var`

  * 变量名命名规则：
    * 可以由数字、字母、美元符号 `$` 或者下划线 `_` 组成
    * 不能包含空格或者以数字为开头
