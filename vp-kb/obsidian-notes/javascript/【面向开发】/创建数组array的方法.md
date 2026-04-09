---
id: javascript-dev-createArrayFunction
slug: /javascript-dev-createArrayFunction
title: 创建数组array的方法
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向开发】
---
创建数组

* 方法一：构造函数创建数组

  ````javascript
  let array =new Array();
  //创建指定长度数组
  let array2 = new Array(20)//创建初始长度为20的数组
  //创建指定元素数组
  let array3 = new Array(["one","two","three"])
  ````

  > PS：构造函数中两个用于创建数组的静态方法【ES6】
  >
  > * Array.from();
  >
  >   * 将**类数组结构**转换为数组实例
  >
  >     1. 字符串，拆成单个字符构成数组
  >
  >        ````javascript
  >        Array.from("Lao")//["L","a","o"];
  >        ````
  >
  >     2. Map，每set一次，构成一个数组元素。
  >
  >        ````javascript
  >        const m=new Map().set(1,2).set(3,4);
  >        Array.from(m);//[[1,2],[3,4]];
  >        ````
  >
  >     3. Set，每add一次，构成一个数组元素
  >
  >        ````javascript
  >        const s=new Set().add(1).add(2).add(3).add(4);
  >        Array.from(s);//[1,2,3,4];
  >        ````
  >
  >     4. 可迭代对象转数组
  >
  >        ````javascript
  >        const iter={
  >          *[Symbol.iterator](){
  >            yield 1;
  >            yield 2;
  >            yield 3;
  >            yield 4;
  >          }
  >        }
  >        Array.from(iter);//[1,2,3,4]
  >        ````
  >
  >     5. arguments对象转数组
  >
  >        ````javascript
  >        function getArgsArray(){
  >          return Array.form(arguments);
  >        }
  >        getArgsArray(1,2,3,4)//[1,2,3,4];
  >        ````
  >
  >     6. 带有必要属性的自定对象转数组
  >
  >        ````javascript
  >        const object(={
  >          0:1,
  >          1:2,
  >          2:3,
  >          3:4,
  >        }
  >        Array.from(object)//[1,2,3,4]
  >        ````
  >
  >   * Array.from()带参数用法
  >
  >     【语法】
  >
  >     ````javascript
  >     Array.from(arrary,function(){},object);
  >     ````
  >
  >     `array`：需要映射的数组
  >
  >     `funciton`：映射函数
  >
  >     `object`：映射函数中this的值
  >
  >     【示例】
  >
  >     ````javascript
  >     const a1=[1,2,3,4];
  >     //只用两个参数
  >     const a2=Arrray.from(a1,x=> x**2);//[1,4,9,16];
  >     //使用三个参数
  >     const a4=Array.from(a1,function(){
  >       return x** this.exponent;
  >     },{exponent:2})//[1,4,9,16]
  >     ````
  >
  > * Array.to();
  >
  >   * 将一组**参数**转换为数组实例
  >
  >     ````javascript
  >     Array.of(1,2,3,4,undefined)//[1,2,3,4,undefined]
  >     ````
  >
  >     

* 方法二：数组字面量表示法

  ````javascript
  let array=["one","two","three"];
  let array2=["1","2",]//创建包含两个元素的数组
  ````

  > PS：数字字面量表示法创建数组不会调用Array构造函数。



