---
id: javascript-regExp
slug: /javascript-regExp
title: 【笔记】【JavaScript】RegExp对象
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---
# 前言

【目的】

# 啥是RegExp对象？

* 正则表达式是描述字符模式的对象。


> 【拓展】**啥是正则表达式？**
>
> - 用来找字符的
>   - 用于对字符串模式匹配及检索替换
>   - 对字符串执行模式匹配的强大工具

【格式】

````javascript
var patt=new RegExp(pattern,modifiers);
````

【简洁格式】

````javascript
var patt=/pattern/modifiers; 
````

`pattern`（模式）：描述了表达式的模式

`modifiers`（修饰符）：用于指定全局匹配、区分大小写的匹配和多行匹配

