---
id: react-source-code-createElement
slug: /react-source-code-createElement
title: createElement
date: 2024-07-08T00:00:00.000Z
tags:
  - react/源码阅读
---

## `createElement(type,config, children)` 

### 参数

`type`：元素类型

`config`：配置属性

`children`：子元素

### 行为

1. 分类props 属性和特殊属性
2. 将子元素挂载到props.children中
3. 为props属性赋默认值（defaultProps）
4. 创建并返回ReactElement

```javascript
/*
propName=>属性名称
用于后面的for循环
*/
let propName;

/*
存储React Element 中的普通元素属性 
即不包含key、ref、self、source
*/
const props = {};

let key = null;
let ref = null;
```

### 分类props 属性和特殊属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-2.jfif)

### 将子元素挂载到props.children中

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-3.jfif)

### 为props属性赋默认值（defaultProps）

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-4.jfif)

### 创建并返回ReactElement

element属性

````javascript
element = {
  /*
    组件的类型，十六进制数值hove Symbol值
    React 在最终渲染DOM的时候，需要确保元素的类型是 REACT_ELEMENT_TYPE
    需要此属性作为条件判断的依据
  */
  $$typeof: REACT_ELEMENT_TYPE,

  /*
    元素具体的类型值 如果是元素节点 type 属性中存储的就是 div、span等等
    如果元素是组件 type 属性中存储的就是组件的构造函数
  */
  type,
  /*
    元素的唯一标识
    用作内部 vdom 对比 提升 操作性能
  */
  key,
  /*
    存储元素Dom对象或者数组组件 实例对象
  */
  ref,
  /*
    存储向组件内部传递的数据
  */
  props,
  /*
   记录当前元素所属组件（记录当前元素是哪个组件创建的）
  */
  _owner: owner,
};
````

# 检测开发者是否使用错误的props

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-5.jfif)

## defineKeyPropWarningGetter

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-6.jfif)

## defineRefPropWarningGetter

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-7.jfif)



