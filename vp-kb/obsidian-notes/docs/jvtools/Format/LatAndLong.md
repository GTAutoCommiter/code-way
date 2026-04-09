---
date: 2024-08-09T00:00:00.000Z
hide_title: true
title: LatAndLong
tags:
  - docs/jvtools/Format
---
<h3>
  <code>Format.LatAndLong(lat, long)</code>
</h3>

检查并得到正确的经纬度


#### 添加版本

1.0.9

#### 参数

1. `lat` *(String)*: 经度。
2. `long`*(String)*: 纬度。

#### 返回

*(object)*:`{lat,long}`

#### 例子

```javascript
const [lat, long] = '22.313000,113.940720'.split(',');

Format.LatAndLong(lat, long)
// => {lat:22.313000,long:113.940720}
 
Format.LatAndLong(long, lat)
// => {lat:22.313000,long:113.940720}
```
