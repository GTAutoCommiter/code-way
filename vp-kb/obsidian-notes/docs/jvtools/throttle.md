---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: throttle
tags:
  - docs/jvtools
---
<h3>
  <code>throttle(fun, wait)</code>
</h3>

创建一个节流函数，在 wait 秒内最多执行 `func` 一次的函数。

#### 添加版本

1.0.3

#### 参数

1. `func` *(Function)*: 要节流的函数。
2. `[wait=0]` *(number)*: 需要延迟的毫秒数。

#### 返回

*(Function)*: 返回新的 throttle（节流）函数。

#### 例子

```javascript
jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// 取消一个 trailing 的节流调用。
jQuery(window).on('popstate', throttled.cancel);
```
