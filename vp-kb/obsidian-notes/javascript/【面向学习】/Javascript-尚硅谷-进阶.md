---
id: javascript-shangguigu-jinjie
slug: /javascript-shangguigu-jinjie
title: 【尚硅谷】JavaScript高级教程(javascript实战进阶)
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---

# 前言

【内容】



【目的】



【学习资源】

* [尚硅谷JavaScript高级教程(javascript实战进阶)](https://www.bilibili.com/video/BV14s411E7qf?p=1)

---



# 基础总结深入

## 数据类型

### 分类

![1653354487487](D:\Data\9_Typora图片缓存\1653354487487.png)

### 判断

> `typeof`

* 返回数据类型的字符串表达

* 可判断类型
  * `undefined`、数值、字符串、布尔值、`function`

【==注意==】

* 返回值都设置为小写的字符串

  * 判断比较时，注意设置为**小写的类型字符串**

  ````javascript
  a='this is a String'
  console.log(typeof a==='string');	//显示true
  console.log(typeof a==='String');	//显示false
  ````

* 无法判断`unll`与`object`、`object`与`array`

  【解释】

  ````javascript
  var a=null;
  console.log(typeof a);	//返回'object'	说明typeof不能区别null与object
  /*
  b1是objcet对象
  b2是Array数组对象
  b3是function函数
  */
  var b1={
      b2:[1,'abc',console.log],
      b3:function(){
          console.log('b3');
          return function(){
              return "lao"
          }
      }
  }
  console.log(typeof b1.b2);	//返回'object'	说明typeof不能区别object和array
  ````

  【==注意==】

  * 不要拘泥于表面，要观察自己得到的是哪一类型的数据

    【示例】（代码同上）

    ````javascript
    console.log(b1.b2[2]==='function');	//返回ture	说明此时b1.b2[2]并不是所单纯的调用数组，而是调用数组中的函数。
    
    //相反，要输出b1对象的b3函数中的函数	来输出字符串'lao'
    console.log(typeof b1.b3()());
    ````



> `instanceof`

* 判断对象的具体类型

* A `instanceof` B：A是B的实例对象。

  【拓展】**什么是实例对象？**

  * 根据类型创建的实例对象

    ````javascript
    //实例：实例对象
    //类型：类型对象
    function Person(name,age){	//构造函数	类型
        this.name = name;
        this.age = age;
    }
    var p = new Person('lao',21);	//根据类型创建的实例对象
    ````

* 返回值是`boolean`值



>`===`

* 可判断类型

  * `undefined`、`null`

    【解释】应为这两个类型只有一个值（就是它本身）



### 相关问题

#### `undefined`与`null`的区别？（==面试常问==）

| `undefined` |            `null`            |
| :---------: | :--------------------------: |
| 定义未赋值  | 定义并赋值了，只是值为`null` |



#### 什么时候给变量赋值为`null`呢？

> 初始赋值，表明将要赋值为对象

【示例】

````javascript
var object=null;
````

> 结束前，让对象成为对象垃圾（被垃圾回收器回收）

【示例】

````javascript
//起始
var b=null;		//初始赋值为null,表明将要赋值为对象
//确定对象就赋值
b=['lao',21];	
//最后
b=null;	//让对象成为对象垃圾（被垃圾回收器回收）
````



#### 严格区别变量类型与数据类型？（了解即可）

* 数据的类型
  * 基本类型
  * 对象类型
* 变量的类型（变量内存值的类型）
  * 基本类型：保存就是基本类型的数据
  * 引用类型：保存的是地址值



## 数据、变量、内存

### 什么是数据？

* 存储在内存中代表特定信息的“东东”，本质上是0101…（机械码）
* 数据的特点：
  * 可传递
  * 可运算
* 一切皆数据
* 内存中所有操作的目标：数据 
  * 算数运算 
  * 逻辑运算 
  * 赋值运算
  * 运行函数



### 什么是内存？

* 内存条通电以后产生的可存储数据的空间（临时的）

* 内存产生和死亡:

  > 内存条（电路版）==> 通电 ==> 产生内存空间 ==> 存储数据 ==> 处理数据 ==> 断电 ==> 内存空间和数据都消失

* 一块小内存的2给数据

  * 内部存储的数据
  * 地址值

* 内存分类

  * 栈：全局变量/局部变量
  * 堆：对象



### 什么是变量？

* 可变化的量，由变量名和变量值组成
* 每个变量都对应的一块小内存，变量名用来查找到对应的内存，变量值就是内存中保留的数据



### 三者之间的关系?

* 内存用来存储数据的空间
* 变量是内存的标识



# 函数高级



# 面向对象高级



# 结语

【感谢】

