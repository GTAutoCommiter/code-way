---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: debounce
tags:
  - docs/jvtools
---
<h3>
  <code>debounce(fun, wait)</code>
</h3>
创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。

#### 添加版本

1.0.3

#### 参数

1. `func` *(Function)*: 要防抖动的函数。
2. `[wait=0]` *(number)*: 需要延迟的毫秒数。

#### 返回

*(Function)*: 返回新的 debounced（防抖动）函数。

#### 例子

```javascript
// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
```
