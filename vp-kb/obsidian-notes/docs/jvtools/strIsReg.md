---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: strIsReg
tags:
  - docs/jvtools
---
<h3>
  <code>strIsReg(str)</code>
</h3>


判断字符串是否是正则表达式

#### 添加版本

1.0.6

#### 参数

1. `str` *(string)*: 需要判断的字符串。

#### 返回

*(boolean)*: 若字符串为正则表达式字符串则返回`true`,否则返回`false`。

#### 例子

```javascript
strIsReg('/\d{5,10}/') //true

strIsReg('\d{5,10}') //false
```
