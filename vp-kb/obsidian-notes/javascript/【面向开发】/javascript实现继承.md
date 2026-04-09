---
id: javascript-dev-implementationInheritance
slug: /javascript-dev-implementationInheritance
title: javascript实现继承
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向开发】
---
javascript如何实现继承？

# 【什么是继承？】

* 子类拥有父类的***特征***和***行为***

  > * 特征==属性
  > * 行为==方法

# 【怎么做？】

````javascript
//父类
function Person(name){//给构造函数添加了参数
    this.name = name;
    this.msg = function(){
        alert(this.name);
    }
}
Person.prototype.age = 10;//给构造函数添加了原型属性
````

## 方法一：原型链继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230524-2.jpg)

==步骤1：创建一个子类，并把子类的原型对象指向父类的实例**（关键点）**==

````javascript
//创建子类
function Sub(){
    this.name = 'roy';
}
//子类的原型对象指向父类实例
Sub.prototype = new Person();
````

步骤2：创建子类实例，此时子类实例已经完成继承

````javascript
var sub1 = new Sub();
````

步骤3：验证是否继承成功（其实真正实现继承仅上面两步即可，这一步属于调用父类，检验是否继承成功）

````javascript
console.log(sub1.age);//10
//instanceof 判断元素是否在另一个元素的原型链上
//sub1继承了Person的属性，返回true
console.log(sub1 instanceof Person);//true
````

【分析】

* 优点
  * 实现了继承
    * √  实例的构造函数的属性（即子类的构造函数属性）
    * √  父类的构造函数的属性
    * √  父类原型的属性
* 缺点
  * 新实例无法向父类构造函数传参
    * 【原因】步骤二时，是通过子类来创建新实例，而不是通过父类创建实例
  * 继承单一
    * 【原因】如图（1）一个子类仅继承一个父类
  * 修改子类实例的属性会改到父类的属性。
    * 【原因】如图（1）



## 方法二：构造函数继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230524-4.jpg)

==步骤1：在子类构造函数内回调父类构造函数（关键点）==

````javascript
function Sub(){
    Person.call(this,'roy');
    this.age = 12;
}
````

步骤2：创建子类实例

````javascript
var sub1 = new Sub();
````

步骤3：检验是否继承成功

````javascript
console.log(sub1.name);//roy
console.log(sub1.age);//12
console.log(sub1 instanceof Person);//false
````

【分析】

* 优点
  * 实现了继承：
    * √  继承父类**构造函数**的属性
    * ✕ 继承父类**原型上**的属性（如图（3））
  * 可以向父类构造函数传参
* 缺点
  * 无法实现**父类**构造函数的复用
    * 【原因】用一次，重新调用父类构造函数一次
  * 每个新实例都有父类构造函数的副本，臃肿
    * 【原因】子类构造函数中产生了闭包，闭包导致内存泄露
  * 无法继承父类原型上的属性
    * 【原因】如图（3）



## 方法三：组合式继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230524-6.jpg)

==步骤1：在子类构造函数内回调父类构造函数**（关键点）**==

````javascript
function Sub(name){
    Person.call(this,name);//构造函数继承
}
````

==步骤2：创建一个子类，并把子类的原型对象指向父类的实例**（关键点）**==

````javascript
Sub.prototype = new Person();//原型链继承
````

步骤3：创建子类实例，检验是否继承成功

````javascript
var sub = new Sub('roy');
console.log(sub.name);//roy 继承了构造函数属性
console.log(sub.age);//10 继承了父类原型的属性
````

【分析】

* 优点：
  * 实现了继承：
    * √ 继承父类原型上的属性
  * 可以传参，复用
  * 每个新实例引入的构造函数属性是私有的
    * 【原因】步骤1产生了闭包
* 缺点：
  * 调用了两次父类构造函数，耗内存
  * 子类构造函数会代替原型上的父类的构造函数（不懂的点，欢迎小伙伴在评论区讨论一下）

## 方法四：ES6 Class类继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230525-1.jpg)

为了统一使用ES6格式父类也进行改动一下(不改动直接用前面的父类也行)

````javascript
//父类
class Person {//给构造函数添加
  constructor(name) {
    this.name = name;
  }
  msg() {
    alert(this.name);
  }
}
Person.prototype.age = 10;//给构造函数添加了原型属性
````

==步骤1：使用关键字`extends`继承父类方法和属性，关键字`super`继承父类构造函数属性（关键点）==

````javascript
class Sub extends Person {  //继承父类方法
  constructor(name) {
    super(name);        //继承父类构造函数属性
    this.sex = 'boy';
  }
}
````

步骤2：创建子类实例，检验是否继承成功

````javascript
const sub = new Sub('lao');
console.log(sub.age);    	//10	//证明继承父类构造函数原型属性
console.log(sub.name);   	//lao
console.log(sub.sex); 		//boy
console.log(sub.msg());
console.log(sub instanceof Person);   //true
````

【分析】

* 优点：

  * 实现继承
    * √ 继承父类原型上的属性
    * √  继承父类**构造函数**的属性
  * 写法更加的简洁

* 缺点：

  * 函数申明不能自动提升（必须先声明再使用）

    【示例】

    ````javascript
    let sub1 = new Sub()	//报错ReferenceError
    class Sub{}
    ````



## 方法五：原型式继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230526-1.jpg)

==步骤1：通过一个函数来模拟子类构造函数（关键点）==

````javascript
function content(obj){
    function F(){};			//模拟子类的构造函数
    F.prototype = obj;	//将子类构造函数原型对象设为父类实例
    return new F();			//创建子类构造函数实例
}
````

步骤2：创建父类的实例

````javascript
var person = new Person();
````

步骤3：调用模拟子类构造函数来模拟创建子类实例

````javascript
var sub1 = content(person);
````

步骤4：检验是否继承成功

````javascript
console.log(sub1.age);//10 继承了父类函数的属性
````

【分析】

* 优点：
  * 无需定义子类，反而使用一个现成的类直接继承。
* 缺点：
  * 所有实例都会继承父类原型上的属性（如图（4）所示）
  * 无法实现复用(新实例属性都是后面添加的)

> PS：Object.create()的原理就是通过原型式继承实现的
>
> 【简写】上述原型式继承可如下简写
>
> ````javascript
> var person = new Person();
> var sub1 = Object.create(person);
> console.log(sub1.age);//10 继承了父类函数的属性
> ````



## 方法六：寄生式继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230526-3.jpg)

==步骤1：通过一个函数来模拟子类构造函数（关键点）==

````javascript
function content(obj){
    function F(){};
    F.prototype = obj;//继承了传入的参数
    return new F();//返回函数对象
}
````

步骤2：创建父类实例

````javascript
var person = new Person();
````

步骤3：创建一个仅用于封装继承过程的函数，函数的内部以某种方式来继承父类

````javascript
function subObject(obj){
    var sub = content(obj);//通过调用函数
    sub.name = 'roy';//以某种方式来增强这个对象
  	sub.sayHi=function(){
      console.log('hello');
    }
    return sub;//返回子类
}
````

步骤4：调用函数来模拟创建子类实例

````javascript
var sub1 = subObject(person);
````

步骤5：

````javascript
console.log(typeof subObject);//function
console.log(typeof sub1);//object
console.log(sub1.name);//'roy' 返回了个sub对象，继承了sub的属性
sub1.sayHi();	//'hello'
````

【分析】

* 优点：
  * 为对象添加函数
* 缺点：
  * 效率低
    * 【原因】不能做到函数复用



## 方法七：寄生组合继承

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/20230530-3.jpg)

步骤1：**新**创建父类，给父类添加方法

````javascript
function Parent6() {
  this.name = 'parent6';
  this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
  return this.name;
}
````

==步骤2：创建子类，回调继承父类属性（关键点）==

````javascript
function Child6() {
  Parent6.call(this);	//继承服父类的属性
  this.friends = 'child6';
}
````

==步骤3：借助函数，父子类关联（关键点）==

````javascript
function clone(parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

clone(Parent6, Child6);
````

> ==PS:子类构造器等于父类对象==
>
> 【证明】
>
> ````javascript
> console.log(child.prototype.constructor == parent); //true
> ````

步骤4：给子类追加方法

````javascript
Child6.prototype.getFriends = function () {
  return this.friends;
}
````

步骤5：验证继承

````javascript
let person6 = new Child6();
console.log(person6);	//输出：带有父类属性的对象>>>>>>证明：实现子类继承父类属性
console.log(person6.getName());	//输出：parent6>>>>证明：实现子类继承父类的方法
console.log(person6.getFriends());//输出：child6>>>证明：子类可以追加方法
````



# 文献参考

[1] [贪吃的猫,《JS继承》,稀土掘金，2021-04-29](https://juejin.cn/post/6956581082460487710)

[2] [小小操作手,《js继承》,稀土掘金,2020-06-13](https://juejin.cn/post/6844904190515363854)
