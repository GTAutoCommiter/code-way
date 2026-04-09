---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: numFixed
tags:
  - docs/jvtools
---
<h3>
  <code>numFixed(num, [precision = 2])</code>
</h3>
指定小数位进行四舍五入

#### 添加版本

1.0.7

#### 参数

1. `num` *(number)*: 数值。
2. `[precision=2]`*(number)*: 精度

#### 返回

*(number)*: 小数位四舍五入的数

#### 例子

```javascript
numFixed(1.335, 2)
//=> 1.34
```
