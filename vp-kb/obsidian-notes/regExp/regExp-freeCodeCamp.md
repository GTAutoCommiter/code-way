---
id: regExp-freeCodeCamp-base
slug: /regExp-freeCodeCamp-base
title: 【freeCodeCamp】正则表达式
date: 2022-05-10T00:00:00.000Z
tags:
  - 正则表达式
---

# 使用测试方法

【解题答案】

````javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // 修改这一行
````

* `myRegex.test(param)`方法
  * 作用：检测字符串是否符合正则表达式定义的规则
  * `param`：需要检测的字符串
  * `myRegex`：自定义的正则表达式规则。
