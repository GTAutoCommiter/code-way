---
id: javascript-jsChallenger-obj-note
slug: /javascript-jsChallenger-obj-note
title: Object对象
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JSchallenger
---

# 前言

【笔记内容】

- 关于JSchallenger中Object对象题目的复盘
- 本人的提交、以及做题时的思路
- 分析作者答案
- 涉及的知识快速了解，==注意：并不深入分析具体知识，只是围绕题目展开==



【笔记目的】

- 帮助本人进一步了解Javascript的Object对象以及涉及的方法
- 对自己做题后的复盘，进一步了解自己的不足之处



【相关资源】

- [JSchallenger](https://www.jschallenger.com/javascript-objects)



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。
- 若是有其他的解题方法也请读者分享到评论区，一起学习，共同进步，谢谢。
- 我的提交有不足之处也恳请读者帮忙指出，不吝赐教，谢谢。

------



# Object对象快速了解

## 啥是Object对象

* 是 JavaScript 的一种数据类型 。
* 用于存储各种键值集合和更复杂的实体。
* 在JavaScript中，几乎所有的对象都是`Object`类型的实例。



> 常见操作

| 方法         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| Object()     | 创建一个新的 `Object` 对象。                                 |
| obj.assign() | 通过复制一个或多个对象来创建一个新的对象。                   |
| obj.create() | 使用指定的原型对象和属性创建一个新对象。                     |
| obj.is()     | 比较两个值是否相同。所有 NaN 值都相等（这与`==`和`===`不同）。 |
| obj.keys()   | 返回对象**自身**属性名称的数组。                             |
| obj.values() | 返回对象自身键值的数组。                                     |

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)



# Javascript Objects（对象）

## Accessing object properties one

> 需求：
>
> Write a function that takes an object with two properties as argument
>
> It should return the value of the property with key country

**我的提交（作者答案）**

```javascript
function myFunction(obj){
	return obj.country;
}
```



### 涉及知识（获取对象键值方法）

#### 获取对象键值方法

> 方法一：通过`.`方式获取键值（key是静态的）

*示例：*

````javascript
var obj={name:"lao",country:"china"};
console.log(obj.name);	//输出lao
console.log(obj.country);	//输出china;
````

> 方法二：通过`[]`获取键值（key是动态的，可以是字符串、数字）

*示例：*

````javascript
var obj={"man":3,"women":2}
var obj2={1:"ironman",2:"nobody"}
console.log(obj["man"]);	//输出3
//注意obj2[1]仍是对象，不是数组
console.log(obj2[1]);	//输出ironman
````



## Accessing object properties two

> 需求：
>
> Write a function that takes an object with two properties as argument
>
> It should return the value of the property with key 'prop-2'
>
> Tipp: you might want to use the square brackets property accessor

**我的提交（作者答案）**

```javascript
function myFunction(obj) {
  return obj['prop-2']
}
```



### 涉及知识（获取对象键值方法）

#### 获取对象键值方法

[点击此处跳转](#获取对象键值方法)



## Accessing object properties three

> 需求：
>
> Write a function that takes an object with two properties and a string as arguments
>
> It should return the value of the property with key equal to the value of the string

**我的提交（作者答案）**

```javascript
function myFunction(obj, key) {
  return obj[key]
}
```



### 涉及知识（获取对象键值方法）

#### 获取对象键值方法

[点击此处跳转](#获取对象键值方法)



## Check if property exists in object

> 需求：
>
> Write a function that takes an object (a) and a string (b) as argument
>
> Return true if a has a property with key b
>
> Return false otherwise

**我的提交**

```javascript
function myFunction(a, b) {
   return a.hasOwnProperty(b);
}
```

**作者答案**】

```javascript
function myFunction(a, b) {
   return b in a;
}
```



### 涉及知识（Object.hasOwnProperty()方法、key in Object方法）



## Creating Javascript objects one

> 需求：
>
> Write a function that a string (a) as argument
>
> Create an object that has a property with key 'key' and a value of a
>
> Return the object

**我的提交**

```javascript
function myFunction(a) {
   var obj={key:a};
   return obj;
}
```

**作者答案**

```javascript
function myFunction(a) {
   return { key: a };
}
```



## Extract keys from Javascript object

> 需求：
>
> Write a function that takes an object (a) as argument
>
> Return an array with all object keys

**我的提交（作者答案）**

```javascript
function myFunction(a) {
   return Object.keys(a);
}
```



## Sum object values

> 需求:
>
> Write a function that takes an object (a) as argument
>
> Return the sum of all object values

**我的提交**

```javascript
function myFunction(a) {
   var sum=0;
   for(key in a){
      sum+=a[key]
   }
   return sum;
}
```

**作者答案**

```javascript
function myFunction(a) {
   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
```



## Remove a property from an object

> 需求：
>
> Write a function that takes an object as argument
>
> It should return an object with all original object properties
>
> except for the property with key 'b'

**我的提交**

```javascript
function myFunction(obj) {
   delete obj.b;
   return obj;
}
```

**作者答案**

```javascript
function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}
```



## Merge two objects with matching keys

> 需求：
>
> Write a function that takes two objects as arguments
>
> Unfortunately, the property 'b' in the second object has the wrong key
>
> It should be named 'd' instead
>
> Merge both objects and correct the wrong property name
>
> Return the resulting object
>
> It should have the properties 'a', 'b', 'c', 'd', and 'e'

**我的提交**

```javascript
function myFunction(x, y) {
   y['d']=y.b;
   delete y.b;
   return Object.assign(x,y);
}
```

**作者答案**

```javascript
function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
```



## Swap object keys and values

> 需求：
>
> Write a function that takes an object as argument
>
> Somehow, the properties and keys of the object got mixed up
>
> Swap the Javascript object's key with its values and return the resulting object

**我的提交**

```javascript
function myFunction(obj) {
   for(let i in obj){
   let a = obj[i];
   obj[a]= i;
   delete obj[i];
   }
   return obj;
}
```

**作者答案**

```javascript
function myFunction(obj) {
   return Object.entries(obj).reduce((acc, [key, val]) => {
      return { ...acc, [val]: key };
   }, {});
}
```



# 结语

