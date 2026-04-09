---
id: javascript-jsChallenger-basics-note
slug: /javascript-jsChallenger-basics-note
title: Basics
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JSchallenger
---
# 前言

[JSchallenger](https://www.jschallenger.com/)

# Javascript Basics（基础）

## Sum two numbers

> 需求：
>
> Write a function that takes two numbers (a and b) as argument
>
> Sum a and b
>
> Return the result

**我的提交（作者答案）**

````javascript
function myFunction(a, b) {
   return a + b;
}
````



### 涉及知识（加法）

#### 加法

* 如果两个操作数都是数值，遵循下列规则

  |          操作数          | 返回结果  |
  | :----------------------: | :-------: |
  |    有一个操作数时NaN     |    NaN    |
  |  `Infinity`+`Infinity`   | Infinity  |
  | `-Infinity`+ `-Infinity` | -Infinity |
  |  `Infinity`+`-Infinity`  |    NaN    |
  |       `+0` + `+0`        |    +0     |
  |       `-0` + `-0`        |    -0     |
  |       `+0` + `-0`        |    +0     |

* 如果有一个操作数是字符串，遵循下列规则

  |                        操作数                        |      结果       |
  | :--------------------------------------------------: | :-------------: |
  |              `"string1"` + `"string2"`               | ”stringstring2“ |
  | 只有一个操作数是字符串，则将另一个操作数转换为字符串 | 两个字符串拼接  |

  ==注意：不同操作数转换成字符方法不同==

  |       操作数        |   使用方法   |
  | :-----------------: | :----------: |
  | 对象、数值或布尔值  | `toString()` |
  | `undefined`和`null` |  `String()`  |

  ==注意：如果操作数为上述表中的操作数，则调用它们的相应方法取得相应字符串值，然后再应用前面关于字符串的规则。==



## Comparison operators, strict equality

> 需求：
>
> Write a function that takes two values, say a and b, as arguments
>
> Return true if the two values are equal and of the same type

**我的提交（作者答案）**

````javascript
function myFunction(a, b) {
  return a === b;
}
````



### 涉及知识（相等操作符）

#### 相等和不等

|      相等      |      不等      |
| :------------: | :------------: |
|      `==`      |      `!=`      |
| 相等返回`true` | 不等返回`true` |

* 都会先转换操作数（强制转换），再比较相等性

* 转换不同数据类型时，遵循基本规则

  * 布尔值比较，false为0，true为1

    |   表达式   |  值   |
    | :--------: | :---: |
    | false == 0 | true  |
    | true == 1  | true  |
    | true == 2  | false |

  * 字符串比较，先将字符串转换成数值（ASCII码数值）

    |  表达式  |  值  |
    | :------: | :--: |
    | "5" == 5 | true |

  * 对象比较，要调用对象的`valueOf()`方法，得到基本类型值再比较

* 比较时，遵循的规则

  * `null`和`undefined`是相等的

    |      表达式       |  值  |
    | :---------------: | :--: |
    | null == undefined | true |

  * 比较相等性之前，不能将`null`和`undefined`转换成其他任何值

    |     表达式     |  值   |
    | :------------: | :---: |
    | undefined == 0 | false |
    |   null == 0    | false |

  * 有一个操作数是`NaN`。相等返回`false`，不相等返回`true`（==注意：即使两个操作数都是`NaN`，`NaN`不等于`NaN`，返回`false`==）

    |    表达式    |  值   |
    | :----------: | :---: |
    | "NaN" == NaN | false |
    |   5 == NaN   | false |
    |  NaN == NaN  | false |
    |  NaN != NaN  | false |

  * 两个操作数都是对象，如果两个操作数都指向同一个对象，则相等返回`true`,相反返回`false`



#### 全等和不全等

| 全等  | 不全等 |
| :---: | :----: |
| `===` | `!==`  |

**`全等和不全等`与`相等和不等`的区别：**

|                          | `===`和`!==` | `==`和`!=` |
| :----------------------: | :----------: | :--------: |
| 比较前操作数是否需要转换 |    不需要    |    需要    |

*示例*

````javascript
var result1 ={"55" == 55 };		//true
var result2 ={"55" === 55 };	//false

var result3 ={"55" != 55 };		//false
var result4 ={"55" !== 55 };	//true

var result5 ={null == undefined };	//true
var result6 ={null === undefined };	//false
````

==为了保持代码中数据类型的完整性，推荐使用全等和不全等操作符==



## Get type of value

> 需求
>
> Write a function that takes a value as argument
>
> Return the type of the value

**我的提交（作者答案）**

````javascript
function myFunction(a) {
   return typeof a;
}
````



### 涉及知识（typeof操作符）

#### typeof操作符

`typeof`：检测变量的数据类型

> 格式： typeof 所需监测变量名

| 返回字符串 |  变量类型  |
| :--------: | :--------: |
| undefined  |   未定义   |
|  boolean   |   布尔值   |
|   string   |   字符串   |
|   number   |    数值    |
|   object   | 对象或null |
|  function  |    函数    |



## Get nth character of string

> 需求：
>
> Write a function that takes a string (a) and a number (n) as argument
>
> Return the nth character of 'a'

**我的提交**

````javascript
function myFunction(a, n) {
   return a.charAt(n-1);
}
````

**作者答案**

````javascript
function myFunction(a, n) {
   return a[n - 1];
}
````



### 涉及知识（charAt()方法、数组读取）

#### `charAt()`方法

* 返回指定位置的字符，返回字符长度为1。
* 格式：**stringObject.charAt(index)**
  * `stringObject`：字符串对象
  * `index`：==必需==，字符所在的字符串中的下标（==注意：字符串中第一个字符的下标是 0。如果参数 `index` 不在 0 与 string.length 之间，该方法将返回一个空字符串==）



#### 数组读取

* 在读取和设置数组的值时，要用`[ ]`并提供相应值的基于0的数字索引。
* 格式：**array[index]**
  * `array`：数组名
  * `index`：索引



## Remove first n elements of an array

> 需求：
>
> Write a function that takes an array (a) as argument
>
> Remove the first 3 elements of 'a'
>
> Return the result

**我的提交**

````javascript
function myFunction(a) {
   return a.slice(3,a.length);
}
````

**作者答案**

````javascript
function myFunction(a) {
   return a.slice(3);
}
````



### 涉及知识（slice()方法）

#### slice()方法

* 以新的数组对象，返回数组中被选中的元素
* 格式：**array.slice(start,end)**
  * `array`：数组名
  * `start`：可选。整数，指定从哪里开始选择
    * 省略：类似于`0`
    * 正数：从数组的**头部**进行选择（第一个元素的索引为0）
    * 负数：从数组的**末尾**进行选择
  * `end`：可选。整数，指定结束选择的位置（==选择不包括`end`索引下的元素==）
    * 省略：将选择从开始位置到数组末尾的所有元素
    * 负数：从数组**末尾**进行选择
* 返回值：新的数组，包含选定的元素。
* 不会改变原始数组



## Get last n characters of string

> 需求：
>
> Write a function that takes a string as argument
>
> Extract the last 3 characters from the string
>
> Return the result

**我的提交（作者答案）**

````javascript
function myFunction(str) {
   return str.slice(-3);
}
````



### 涉及知识（slice()方法）

[详细参考](#slice()方法)



## Get first n characters of string

> 需求：
>
> Write a function that takes a string (a) as argument
>
> Get the first 3 characters of a
>
> Return the result

**我的提交（作者答案）**

````javascript
function myFunction(a) {
   return a.slice(0, 3);
}
````



### 涉及知识（slice()方法）

[详细参考](#slice()方法)



## Extract first half of string

> 需求：
>
> Write a function that takes a string (a) as argument
>
> Extract the first half a
>
> Return the result

**我的提交（作者答案）**

````javascript
function myFunction(a) {
   return a.slice(0, a.length / 2);
}
````



### 涉及知识（slice()方法）

[详细参考](#slice()方法)



## Remove last n characters of string

> 需求：
>
> Write a function that takes a string (a) as argument
>
> Remove the last 3 characters of a
>
> Return the result

**我的提交（作者答案）**

````javascript
function myFunction(a) {
   return a.slice(0, -3);
}
````



### 涉及知识（slice()方法）

[详细参考](#slice()方法)



## Return the percentage of a number

> 需求：
>
> Write a function that takes two numbers (a and b) as argument
>
> Return b percent of a

**我的提交**

````javascript
function myFunction(a, b) {
   return a/100*b;
}
````

**作者答案**

````javascript
function myFunction(a, b) {
  return b / 100 * a
}
````



### 涉及知识（乘法、除法）

#### 乘法

* 由一个`*`表示，用于计算两个数值的乘积

* 处理特殊值下，遵循特殊规则

  |       操作数类型       |                           返回结果                           |
  | :--------------------: | :----------------------------------------------------------: |
  |     `数值`*`数值`      | 常规的乘法计算。（如果乘积超过ECMAScript数值表示范围则返回`Infinity`或`-Infinity`） |
  |   有一个操作数是NaN    |                             NaN                              |
  |      `Infinity`*0      |                             NaN                              |
  |   `Infinity`*`非0值`   |                   `Infinity`或`-Infinity`                    |
  | `Infinity`* `Infinity` |                          `Infinity`                          |
  

==注意：如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。==



#### 除法

* 由一个`/`表示。

* 对特殊值的特殊处理规则

  |        操作数类型         |                           返回结果                           |
  | :-----------------------: | :----------------------------------------------------------: |
  |       `数值`/`数值`       | 常规的除法计算。（如果乘积超过ECMAScript数值表示范围则返回`Infinity`或`-Infinity`） |
  |     有一个操作数是NaN     |                             NaN                              |
  |   `Infinity`/`Infinity`   |                             NaN                              |
  |            0/0            |                             NaN                              |
  |     `非零的有限数`/0      |                   `Infinity`或`-Infinity`                    |
  | `Infinity`/`非零的有限数` |                   `Infinity`或`-Infinity`                    |

  ==注意：如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。==



## Basic JavaScript math operators

> 需求：
>
> Write a function that takes 6 values (a,b,c,d,e,f) as arguments
>
> Sum a and b
>
> Then substract by c
>
> Then multiply by d and divide by e
>
> Finally raise to the power of f and return the result
>
> Tipp: mind the order

**我的提交**

````javascript
function myFunction(a, b, c, d, e, f)
{
	var result=Math.pow(((a+b)-c)*d/e,f)
	return result;
}
````

**作者答案**

````javascript
function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}
````



### 涉及知识（Math.pow()方法）

#### Math.pow()方法

* 求幂
* 格式：**Math.pow(base,exponent)**
  * `base`：基数
  * `exponent`：指数



## Check if a number is even

> 需求：
>
> Write a function that takes a number as argument
>
> If the number is even, return true
>
> Otherwise, return false

**我的提交**

````javascript
function myFunction(a) {
   return a%2==0?true:false;
}
````

**作者答案**

````javascript
function myFunction(a) {
  return a % 2 === 0
}
````



### 涉及知识（三目运算符、求模）

#### 三目运算符

* 格式：**expression ? sentence1 : sentence2**

  * `expression`：判断表达式
  * `sentence1`：值为true时，执行语句
  * `sentence2`：值为false时，执行语句

* 类似于if语句：

  ````javascript
  if(expression){
     sentence1;
  }else{
     sentence2;
  }
  ````



#### 求模

* 求模（余数）操作符由一个`%`表示。

* 处理特殊值遵循的规则

  |         操作数类型          | 返回结果 |
  | :-------------------------: | :------: |
  |       `数值` % `数值`       | 除得余数 |
  | `无穷大值` % `有限大的数值` |   NaN    |
  |       `有限大值` % 0        |   NaN    |
  |   `Infinity`% `Infinity`    |   NaN    |
  |   `有限大值` % `无穷大值`   |  被除数  |
  |         0 % `数值`          |    0     |

  ==注意：如果有一个操作数不是数值，则在后台调用Number（）将其转换为数值，然后在应用上面的规则==



## How many times does a character occur?

> 需求：
>
> Write a function that takes two strings (a and b) as arguments
>
> Return the number of times a occurs in b

**我的提交**

````javascript
function myFunction(a, b){
	var count=0
	for(var i =0;i<b.length;i++){
		if(b.charAt(i)==a){
 			count++;
			}
	}
	return count;
}
````

**作者答案**

````javascript
function myFunction(a, b) {
  return b.split(a).length - 1
}
````



### 涉及知识（for语句、if语句、charAt()方法、一元操作符、Array.length方法）

#### for语句

* 前测试循环语句
* **格式**

````javascript
for(initialization;expression;post-loop-expression){
    statement
}
````

`initialization`：循环变量初始化表达式

`expression`：条件表达式，返回true的情况下才会进入for循环

`post-loop-expression`：循环后的表达式

`statement`：循环执行代码块



#### if语句

* 格式：

````javascript
if(condition1){
    statement1
}else if(condition2){
    statement2
}else{
    statement3
}
````

`condition`（条件）：

* 可以是任意表达式。
* 对这个表达式的求值的结果不一定式布尔值。ECMAScript会自动调用`Boolean()`转换函数将这个表达式的结果转换为一个布尔值。

`statement1`（语句1|代码块1）：

* 如果对`condition`求值的结果是true，则执行该语句

`statement3（语句3|代码块3）:

* 如果对`condition`求值的结果是false，则执行该语句



#### charAt()方法

[了解详情](#涉及知识（charAt()方法、数组读取）)



#### 一元操作符

* 只能操作一个值的操作符
  * 递增（递减）
    
    |                            |                前置型                |                后置型                |
    | :------------------------: | :----------------------------------: | :----------------------------------: |
    |          **格式**          |              ++i（--i）              |              i++（i--）              |
    | **递增和递减操作执行时间** | 包含它们的语句被求值之**前**才执行的 | 包含它们的语句被求值之**后**才执行的 |
    
    * 应用于不同值时，遵循规则
    
    |        不同类型值        |                             规则                             |
    | :----------------------: | :----------------------------------------------------------: |
    |  包含有效字符的字符串时  |            先将其转换为数字值，再执行加减1的操作             |
    | 不包含有效字符的字符串时 |                     将变量的值设置为NaN                      |
    |      布尔值false时       |                先将其转换为0再执行加减1的操作                |
    |       布尔值true时       |                先将其转换为1再执行加减1的操作                |
    |        浮点数值时        |                       执行加减1的操作                        |
    |          对象时          | 先调用对象的`valueOf()`方法以取得一个可供操作的值，然后对该值应用上述规则。如果结果是NaN，则调用`toString()`方法后再应用上述规则 |



#### Array.length方法

* 返回或设置一个数组中的元素个数。

* `length`属性的值是一个0到2^32-1的整数（即数组长度小于0，大于2的32次方 = 4294967296都为无效数组长度）

* 超出数组长度的元素值为`undefined`

* 常用方式：

  * 遍历数组

  *示例：（通过数组下标遍历数组元素，并把每个元素的值修改为原值的2倍）*

  ````javascript
  var numbers = [1, 2, 3, 4, 5];
  var length = numbers.length;
  for (var i = 0; i < length; i++) {
    numbers[i] *= 2;
  }
  // 遍历后的结果 [2, 4, 6, 8, 10]
  ````

  * 截断数组

  *示例：(数组长度大于 3，则把该数组的长度截断为 3 )*

  ````javascript
  var numbers = [1, 2, 3, 4, 5];
  
  if (numbers.length > 3) {
    numbers.length = 3;
  }
  
  console.log(numbers); // [1, 2, 3]
  console.log(numbers.length); // 3
  ````



## Check if a number is a whole number

> 需求：
>
> Write a function that takes a number (a) as argument
>
> If a is a whole number (has no decimal place), return true
>
> Otherwise, return false

**我的提交**

````javascript
function myFunction(a) {
	return a%1==0;
}
````

**作者答案**

````javascript
function myFunction(a) {
  return a - Math.floor(a) === 0
}
````



### 涉及知识（求模、Math.floor()方法）

#### 求模

[了解更多](#涉及知识（三目运算符、求模）)



#### Math.floor()方法

* 返回小于或等于一个给定数字的最大整数。（就是向下取整）
* 格式：**Math.floor(x)**
  * `x`：数值
  * 返回值：一个表示小于或等于指定数字的最大整数的数字。
* [更多示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)



## Multiplication, division, and comparison operators

> 需求：
>
> Write a function that takes two numbers (a and b) as arguments
>
> If a is smaller than b, divide a by b
>
> Otherwise, multiply both numbers
>
> Return the resulting value

**我的提交**

````javascript
function myFunction(a, b){
	var result;
	if(a<b){
   		result=a/b*1.0;
	}else{
   		result=a*b;
	}
	return result;
}
````

**作者答案**

````javascript
function myFunction(a, b) {
  return a < b ? a / b : a * b
}
````



### 涉及知识（if语句、三目运算法则）

#### if语句

[了解更多](#涉及知识（for语句、if语句、charAt()方法、一元操作符、Array.length方法）)



#### 三目运算法则

[了解更多](#涉及知识（三目运算符、求模）)



## Check whether a string contains another string and concatenate

> 需求：
>
> Write a function that takes two strings (a and b) as arguments
>
> If a contains b, append b to the beginning of a
>
> If not, append it to the end
>
> Return the concatenation

**我的提交**

````javascript
function myFunction(a, b) {
   if(a.includes(b)){
      return b+a;
   }
   return a+b;
}
````

**作者答案**

````javascript
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}
````



### 涉及知识（includes()方法、indexOf()方法）

#### includes()方法

* 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。
* 格式：**arr.includes(valueToFind[, fromIndex])**
  * `valueToFind`：需要查找的元素值
  * `fromIndex`：可选。从`fromIndex`索引处开始查找`valueToFind`
    * 负值：按升序从 `array.length + fromIndex` 的索引开始搜 （即从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）
    * 默认为0
  * 返回值：返回一个布尔值 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 
    * 在指定范围中找到`valueToFind`，返回`true`
    * 否则返回`false`
* [更多示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)



#### indexOf()方法

* 返回某个指定的字符串值在字符串中首次出现的位置
* 格式：**stringObject.indexOf(valueToFind,fromIndex)**
  * `valueToFind`：必需，需要查找的元素值
  * `fromIndex`：可选。字符串中开始检索的位置
    * 如省略该参数，则将从字符串的首字符开始检索。
  * 返回值：
    * -1：要检索的字符串值没有出现
    * 下标位置：要检索的字符串值首次出现的位置



## Round a number to 2 decimal places

> 需求：
>
> Write a function that takes a number (a) as argument
>
> Round a to the 2nd digit after the comma
>
> Return the rounded number

**我的提交（作者答案）**

````javascript
function myFunction(a) {
  return Number(a.toFixed(2));
}
````



### 涉及知识（Number()方法、toFixed()方法）

#### Number()方法

* 用于转换成数值



#### toFixed()方法

* 把数值四舍五入为指定小数位数的数字。
* 格式：**NumberObject.toFixed(num)**
  * `num`：必需。
    * 规定小数的位数，是 0 ~ 20 之间的值
    * 省略了该参数，将用 0 代替。
  * 返回值：字符串表示
* [了解更多](https://www.w3school.com.cn/jsref/jsref_tofixed.asp)
* ==注意：处理对象一定是`Number`（数值对象）==







# 结语

