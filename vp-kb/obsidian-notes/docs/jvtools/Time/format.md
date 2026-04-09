---
date: 2024-07-01T00:00:00.000Z
hide_title: true
title: format
tags:
  - docs/jvtools/Time
---
<h3>
  <code>Time.format(date, [formatStr = 'YYYY-MM-DD HH:mm:ss'])</code>
</h3>



日期对象格式化

#### 添加版本

1.0.7

#### 参数

1. `date` *(Date)*: 目标日期。
1. `[formatStr = 'YYYY-MM-DD HH:mm:ss']`：格式字符串
   * Y｜y-年
   * M-月
   * D-日
   * H-小时
   * m-分钟
   * s-秒

#### 返回

*(string)*: 字符串。

#### 例子

```javascript
Time.format('2024-06-20', 'YYYY-MM-DD')
//=>'2024-06-20'

Time.format('2024-06-20', 'yyyy-MM-DD')
//=>'2024-06-20'
```
