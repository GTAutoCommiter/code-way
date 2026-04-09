---
id: javascript-es6-shangguigu
slug: /javascript-es6-shangguigu
title: 【尚硅谷】Web前端ES6教程，涵盖ES6-ES11
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/ES
---

# 前言

【内容】

【目的】

【学习资源】

* 【学习视频】[尚硅谷Web前端ES6教程，涵盖ES6-ES11](https://www.bilibili.com/video/BV1uK411H7on?spm_id_from=333.999.0.0)
* 【参考笔记】[尚硅谷Web前端ES6教程，涵盖ES6-ES11](https://blog.csdn.net/WENSHIKADA/article/details/119516518)

---



# ES6

## let声明变量

【格式】

````javascript
let a;						//可声明单个变量
let b,c,d;					//可声明多个变量
let e=100;					//可声明同时为变量赋值
let f=521, g='lao',h=[];	//可赋值为数值、字符串、数组；
````

【特性】

* 变量不能重复声明

  【报错示例】

  ````javascript
  let a='lao';
  let a='jarvee';
  ````

  ![1653433243649](D:\Data\9_Typora图片缓存\1653433243649.png)

  

* 块级作用域（全局，函数，eval）

  * 在代码块里有效，出代码块就无效了（相当于局部变量）

* 不存在变量提升

  【报错示例】**说明不能在变量声明之前，调用变量**

  ````javascript
  console.log(name);
  let name='Lao';
  ````

  ![1653433645346](D:\Data\9_Typora图片缓存\1653433645346.png)

* 不影响作用域链

  【示例】**说明在同一代码块中，下一级代码块任然可以调用let定义的变量**

  ````javascript
  {
      let name = 'lao';
      function fn(){
          console.log(name);
      }
      fn();
  }
  ````



## const声明常量

【格式】

````javascript
const 常量名=常量值
````

【特性】

* 一定要有初始值

  【报错示例】

  ````javascript
  const A;
  ````

  ![1653434898927](D:\Data\9_Typora图片缓存\1653434898927.png)

* 一般声明使用大写（潜规则）

* 常量值不能修改

  【报错示例】

  ````javascript
  const NAME = 'Lao';
  NAME = 'Jarvee';
  ````

  ![1653435011876](D:\Data\9_Typora图片缓存\1653435011876.png)

* 也是块级作用域内有效

  【报错示例】

  ````javascript
  {
      const PLAYER = 'Lao';
  }
  console.log(PLAYER);
  ````

  ![1653435123943](D:\Data\9_Typora图片缓存\1653435123943.png)

* 对于对数组和对象里元素修改，不算对常量进行修改 (因为地址没改变)



## 变量的解构赋值

* 按照一定模式从数组和对象中提取值，对变量进行赋值

> 数组的解构

【示例】

````javascript
const NUMBER = ['one','two','three'];
var [a,b,c] = NUMBER;
console.log(a);		//输出one
console.log(b);		//输出two
console.log(c);		//输出three
````



> 对象的解构

【示例】

````javascript
const Lao = {
    name:'Jarvee',
    age:'21',
    doing:function(){
        console.log("I am studying ES6");
    }
};
let {name,age,word} = Lao;

console.log(name);		//输出Jarvee
console.log(age);		//输出21
console.log(doing());	//输出I am studying ES6
````



## 模板字符串

* ES6引入新的声明字符串的方式**反引号**（``）

> 声明

【示例】

````javascript
let str =`用反引号框起来的内容也是字符串`；
console.log(str,typeof str);	//输出 用反引号框起来的内容也是字符串 string
````



> 内容中可以直接出现换行符

【报错示例】使用`" "`|`''`都不能实现换行【解决办法】只能在每一个换行处加入`+`连接

````javascript
 let str = '<ul>
            <li>one</li>   
            <li>two</li>  
            <li>three</li>  
            </ul>';
````

![1653446236447](D:\Data\9_Typora图片缓存\1653446236447.png)

【示例】使用反引号可以直接出现换行符

````javascript
let str = `<ul>
            <li>one</li>   
            <li>two</li>  
            <li>three</li>  
            </ul>`;
````



> 变量拼接

【格式】

````javascript
let stringOne="String1";
let stringTwo=`${stringOne}this is String2`
````



## 对象的简化写法

* 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

【示例】**用ES6简化写法**

````javascript
let name='Lao'
let doing=function(){
    cosole.log('Im coding!!!!');
}

//直接写入变量name
//直接写入函数doing
const Person={
    name,
    doing,
    improve(){
        console.log("Leaning ES6");
    }
}
````

【对比上例】**过去写法**

````javascript
let name='Lao'
let doing=function(){
    cosole.log('Im coding!!!!');
}
const Person={
    name:name,
    doing:doing,
    improve=function(){
        console.log("Leaning ES6");
    }
}
````



## 箭头函数以及声明特点

* ES6允许使用**箭头**`=>`定义函数

> 声明一个函数

````javascript
let fn=function(形参列表){
    //函数体
}
//省略function关键字
let fn= (形参列表) =>{
    //函数体
}
````



> 调用函数

````javascript
let result=fn(形参列表)；
````



### 箭头函数与普通函数的区别

> 【拓展】**JavaScript this关键字**
>
> 面向对象语言中this表示当前对象的一个引用
>
> 但在JavaScript中this不是固定不变的，它会随着执行环境的改变而改变。
>
> |          执行环境           |         this表示         |
> | :-------------------------: | :----------------------: |
> |          在方法中           |     该方法所属的对象     |
> |        如果单独使用         |         全局对象         |
> |          在函数中           |         全局对象         |
> |   在函数中，在严格模式下    | 未定义的（`undefined`）  |
> |          在事件中           |      接收事件的元素      |
> | 类似`call()`和`apply()`方法 | 可以将this引用到任何对象 |

* this是静态的，this始终指向函数声明时所在作用域下的this的值

  【示例】**说明箭头函数的this不可变**

  ````javascript
  //普通函数
  function getName(){
      console.log(this.name);
  }
  //箭头函数
  let getName2 = ()=>{
      console.log(this.name);
  }
  //设置window对象的name属性，是箭头函数声明所在作用域下的值 
  window.name = 'lao';
  
  const person = {
      //这个name属性不在箭头函数所在作用域下
      name:'anthor Man'
  }
  //直接调用
  getName(); 		//lao
  getName2(); 	//lao
  //call方法调用
  getName.call(person);  // anthor Man
  getName2.call(person);  // lao
  ````

* 不能作为构造实例化对象

  【报错示例】

  ````javascript
  let Person = (name,age)=>{
      this.name=name;
      this.age=age;
  }
  let me = new Person('lao',21);
  console.log(me);
  ````

  ![1653464010380](D:\Data\9_Typora图片缓存\1653464010380.png)

* 不能使用`arguments`变量

  【报错示例】

  ````javascript
  let fn = () => {
      console.log(arguments);
  }
  fn(1,2,3);
  ````

  ![1653464113052](D:\Data\9_Typora图片缓存\1653464113052.png)

* 箭头函数的简写

  * 省略小括号，当形参有且只有一个的时候

    【示例】

    ````javascript
    let add = n =>{
        return n+n;
    }
    console.log(add(9));
    ````

  * 省略花括号，当代码体只有一条语句的时候,此时`return`必须省略

    * 而且语句的执行结果就是函数的返回值

    【示例】

    ````javascript
    let pow (n)=>{
        return n*n;
    }
    console.log(pow(9));
    //用箭头函数简写
    let pow = n =>n*n;
    console.log(pow(9));
    ````



### 箭头函数的应用场景

|           适合           |        不适合        |
| :----------------------: | :------------------: |
|     与this无关的回调     |   与this有关的回调   |
| 如定时器，数组的方法回调 | 事件回调，对象的方法 |



## 函数参数的默认值设置

* ES6允许函数参数赋初始值

> 形参初始值  具有默认值的参数，一般位置要靠后（潜规则）

【示例】

````javascript
function add(a,b,c=3){
    return a+b+c;
}
let result=add(1,2);	//输出 6
console.log(result);
````



> 与解构赋值结合

【示例】

````javascript
//可以给host属性赋初始值，如果对象中host属性没有传，默认为127.0.0.1
function connect({host="127.0.0.1", username,password, port}){
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    host: 'laojarvee.com',
    username: 'root',
    password: 'root',
    port: 3306
})
````



## rest 参数

* ES6引入`rest`参数 用来获取函数的实参，代替`arguments`

【示例】**ES5获取实参的方式**

````javascript
function date(){
    console.log(arguments);
}
date('白天','中午','黑夜');
````

* 【获得】一个**对象**

  ![1653466316963](D:\Data\9_Typora图片缓存\1653466316963.png)



【示例】**ES6使用`rest`参数获取实参**

````javascript
function date(...args){
    console.log(args);// filter some every map 
}
date('早餐','午餐','晚餐');
````

* 【获得】一个**数组**，可以对其使用数组的API方法如(`filter` 、`some`、`every`、`map`等方法) 

  ![1653466609968](D:\Data\9_Typora图片缓存\1653466609968.png)

【==注意==】

* 如果参数存在多个，`rest`参数必须放到参数最后

  【报错示例】**正确应该`fn(a,b,...args)**`

  ````javascript
   function fn(a,...args,b){
       console.log(a);
       console.log(b);
       console.log(args);
   }
  fn(1,2,3,4,5,6);
  ````

  ![1653466923121](D:\Data\9_Typora图片缓存\1653466923121.png)



## 扩展运算符

* `...` 扩展运算符能将 **数组**转换为`,`分隔的**参数序列**

  【示例】

  ````javascript
  //声明一个数组
  const food = ['早餐','午餐','晚餐'];
  //声明一个函数
  function eat(){
      console.log(arguments);
  }
  eat(food);		//参数是一个数组
  eat(...food);	//说明用扩展运算符可以将数组展开成一个参数序列
  ````

  ![1653469425092](D:\Data\9_Typora图片缓存\1653469425092.png)



### 拓展运算符应用

> 数组合并

【示例】

````javascript
const workday=['星期一','星期二','星期三','星期四','星期五'];
const restday=['星期六','星期天'];

//ES5合并方法
const weekdayES5=workday.concat(restday);
//ES6合并方法
const weekdayES6=[...workday,...restday];
//输出都为['星期一','星期二','星期三','星期四','星期五'，'星期六','星期天']
console.log(weekdayES5);
console.log(weekdayES6);
````



> 数组克隆

【示例】**浅拷贝**

````javascript
const name = ['L','A','O'];
const fastName = [...name];// ['L','A','O']
console.log(fastName);
````



> 将伪数组转为真正的数组

````html
<body>
    <div></div>
    <div></div>
    <div></div>
    <script>
    const divs = document.querySelectorAll('div');
    console.log(divs);	//显示的是一个对象伪数组
    const divArr = [...divs];	//通过扩展运算符变成真数组	
    console.log(divArr);// arguments 也可以转
	</script>
</body>
````

![1653470927404](D:\Data\9_Typora图片缓存\1653470927404.png)



## Symbol

* ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
* 它是Javascript语言的第七种数据类型，是一种类似与字符串的数据类型

【特点】

* 值是唯一的，用来解决命名冲突问题

* 值不能与其他数据进行运算

  【报错示例】

  ````javascript
  let s=Symbol();
  let result=s+100;		//说明Symbol不能进行四则运算
  let result=s>100;		//说明Symbol不能进行比较
  let result=s+"string";	//说明Symbol不能进行字符串拼接
  let result=s+s;
  ````

  ![1653471965964](D:\Data\9_Typora图片缓存\1653471965964.png)

* 定义的对象属性不能使用`for...in`循环遍历，但是可以使用`Reflect.ownKeys`来获取对象的所有键名。



### 创建Symbol对象

> Symbol()创建一个**函数**

【示例】

````javascript
let s= Symbol();

/*
通过描述字符串更好的知道这个值的作用，
与注释差不多，
表示出这个Symbol是干嘛的，为谁设置的
*/
let s2=Symbol('描述字符串');	
let s3=Symbol('描述字符串');

/*
说明：描述字符只是标志，它所返回结果是不一样的，编号是不一样的
*/
console.log(s2===s3);//输出为false
````

【==注意==】描述字符串只是标志



> Symbol.for()创建Symbol对象

【示例】

````javascript
let s4=Symbol.for('Lao');
let s5=Symbol.for('Lao');

/*
说明：通过Symbol.for()创建，可以通过描述字符串得出一个唯一的Symbol值的
*/
console.log(s4===s5);	//输出结果为true
````



【拓展】**巧记JavaScript类型：USONB（you  so NB）**

> u	undefined
>
> s	string symbol
>
> o	object
>
> n	null	number
>
> b	boolean



### 给对象添加Symbol类型的属性、方法方式

#### 为什么要给对象添加Symbol类型的属性和方法

* 很安全
  * 【解释】*不会破坏原有的一些属性，可能对象里面原来就有该属性、方法，使用`Symbol`不会改变原有的属性和方法*
* 很快速



> 方式一

【示例】**已有对象game，向该对象添加up，down方法**

````javascript
//已有对象game
let game={···

//声明对象
let methods ={
    up:Symbol(),
    down: Symbol()
};

game[methods.up]=function(){
    console.log*("我可以改变形状");
}

game[methods.down]=function(){
    console.log*("我可以快速下降！！！");
}

console.log(game);
````



> 方式二

【示例】

````javascript
let youxi = {
    name:"狼人杀",
    [Symbol('say')]: function(){
        console.log("我可以发言")
    },
    [Symbol('zibao')]: function(){
        console.log('我可以自爆');
    }
}

console.log(youxi)
````



【==注意==】**要想给对象添加唯一的属性不能直接添加**

* 【错误示例】因为`Symbol()`是一个动态值是个表达式，不是一个静态的属性

  ````javascript
  let youxi = {
      name:'狼人杀',
      Symbol():function(){
          
      }
  }
  ````



### Symbol的内置属性

[了解更多Symbol内置属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#properties)



## 迭代器

### 啥是迭代器？

* 迭代器(Iterator)是一种**接口**,为各种不同的数据结构提供统一的访问机制。
* 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。



### 啥是接口？

* 其实就是对象里的一个属性



### 哪些数据结构原生具备`iterator`接口可用`for...of`遍历的数据？

* Arrray

  【示例】

  ````javascript
  const xiyou=['唐僧','孙悟空','猪八戒','沙僧'];
  for(let v of xiyou){
      console.log(v);
  }
  for(let v in xiyou){
      console.log(v);
  }
  ````

  【==注意==】**`for...in`和`for...of`的区别**

  ![1653550192965](D:\Data\9_Typora图片缓存\1653550192965.png)

  |                  | `for...in` | `for...of` |
  | :--------------: | :--------: | :--------: |
  | **前面变量保存** |    键名    |    键值    |

  * `for in` 可以遍历数组和对象,通常用来遍历对象
    * 遍历**对象**: key得到的是对象的**每一个key**
    * 遍历**数组**: key得到的是数组的**下标**
  * `for of` 遍历数组
    * 遍历**数组**: key得到的是数组的**每一项**

* Argument

* Set

* Map

* String

* TypedArray

* NodeList

上述数据结构中都有此接口，所以可以使用`for...of`来遍历

![1653550553745](D:\Data\9_Typora图片缓存\1653550553745.png)



### 工作原理

* 创建一个指针对象，指向当前数据结构的起始位置

  ````javascript
  let iterator=xiyou[Symbol.iterator]();
  ````

* 第一次调用对象的`next()`方法，指针自动指向数据结构的第一个成员

  ````javascript
  console.log(iterator.next());
  ````

  ![1653551154445](D:\Data\9_Typora图片缓存\1653551154445.png)

* 接下来不断调用`next()`方法，指针一直往后移动，直到指向最后一个成员

  ````javascript
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  ````

  ![1653551231604](D:\Data\9_Typora图片缓存\1653551231604.png)

* 每调用`next()`方法放回一个包含`value`和`done`属性的对象

【==注意==】需要自定义遍历数据的时候，要想到迭代器



### 如何自定义一个遍历?

【示例】

````javascript
//声明一个对象
const avenger = {
    name: "复仇者联盟",
    members: [
        '美国队长',
        '钢铁侠',
        '雷神',
        '黑寡妇'
    ],
    /*1、引入iterator接口*/
    [Symbol.iterator]() {
        //索引变量---控制向下的发展
        let index = 0;
        let _this = this;
        /*2、设置返回值*/
        return {
            /*3、每次调用next方法*/
            next: function () {
                /*4、每调用next()方法放回一个包含value和done属性的对象*/
                //要对返回结果进行一个处理
                if (index < _this.members.length) {
                    const result = { value: _this.members[index], done: false };
                    //下标自增
                    index++;
                    //返回结果
                    return result;
                }else{
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

//遍历这个对象 
for (let v of avenger) {
    console.log(v);
}
````



## 生成器

### 啥是生成器？

* 其实就是一个特殊的函数



### 能干啥？

* 异步编程

  * 【拓展】**ES6之前如何实现异步编程**

    > 纯回调函数
    >
    > node fs ajax mongodb



### 怎么用？

【格式】**在`function`关键字和函数名中间加`*`**

````javascript
function * 函数名(){}
````



【示例】**体会生成器的特殊性**

````javascript
function * gen(){
    console.log("hello generator")
}
let iterator=gen();
console.log(iterator);	//特殊性1：并没有直接输出
iterator.next();	//特殊性2：需要调用对象的next方法，才会执行
````



【示例】**了解yield是生成器函数的分隔符**

````javascript
function * gen(){
    yield '一只没有耳朵';
    yield '一只没有尾部';
    yield '真奇怪';
}
let iterator=gen();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//也可以使用遍历
//for(let v of gen()){
//    console.log(v)
//}
````

![1653553622656](D:\Data\9_Typora图片缓存\1653553622656.png)



### 生成器函数如何进行参数传递？

【示例】

* 说明：
  * 1、生成器整体函数可以传参
  * 2、next方法可以传入实参（==**第n次**调用`next()`方法，他将作为**第n-1个（上一个）**`yield`语句的返回结果==）

````javascript
//说明1：生成器整体函数可以传参
function * gen(arg){
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}

//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());
//说明2：next方法可以传入实参
console.log(iterator.next('BBB'));
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));
````

![1653554244858](D:\Data\9_Typora图片缓存\1653554244858.png)



### 生成器如何解决回调地狱？

#### 什么是回调地狱？

【示例】**1s 后控制台输出"111"  2s后输出 "222"  3s后输出 "333"**

`````javascript
setTimeout(() => {
    console.log(111);
    setTimeout(() => {
        console.log(222);
        setTimeout(() => {
            console.log(333);
        }, 3000);
    }, 2000);
}, 1000);
`````

如果继续要求**ns后输出"nnn"**估计代码横向长度可以堪比香飘飘了——连起来可以绕地球好几圈。



【示例】**用生成器处理如上问题**

````javascript
function one(){
    setTimeout(()=>{
        console.log(111);
        //这一段代码类似与多米诺骨牌
        iterator.next();
    },1000)
}

function two(){
    setTimeout(()=>{
        console.log(222);
        iterator.next();
    },2000)
}

function three(){
    setTimeout(()=>{
        console.log(333);
        iterator.next();
    },3000)
}

function * gen(){
    yield one();
    yield two();
    yield three();
}

//调用生成器函数
let iterator = gen();
iterator.next();
````

如果继续要求**ns后输出"nnn"**只需创建函数即可。



【示例】**用生成器进行异步编程（通过`next()`方法传参）**

````javascript
//模拟获取  用户数据  订单数据  商品数据 
function getUsers() {
    setTimeout(() => {
        let data = '用户数据';
        //调用 next 方法, 并且将数据传入
        iterator.next(data);
    }, 1000);
}

function getOrders() {
    setTimeout(() => {
        let data = '订单数据';
        iterator.next(data);
    }, 1000)
}

function getGoods() {
    setTimeout(() => {
        let data = '商品数据';
        iterator.next(data);
    }, 1000)
}

//创建一个生成器函数
function* gen() {
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods);
}

//调用生成器函数
let iterator = gen();
iterator.next();	//开始执行 yield getUsers();
````



【总结】**什么情况下采用生成器？**

* 待处理的数据之间有关联度的，关联度关系类似多米诺骨牌的数据。



## Promise

* 是ES6引入的在 JavaScript 中进行**异步编程的新解决方案**。
* 语法上，`Promise`是一个**构造函数**
* 用来**封装异步操作**并可以**获取其成功或失败的结果**。



### 如何使用Promise？

【示例】

````javascript
//实例化 Promise对象
//对象有三种状态：初始化，成功，失败
const p = new Promise(function(resolve,reject){
    //定义一个异步状态
    setTimeout(function(){
        //
        let data='数据库中的用户数据'
        //只要调用resolve，对象状态为成功，就会调用promise对象的then方法的第一个回调函数
        resolve(data);

        let err ='数据读取失败';
        //调用完reject函数后，promise对象p就会变为失败状态
        //p为失败状态就会调用promise对象的then方法的第二个回调函数
        reject(err);
    },1000);
})
//调用promise对象的then 方法
//then方法调用两个参数，两个参数都是方法
p.then(function(value){
    //若成功调第一个回调函数
    //成功的形参通常叫value
    console.log(value)；
},function(reason){
    //若失败调第二个回调函数
    //失败的形参通常叫reason
    console.error(reason);
})
````



# 结语
