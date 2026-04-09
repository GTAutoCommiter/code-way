---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: arrayIsEqual
tags:
  - docs/jvtools
---
<h3>
  <code>arrayIsEqual(arr1,arr2)</code>
</h3>
数组与数组进行比较，判断是否相等

#### 引入版本

1.0.e

#### 参数

1. `arr1` *(Array)*: 需要比较的数组
2. `arr2` *(Array)*: 需要比较的数组

#### 返回

*(boolean)*: 如果 `arr1` 与`arr2`元素相等，那么返回 `true`，否则返回 `false`。

#### 例子

````javascript
arrayIsEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
//=>true

arrayIsEqual([1, 2, 3, 4, '5'], [1, 2, 3, 4, 5])
//=>false

arrayIsEqual([null, undefined, NaN], [null, undefined, NaN])
//=>true
````

