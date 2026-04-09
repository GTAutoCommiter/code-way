---
date: 2024-07-01T00:00:00.000Z
hide_title: true
title: isDateValid
tags:
  - docs/jvtools/Time
---
<h3>
  <code>Time.isDateValid(...args)</code>
</h3>




检查日期是否有效

#### 添加版本

1.0.7

#### 参数

1. `...args` *(any)*：待判断值 

#### 返回

*(Boolean)*: 若日期有效返回`true`，否则返回`false`。

#### 例子

```javascript
isDateValid('December 17, 1995 03:24:00') 
//=> true
isDateValid('1995-12-17T03:24:00') 
//=> true
isDateValid('1995-12-17 T03:24:00') 
//=> false
isDateValid('Duck') 
//=> false
isDateValid(1995, 11, 17) 
//=> true
isDateValid(1995, 11, 17, 'Duck') 
//=> false
isDateValid({}) 
//=> false
```
