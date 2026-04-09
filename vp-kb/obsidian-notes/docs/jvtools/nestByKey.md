---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: nestByKey
tags:
  - docs/jvtools
---
<h3>
  <code>nestByKey(items, [id = null, link = 'parentId'])</code>
</h3>
构建树形结构

#### 添加版本

1.0.3

#### 参数

1. `items` *(Object)*: 目标对象。
1. `[id=null]`*(string)*: 
1. `[link='parentId']`:*(string)*: 

#### 返回

*(Array`<Object>`)*: 树形结构对象。

#### 例子

```javascript
 const comments = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 4 }
  ];
const res=nestByKey(comments)
console.log(res);
/*
  [
      {
        id: 1,
        parentId: null,
        children: [
          {
            id: 2,
            parentId: 1,
            children: [
              {
                id: 4,
                parentId: 2,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            parentId: 1,
            children: []
          }
        ]
      }
    ]
*/
```
