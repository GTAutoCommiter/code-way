---
date: 2024-07-15T00:00:00.000Z
hide_title: true
title: dayDif
tags:
  - docs/jvtools/Time
---
<h3>
  <code>Time.dayDif(date1, date2)</code>
</h3>




计算两日期天数差

#### 添加版本

1.0.8

#### 参数

1. `date1` *(Date)*: 日期1。
1. `date2` *(Date)*: 日期2。



#### 返回

*(number)*: 天数差。

#### 例子

```javascript
Time.dayDif('2024-07-14','2024-07-15')
//=> 1

Time.dayDif('2024.07.14','2024.07.16')
//=> 2
```
