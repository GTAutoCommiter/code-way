---
id: javascript-shangguigu-rumen
slug: /javascript-shangguigu-rumen
title: 【尚硅谷】JavaScript基础&实战丨JS入门到精通全套完整版
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---

# 前言

【目的】

【学习资源】

* [尚硅谷JavaScript基础&实战丨JS入门到精通全套完整版](https://www.bilibili.com/video/BV1YW411T7GX)

---



# 初始Javascript

## Javascript写在哪？

### 1、标签的内部（不推荐）

【不推荐原因】属于结构与行为耦合，不方便维护，不推荐使用

【示例】可以将js代码编写到标签的`onclick`属性中,当点击按钮时，js代码才会执行

````html
<button onclick="alert('这是一个弹窗警告')">点我一下</button>
````

【示例】可以将js代码写到超链接的href属性，当点击超链接时，会执行js代码

````html
<a href="javascript:alert('这也是一个弹窗警告');">也点我一下</a>
<a href="javascript:;">也点我一下</a>
````



### 2、script标签里

````html
<script type="text/javascript">
    //写Javascript代码，需要到script标签中
</script>
````



### 3、外部文件中（推荐）

【步骤】

1. 创建`.js`文件

2. 引入

   ````html
   <script type="text/javascript" src="js文件所在目录"></script>
   ````

【好处】

* 可以在不同的页面中同时引用
* 也可以利用的到浏览器的缓存机制



## 如何向计算机发指令？

> 控制浏览器弹出警告

````javascript
alert("这是一个弹出");
````

![1654502874880](D:\Data\9_Typora图片缓存\1654502874880.png)



> 让计算机在页面中输出一个内容

`````javascript
document.write("在网页中输出的内容");
`````

`document`（文档）：一个网页就是一个文档

![1654503042205](D:\Data\9_Typora图片缓存\1654503042205.png)



> 向控制台输出一个内容

````javascript
console.log("控制台显示的内容");
````

![1654503135300](D:\Data\9_Typora图片缓存\1654503135300.png)



# 基本语法

1. JS中严格区分大小写
2. JS中每条语句以分号`;`结尾
   * 如果不写分号，浏览器会自动添加，但是会消耗一些系统资源
   * 而且有些时候，浏览器会加错分号，所以在开发中分号必须写
3. JS中会忽略多个空格和换行
   * 可以利用空格和换行对代码进行格式化



## 注释

* 注释的内容不会被执行，但是可以在源代码中查看

> 多行注释

````javascript
/*
这是一个多行注释
*/
````



> 单行注释

````javascript
//这是一个单行注释
````



## 字面量和变量

> 字面量

* 都是一些不可改变的值（如1、2、3、4、5）
* 都是可以直接使用，但是一般都不会直接使用字面量。



> 变量

* 可以用来保存字面量
  * 而且字面量的值是可以任意改变的
* 更方便使用
  * 所以在开发中都是通过变量去保存一个字面量，而很少直接使用字面量
* 可以通过变量对字面量进行描述



【声明变量】

* 在js中使用`var`关键字来声明一个变量

````javascript
//方法一：先声明后赋值
var a;
a=100;
//方法二：同时声明且赋值
var a=100;
````



## 标识符

* 在JS中所有的可以自主命名的都可以称为是标识符（如：变量名、函数名、属性名都属于标识符）
* **命名一个标识符时需要遵守如下的规则：**
  1. 可以含有字母、数字、`_`、`$`
  2. 不能以数字开头
  3. 不能是ES中的关键字或保留字
  4. 一般都采用**驼峰命名法** *（首字母小写，每个单词的开头字母大写，其余字母小写）*
* 底层保存标识符时实际上是采用的Unicode编码
  * 理论上讲，所有的utf-8中含有的内容都可以作为标识符



## 数据类型

* 指的就是字面量的类型
* 在JS中一共有六种数据类型（U SO NB）
  * U：Undefined 未定义
  * S：String 字符串
  * O：Object 对象
  * N： Null 空值、Number 数值
  * B：Boolean布尔值
* 基本数据类型
  * `String`、`Number` `Boolean` `Null` `Undefined`
* 引用数据类型
  * `Object`



### 基本数据类型

#### String	 字符串

【格式】

````javascript
var str1 = '这是一个由单引号框起来的字符串'
var str2 = "这是一个由双引号框起来的字符串"
````

* 在JS中字符串需要使用引号引起来，没有引号就变成变量了。
* 使用双引号或单引号都可以，但是不要混着用。
* 引号不能嵌套，双引号不能放双引号，单引号不能放单引号。

> 转义字符

* 在字符串中，当表示一些特殊符号时可以使用`\`进行转义

  | 转义字符 |  表示  |
  | :------: | :----: |
  |   `\"`   |  `"`   |
  |   `\'`   |  `'`   |
  |   `\n`   |  换行  |
  |   `\t`   | 制表符 |
  |   `\\`   |  `\`   |



#### Number	数值

* 在JS中所有的数值都是Number类型

  * 包括整数和浮点数（小数）

* JS中可以获取的Number的最大值和最小值

  * 最大值（1.7976931348623157e+308）

    ````javascript
    Number.MAX_VALUE
    ````

    * 如果使用Number表示的数字超过了最大值则会返回一个`Infinity` ，表示正无穷

  * 最小值（5e-324 大于0的最小值）

    ````javascript
    Number.MIN_VALUE
    ````

    * 如果使用Number表示的数字小于了最小值则会返回一个`-Infinity` ，表示负无穷

* `NaN` 是一个特殊的数字，表示`Not A Number`

* 在JS中整数的运算基本可以保证精确

  * 如果使用JS进行浮点运算，可能得到一个不精确的结果
    * 所以千万不要使用JS进行对精确度要求比较高的运算。



#### Boolean	布尔值

* 布尔值只有两个，主要用来做逻辑判断
  * `true`：表示真
  * `false `：表示假



#### Null	空值

* Null（空值）类型的值只有一个，就是`null`
  * 这个值专门用来表示一个为空的对象



#### Undefined	未定义

* Undefined（未定义）类型的值只有一个，就`undefind`
*  当声明一个变量，但是并不给变量赋值时，它的值就是`undefined`



#### 使用typeof来检查一个变量的类型

|         检查一个         |    返回     |
| :----------------------: | :---------: |
|          字符串          |  `string`   |
| 数值\|`Infinity` | `NaN` |  `number`   |
|          布尔值          |  `boolean`  |
|          null值          |  `object`   |
|       `undefined`        | `undefined` |



### 强制类型转换

#### 其他数据类型转换为String

> 方式一：**toString()方法**

* 该方法不会影响到原变量，它会将转换的结果返回。

【用法示例】

````javascript
var a=100;
a.toString();
````



【==注意==】

* `null`和`undefined`这两个值没有`toString()`方法，如果调用他们的方法，会报错。

  【报错】不能读取`null`的`toString()`方法

  ![1654517602435](D:\Data\9_Typora图片缓存\1654517602435.png)

  【报错】不能读取`undefined`的`toString()`方法

  ![1654517704781](D:\Data\9_Typora图片缓存\1654517704781.png)



> 方式二：调用**String()函数**

* 将被转换的数据作为参数传递给函数

【用法示例】

````javascript
var a=100;
a = String(a);
````

* 使用`String()`函数做强制类型转换时
  * 对于`Number`和`Boolean`实际上就是**调用的toString()方法**。
  * 对于`null`和`undefined`，就**不会调用toString()方法**
    * 它会将 `null` 直接转换为 “null”（字符串）
    * 将 `undefined `直接转换为 “undefined”（字符串）



#### 将其他的数据类型转换为Number

> 方式一：使用**Number()函数**

* 字符串 --> 数字

  1. 如果是纯数字的字符串，则直接将其转换为数字

     【图示】

     ![1654519220185](D:\Data\9_Typora图片缓存\1654519220185.png)

  2. 如果字符串中有非数字的内容，则转换为`NaN`

     【图示】

     ![1654519262178](D:\Data\9_Typora图片缓存\1654519262178.png)

  3. 如果字符串是一个空串或者是一个全是空格的字符串，则转换为`0`

     【图示】

     ![1654519292311](D:\Data\9_Typora图片缓存\1654519292311.png)

* 布尔 --> 数字

  * `true`转成 1

    【图示】

    ![1654519486823](D:\Data\9_Typora图片缓存\1654519486823.png)

  * `false`转成 0

    【图示】

    ![1654519517546](D:\Data\9_Typora图片缓存\1654519517546.png)

* `null` --> 数字

  * `0`

    【图示】

    ![1654519549312](D:\Data\9_Typora图片缓存\1654519549312.png)

* `undefined` --> 数字

  * `NaN`

    【图示】

    ![1654519597341](D:\Data\9_Typora图片缓存\1654519597341.png)



> 方式二：专门用来将字符串转换成数的方法

* `parseInt()`

  * 把一个字符串转换为一个整数

    1. 将一个字符串中的有效的整数内容去出来
    2. 转换为Number

    【说明】**只截取整数**

    ![1654519680511](D:\Data\9_Typora图片缓存\1654519680511.png)

    ![1654519707306](D:\Data\9_Typora图片缓存\1654519707306.png)

    【==注意==】当第一个字符不是整数时，返回`NaN`

    ![1654519774542](D:\Data\9_Typora图片缓存\1654519774542.png)

  * 可以在parseInt()中传递一个第二个参数，指定数字的进制

    【图示】*将070以8进制转换为10进制数*

    ![1654520679239](D:\Data\9_Typora图片缓存\1654520679239.png)

* `parseFloat()`

  * 把一个字符串转换为一个浮点数

    【图示】*（parseFloat()作用和parseInt()类似，不同的是它可以获得有效的小数）*

    ![1654519898348](D:\Data\9_Typora图片缓存\1654519898348.png)

【==注意==】

* 如果对**非String**使用`parseInt()`或`parseFloat()`
  1. 先将其转换为String
  2. 再操作。



> 【拓展】**其他进制数字在js中的表示**
>
> | 进制 | 开头 |
> | :--: | :--: |
> |  16  | `0x` |
> |  8   | `0`  |
> |  2   | `0b` |
>
>  但是不是所有的浏览器都支持



#### 将其他的数据类型转换为Boolean

> 使用**Boolean()函数**

* 数字 ---> 布尔

  * 除了0和`NaN`，其余的都是`true`

    【示例】

    ````javascript
    var a=123;  a=Boolean(a);console.log('a=123\t\t'+a);
    a=-123;     a=Boolean(a);console.log('a=-123\t\t'+a);
    a=0;        a=Boolean(a);console.log('a=0\t\t'+a);
    a=Infinity; a=Boolean(a);console.log('a=Infinity\t'+a);
    a=NaN;      a=Boolean(a);console.log('a=NaN\t\t'+a);
    ````

    ![1654521581789](D:\Data\9_Typora图片缓存\1654521581789.png)

* 字符串---> 布尔

  * 除了空串，其余的都是`true`

    【示例】

    ````javascript
    var str='hello'; 	str=Boolean(str);	console.log("str='hello'\t"+str);
    str='true'; 		str=Boolean(str);	console.log("str='true'\t"+str);
    str='false'; 		str=Boolean(str);	console.log("str='false'\t"+str);
    str=''; 			str=Boolean(str);	console.log("str=''\t\t"+str);
    str=' '; 			str=Boolean(str);	console.log("str=' '\t\t"+str);
    ````

    ![1654522059785](D:\Data\9_Typora图片缓存\1654522059785.png)

* `null`和`undefined`都会转换为`false`

  【示例】

  ````javascript
  var a=null; 	a=Boolean(a); console.log("a=null\t\t"+a);
  a=undefined; 	a=Boolean(a); console.log("a=undefined\t"+a);
  ````

  ![1654522640819](D:\Data\9_Typora图片缓存\1654522640819.png)

* 对象也会转换为`true`



## 运算符



# 结语

