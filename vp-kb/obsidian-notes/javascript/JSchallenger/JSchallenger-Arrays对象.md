---
id: javascript-arr-note
slug: /javascript-arr-note
title: Arrays对象
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JSchallenger
---
# 前言

【笔记内容】

- 关于JSchallenger中Arrays对象题目的复盘
- 本人的提交、以及做题时的思路
- 分析作者答案
- 涉及的知识快速了解，==注意：并不深入分析具体知识，只是围绕题目展开==



【笔记目的】

- 帮助本人进一步了解Javascript的Arrays对象以及涉及的方法
- 对自己做题后的复盘，进一步了解自己的不足之处



【相关资源】

- [JSchallenger](https://www.jschallenger.com/javascript-arrays)



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。
- 若是有其他的解题方法也请读者分享到评论区，一起学习，共同进步，谢谢。
- 我的提交有不足之处也恳请读者帮忙指出，不吝赐教，谢谢。

---



# Array对象快速了解

* 用于构造数组的全局对象
* JavaScript 数组的长度和元素类型都是非固定的。
* 只能用整数作为数组元素的索引，而不能用字符串。

【==PS==】**什么是数组？**

* 类似于列表的高阶对象。

![](https://img2.baidu.com/it/u=1420570021,3211639242&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=429)

> 常见操作

|                   方法                    |           描述           |
| :---------------------------------------: | :----------------------: |
|  let arr=[`数组元素1`，...，`数组元素n`]  |         创建数组         |
|            let el=arr[`索引`]             |   通过索引访问数组元素   |
| arr.forEach(function(item,index,array)){} |         遍历数组         |
|           arr.push(`添加元素`)            | 添加元素到数组的**末尾** |
|                 arr.pop()                 |  删除数组**末尾**的元素  |
|                arr.shift()                |   删除数组**头部**元素   |
|           arr.push(`目标元素`)            | arr.indexOf(`目标元素`)  |
|               arr.splice(,)               |   通过索引删除某个元素   |
|       let shallowCopy = arr.slice()       |       复制一个数组       |

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)



# JSchallenger-Arrays

## Get nth element of array

> 需求：
>
> Write a function that takes an array (a) and a value (n) as argument
>
> Return the nth element of 'a'

**我的提交（作者答案）**

```javascript
function myFunction(a, n) {
   return a[n - 1];
}
```



### 涉及知识（访问数组元素）

#### 访问数组元素

* 数组的索引是从0开始的，第一个元素的索引为0，最后一个元素的索引等于该数组的`length` 减1。
* 指定的索引是一个无效值，返回 `undefined`

> 格式

````javascript
arr[index]
````

`index`：访问数组元素目标索引

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#访问数组元素)



## Remove first n elements of an array

> 需求：
>
> Write a function that takes an array (a) as argument
>
> Remove the first 3 elements of 'a'
>
> Return the result

**我的提交（作者答案）**

```javascript
function myFunction(a) {
   return a.slice(3);
}
```



### 涉及知识（slice()方法）

#### Array.prototype.slice()

* 返回一个新的由 `begin` 和 `end` 决定的原数组的**浅拷贝**数组对象
* 原始数组不会被改变
* 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但==不包含== `end`）

> 格式

````javascript
arr.slice([begin[, end]])
````

`begin`（提取起始处的索引）：可选

* 省略：默认从 `0` 开始
* 负数：从原数组中的倒数第几个元素开始提取，到最后一个元素（包含最后一个元素）。
* 超出原数组的索引范围：返回空数组

`end`（提取终止处的索引）：可选

* 负数：在原数组中的倒数第几个元素结束抽取，到最后一个元素（不包含最后一个元素）
* 省略：会一直提取到原数组末尾。
* 大于数组的长度：也会一直提取到原数组末尾。

**返回值**：一个含有被提取元素的**新数组**。

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#%E6%8F%8F%E8%BF%B0)



## Get last n elements of an array

> 需求：
>
> Write a function that takes an array (a) as argument
>
> Extract the last 3 elements of a
>
> Return the resulting array

**我的提交（作者答案）**

```javascript
function myFunction(a) {
    return a.slice(-3);
}
```



### 涉及知识（slice()方法）

#### Array.prototype.slice()

[点击此处跳转](#Array.prototype.slice())



## Get first n elements of an array

> 需求：
>
> Write a function that takes an array (a) as argument
>
> Extract the first 3 elements of a
>
> Return the resulting array

**我的提交（作者答案）**

```javascript
function myFunction(a) {
   return a.slice(0, 3);
}
```



### 涉及知识（slice()方法）

#### Array.prototype.slice()

[点击此处跳转](#涉及知识（slice()方法）)



## Return last n array elements

> 需求：
>
> Write a function that takes an array (a) and a number (n) as arguments
>
> It should return the last n elements of a

**我的提交（作者答案）**

```javascript
function myFunction(a, n) {
  return a.slice(-n);
}
```



### 涉及知识（slice()方法）

#### Array.prototype.slice()

[点击此处跳转](#涉及知识（slice()方法）)



## Remove a specific array element

> 需求：
>
> Write a function that takes an array (a) and a value (b) as argument
>
> The function should clean a from all occurrences of b
>
> Return the filtered array

**我的提交（作者答案）**

````javascript
function myFunction(a, b) {
   return a.filter(item => item !== b);
}
````



### 涉及知识（filter()方法，箭头函数）

#### array.filter()方法

- 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
- 不会对空数组进行检测。
- 不会改变原始数组。

> 格式（==注意该格式不完整，之针对本题的格式==）

```javascript
array.filter(function(currentValue))
```

`function(currentValue)`：必需，函数，数组中的每个元素都会执行这个函数

- `currentValue`：必需。当前元素的值

**返回值**：数组。

- 包含了符合条件的所有元素。
- 没有符合条件的元素：返回空数组。

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)



------

#### 箭头函数

- 使函数表达式更简洁
- 更适用于那些本来需要匿名函数的地方
- 它不能用作构造函数

> 格式

```javascript
(param1, param2, …, paramN) => expression
(param1, param2, …, paramN) => { statements }
//相当于：(param1, param2, …, paramN) =>{ return expression; }
```

`param`：参数

`expression`：表达式

|            其他格式             |                  前提                  |
| :-----------------------------: | :------------------------------------: |
| `singleParam => { statements }` | 当**只有一个参数**时，圆括号是可选的： |
|     `() => { statements }`      | **没有参数**的函数应该写成一对圆括号。 |

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions)



## Count number of elements in JavaScript array

> 需求：
>
> Write a function that takes an array (a) as argument
>
> Return the number of elements in a

**我的提交（作者答案）**

```javascript
function myFunction(a) {
   return a.length;
}
```



### 涉及知识（array.length）

#### Array.length

* 是`Array`的实例属性，值是一个 0 到 2^32 - 1 的整数
* 返回或设置一个数组中的元素个数

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length)



## Count number of negative values in array

> 需求：
>
> Write a function that takes an array of numbers as argument
>
> Return the number of negative values in the array

**我的提交**

```javascript
function myFunction(a){
	var count=0;
	for(var i=0;i<a.length;i++){
   		if(a[i]<0){
      	count++;
   		}
	}
	return count;
}
```

**作者答案**

```javascript
function myFunction(a) {
   return a.filter((el) => el < 0).length;
}
```



### 涉及知识（array.filter()方法、箭头函数）

#### array.filter()方法

[点击此处跳转](#array.filter()方法)



------

#### 箭头函数

[点击此处跳转](#箭头函数)



## Sort an array of numbers in descending order

> 需求：
>
> Write a function that takes an array of numbers as argument
>
> It should return an array with the numbers sorted in descending order

**我的提交**

```javascript
function myFunction(arr) {
   arr1=arr.sort();
   return arr1.reverse();
}
```

**作者答案**

```javascript
function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}
```



### 涉及知识（array.sort()方法、array.reverse()方法、箭头函数）

#### Array.prototype.sort()

- 排列数组，排序顺序可以是按字母或数字，也可以是升序（向上）或降序（向下）。
- 默认将按字母和升序将值作为字符串进行排序。
- 在对==数字字符串==进行排序时会产生不正确的结果。（如"25" >"100",因为2>1）
- ==会改变原始数组==

> 格式（==注意该格式不完整，之针对本题的格式==）

```javascript
arr.sort([compareFunction])
```

`compareFunction`（指定按某种顺序进行排列的函数）：可选。

* 省略：元素按照转换为的字符串的各个字符的Unicode位点进行排序

* 指明了 `compareFunction`：数组会按照调用该函数的返回值排序

  | compareFunction(a, b)的a-b |        a、b相对位置         |
  | :------------------------: | :-------------------------: |
  |           小于 0           | a 会被排列到 b 之前（顺序） |
  |           等于 0           |          位置不变           |
  |           大于 0           | b 会被排列到 a 之前（逆序） |

**返回值**：数组

* 排序后的数组（==数组已原地排序，并且不进行复制==）

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)



---

#### Array.prototype.reverse()

* 将数组中元素的位置颠倒，，并返回该数组。
* ==会改变原数组。==

> 格式

````javascript
 arr.reverse()
````

**返回值**：颠倒后的数组。



---

#### 箭头函数

[点击此处跳转](#箭头函数)



## Sort an array of strings alphabetically

> 需求：
>
> Write a function that takes an array of strings as argument
>
> Sort the array elements alphabetically
>
> Return the result

**我的提交（作者答案）**

```javascript
function myFunction(arr) {  
   return arr.sort();
}
```



### 涉及知识（字母排序方法）

#### 字母排序方法

> 使用Array.prototype.sort()方法排序

[点击此处跳转](#Array.prototype.sort())



## Return the average of an array of numbers

> 需求：
>
> Write a function that takes an array of numbers as argument
>
> It should return the average of the numbers

**我的提交**

```javascript
function myFunction(arr){
	var sum=0;
	for(var i=0;i<arr.length;i++){
   		sum+=arr[i];
	}
	return sum/arr.length;
}
```

**作者答案**

```javascript
function myFunction( arr ) {
	return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
```



### 涉及知识（reduce()方法、箭头函数）

#### Array.prototype.reduce()

- 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
- ==对于空数组是不会执行回调函数的==

> 格式（==注意该格式不完整，之针对本题的格式==）

```javascript
array.reduce(function(total, currentValue))
```

`function(total,currentValue)`（用于执行每个数组元素的函数）：必需。

- `total`（*初始值*, 或者计算结束后的返回值）：必需。
- `currentValue`（当前元素）：必需。

**返回值**：计算结果

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)



------

#### 箭头函数

[点击此处跳转](#箭头函数)



## Return the longest string from an array of strings

> 需求：
>
> Write a function that takes an array of strings as argument、
>
> Return the longest string

**我的提交**

```javascript
function myFunction(arr) {
   var max;
   for(var i=0;iarr[i+1].length){
         max=arr[i];
      }else{
         max=arr[i+1];
      }
   }
   return max;
}
```

**作者答案**

```javascript
function myFunction( arr ) {
	return arr.reduce((a, b) => a.length <= b.length ? b : a)
}
```



### 涉及知识（reduce()方法、箭头函数、三目运算符）

#### Array.prototype.reduce()

[点击此处跳转](#Array.prototype.reduce())



------

#### 箭头函数

[点击此处跳转](#箭头函数)



---

#### 三目运算符

> 格式

````javascript
expression ? sentence1 : sentence2
````

- `expression`：判断表达式
- `sentence1`：值为true时，执行语句
- `sentence2`：值为false时，执行语句

- 类似于if语句：

  ```javascript
  if(expression){
     sentence1;
  }else{
     sentence2;
  }
  ```



## Check if all array elements are equal

> 需求：
>
> Write a function that takes an array as argument
>
> It should return true if all elements in the array are equal
>
> It should return false otherwise

**我的提交**

```javascript
function myFunction(arr) {
   return arr.every(item=>item ===arr[0]);
}
```

**作者答案**

```javascript
function myFunction( arr ) {
  return new Set(arr).size === 1
}
```



### 涉及知识（every()方法、set().size方法、相等操作符）

#### Array.prototype.every()

- 用于检测数组所有元素是否都符合指定条件（通过函数提供）
  - 如果数组中检测到有一个元素不满足，则整个表达式返回 *false* ，且剩余的元素不会再进行检测。
  - 如果所有元素都满足条件，则返回 true。

==注意：==

- 不会对空数组进行检测
- 不会改变原始数组

> 格式（==注意该格式不完整，之针对本题的格式==）

```javascript
array.every(function(currentValue))
```

`function(currentValue)`（函数）：必须。

* 数组中的每个元素都会执行这个函数
  * `currentValue`：必须，当前元素的值

**返回值**：布尔值

- `true`：所有元素都通过检测
- `false`：数组中检测到有一个元素不满足

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)



------

### set().size方法

- 返回`Set`对象中元素的个数。
- `size`的值是一个整数，表示`Set`对象有多少条目。
- `size`的集合访问函数是`undefined`
- 不能改变这个属性



---

#### 相等操作符

##### 相等和不等

|      相等      |      不等      |
| :------------: | :------------: |
|      `==`      |      `!=`      |
| 相等返回`true` | 不等返回`true` |

- 都会先转换操作数（强制转换），再比较相等性

- 转换不同数据类型时，遵循基本规则

  - 布尔值比较，false为0，true为1

    |   表达式   |  值   |
    | :--------: | :---: |
    | false == 0 | true  |
    | true == 1  | true  |
    | true == 2  | false |

  - 字符串比较，先将字符串转换成数值（ASCII码数值）

    |  表达式  |  值   |
    | :------: | :---: |
    | "5" == 5 | true  |

  - 对象比较，要调用对象的`valueOf()`方法，得到基本类型值再比较

- 比较时，遵循的规则

  - `null`和`undefined`是相等的

    |      表达式       |  值   |
    | :---------------: | :---: |
    | null == undefined | true  |

  - 比较相等性之前，不能将`null`和`undefined`转换成其他任何值

    |     表达式     |  值   |
    | :------------: | :---: |
    | undefined == 0 | false |
    |   null == 0    | false |

  - 有一个操作数是`NaN`。相等返回`false`，不相等返回`true`（==注意：即使两个操作数都是`NaN`，`NaN`不等于`NaN`，返回`false`==）

    |    表达式    |  值   |
    | :----------: | :---: |
    | "NaN" == NaN | false |
    |   5 == NaN   | false |
    |  NaN == NaN  | false |
    |  NaN != NaN  | false |

  - 两个操作数都是对象，如果两个操作数都指向同一个对象，则相等返回`true`,相反返回`false`



##### 全等和不全等

| 全等  | 不全等 |
| :---: | :----: |
| `===` | `!==`  |

**`全等和不全等`与`相等和不等`的区别：**

|                          | `===`和`!==` | `==`和`!=` |
| :----------------------: | :----------: | :--------: |
| 比较前操作数是否需要转换 |    不需要    |    需要    |

*示例*

```javascript
var result1 ={"55" == 55 };		//true
var result2 ={"55" === 55 };	//false

var result3 ={"55" != 55 };		//false
var result4 ={"55" !== 55 };	//true

var result5 ={null == undefined };	//true
var result6 ={null === undefined };	//false
```

==为了保持代码中数据类型的完整性，推荐使用全等和不全等操作符==



## Merge an arbitrary number of arrays

> 需求：
>
> Write a function that takes arguments an arbitrary number of arrays
>
> It should return an array containing the values of all arrays

**我的提交**

```javascript
function myFunction(...arrays) {
   return [].concat(...arrays);
}
```

**作者答案**

```javascript
function myFunction( ...arrays ) {
return arrays.flat()
}
```



### 涉及知识（concat()方法、flat()方法、扩展运算符、拼接数组的思路）

#### concat()方法

- 用于连接两个或多个数组。
- 不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值。

> 格式

```javascript
array1.concat(array2, array3, ..., arrayX)
```

`array2, array3, ..., arrayX`：必需。要连接的数组。

**返回值**：已连接的数组



---

#### flat()方法

- 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

> 格式

```javascript
var newArray = arr.flat([depth])
```

`depth`：指定要提取嵌套数组的结构深度，默认值为 1

**返回值**：一个包含将数组与子数组中所有元素的新数组



------

#### 扩展运算符

- ES6
- 又称对象展开符，用`...`表示
- 主要用于函数调用

[了解更多](https://www.jianshu.com/p/b3630e16b98a)



---

#### 拼接数组思路（拓展）

> 思路一：concat方法

[具体操作结合我的提交与涉及知识](#concat()方法)

> 思路二：flat()方法

[具体操作结合作者答案与涉及知识](#flat()方法)

> 思路三：apply(推荐)

````javascript
arr1.push.apply(arr1,arr2);
````

> 思路四：es6的写法（推荐）

````javascript
arr1.push(...arrays);
````



## Sort array by object property

> 需求：
>
> Write a function that takes an array of objects as argument
>
> Sort the array by property b in ascending order
>
> Return the sorted array

**我的提交**

```javascript
function myFunction(arr) {
    return arr.sort((a,b)=>a.b-b.b);
}
```

**作者答案**

```javascript
function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}
```



### 涉及知识（const、sort()方法、箭头函数）

#### const

- 块级范围的常量，非常类似用 `let` 语句定义的变量
- 但常量的值是无法（通过重新赋值）改变的，也不能被重新声明。

> 格式

```javascript
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
```

`nameN`：常量名称，可以是任意合法的标识符。

`valueN`：常量值，可以是任意合法的表达式。

[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)



------

#### sort()方法

[点击此处跳转](#Array.prototype.sort())



---

#### 箭头函数

[点击此处跳转](#箭头函数)



## Merge two arrays with duplicate values

> 需求：
>
> Write a function that takes two arrays as arguments
>
> Merge both arrays and remove duplicate values
>
> Sort the merge result in ascending order
>
> Return the resulting array
>
> ```
>  Write a function that takes two arrays as arguments
> // Merge both arrays and remove duplicate values
> // Sort the merge result in ascending order
> // Return the resulting array
> ```

==这道题我试了很多方法，都是说有一个或多个测试案例不过。请小伙伴们在留言区分享这道题的解法，谢谢啦！！！！==



## Sum up all array elements with values greater than

> 需求：
>
> Write a function that takes an array (a) and a number (b) as arguments
>
> Sum up all array elements with a value greater than b
>
> Return the sum

**我的提交**

```javascript
function myFunction(a, b) {
   var sum=0;
   for(var i=0;ib){
         sum+=a[i];
      }
   }
   return sum;
}
```

**作者答案**

```javascript
function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}
```



### 涉及知识（reduce()方法，箭头函数）

#### Array.prototype.reduce()

[点击此处跳转](#Array.prototype.reduce())



------

#### 箭头函数

[点击此处跳转](#箭头函数)



## Create a range of numbers

> 需求：
>
> Write a function that takes two numbers (min and max) as arguments
>
> Return an array of numbers in the range min to max

**我的提交**

```javascript
function myFunction(min, max) {
   var arr = [];
   var length=max-min;
   var t=min;
   for(var i=0;i<=length;i++){
      arr[i]=t;
      t++;
   }
   return arr;
}
```

**作者答案**

```javascript
function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
return arr;
}
```



### 涉及知识（let、push()方法）

#### let

- let 声明的变量只在 let 命令所在的代码块内有效
- ES6

[了解更多](https://www.runoob.com/js/js-let-const.html)



------

#### push()方法

- 可向数组的==末尾==添加一个或多个元素，并返回新的长度。

==注意：==

- 新元素将添加在数组的末尾
- 此方法改变数组的长度
- 在数组起始位置添加元素请使用 `unshift()` 方法。

> 格式

```javascript
 array.push(item1, item2, ..., itemX)
```

`item1, item2, ..., itemX`：必需。要添加到数组的元素。

**返回值**：数组



## Group array of strings by first letter

> 需求
>
> Write a function that takes an array of strings as argument
>
> Group those strings by their first letter
>
> Return an object that contains properties with keys representing first letters
>
> The values should be arrays of strings containing only the corresponding strings
>
> For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
>
> `{ a: ['Alf', 'Alice'], b: ['Ben']}`

**我的提交**

````javascript
function myFunction(arr){
    let resultObj = {};
  	for (let i =0; i < arr.length; i++) {
    	let currentWord = arr[i];
    	let firstChar = currentWord[0].toLowerCase();
    	let innerArr = [];
    	if (resultObj[firstChar] === undefined) {
       		innerArr.push(currentWord);
      		resultObj[firstChar] = innerArr
    	}else {
      		resultObj[firstChar].push(currentWord)
    	}
  	}
	return resultObj;
}
````

**作者答案**

````javascript
function myFunction(arr) {
 return arr.reduce((acc, cur) => {
   const firstLetter = cur.toLowerCase().charAt(0);
   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
 }, {});
}
````



### 涉及知识（toLowerCase()方法、相等操作符、push()方法、reduce()方法、charAt()方法、扩展运算符)

#### toLowerCase()

* 把字符串转换为小写。

> 格式

````javascript
stringObject.toLowerCase()
````

**返回值**：新的字符串，所有大写字符全部被转换为了小写字符



---

#### 相等操作符

[点击此处跳转](#相等操作符)



---

#### push()方法

[点击此处跳转](#push()方法)



---

#### reduce()方法

[点击此处跳转](#Array.prototype.reduce())



---

#### charAt()方法

- 返回指定位置的字符，返回字符长度为1。

> 格式

````javascript
stringObject.charAt(index)
````

`stringObject`：字符串对象

`index`（字符所在的字符串中的下标）：必需

* ==注意：字符串中第一个字符的下标是 0。如果参数 `index` 不在 0 与 string.length 之间，该方法将返回一个空字符串==



---

#### 扩展运算符

[点击此处跳转](#扩展运算符)



## Define an array with conditional elements

> 需求：
>
> Write a function that takes an array with arbitrary elements and a number as arguments
>
> Return a new array, the first element should be either the given number itself
>
> or zero if the number is smaller than 6
>
> The other elements should be the elements of the original array
>
> Try not to mutate the original array

**我的提交**

```javascript
function myFunction(arr, num) {
   return num>=6? [num].concat(arr):[0].concat(arr);
}
```

**作者答案**

```javascript
function myFunction(arr, num) {
 return [...(num > 5 ? [num] : [0]), ...arr];
}
```



### 涉及知识（不改变原数组的方法、扩展运算符、三目运算符）

#### 不改变原数组的方法  

|        不改变原数组的方法         |                    描述                    |
| :-------------------------------: | :----------------------------------------: |
|      concat      |      返回拼接后的数组，不改变原数组；      |
|              forEach              |                  遍历数组                  |
|                map                |                                            |
|              join()               |     返回拼接后的字符串，可以指定间隔；     |
| slice(start,end) | 截取数组，返回截取的部分，不改变原始数组； |
|    sort()    |                    排序                    |
|            toString();            |    [1,2,3].toString()==[1,2,3].join();     |



------

#### 扩展运算符

[点击此处跳转](#扩展运算符)



---

#### 三目运算符

[点击此处跳转](#三目运算符)



## Get every nth element of array

> 需求：
>
> Write a function that takes an array (a) and a value (n) as arguments
>
> Save every nth element in a new array
>
> Return the new array

**我的提交**

```javascript
function myFunction(a, n){
	var arr=[];
	for(var i=0;i<a.length;i++){
   		if((i+1)%n==0){
      	arr.push(a[i]);
   		}
	}
	return arr;
}
```

**作者答案**

```javascript
function myFunction(a, n) {
   let rest = [...a];
   let result = [];
   for (let i = 0; i < a.length; i++) {
      if (rest.length < n) break;
      result.push(rest[n - 1]);
      rest = rest.slice(n);
   }
   return result;
}
```



### 涉及知识（扩展运算符、push()方法、slice()方法）

#### 扩展运算符

[点击此处跳转](#扩展运算符)



------

#### push()方法

[点击此处跳转](#push()方法)



------

#### slice()方法

[点击此处跳转](#Array.prototype.sort())



# 结语

【创作背景】

​        偶然在抖音上刷到JSchallenger这个可以训练Javascript基础的网站，自己在完成所有的Schallenger题之后，想要通过博客来记录自己的做题痕迹，以便日后快速回顾。原本打算把JSchallenger的所有题目以及分析整理成一篇博客发出来，但是我整理完后发现，已经快有1w多字，为了方便读者和自己观看，因此打算按照JSchallenger的板块分开发布。



【感谢】

 ***感谢各位读者能看到最后!!!***
