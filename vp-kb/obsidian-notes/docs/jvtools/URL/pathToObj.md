---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: pathToObj
tags:
  - docs/jvtools/URL
---
<h3>
  <code>pathToObj(str)</code>
</h3>


路径参数解析成对象

#### 添加版本

1.0.3

#### 参数

1. `str` *(string)*: 未解析参数的路径字符串。

#### 返回

*(Object)*: 参数收集对象。

#### 例子

```javascript
const paramStr='string=string&number=1&boolean=true';

const paramObj=pathToObj(paramStr);
console.log(paramObj);
//{
//  string: 'string',
//  number: 1,
//  boolean: 'true',
//}

```
