---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: deleteByPath
tags:
  - docs/jvtools
---
<h3>
  <code>deleteByPath(obj, path, [splitStr='.'])</code>
</h3>

删除指定路径的键值对

#### 添加版本

1.0.5

#### 参数

1. `obj` *(Object)*: 对象源。
2. `path` *(Array|String)* 指定删除路径。
3. `[splitStr='.']` *(String)*: 分割路径字符。

#### 返回

*(Object)*: 删除指定键值对的对象。

#### 例子

```javascript
const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: {
    e: 1,
    f: 2,
    g: {
      h: 1,
    }
  }
};
const test = JSON.parse(JSON.stringify(obj));
delete test.a

const res=deleteByPath(obj, ['a'])
console.log(JSON.stringly(res) === JSON.stringly(test);
//=>true
            
/*还可以这样使用
deleteByPath(obj, ['d', 'e'])
deleteByPath(obj, 'd-e', '-')
等同于 delete obj.d.e

deleteByPath(obj, 'd.g.h')
等同于 delete obj.d.g.h
*/
```
