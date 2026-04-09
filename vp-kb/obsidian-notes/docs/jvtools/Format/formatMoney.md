---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: formatMoney
tags:
  - docs/jvtools/Format
---
<h3>
  <code>Format.formatMoney(money, [symbol = "", decimals = 2])</code>
</h3>
格式化价格


#### 添加版本

1.0.3

#### 参数

1. `money` *(Number)*: 价格。
2. `[symbol = ""]`*(String)*: 符号。
3. `[decimals = 2]` *(Number)*: 保留小数 。

#### 返回

*(String)*: 格式化后的价格。

#### 例子

```javascript
Format.formatMoney(12341234.246)
// => '12,341,234.25'
 
Format.formatMoney(12341234.246, '$')
//=> '$12,341,234.25'
 
Format.formatMoney(12341234.246, '$', 1)
// => '$12,341,234.2'
```
