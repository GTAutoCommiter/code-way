---
id: javascript-kuanshensuo
slug: /javascript-kuanshensuo
title: 【学习笔记】【JavaScript】【狂神说】JavaScript-学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---

# JavaScript学习笔记

# 前言

学习视频： [【狂神说Java】JavaScript最新教程通俗易懂](https://www.bilibili.com/video/BV1JJ41177di?spm_id_from=333.999.0.0)

***感谢狂神！！！***



**此笔记用于记录本人在学习中还有不懂以及值得注意的地方。以方便日后的工作与学习。**



笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。

**部分内容不完整，请读者结合视频观看效果更佳。**



## 注意

**此笔记并非完整笔记**

需要完整笔记的同学可以移步到[【狂神说Java】JavaScript学习笔记]( https://blog.csdn.net/pan_h1995/article/details/105974385)



***再次感谢狂神！！！***

跟对人，做对事。——狂神说

---



# 快速入门

==console==

console.log()相当于Java中的System.out.println();



==number==

```js
NaN	//not a number
Infinity // 表示无限大
```

 

==比较运算符==

```javascript
== 等于（类型不一样，值一样，也会判断为true）
=== 绝对等于（类型一样，值一样，结果为true）
```

这是一个JS的缺陷，坚持不要使用 == 比较
 须知：

- NaN === NaN，这个与所有的数值都不相等，包括自己
- 只能通过isNaN（NaN）来判断这个数是否是NaN



浮点数问题

尽量避免使用浮点数进行运算，存在精度问题！

```javascript
Math.abs(1/3-(1-2/3))<0.00000001
```

Math.abs求绝对值



==null 和 undefined==

- null 空
- undefined 未定义



==数组==

 Java的数组必须是相同类型的对象~，JS中不需要这样

```javascript
//保证代码的可读性，尽量使用[]
var arr = [1,2,3,4,5,'hello',null,true];
//第二种定义方法
new Array(1,2,3,4,5,'hello');
```

 取数字下标：如果越界了，就会 报undefined

```javascript
undefined
```



==对象==

 对象是大括号，数组是中括号

> 每个属性之间使用逗号隔开，最后一个属性不需要逗号

```javascript
//示例
// Person person = new Person(1,2,3,4,5);
var person = {
	name:'Tom',
	age:3,
	tags:['js','java','web','...']
}
```

取对象值

```javascript
//控制台操作
person.name
> "Tom"
person.age
> 3
```



## 严格检查格式

**为什么（要引入严格检查格式）？**

```javascript
var i =1;
```

默认为全局变量，一个html文件会引用多个script，直接使用var定义变量可能会与其他同名变量产生覆盖或冲突。



**怎么（引入严格检查格式）？**

1、需要设置支持ES6语法

（以IDEA编译器为例）

![](https://img-blog.csdnimg.cn/20200508105351996.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Bhbl9oMTk5NQ==,size_16,color_FFFFFF,t_70)

2、写入'use strict';

=='use strict';必须写在JavaScript的第一行！==

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--
    前提：IDEA需要设置支持ES6语法
        'use strict';严格检查模式，预防JavaScript的随意性导致产生的一些问题
        必须写在JavaScript的第一行！
        局部变量建议都使用let去定义~
    -->
    <script>
        'use strict';
        //全局变量
         let i=1
        //ES6 let
    </script>
</head>
<body>

</body>
</html>
```

3、将var i =1; 改为 let i =1;

**可能出现的bug!!!**

1、

![在这里插入图片描述](https://img-blog.csdnimg.cn/93b777461dec488cade975bb7f720848.png#pic_center)


**原因：**

*未设置支持ES6语法*



2、

```javascript
//示例
<script>
    //全局变量
    i=1	//出错点
    'use strict';
</script>
```

但Console（控制台）无报错



**原因：**

 *'use strict';未放在JavaScript的第一行！*



3、

```javascript
//示例
<script>
    'use strict';
    //全局变量
    i=1
    //ES6 let
</script>
```

> 结果

![在这里插入图片描述](https://img-blog.csdnimg.cn/eb8bbd854f6641ad85ae342533b4c572.png#pic_center)


**原因：**

*变量定义不符合严格检查格式*



**解决办法：**

将i =1; 改为 let i =1; 变量前加上let



# 数据类型

## 1、字符串

==注意转义字符 \ ==

```javascript
\u4e2d    \u##### Unicode字符

\x41	Ascall字符
```



==**多行字符串编写**==

```javascript
//tab 上面 esc下面
        var msg =
            `hello
            world
            你好呀
            nihao
            `
```



==**模板字符串**==

````javascript
//tab 上面 esc下面
let name = 'Tom';
let age = 3;
var msg = `你好，${name}`
````



==**字符串的可变性，不可变**==

![](https://img-blog.csdnimg.cn/20200508110738649.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Bhbl9oMTk5NQ==,size_16,color_FFFFFF,t_70)



==**大小写转换**==

````javascript
//注意，这里是方法，不是属性了
student.toUpperCase();
student.toLowerCase();
````



==**student.indexof(‘t’)**==

> 输出含‘t’字符的下标



==**substring，从0开始**==

````javascript
[)	//包含左边不包含右边
student.substring(1)//从第一个字符串截取到最后一个字符串
student.substring(1,3)//[1,3)
````



## 2、数组

**1、arr.length**

==注意：假如给arr.length赋值，数组大小就会发生变化~，如果赋值过小，元素就会丢失==



**2、indexOf**，通过元素获得下标索引

````javascript
arr.indexOf(下标)
````



**3、slice()**，截取Array的一部分，返回的一个新数组，类似于String中substring



**4、push()，pop()尾部**

````javascript
push：压入到尾部
pop：弹出尾部的一个元素
````



### 疑问1：是否可以push()，pop()具体某个数值?

> 这两个方法只能遵循“后进先出”原则
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/4f877f35aee9484db7aae010c8dcc89c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_15,color_FFFFFF,t_70,g_se,x_16#pic_center)
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/5db46bcce81e492db717fbcd80997eb1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_15,color_FFFFFF,t_70,g_se,x_16#pic_center)

>
> ==注意：==
>
> **pop一次只能出一个**
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/628f14a37f8b40ea926ab089fbae685b.png#pic_center)
>
> **push一次可推多个**
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/74230b7ee68e481e9e0f81bc60e42961.png#pic_center)




---

**5、unshift(),shift() 头部**

````javascript
unshift：压入到头部
shift：弹出头部的一个元素
````



**6、元素反转reverse()**



**7、concat()**

> ![](https://img-blog.csdnimg.cn/20200508153119816.png)

==注意：concat()并没有修改数组，只是会返回一个新的数组==



**8、连接符join**

> ![](https://img-blog.csdnimg.cn/20200508153243846.png)



**9、多维数组**

````javascript
arr = [[1,2],[3,4],["5","6"]]	\\创建多维数组
arr[1][1]	\\取多维数组元素
>4
````



[数组其他方法参考文档](https://www.w3school.com.cn/jsref/jsref_obj_array.asp)



## 3、对象

若干个键值对

````javascript
var 对象名 = {
	属性名：属性值，
	属性名：属性值，
	属性名：属性值
}
//定义了一个person对象，它有四个属性
var person = {
	name:"Tom",
	age:3,
	email:"123456798@QQ.com",
	score:66
}
````

==Js中对象，`{…}`表示一个对象，建制对描述属性xxx：xxx，多个属性之间用逗号隔开，最后一个属性不加逗号==



==JavaScript中的所有的键都是字符串，值是任意对象！==



1、对象赋值



2、使用一个不存在的对象属性，不会报错！undefined

![](https://img-blog.csdnimg.cn/20200508155917394.png)



 3、动态的删减属性，通过delete删除对象的属性

**格式：**

````javascript
delete 对象名.属性名	
````

**示例：**

![](https://img-blog.csdnimg.cn/20200508160429505.png)



4、动态的添加，直接给新的属性添加值即可

**格式：**

````javascript
对象名.新属性名 = 新属性值
````



**示例：**

![](https://img-blog.csdnimg.cn/20200508160409465.png)



 5、判断属性值是否在这个对象中！xxx in xxx

**示例：**

![](https://img-blog.csdnimg.cn/20200508160704412.png)



## 4、流程控制

if...else语句、while循环、do...while循环、for循环语法就不多赘述了

==**注意：**==

> 1、while死循环只能关闭浏览器解决
>
> 2、for循环控制变量定义用let



**forEach循环**

> ES5.1特性

![](https://img-blog.csdnimg.cn/20200508162100917.png)



**for …in方法**

[for...in用法文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)



## 5、Map和Set

> ES6的新特性~

Map 形式为[key，value]的数组。

````javascript
//构造示例
var map = new Map(['tom',100],['jack',90],['haha',80]]);

//通过key获得value
var name = map.get('tom');

//新增或修改
map.set('admin',123456);

//删除
map.delete("tom");
````



Set：无序不重复的集合（Set中的元素只会**出现一次**，即 Set 中的元素是唯一的。）

````javascript
//添加
set.add(2);

//删除
set.delete(1);

//是否包含某个元素
console.log(set.has(3));
````



## 6、iterator

==**for···in与for···of的区别**==

````javascript
//for...in示例
var arr = [3,4,5]
for(var x in arr){
    console.log(x)
}
````

> //控制台输出下标
>
> 0,1,2	



````javascript
//for...of示例
var arr = [3,4,5]
for(var x in arr){
    console.log(x)
}
````

> //控制台输出数据
>
> 3,4,5



**遍历Map**

示例：

![](https://img-blog.csdnimg.cn/20200508164125573.png)



**遍历set**

示例：

![](https://img-blog.csdnimg.cn/20200508164144469.png)



# 函数

==**函数与对象的区别**==

两个一样，只是放的位置不同



## 1、定义函数

> 定义方式一

**示例:**

````javascript
//绝对值函数
function abs(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}
````

==如果没有执行return，函数执行完也会返回结果，结果就是undefined==

> 定义方式二

**示例：**

````javascript
var abs = function(x){
    if(x>0){
        return x;
    }else{
        return -x;
    }
}
````

==`function(x){…}`这是一个匿名函数。但是可以吧结果赋值给abs，通过abs就可以调用函数！==
 方式一和方式二等价！



==参数问题：**javaScript可以传任意个参数，也可以不传递参数~**==



### 疑问2：参数进来是否存在问题？假设不存在参数，如何规避？

````javascript
var abs = function(x){
    //手动抛出异常来判断参数是否存在
    if(typeof x!=='number'){
        throw 'Not a Number';
    }
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}
````



> arguments	\\来规避不存在参数问题

`arguments`代表，传递进来的所有参数，是一个数组！

````javascript
var abs = function(x){
    
    console.log("x=>"+x);
    
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}
````



---

### 疑问3：arguments包含所有的参数，如何排除已有参数，使用多余的参数来进行附加操作？

> rest

**以前：**

![](https://img-blog.csdnimg.cn/20200508183752806.png)

ES6引入的新特性，获取除了已经定义的参数之外的所有参数~…

![](https://img-blog.csdnimg.cn/20200508183918899.png)

 ==**rest参数只能写在最后面，必须用…标识。**==



## 2、变量的作用域

在javascript中，==**var定义变量实际是有作用域的。**==



==只要理解了方法调用在栈内存与堆内存的原理就能理解下面这几个问题==

**函数体重声明，则在函数体外不可以使用**

*案例：*

````javascript
function qj(){
    var x = 1;
    x = x + 1;
}
x = x+2;	//bug：Uncaught ReferenceError: x is not defined=
````



**如果两个函数使用了相同的变量名，只要在函数内部就不冲突**

*示例：*

````javascript
function qj(){
    var x = 1;
    x = x + 1;
}

function qj2(){
    var x = 'A';
    x = x + 1;
}
````



**内部函数可以访问外部函数的成员，反之则不行**

*示例：*

````javascript
function qj(){
    var x = 1;
    
    //内部函数可以访问外部函数的成员，反之则不行
    function qj2(){
        var y = x + 1;
    }
    
    var z = y +1;// bug:Uncaught ReferenceError: y is not defined
}
````



**假设:**内部函数变量和外部函数变量，重名！

````javascript
function qj() {
    var x = 1;

    function qj2() {
        var x = 'A';
        console.log('inner' + x);
    }

    console.log('outer' + x);
    qj2();
}
````

**输出结果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/f4f33778cd9049c9a28bae0cf44771eb.png#pic_center)




**假设：**在JavaScript中，函数查找变量从自身函数开始~， 由“内”向“外”查找，**假设：**外部存在这个同名的函数变量，则内部函数会屏蔽外部函数的变量。

> 什么是提升变量的作用域？

````javascript
function qj() {
    var x = "x"+y;//y虽然没有被声明就被调用了，但是JS会自动声明，只是没有值
    console.log(x);
    var y = 'y';
}
````

**输出结果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/4b9dfc79639b4b28b35923be71217ec8.png#pic_center)




function qj()等价于

````javascript
function qj2() {
    var y;
    
    var x = "x"+y;
    console.log(x);
    var y = 'y';
}
````

== **说明：js执行引擎，自动提升了y的声明，但是不会提升变量y的赋值；**==

PS：这个是在javascript建立之初就存在的特性。

== 养成规范：所有 的变量定义都放在函数的头部，不要乱放，便于代码维护；==

---

> 全局变量

==**全局对象window**==

```javascript
//证明
var x ='xxx';
alert(x);
alert(window.x);//默认所有的全局变量，都会自动绑定在window对象下；
```



==**alert() 这个函数本身也是一个`window`的变量；**==

````javascript
//证明
var x ='xxx';
window.alert(x);	//二者输出结果一样
alert(x);
````

==**alert()系统方法可以被自定义方法给覆盖掉**==

````javascript
//证明
var x ='xxx';

window.alert(x);

var old_alert = window.alert;	//保存alert方法

window.alert = function (){	//创建的新方法将原先的alert方法覆盖掉了

};
//发现alert（）失效了
window.alert(123);

//恢复
window.alert = old_alert;
window.alert(456);
````

==**说明：**==

javascript实际上只有一个全局作用域，任何变量（函数也可以视为变量），假设没有在函数作用范围内找到，就会向外查找，如果在全局作用域都没有找到，就会报错 `RefrenceError`



> 规范

### 为什么要有规范？

由于我们的所有变量都会绑定到window上。如果不同的js文件，使用了相同的全局变量，就会产生冲突



### 如何减少冲突？

==**把自己的代码全部放入自己定义的唯一空间名字中，降低全局命名冲突问题~**==

*示例：*

![](https://img-blog.csdnimg.cn/20200508230620266.png)

JQuery就是用来干这个的。



> 局部作用域

### 什么是局部作用域冲突？

*示例：*

````javascript
function aaa(){
    for (var i=0;i<10;i++){
        console.log(i);
    }
    console.log(i+1); //i 出了这个作用域还可以使用
}
````

*输出结果*：

![在这里插入图片描述](https://img-blog.csdnimg.cn/b9f805f9aabb44f1ad44c642301218ba.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_10,color_FFFFFF,t_70,g_se,x_16#pic_center)




### 怎么解决局部作用域冲突问题？

==**ES6的let关键字，解决了局部作用域冲突的问题！**==

*示例：*

````javascript
function aaa(){
    for (let i=0;i<10;i++){
        console.log(i);
    }
    console.log(i+1); //Uncaught ReferenceError: i is not defined
}
````

 ==**建议用let去定义局部作用域的变量；**==



> 常量

### 在ES6之前，怎么定义常量?

只有用全部大写字母命名的变量就是常量；==**建议不要修改这样的值。**==



#### 为什么建议不要修改这样的值。？

原本不能变的常量，可以随便改变

*示例：*

![](https://img-blog.csdnimg.cn/20200508231525623.png)



### ES6之后，怎么定义常量?

引入了常量关键字 `const`

*示例：*

![](https://img-blog.csdnimg.cn/20200508232049107.png)



## 3、方法

> 定义方法

==**方法就是把函数放在对象的里面，对象只有两个东西：属性和方法**==

*示例：*

````javascript
var kuangshen = {
    name : '秦疆',
    bitrh: 2000,
    //方法
    age:function(){
        //今年-出生的年
        var now = new Date().getFullYear();
        return now-this.bitrh;
    }
}
````

*控制台输入*

````javascript
//调用属性
kuangshen.name
//调用方法，一定要带（）
kuangshen.age()
````



### this代表什么？

==**this是无法指向的，是默认指向调用它的那个对象的；**==

*解释：*

将上述代码中的`age:function()`拆解：

````javascript
funtion getAge(){
    //今年-出生的年
    var now = new Date().getFullYear();
    return now-this.bitrh;
}

var kuangshen = {
    name : '秦疆',
    bitrh: 2000,
    age:getAge
}
````

*控制台输入(`>`表示输出)：*

````javascript
kuangshen.age()	
>22
getAge()
>NaN	//由于此时this没有指明具体指向哪个对象，所以输出NaN
````



> apply

### apply用来干什么？

可以直接给this指明对象，控制this指向

*示例*

````javascript
funtion getAge(){
    //今年-出生的年
    var now = new Date().getFullYear();
    return now-this.bitrh;
}

var kuangshen = {
    name : '秦疆',
    bitrh: 2000,
    age:getAge
};

var xiaoming ={
    name:'小明',
    bitrh:2000,
    age: getAge
}
````

*控制台输入(`>`表示输出)：*

````javascript
getAge.apply(xiaoming,[]);//this指向xiaoming，参数为空
>22
````



# 内部对象

> 标准对象

*控制台输入（`>`输出）*

````javascript
typeof 123
'number'
typeof `123`
'string'
typeof true
'boolean'
typeof NaN
'number'
typeof []	//数组
'object'
typeof {}	//对象
'object'
typeof Math.abs
'function'
typeof undefined
'undefined'
````



## 1、Date

**基本使用**

````javascript
var now = new Date();
now.getFullYear();	//年
now.getMonth();		//月	0~11 0代表1月
now.getDate();		//日
now.getDay();		//星期几
now.getHours();		//时
now.getMinutes();	//分
now.getSeconds();	//秒

now.getTime();	//时间戳 全世界统一从1970 1.1 0：00：00 毫秒数
````



**时间戳转换**

*示例：*

```javascript
var now = new Date(1646875961559);
```

*控制台输入（`>`输出）*

````javascript
now.toLocaleString()	//转换本地时区
>'2022/3/10 09:32:41'
now.toGMTString()		//转换GMT时区
>'Thu, 10 Mar 2022 01:32:41 GMT'
````



## 2、JSON

### JSON是什么？

- JSON是一种轻量级的数据交换格式
- 理想的数据交换语言



我的理解：JSON能把对象和对象中的属性转换成字符，便与传输处理。同时也可以将字符转换成对象，还原成想要的数据。



###  为什么用JSON？

* 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。



==**在javascript中，一切皆为对象，任何js支持的类型都可以用JSON表示**==



### JSON表示格式：

* 对象都用{ }
* 数组都用[ ]
* 所有的键值对 都是用key:value



### JSON字符串和JS对象转化

*示例：*

````javascript
var user = {
    name:"qinjiang",
    age:3,
    sex:'男'
}

//对象转化为json字符串{"name":"qinjiang","age":3,"sex":"男"}
var jsonUser = JSON.stringify(user);

//json 字符串转化为对象 参数为json字符串
var obj = JSON.parse('{"name":"qinjiang","age":3,"sex":"男"}');
````



### JSON和JS对象有什么区别？

个人理解：前者是字符串，后者是对象。

*示例：*

````javascript
var obj = {a:'hello',b:'hellob'};
var json= '{"a":"hello","b":"hellob"}'
````



## 3、AJAX

- 原生的js写法 xhr异步请求
- jQuery封装好的方法$(#name).ajax("")
- axios请求



#  面向对象编程

## 1、什么是面向对象编程

我认为这篇博客解释的很清楚，[什么是面向对象](https://blog.csdn.net/ThinkWon/article/details/100667386)。

在谈面向对象编程，首先需要了解什么是面向过程编程

### 什么是面向==*过程*==编程?

把需求按照步骤分解实现。

>  个人理解：

打个比方你想吃一碗面，以面向过程解决这个需求有以下步骤

1、准备面粉

2、和面

3、煮面

4、吃面



### 什么是面向==*对象*==编程？

类：模板

对象：具体实例

> 个人理解：

还是以吃一碗面为例，以面向对象思维就是

1、下馆子

2、吃

面向对象的底层还是面向过程，但是别人以及把过程抽象成类，而我们只需要会用，即在轮子的基础上造车，而不是花费时间去造轮子。



## Javascript的特别之处

> 原型对象

就是父类，`__ proto __`可以将对象随意指向另一个对象。

*示例：*

````javascript
var Student={
    name: "qinjiang",
    age:3
    run:function(){
        console.log(this.name + "run....");
    }
};

var xiaoming ={
    name:"xiaoming"
};

//原型对象
xiaoming.__proto__ = Student;

var Bird = {
    fly: function(){
        console.log(this.name +"fly....");
    }
};

//小明 指向 Bird
xiaoming.__proto__ = Bird;
````



### ES6前是如何定义一个类？

*示例：*

````javascript
function Student(name){
    this.name = name;
}

//给student新增一个方法
Student.prototype.hello = function() {
    alert('Hello')
};
````



> class继承

class关键字，是在ES6引入的

### ES6之后如何定义一个类、属性、方法？

*示例：*

````javascript
//定义一个学生的类
class Student{
    constructor(name){
        this.name = name;
    }
    
    //定义一个hello方法
    hello(){
        alert('hello')
    }
}

//创建对象
var xiaoming = new Student("xiaoming");
var xiaohong = new Student("xiaohong");

//调用对象方法
xiaoming.hello();
````



### 如何继承？

*示例：*

````javascript
class Student{
    constructor(name){
        this.name = name;
    }
    hello(){
        alert('hello');
    }
}

//XiaoStudent 继承 Student
class XiaoStudent extends Student{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
    myGrade(){
        alert('我是一名小学生');
    }
}

var xiaoming = new Student("xiaoming");
var xiaohong = new XiaoStudent("xiaohong",1);
````

*控制台输出（>输入）:*

![在这里插入图片描述](https://img-blog.csdnimg.cn/42c6b81ff1164800b66f7f5b34eb93d6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center)


**说明：类的本质是==对象原型==**



> 原型链

### _ proto _与原型链到底是什么？

这篇博客[javascript——原型与原型链](https://www.cnblogs.com/loveyaxin/p/11151586.html)能更好地帮助理解。

![](https://img-blog.csdnimg.cn/img_convert/516f73db997267259eab36da7079911a.png)



# ==操作BOM对象==

> 浏览器介绍

这就不详细介绍了。



### 什么是BOM？

浏览器对象模型

B：Browser 浏览器

O：Object 对象

M：Mode 模型



## 常见的BOM对象

> window	(浏览器窗口)

*控制台输入（>输出）*

````javascript
//页面弹窗
window.alert(1)
>undefined
//页面内高
window.innerHeight
>458
//页面内宽
window.innerWidth
>867
window.outerHeight
>917
window.outerWidth
>884
//随浏览器窗口大小而改变
````



> Navigator 	(封装了浏览器的信息)	(不建议使用)

*控制台输入（>输出）*

````javascript
//名
navigator.appName
>'Netscape'
//版本
navigator.appVersion
>'5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
//代理
navigator.userAgent
>'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
//平台
navigator.platform
>'Win32'
````

大多数时候，我们不会使用navigator对象，==因为会被人为修改!==
**==不建议使用这些属性来判断和编写代码==**



> screen (屏幕尺寸)

````javascript
screen.height
>943
screen.width
>1676
````



> location	(当前页面的URL信息)	（重要）

*控制台输入（>输出）*

````javascript
location
>......
//主机
>host: "cn.bing.com"
//当前指向的位置
>href: "https://cn.bing.com/"
//协议
>protocol: "https:"
//刷新网页
>reload: ƒ reload()
//设置新的地址
location.assign('新地址名')
````



> document	（当前的页面，HTML DOM文档树）（内容DOM）

*控制台输入（>输出）*

````javascript
//显示文档标题
document.title
>'必应'
//修改文档标题
'Lao'
````

![在这里插入图片描述](https://img-blog.csdnimg.cn/d18049e241e74821a7127f984caa8919.png#pic_center)




**获取具体的文档树节点**

*示例:*

````html
<dl id="app">
    <dt>Java</dt>
    <dd>JavaSE</dd>
    <dd>JavaEE</dd>
</dl>

<script>
    var dl = document.getElementById('app');
</script>
````



**获取cookie**

*控制台输入（>输出）*

````javascript
document.cookie
>'MUID=28E2A9356FF266B63B13B...'
````



### 劫持cookie原理

可以看看这篇博客[Web安全之Cookie劫持](https://developer.aliyun.com/article/193032)



> history	（不建议使用）

````javascript
history.back()	//后退
history.forward()	//前进
````



# ==操作DOM对象==

DOM：文档对象模型

> 核心

==浏览器网页就是一个Dom树形结构！==

> 常见操作：

- 更新：更新Dom节点
- 遍历Dom节点：得到Dom节点
- 删除：删除一个Dom节点
- 添加：添加一个新的节点

PS:要操作一个Dom节点，就必须要先获得这个Dom节点



> 获得Dom节点

*控制台输入（>输出）*

PS:前提首先自己写一个Dom树

````javascript
//跟Css选择器一样
document.getElementsByTagName('标签名')
document.getElementsById('Id名')
document.getElementsByClassName('类名')
var father = document.getElementsById('father')

var childrens = father.children;	//获取父节点下的所有子节点
father.firstChild	//第一个子节点
father.lastChild	//最后一个子节点
````



> 更新节点

==首先还是要获取节点才能对节点进行操作。==



**操作文本：**

* `.innerText='value'`修改文本的值
* `.innerHTML='<strong>value</strong>'`可以解析超文本标签



**操作css：**

````javascript
.style.coler = 'yellow';	//属性使用 字符串 包裹
.style.fontSize = '20px';	// css中的- 转 驼峰命名法
.style.padding = '2em'
````



> 删除节点

### 如何删除节点？

1、获取父节点

2、通过父节点删除自己

*示例：*

````Html
<div id ="father">
    <h1>h1</h1>
    <p id="p1">p1</p>
    <p class="p2">p2</p>
</div>
<script>
    //获取父节点
    var self = document.getElementById('p1')；
    var father = p1.parentElement;
    //通过父节点删除自己
    father.removeChild(self)
</script>
````



### 疑问：能否用father.removeChild(father.children[index])删掉剩下的子节点？

不能，删除多个节点的时候，children是在时刻变化的，删除节点的时候一定要注意。

````html
<div id ="father">
    <h1>h1</h1>
    <p id="p1">p1</p>
    <p class="p2">p2</p>
</div>
<script>
    //获取父节点
    var self = document.getElementById('p1')；
    var father = p1.parentElement;
    
    /*
    删除是一个动态的过程
    删除第一个子节点后，后续的子节点下标也随之改变
    */
    father.removeChild(father.children[0]);
    father.removeChild(father.children[1]);
    father.removeChild(father.children[2]);
</script>
````



> 插入节点

==注意：==

获得了某个Dom节点后：

​		若dom节点是空，通过`innerHTML`就可以增加一个元素；

​		若Dom节点已经存在元素，则会产生覆盖。



## 追加

> 移动标签

*示例：将“JavaScript”移动到后面*

````html
<p id="js">JavaScript</p>
<div id="list">
    <p id="se">JavaSE</p>
    <p id="ee">JavaEE</p>
    <p id="me">JavaME</p>
</div>

<script>
    var js = document.getElementById('js');
    var list = document.getElementById('list');
    list.appendChild(js);
</script>
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab03e0e4abe6454e8acf07c92b92e3b4.png#pic_center)




> 创建一个新的标签

`document.createElement('标签');`

*示例1：在文本后面添加一个新的< P >标签*

````html
<p id="js">JavaScript</p>
<div id="list">
    <p id="se">JavaSE</p>
	<p id="ee">JavaEE</p>
	<p id="me">JavaME</p>
</div>

<script>
    var list = document.getElementById('list');
    //通过JS创建一个新的节点
    var newP = document.createElement('p');
    newP.id = 'newP';
  	// 给它一些内容
    newP.innerText = "Hello,Lao";
	// 添加文本节点 到这个list 元素
    list.append(newP);
</script>
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/ea34862e7bc14954b7ab52f345a578f6.png#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/9117c5a55a294bf8bbabbd0cfcb3096d.png#pic_center)




*示例2：创建一个标签节点*

````javascript
//创建节点
var myScript = document.creatElement('script');
//修改节点
myScript.setAttribute('type','text/javascript');
````



*示例2：创建一个style标签,修改背景颜色*

````javascript
//获取节点
var head = document.getElementsByTagName('head')[0];
var myStyle = document.createElement('style');
//设置节点内容
myStyle.setAttribute('type','text/css');
myStyle.innerHTML='body{background-color:red;}'
//添加节点
head.appendChild(myStyle);
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/77bf7277e7c9403b8996a58395c65f1d.png#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/bfb46e4f68af4bbb868e994cbb489af5.png#pic_center)




### 疑问：为什么示例2中var head = document.getElementsByTagName('head')[0]；要加[0]才生效，不加不生效?

这个问题我还在考虑，有懂的小伙伴在下面的评论区告诉我，大家一起讨论呗。



> insertBefore

`insertBefore(newNode,targetNode)`

*示例：将新的节点插入到目标节点的前面*

````javascript
var ee = document.getElementById('ee');
var js = document.getElementById('js');
var list = document.getElementById('list');
//要包含的节点.insertBefore(newNode,targetNode)
list.insertBefore(js,ee);
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/6e006c68620c4575961fdce4b4ab00a6.png#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/446aaadfe02f4389bca69add4f339146.png#pic_center)




# 操作表单（验证）

> 表单是什么？ 

form标签构建的DOM树

各种框，我就不赘述了。

==表单的目的提交信息==



> 获得要提交的信息

*示例：*

````html
<form action = "post">
    <p>
        <span>用户名：</span><input type="text" id = "username" />
    </p>
    <!--多选框的值就是定义好的value-->
    <p>
        <span>性别：</span>
        <input type = "radio" name = "sex" value = "man" id = "boy"/>男
        <input type = "radio" name = "sex" value = "woman" id = "girl"/>女
    </p>
</form>

<script>
    var input_text = document.getElementById("username");
    var boy_radio = document.getElementById("boy");
    var girl_radio = document.getElementById("girl");
    //得到输入框的值
    input_text.value
    //修改输入框的值
    input_text.value  = "value";

    //对于单选框，多选框等等固定的值，boy_radio.value只能取到当前的值
    boy_radio.checked;//查看返回的结果，是否为true，如果为true，则被选中。
    girl_radio.checked = true;//赋值

</script>
````



> 提交表单。md5加密密码，表单优化

## 1、初级验证

`required`和`placeholder`



## 2、高级验证

*示例：通过一个函数来传递输入值*

````html
<!--模拟表单-->
<form action = "post" >
    <p>
        <span>用户名：</span><input type="text" id = "username" />
    </p>
    <p>
        <span>密码：</span><input type="password" id = "password" />
    </p>

    <!--绑定事件 onclick 被点击-->
    <button type = "button" onclick="aaa()">提交</button>

</form>

<script>
    function aaa(){
        var uname = document.getElementById('username');
        var  pwd = document.getElementById('password');
        console.log(uname.value);
        console.log(pwd.value);
    }
</script>
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/5e26e72af785470e9d90490054824496.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_10,color_FFFFFF,t_70,g_se,x_16#pic_center)




### 如何用MD5实现表单加密？

引入`MD5加密工具类`

````html
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <!--MD5加密工具类-->
    <script src = "https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
</head>
````

#### 未加密版

*示例：==按键绑定==事件*

==**未作加密前**==的代码

````html
<form action = "#" method="post">
    <p>
        <span>用户名：</span><input type="text" id = "username" name="username"/>
    </p>
    <p>
        <span>密码：</span><input type="password" id = "password" name="password" />
    </p>

    <!--绑定事件 onclick 被点击-->
    <button type = "submit" onclick="aaa()">提交</button>

</form>

<script>
    function aaa(){
        var uname = document.getElementById('username');
        var  pwd = document.getElementById('password');
        console.log(uname.value);
        console.log(pwd.value);
    }
</script>
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/5a3207f989cf422da8c521ee365a7186.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


**存在不足：**

* 密码太直观的暴露。



==**注意：**==

````html
<span>用户名：</span><input type="text" id = "username" name="username"/>
<span>密码：</span><input type="password" id = "password" name="password" />
````

这两句代码必须有name属性才能被抓到这个值



#### 加密但不美观版

==**未作加密后**==的代码

````html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <!--MD5加密工具类-->
    <script src = "https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
</head>
<body>
<form action = "#" method="post">
    <p>
        <span>用户名：</span><input type="text" id = "username" name="username"/>
    </p>
    <p>
        <span>密码：</span><input type="password" id = "password" name="password" />
    </p>

    <!--绑定事件 onclick 被点击-->
    <button type = "submit" onclick="aaa()">提交</button>

</form>

<script>
    function aaa(){
        var uname = document.getElementById('username');
        var  pwd = document.getElementById('password');
        console.log(uname.value);
        console.log(pwd.value);
        //MD5算法
        pwd.value= md5(pwd.value);
        console.log(pwd.value);
    }
</script>

</body>
</html>
````

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/3572e52ad5be491a8853bcebd7c248dd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


**存在不足：**

* 点击`提交`的瞬间，密码栏的密码变长了，影响美观
* 依旧可以通过`name`属性获得密码，存在安全问题



#### 相对完美版

*示例：==表单绑定==事件*

````html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <!--MD5加密工具类-->
    <script src = "https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
</head>
<body>
<!--表达绑定提交事件
    οnsubmit= 绑定一个提交检测的函数，true，false
    将这个结果返回给表单，使用onsubmit接收
-->
<form action = "https://www.baidu.com" method = "post" onsubmit = "return aaa()">
    <p>
        <span>用户名：</span><input type="text" id = "username" name = "username"/>
    </p>
    <p>
        <span>密码：</span><input type="password" id = "password" />
    </p>
    <input type = "hidden" id = "md5-password" name = "password">

    <!--绑定事件 onclick 被点击-->
    <button type = "submit">提交</button>

</form>

<script>
    function aaa(){
        alert(1);
        var username = document.getElementById("username");
        var pwd = document.getElementById("password");
        var md5pwd = document.getElementById("md5-password");
        //pwd.value = md5(pwd,value);
        md5pwd.value = mad5(pwd.value);
        //可以校验判断表单内容，true就是通过提交，false就是阻止提交
        return true;

    }
</script>

</body>

</html>
````



# jQuery

### javaScript和jQuery有什么关系？

jQuery库，里面存在大量的JavaScript函数



> 获取jQuery

==注意：==

笔记中记录只是粗略步骤，具体操作看[【狂神说Java】初识jQuery及公式](https://www.bilibili.com/video/BV1JJ41177di?p=26)

**第一种：本地导入**

1、下载，[jQuery官网下载地址](https://jquery.com/)

2、将下载文件导入项目文件中

3、在`head`标签内，用外链式引入到html文件中



**第二种：在线导入**

1、寻找在线资源，[jQuery cdn加速](https://www.jq22.com/cdn/)

2、在`head`标签内，用外链式引入到html文件中



> 使用jQuery

### 公式:

**$(selector).action()**

*示例：*

````html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script></head>
<body>
<a href="" id = "test-jquery">点我</a>
<script>
    //选择器就是css选择器
    $('#test-jquery').click(function(){
        alert('hello,jQuery!');
    });
</script>
</body>
</html>
````



> 选择器

````javascript
//原生js，选择器少，麻烦不好记
//标签
document.getElementByTagName();
//id
document.getElementById();
//class
document.getElementByClassName();

//jQuery css中的选择器它全部都能用！
$('p').click();//标签选择器
$('#id1').click();//id选择器
$('.class1').click;//class选择器
````

[文档工具站](https://jquery.cuishifeng.cn/)



> 事件

鼠标事件、键盘事件，其他事件，这些就不赘述了



*示例：*

````Html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script></head>
    <style>
        #divMove{
            width:500px;
            height:500px;
            border:1px solid red;
        }
    </style>
</head>
<body>
<!--要求：获取鼠标当前的一个坐标-->
mouse：<span id = "mouseMove"></span>
<div id = "divMove">
    在这里移动鼠标试试
</div>
<script>
    //当网页元素加载完毕之后，响应事件
    //$(document).ready(function(){})
    $(function(){
        $('#divMove').mousemove(function(e){
            $('#mouseMove').text('x:'+e.pageX+"y:"+e.pageY)
        })
    });
</script>
</body>
</html>
````



> 操作DOM

#### 节点文本操作

````javascript
$('#test-ul li[name=python]').text();//获得值
$('#test-ul li[name=python]').text('设置值');//设置值
$('#test-ul').html();//获得值
$('#test-ul').html('<strong>123</strong>');//设置值
````



#### CSS的操作

````javascript
$('#test-ul li[name=python]').css({"color","red"});
````



#### 元素的显示和隐藏

本质display:none

````javascript
$('#test-ul li[name=python]').show();
$('#test-ul li[name=python]').hide();
````



#### 未来ajax()

````javascript
$('#form').ajax()

$.ajax({url:"test.html",context:document.body,success:function(){
	$(this).addClass("done");
}})
````



# 总结

1、多看源码，推荐网站[源码之家](https://www.mycodes.net/153/)

2、多扒网站，按`F12`审查元素，按`delete`键删掉非关键元素（注意：CSS不能随意抄别人的可能会侵权）



## 推荐网站

组件UI设计：

[element](https://element.eleme.cn/2.0/#/zh-CN/component/installation)

[ant.design](https://ant.design/components/overview-cn/)

````html
<body>
  <a href="" id = "test-jquery">点我</a>
    <script>
      //选择器就是css选择器
      $('#test-jquery').click(function(){
          alert('hello,jQuery!');
      });
  </script>
</body>
````

>选择器

````javascript
//原生js，选择器少，麻烦不好记
//标签
document.getElementByTagName();
//id
document.getElementById();
//class
document.getElementByClassName();

//jQuery css中的选择器它全部都能用！
$('p').click();//标签选择器
$('#id1').click();//id选择器
$('.class1').click;//class选择器
````

[文档工具站](https://jquery.cuishifeng.cn/)



> 事件

鼠标事件、键盘事件，其他事件，这些就不赘述了



*示例：*

````Html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Title</title>
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script></head>
    <style>
        #divMove{
            width:500px;
            height:500px;
            border:1px solid red;
        }
    </style>
</head>
<body>
<!--要求：获取鼠标当前的一个坐标-->
mouse：<span id = "mouseMove"></span>
<div id = "divMove">
    在这里移动鼠标试试
</div>
<script>
    //当网页元素加载完毕之后，响应事件
    //$(document).ready(function(){})
    $(function(){
        $('#divMove').mousemove(function(e){
            $('#mouseMove').text('x:'+e.pageX+"y:"+e.pageY)
        })
    });
</script>
</body>
</html>
````



> 操作DOM

#### 节点文本操作

````javascript
$('#test-ul li[name=python]').text();//获得值
$('#test-ul li[name=python]').text('设置值');//设置值
$('#test-ul').html();//获得值
$('#test-ul').html('<strong>123</strong>');//设置值
````



#### CSS的操作

````javascript
$('#test-ul li[name=python]').css({"color","red"});
````



#### 元素的显示和隐藏

本质display:none

````javascript
$('#test-ul li[name=python]').show();
$('#test-ul li[name=python]').hide();
````



#### 未来ajax()

````javascript
$('#form').ajax()

$.ajax({url:"test.html",context:document.body,success:function(){
	$(this).addClass("done");
}})
````



# 总结

1、多看源码，推荐网站[源码之家](https://www.mycodes.net/153/)

2、多扒网站，按`F12`审查元素，按`delete`键删掉非关键元素（注意：CSS不能随意抄别人的可能会侵权）



## 推荐网站

组件UI设计：

[element](https://element.eleme.cn/2.0/#/zh-CN/component/installation)

[ant.design](https://ant.design/components/overview-cn/)

