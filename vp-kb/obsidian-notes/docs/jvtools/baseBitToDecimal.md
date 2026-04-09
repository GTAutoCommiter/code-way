---
date: 2024-08-09T00:00:00.000Z
hide_title: true
title: baseBitToDecimal
tags:
  - docs/jvtools
---
<h3>
  <code>baseBitToDecimal(str, bit = 10)</code>
</h3>


不定进制转十进制

#### 引入版本

1.0.9

#### 参数

1. `str` *(string)*: 任意进制字符值
2. `bit` *(number)*: 需要比较的数组

#### 返回

*(number)*:十进制数值。

#### 例子

````javascript
baseBitToDecimal('1')
//=>1

baseBitToDecimal('10', 2)
//=>2

baseBitToDecimal('110', 2))
//=>6

baseBitToDecimal('1a', 62)
//=>72

baseBitToDecimal('1c', 62)
//=>74
````

