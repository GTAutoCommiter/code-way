---
id: javascript-jsChallenger-date-note
slug: /javascript-jsChallenger-date-note
title: Date对象
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JSchallenger
---
# 前言

【笔记内容】

- 关于JSchallenger中Dates对象题目的复盘
- 本人的提交、以及做题时的思路
- 分析作者答案
- 涉及的知识快速了解，==注意：并不深入分析具体知识，只是围绕题目展开==



【笔记目的】

- 帮助本人进一步了解Javascript的Dates对象以及涉及的方法
- 对自己做题后的复盘，进一步了解自己的不足之处



【相关资源】

- [JSchallenger](https://www.jschallenger.com/javascript-dates)



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。
- 若是有其他的解题方法也请读者分享到评论区，一起学习，共同进步，谢谢。
- 我的提交有不足之处也恳请读者帮忙指出，不吝赐教，谢谢。

---



# Dates对象快速了解

* 用于处理日期与时间。

> 创建Date对象方法

````javascript
var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
````

> 常用方法

【==注意==】

* 本人为了方便整理，把方法拆分成两部分
  * 使用方法`方法前缀方法后缀`。（注意：直接忽略表格中的`~`二者拼接即可）
* `to~`方法前缀与特殊的方法后缀进行组合。
* 若要**根据世界时间**则需要如下格式
  * 方法前缀`UTC`方法后缀

| 方法前缀 |  描述  |
| :------: | :----: |
|  get`~`  | 返回值 |
|  set`~`  |  设置  |
|  to`~`   |  转换  |

|     方法后缀      |                 返回值                 |
| :---------------: | :------------------------------------: |
|     `~`Date()     |      一个月中的某一天 (1 ~ 31)。       |
|     `~`Day()      |        一周中的某一天 (0 ~ 6)。        |
|   `~`FullYear()   |          以四位数字返回年份。          |
|    `~`Hours()     |            小时 (0 ~ 23)。             |
|   `~`Minutes()    |            分钟 (0 ~ 59)。             |
|    `~`Month()     |          返回月份 (0 ~ 11)。           |
|   `~`Seconds()    |            秒数 (0 ~ 59)。             |
|     `~`Time()     | 返回时间戳（1970年1月1日至今的毫秒数） |
| `~`Milliseconds() |            毫秒 (0 ~ 999)。            |

| to前缀的特殊后缀      | 描述                                                   |
| --------------------- | ------------------------------------------------------ |
| `~`DateString()       | 日期部分转换为字符串。                                 |
| `~`ISOString()        | 使用 ISO 标准返回字符串的日期格式。                    |
| `~`JSON()             | 以 JSON 数据格式返回日期字符串。                       |
| `~`LocaleDateString() | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| `~`LocaleTimeString() | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| `~`LocaleString()     | 根据本地时间格式，把 Date 对象转换为字符串。           |
| `~`String()           | 转换为字符串                                           |
| `~`TimeString()       | 时间部分转换为字符串。                                 |
| `~`UTCString()        | 根据世界时，把 Date 对象转换为字符串。                 |

[更多方法](https://www.runoob.com/jsref/jsref-obj-date.html)



# JSchallenger-Dates

## Check if two dates are equal

> 需求：
>
> Sounds easy, but you need to know the trick
>
> Write a function that takes two date instances as arguments
>
> It should return true if the dates are equal
>
> It should return false otherwise

**我的提交（作者答案）**

```javascript
function myFunction(a, b) {
     return a.getTime() === b.getTime()
}
```



### 涉及方法（getTime()方法、相等操作符）

#### getTime()方法

* 可返回时间戳（距 1970 年 1 月 1 日之间的毫秒数）

> 格式

````javascript
Date.getTime()
````

**返回值**：数值



---

#### 相等操作符

> 相等和不等

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

    |  表达式  |  值  |
    | :------: | :--: |
    | "5" == 5 | true |

  - 对象比较，要调用对象的`valueOf()`方法，得到基本类型值再比较

- 比较时，遵循的规则

  - `null`和`undefined`是相等的

    |      表达式       |  值  |
    | :---------------: | :--: |
    | null == undefined | true |

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



> 全等和不全等

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



## Check if two dates fall on the exact same day

> 需求:
>
> Write a function that takes two date instances as argument
>
> It should return true if they fall on the exact same day
>
> It should return false otherwise

**我的提交**

```javascript
function myFunction(a, b) {
   return a.getTime()===b.getTime();
}
```

**作者答案**

```javascript
function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate()
}
```



### 涉及方法（getTime()方法、相等操作符、getFullYear()方法、getMonth()方法、getDate()方法）

#### getTime()方法

[点击此处跳转](#getTime()方法)



---

#### 相等运算符

[点击此处跳转](#相等操作符)



---

#### getFullYear()方法

* 返回年份

> 格式

````javascript
Date.getFullYear()
````

**返回值**：数值。



---

#### getMonth()方法

* 返回月份

【==注意==】：一月为 0，二月为 1，依此类推

> 格式

````javascript
Date.getMonth()
````

**返回值**：数值



---

#### getDate()方法

* 返回一个月中的第几天

> 格式

````javascript
Date.getDate()
````

**返回值**：数值



## Check if one date is earlier than another

> 需求：
>
> Write a function that takes two date instances (a and b) as arguments
>
> It should return true if a is earlier than b
>
> It should return false otherwise

**我的提交**

```javascript
function myFunction(a, b){
	return a<b ?true:false;
}
```

**作者答案**

```javascript
function myFunction(a, b) {
   return a < b
}
```



### 涉及知识（三目运算符）

#### 三目运算符

> 格式

```javascript
expression ? sentence1 : sentence2
```

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



# 结语

