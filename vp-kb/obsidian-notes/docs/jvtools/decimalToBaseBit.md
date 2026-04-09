---
date: 2024-08-09T00:00:00.000Z
hide_title: true
title: decimalToBaseBit
tags:
  - docs/jvtools
---
<h3>
  <code>decimalToBaseBit(decimal, bit = 10)</code>
</h3>

十进制转成指定进制

#### 引入版本

1.0.9

#### 参数

1. `decimal` *(string)*: 十进制值
2. `bit` *(number)*: 需要比较的数组

#### 返回

*(string)*:转换结果。

#### 例子

````javascript
decimalToBaseBit('1')
//=>'1'

decimalToBaseBit('2', 2)
//=>'10'

decimalToBaseBit('6', 2))
//=>'110'

decimalToBaseBit('72', 62)
//=>'1a'

decimalToBaseBit('74', 62)
//=>'1c'
````

