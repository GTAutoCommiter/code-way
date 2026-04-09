---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: curry
tags:
  - docs/jvtools
---
<h3>
  <code>curry(func, [arity=func.length])</code>
</h3>
创建一个函数，该函数接收 `func` 的参数，要么调用`func`返回的结果，如果 `func` 所需参数已经提供，则直接返回 `func` 所执行的结果。或返回一个函数，接受余下的`func` 参数的函数，可以使用 `func.length` 强制需要累积的参数个数。

#### 添加版本

1.0.3

#### 参数

1. `func` *(Function)*: 用来柯里化（curry）的函数。
2. `[arity=func.length]` *(number)*: 需要提供给 `func` 的参数数量。

#### 返回

*(Function)*: 返回新的柯里化（curry）函数。

#### 例子

```javascript
function add(x, y, z, m) {
  return x + y + z + m
}
 
const curried = curry(add);
 
curried(1)(2)(3)(4);
// => 10
 
curried(2, 2)(3)(3);
//=> 10
 
curry(add, 1)(2)(3)(4)
// => 10
```
