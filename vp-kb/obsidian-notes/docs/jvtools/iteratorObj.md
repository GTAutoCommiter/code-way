---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: iteratorObj
tags:
  - docs/jvtools
---
<h3>
  <code>iteratorObj(obj)</code>
</h3>
给对象添加可迭代属性

#### 添加版本

1.0.6

#### 参数

1. `obj` *(Object)*: 目标对象。

#### 返回

*(Object)*: 具有迭代属性的对象。

#### 例子

```javascript
const obj = { a: 1, b: '2', c: 3 };
iteratorObj(obj);
const [...test] = obj;
console.log(test)
//=>[1,2,3]

for(const ele of obj){
  console.log(ele);
}
//1
//2
//3
```
