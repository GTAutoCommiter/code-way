---
id: javascript-jsChallenger-set-note
slug: /javascript-jsChallenger-set-note
title: Set对象
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JSchallenger
---
# 前言

【笔记内容】

* 关于JSchallenger中Set对象题目的复盘
* 本人的提交、以及做题时的思路
* 分析作者答案
* 涉及的知识快速了解，==注意：并不深入分析具体知识，只是围绕题目展开==



【笔记目的】

* 帮助本人进一步了解Javascript的Set对象以及涉及的方法

* 对自己做题后的复盘，进一步了解自己的不足之处



【相关资源】

* [JSchallenger](https://www.jschallenger.com/javascript-sets)



【==温馨提示==】

* 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。
* 若是有其他的解题方法也请读者分享到评论区，一起学习，共同进步，谢谢。
* 我的提交有不足之处也恳请读者帮忙指出，不吝赐教，谢谢。

---



# Set对象快速了解

## 什么是Set对象？

* 允许你存储任何类型的唯一值
* 是值的集合，Set中的元素只会**出现一次**，即 Set 中的元素是唯一的。
* 常见方法

|         方法名         |                             描述                             |
| :--------------------: | :----------------------------------------------------------: |
|         Set()          |                    创建一个新的`Set`对象                     |
|  Set.prototype.add()   |        在`Set`对象尾部添加一个元素。返回该`Set`对象。        |
| Set.prototype.clear()  |                 移除`Set`对象内的所有元素。                  |
|  Set.prototype.has()   | **has()** 方法返回一个布尔值来指示对应的值value是否存在Set对象中。 |
| Set.prototype.values() | 返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值 |

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)



# JSchallenger Javascript Sets

## Check if value is present in Set

> 需求：
>
> Write a function that takes a Set and a value as arguments
>
> Check if the value is present in the Set

**我的提交（作者答案）**

```javascript
function myFunction(set, val) {
    return set.has(val);
}
```



### 涉及知识（set.has()方法）

#### Set.prototype.has()

* 返回一个布尔值来指示对应的值value是否存在Set对象中。

> 格式

````javascript
mySet.has(value);
````

`value`（需要测试的值）：必须。用来判断该值是否存在Set对象中

**返回值**：

* 布尔值。
  * `true`：存在
  * `false`：不存在



## Convert a Set to Array

> 需求：
>
> Write a function that takes a Set as argument
>
> Convert the Set to an Array
>
> Return the Array

**我的提交**

```javascript
function myFunction(set) {
   return Array.from(set);
}
```

**作者答案**

```javascript
function myFunction(set) {
  return [...set];
}
```



### 涉及知识（Set对象与数组对象的相互转换、Array.from()方法、扩展运算符）

#### Set对象与数组对象的相互转换

##### 数组对象 ==>Set对象

````javascript
var arr=[1,2,3]
var set = new Set(arr);
````

##### Set对象 ==>数组对象

> Array.from()从`set`生成数组

````javascript
var set = new Set([1,2,3]);
var arr = Array.from(set);
````

> [ ]

`````javascript
var set = new Set([1,2,3]);
var arr = [...set];
`````

==PS：数组对象与Set对象的区别==

|          | Set对象 | 数组对象 |
| :------: | :-----: | :------: |
| **元素** |  唯一   |  可重复  |
| **数组** | 伪数组  | 真正数组 |



---

#### Array.from()方法

* 创建数组对象

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)



---

#### 扩展运算符

* 又称对象展开符，由`...`表示

* 用于取出参数对象所有可遍历属性然后拷贝到当前对象。

  ````javascript
  let person = {name: "Amy", age: 15};
  let someone = { ...person };
  someone;  //{name: "Amy", age: 15}
  ````

[了解更多](https://www.runoob.com/w3cnote/es6-object.html)



## Get union of two sets

> 需求：
>
> Write a function that takes two Sets as arguments
>
> Create the union of the two sets
>
> Return the result
>
> Tipp: try not to switch to Arrays, this would slow down your code

**我的提交**

```javascript
function myFunction(a, b) {
   return new Set([...a, ...b]);
}
```

**作者答案**

```javascript
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
```



### 涉及知识（拼接两个Set对象的方法、扩展运算符、forEach()方法、set.add()方法、箭头函数）

#### 拼接两个Set对象的方法

> 方法一：通过拓展运算符，合并两个伪数组

````javascript
var a=new Set([1,2,3]);
var b=new Set([4,5,6]);
var arr = new Set([...a,...b]);
````

> 方法二：通过循环将一个Set对象中元素添加到另一个Set对象中

具体实现正如上述作者答案，就不在赘述了。



---

#### 扩展运算符

* 可用于合并两个对象

  ````javascript
  let age = {age: 15};
  let name = {name: "Amy"};
  let person = {...age, ...name};
  person;  //{age: 15, name: "Amy"}
  ````

[点此了解更多](#扩展运算符)



---

#### forEach()方法

* 用于调用数组的每个元素，并将元素传递给回调函数。

> 格式（==注意该格式不完整，之针对本题的格式==）

````javascript
array.forEach(function(currentValue), thisValue)
````

`functuion(currentValue)`（数组中每个元素需要调用的函数）：必需

* `currentValue`（当前元素）:必需

`thisValue`：可选

* 传递给函数的值一般用 `this` 值。
* 如果这个参数为空， `undefined` 会传递给 `this` 值

**返回值**：`undefined`

[了解更多](https://www.runoob.com/jsref/jsref-foreach.html)



---

#### set.add()方法

* 用来向一个 `Set` 对象的**末尾**添加一个指定的值。

> 格式

````javascript
mySet.add(value);
````

`value`（需要添加到 `Set `对象的元素的值）：必需

**返回值**：`Set` 对象本身

==注意：不能添加重复的值==



---

#### 箭头函数

- 使函数表达式更简洁
- 更适用于那些本来需要匿名函数的地方
- 它不能用作构造函数

**格式：**

```javascript
(param1, param2, …, paramN) => expression
(param1, param2, …, paramN) => { statements }
//相当于：(param1, param2, …, paramN) =>{ return expression; }
```

`param`：参数

`expression`：表达式

|           其他格式            |                  前提                  |
| :---------------------------: | :------------------------------------: |
| `singleParam => { statements }` | 当**只有一个参数**时，圆括号是可选的： |
|     `() => { statements }`      | **没有参数**的函数应该写成一对圆括号。 |

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions)



## Creating Javascript Sets

> 需求：
>
> Write a function that takes three elements of any type as arguments
>
> Create a Set from those elements
>
> Return the result

**我的提交**

```javascript
function myFunction(a, b, c) {
   return new Set([a,b,c])
}
```

**作者答案**

```javascript
function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}
```



### 涉及知识（构建Set对象方法、set.add()方法）

#### 构建Set对象方法

> 格式

````javascript
var myset = new Set();

var myset = new Set(iterable);
````

`iterable`(可迭代对象)：数组或类数组对象

==【PS】**可迭代对象是什么？**==

就是可以**重复、改进、升级**的对象

具体可以看这篇博客[究竟什么是迭代？](https://www.jianshu.com/p/1a0b810e0a8b)。



---

#### set.add()方法

之前解释过就不再赘述了，[点击此处跳转](#set.add()方法)



## Delete element from Set

> 需求：
>
> Write a function that takes a Set and a value as argument
>
> If existing in the Set, remove the value from the Set
>
> Return the result

**我的提交（作者答案）**

```javascript
function myFunction(set, val) {
   set.delete(val);
   return set;
}
```



### 涉及知识（set.delete()方法）

#### set.delete()

* 可以从一个`Set`对象中删除指定的元素

> 语法

````javascript
mySet.delete(value);
````

`value`（将要删除的元素）

**返回值**：布尔值

* `true`：成功删除
* `false`：删除失败



## Add multiple elements to Set

> 需求：
>
> Write a function that takes a Set and an array as arguments
>
> If not already existing, add each element in the array to the Set
>
> Return the modified Set

**我的提交**

```javascript
function myFunction(set, arr) {
   const set1=new Set(arr);
   return new Set([...set,...set1]);
}
```

【不足之处】

* 需求要的是一个modified Set（修改过的Set）对象（即在原来的Set对象上修改），而不是新的Set对象。

**作者答案**

```javascript
function myFunction(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}
```



### 涉及知识（数组与Set对象拼接思路）

#### 数组与Set对象拼接思路

> 思路一：

1、构建一个以数组元素为元素的`Set`对象

2、两个Set对象拼接

> 思路二：

用[set.add()方法](#set.add()方法)将数组元素一个加到`Set`对象中。



## Get Intersection of two Javascript Sets

> 需求：
>
> Write a function that takes two sets (a and b) as arguments
>
> Get the intersection of the sets
>
> In other words, return a set containing all elements that are both in a as well as b

**我的提交**

```javascript
function myFunction(a, b) {
   return new Set([...a].filter(item=>b.has(item)));
}
```

**作者答案**

```javascript
function myFunction(a, b) {
  const int = new Set();
  a.forEach(el => b.has(el) && int.add(el));
  return int;
}
```



### 涉及知识（array.filter()方法、Set对象取交集思路）

#### array.filter()方法

* 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

# 结语

【创作背景】

​        偶然在抖音上刷到JSchallenger这个可以训练Javascript基础的网站，自己在完成所有的Schallenger题之后，想要通过博客来记录自己的做题痕迹，以便日后快速回顾。原本打算把JSchallenger的所有题目以及分析整理成一篇博客发出来，但是我整理完后发现，已经快有1w多字，为了方便读者已经自己的观看，因此打算按照JSchallenger的板块分开发布。



【感谢】

 ***感谢各位读者能看到最后!!!***
