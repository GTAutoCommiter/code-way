---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: getWeekDay
tags:
  - docs/jvtools/Time
---
<h3>
  <code>Time.getWeekDay(date, [prefix = "星期"])</code>
</h3>


日期转换星期

#### 添加版本

1.0.7

#### 参数

1. `date` *(Date)*: 目标日期。
1. `[prefix='星期']`:前缀。

#### 返回

*(string)*: 星期字符串。

#### 例子

```javascript
Time.getWeekDay('2024-06-20')
//=>'星期四'

Time.getWeekDay('2024-06-20', '周')
//=>'周四'
```
