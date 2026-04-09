---
id: javascript-should-know-instanceof
slug: /javascript-should-know-instanceof
title: '== vs ===, typeof vs instanceof'
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---

# 相等性判断

## Q：能干嘛？

* A：
  * 检查一个变量是否存在，是否有值。
  * 判断一个变量是否是函数。

## Q：宽松相等（==）的特点是什么？

* A：

  ````javascript
  NaN!=NaN
  -0==+0
  ````

## Q：严格相等（===）与宽松相等有何异同？

* A：
  * 同：与双等号相同（包括对 `NaN`、`-0` 和 `+0` 的特殊处理）
  * 异：严格相等，不进行类型转换。

## Q：严格相等与宽松相等比对流程是怎样的？

* A：
  * 严格相等：比对两个值的类型和值
  * 宽松相等：
    1. 先进行类型转换
    2. 再比较值

### 详细流程

````javascript
/*注释
Type(x) : 获取x的类型
ToNumber(x) : 将x转换为Number类型
ToBoolean(x) : 将x转换为Boolean类型
ToString(x) : 将x转换为String类型
SameValueNonNumber(x,y) : 计算非数字类型x,y是否相同
ToPrimitive(x) : 将x转换为原始值。*/
````

> 严格相等

- 如果Type(x)和Type(y)不同，返回false
- 如果Type(x)和Type(y)相同
  - 如果Type(x)是`Undefined`，返回true
  - 如果Type(x)是`Null`，返回true
  - 如果Type(x)是`String`，当且仅当x,y字符序列完全相同（长度相同，每个位置上的字符也相同）时返回true，否则返回false
  - 如果Type(x)是`Boolean`，如果x,y都是true或x,y都是false返回true，否则返回false
  - 如果Type(x)是`Symbol`，如果x,y是相同的Symbol值，返回true,否则返回false
  - 如果Type(x)是`Number`类型
    - 如果x是`NaN`，返回false
    - 如果y是`NaN`，返回false
    - 如果x的数字值和y相等，返回true
    - 如果x是+0，y是-0，返回true
    - 如果x是-0，y是+0，返回true
    - 其他返回false

> 宽松相等

* 如果Type(x)和Type(y)相同，返回x===y的结果

* 如果Type(x)和Type(y)不同

  - 如果x是null，y是undefined，返回true

  - 如果x是undefined，y是null，返回true

  - 如果Type(x)是Number，Type(y)是String，返回 x==ToNumber(y) 的结果

  - 如果Type(x)是String，Type(y)是Number，返回 ToNumber(x)==y 的结果

  - 如果Type(x)是Boolean，返回 ToNumber(x)==y 的结果

  - 如果Type(y)是Boolean，返回 x==ToNumber(y) 的结果
  - 如果Type(x)是String或Number或Symbol中的一种并且Type(y)是Object，返回 x==ToPrimitive(y) 的结果

  - 如果Type(x)是Object并且Type(y)是String或Number或Symbol中的一种，返回 ToPrimitive(x)==y 的结果

  - 其他返回false

## Q：为什么typeof null 会被当作对象？

* A：因为js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息。`null`存储所有机器码均为0，而对象存储的机械码为000

# typeof

## Q：typeof不能区分的类型？

* A：

  1. null与其他对象

     ````javascript
     typeof null //object
     typeof {}   //object
     typeof [1,2,3] //object
     ````

  2. 数与NAN、数与Infinity

     ````javascript
     typeof 37 //number
     typeof NaN //number
     typeof Infinity //number
     ````

  3. Undefined与未声明变量

     ````javascript
     typeof undefined //undefined
     typeof test//undefined
     ````

# instanceof

## Q：能干嘛？

* A：用来判断某个构造函数的prototype属性**是否存在于另外一个**要检测对象**的原型链上**。

## Q：运算（原理）规则是啥？

* A：`instanceof` 检测左侧的 `__proto__` 原型链上，是否存在右侧的 `prototype` 原型。

  ````javascript
  function new_instance_of(leftVaule, rightVaule) { 
      let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
      leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
      while (true) {
      	if (leftVaule === null) {
              return false;	
          }
          if (leftVaule === rightProto) {
              return true;	
          } 
          leftVaule = leftVaule.__proto__ 
      }
  }
  ````

## Q：具体使用场景有哪些？

* A：

  * 判断一个数据具体是哪一种 object 

  * 判断一个实例是否是其父类型或者祖先类型的实例。

    ````javascript
    let person = function () {
    }
    let programmer = function () {
    }
    programmer.prototype = new person()
    let nicole = new programmer()
    nicole instanceof person // true
    nicole instanceof programmer // true
    ````

    
