---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: isEmpty
tags:
  - docs/jvtools
---
<h3>
  <code>isEmpty(val)</code>
</h3>
检查 `value` 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。

对象如果被认为为空，那么他们没有自己的可枚举属性的对象。

类数组值，比如`arguments`对象，array，buffer，string或者类jQuery集合的`length` 为 `0`，被认为是空。类似的，map（映射）和set 的`size` 为 `0`，被认为是空。

#### 添加版本

1.0.3

#### 参数

1. `val` *(any)*: 待判断值。

#### 返回

*(boolean)*: 如果 `value` 为空，那么返回 `true`，否则返回 `false`。

#### 例子

```javascript
isEmpty([]))//true
isEmpty({}))//true
isEmpty(''))//true
isEmpty(null))//true
isEmpty(undefined))//true

isEmpty([1, 2]))//false
isEmpty({ a: 1, b: 2 }))//false
isEmpty('text'))//false
```
