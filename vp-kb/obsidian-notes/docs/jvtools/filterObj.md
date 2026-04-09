---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: filterObj
tags:
  - docs/jvtools
---
<h3>
  <code>filterObj.pick(obj,arr)</code>
</h3>

过滤对象中指定key

<h3>
  <code>filterObj.omit(obj,arr)</code>
</h3>
排除过滤对象中指定key

#### 添加版本

1.0.3

#### 参数

1. `obj` *(Object)*: 对象源。
2. `arr` *(Array)* 指定key路径。

#### 返回

*(Object)*: 删除指定键值对的对象。

#### 例子

```javascript
const obj = { a: 1, b: '2', c: 3 };

filterObj.pick(obj, ['a', 'c'])
//=>{ 'a': 1, 'c': 3 }

filterObj.omit(obj, ['b'])
//=>{ 'a': 1, 'c': 3 }
```
