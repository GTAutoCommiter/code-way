---
date: 2024-07-15T00:00:00.000Z
hide_title: true
title: calcDistance
tags:
  - docs/jvtools
---
<h3>
  <code>calcDistance(loc1, loc2, [splitStr = ',']）</code>
</h3>


获取两经纬度距离

#### 添加版本

1.0.8

#### 参数

1. `loc1` *(Array|string)*: 地方1的经纬度。
2. `loc2` *(Array|string)*: 地方2的经纬度。
3. `[splitStr=',']` *(String)*: 分割经纬度字符。

> 支持经纬度格式
>
> ````javascript
> [lng,lat]
> "lng,lat"
> "lng${splitStr}lat"
> ````

#### 返回

*(number)*: 两地距离

#### 例子

```javascript
// 格式1
const from = [113.934596, 22.291736];
const to = [114.033422, 22.205958];
calcDistance(from, to)
//=>13944.321599685663

// 格式2
const from = `113.934596, 22.291736`;
const to = `114.033422, 22.205958`;
calcDistance(from, to)
//=>13944.321599685663

// 格式3
const from = `113.934596-22.291736`;
const to = `114.033422-22.205958`;
calcDistance(from, to)
//=>13944.321599685663
```
