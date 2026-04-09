---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: groupByValue
tags:
  - docs/jvtools
---
<h3>
  <code>groupByValue(obj)</code>
</h3>
收集对象中相同值的key

#### 添加版本

1.0.3

#### 参数

1. `obj` *(Object)*: 对象源。

#### 返回

*(Object)*: 返回按值收集后的对象。

#### 例子

```javascript
groupByValue({ a: 1, b: 2, c: 1 })
//=>{ 1: ['a', 'c'], 2: ['b'] }

groupByValue({ a: 1, b: 2, c: 1, d: 2 })
//=>{ 1: ['a', 'c'], 2: ['b', 'd'] }
```
