---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: objToPath
tags:
  - docs/jvtools/URL
---
<h3>
  <code>objToPath(obj)</code>
</h3>

对象转化成url参数

#### 添加版本

1.0.3

#### 参数

1. `obj` *(Object)*: 目标对象。

#### 返回

*(string)*: 携带参数的路径字符串。

#### 例子

```javascript
const paramObj={
  string: 'string',
  number: 1,
  boolean: true,
}
const routePath=objToPath(paramObj);
//=> 'string=string&number=1&boolean=true'
```
