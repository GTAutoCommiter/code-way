---
id: javascript-dev-createObjFunctions
slug: /javascript-dev-createObjFunctions
title: 对象Object的创建和定义属性的方法
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向开发】
---
# 创建对象

> 方法一：构造函数创建对象

````javascript
let myObject=new Object();
myObject.name="Lao";  //为对象定义属性
myObject.sayHi=function(){
  console.log("Hi");
}//为对象添加方法
````

> 方法二：对象字面量表示法创建对象

````javascript
let myObject={
  name:"lao",
  sayHi:function(){
    console.log("Hi")
  }
}
````

# 访问对象属性

> 方法一：点语法

````javascript
myObject.name;//lao
````

> 方法二：方括号

````javascript
let key="name";
myObject[key]; //lao	
````

# 使用不同模式创建对象

## 工厂模式

````javascript
fuction createPerson(name,age,obj){
  let o =new Object();
  o.name=name;
  o.age=age;
  o.job=job;
  o.sayName=function(){
    console.log(this.name);
  };
  return o;
}

let person1=createPerson("lao",22,"Software Engineer");
let person2=createPerson("Jia",21,"FrontEnd Engineer");
````

* 优点：
  1. 调用时，只需要传入对应的值，就可以自动生成对象
  2. 屏蔽对象创建的具体实现，只需关心接口传入的参数即可。
* 缺点：
  1. 只能产生一样数据模型的对象，若要产生新的数据模型对象，需要添加具体类和对象的实现工厂。
  2. 没有结局对象标识符问题（即新创建的对象是什么类型）（即两个实例中的construtor没有指向）

## 构造函数模式

> PS：构造函数名称的首字母都是要大写的

方法一：【函数声明形式】的【构造函数模式】

````javascript
function Person(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.sayName=function(){
    console.log(this.name);
  }
}
let person1=new Person("Lao",22,"Software Engineer");
let person2=new Person("Jia",23,"frontEnd Engineer");
````

方法二：【函数表达式】的【构造函数模式】

````javascript
let Person=function(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.sayName=function(){
    console.log(this.name);
  }
}
let person1=new Person("Lao",22,"Software Engineer");
let person2=new Person("Jia",23,"frontEnd Engineer");
````

* 对比[工厂模式](# 工厂模式)

  * 特点：
    1. 没有显式地创建对象。（即没有在内部new Object）；
    2. 属性和方法直接赋值给this
    3. 没有return
    4. 使用new操作符创建对象示例

  * 优点：

    1. 实例都有constructor属性指向构造函数。

       ````javascript
       console.log(person1.constructor == Person);//true
       console.log(person2.constructor == Person);//true
       ````

  * 缺点：

    1. 定义的方法会在每个实例上都创建一遍。

       ````javascript
       function Person(name,age,job){
         this.name=name;
         this.age=age;
         this.job=job;
         this.sayName=new Function("console.log(this.name)"); //相当于重新实例了一个方法
       }
       console.log(person1.sayName == person2.sayName); // false
       ````

       【成为缺点的原因】

       * 都是做一样的事，所以没必要定义两个不同的 Function 实例 

       【解决方法】将函数定义转移到构造函外部

       ````javascript
       function Person(name,age,job){
         this.name=name;
         this.age=age;
         this.job=job;
         this.sayName=sayName;		//等于全局函数，属性包含的只是一个指向外部函数的指针。
       }
       
       function sayName(){
         console.log(this.name);
       }
       //person1和person2
       ````

       * 依旧存在的问题：
         1. 全局作用域被搞乱了
            * 对象需要多个方法，则需要在全局作用域中定义多个函数 
            * 导致自定义类型引用的代码不能很好地聚集一起 
       * 【解决办法】原型模式

## 原型模式

方法一：【函数声明形式】的【原型模式】

````javascript
function Person(){}

Person.prototype.name="Lao";
Person.prototype.age=22;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){
  console.log(this.name);
}

let person1 = new Person();
let person2 = new Person();
````

方法二：【函数表达式】的【原型模式】

````javascript
let Person=function(){}

Person.prototype.name="Lao";
Person.prototype.age=22;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){		//方法直接添加到对象的prototype属性上
  console.log(this.name);
}

let person1 = new Person();
let person2 = new Person();
````

* 对比[构造函数模式](# 构造函数模式)
  * 优点
    1. 原型模式定义的属性和方法是由所有实例共享的。（即访问的方法是同一个）
