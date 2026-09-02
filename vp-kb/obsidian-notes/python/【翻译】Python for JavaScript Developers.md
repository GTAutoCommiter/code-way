---
title: '2026-04-09'
tags: []

---

# 声明

本文为译文，原文来自 [VALENTINO GAGLIARDI](https://www.valentinog.com/)：[《Python for JavaScript Developers》](https://www.valentinog.com/blog/python-for-js/)。译文仅供学习交流，部分表述根据中文语境进行了调整。如有翻译不当之处，欢迎指正。

---

# 目录

1. [Python 和 JavaScript 中的算术运算符](#Python 和 JavaScript 中的算术运算符 )
2. [Python 和 JavaScript 中的加减运算符](#Python 和 JavaScript 中的加减运算符)
3. [Python 和 JavaScript 中的比较运算符](#Python 和 JavaScript 中的比较运算符)
4. [Python 和 JavaScript 中的逻辑运算符](#Python 和 JavaScript 中的逻辑运算符)
5. [Python 和 JavaScript 的基本数据类型](#[Python 和 JavaScript 的基本数据类型)
6. [Python 和 JavaScript 中的正则表达式](#Python 和 JavaScript 中的正则表达式)
7. [Python 数据类型与 JavaScript：不可变性与变量](#Python 数据类型与 JavaScript：不可变性与变量)
8. [Python 和 JavaScript 中的复杂数据类型](#Python 和 JavaScript 中的复杂数据类型)
9. [Python 数据类型：列表和元组](#Python 数据类型：列表和元组)
10. [Python 数据类型：字典和 JavaScript 对象](#Python 数据类型：字典和 JavaScript 对象)
11. [没有switch，没有party](#没有switch，没有party)
12. [JavaScript 对象展开/合并，Python 字典展开/合并](#JavaScript 对象展开/合并，Python 字典展开/合并)
13. [Python 数据类型：Set与 JavaScript Set](#Python 数据类型：Set与 JavaScript Set)
14. [Python 和 JavaScript 中的成员运算符](#Python 和 JavaScript 中的成员运算符)
15. [实例操作符：声明](#实例操作符：声明)
16. [Python 类、isinstance 与 JavaScript 的 instanceof](#Python 类、isinstance 与 JavaScript 的 instanceof)
17. [Python 的 type() 和 JavaScript 的 typeof](#Python 的 type() 和 JavaScript 的 typeof)
18. [如何在 Python 中处理异常：什么是异常？](#如何在 Python 中处理异常：什么是异常？)
19. [在 Python 和 JavaScript 中处理同步异常](#在 Python 和 JavaScript 中处理同步异常)
20. [如何处理异常：在 Python 和 JavaScript 中使用错误信息](#如何处理异常：在 Python 和 JavaScript 中使用错误信息)
21. [在 Python 和 JavaScript 中自定义异常](#在 Python 和 JavaScript 中自定义异常)
22. [使用 reStructuredText 编写 Python 代码文档](#使用 reStructuredText 编写 Python 代码文档)
23. [一点类型理论：动态类型与静态类型](#一点类型理论：动态类型与静态类型)
24. [使用 reStructuredText 进行 Python 的渐进式输入](#使用 reStructuredText 进行 Python 的渐进式输入)
25. [Python 和 JavaScript 中的静态类型](#Python 和 JavaScript 中的静态类型)
26. [使用 mypy 检查类型](#使用 mypy 检查类型)
27. [Python 用于 JavaScript 开发者：更进一步](#Python 用于 JavaScript 开发者：更进一步)

---

JavaScript 是我的主要收入来源，但我并不排斥其他编程语言。我一直对 Python 有着浓厚的兴趣，多年来我用它来编写脚本，也开发了使用 Flask 和 Django 的 API 应用程序。

在这篇文章中，我将带你进行这两种语言的10，000英尺对比。

要跟上进度，你需要至少具备基本的 JavaScript 知识以及对其一些特性的了解。

你可以在浏览器的控制台或 Node.js REPL 中尝试 JavaScript 的代码示例。对于 Python，可以使用 Python REPL。每次在代码示例中看到 >>>，就是 REPL。

祝您阅读愉快！

# Python 和 JavaScript 中的算术运算符

我们从运算符开始吧！

Python 和 JavaScript 的算术运算符大致相同。除了除法运算符外（此处并非双关语），Python 还有一个整数除法运算符。

| 操作符 | PYTHON | JAVASCRIPT |
| :----- | :----- | :--------- |
| 加法   | +      | +          |
| 减法   | -      | -          |
| 乘法   | *      | *          |
| 指数   | **     | **         |
| 除法   | /      | /          |
| 整除   | //     | n/a        |
| 求模   | %      | %          |

Floor除法返回两个数相除的整数商。以下是一个Python示例：

````python
>>> 89 / 4

# 输出: 22.25
````

要得到整数而不是浮点数，我们可以使用整除运算。（JavaScript 中的 // 是注释）：

````python
>>> 89 // 4

# 输出: 22
````

要在 JavaScript 中实现相同的结果，你可以使用 Math.floor：

````javascript
Math.floor(89 / 4)

// 输出: 22
````

Python 的算术运算符不仅限于数字。例如，你可以使用乘法对字符串进行操作来重复某个模式：

````python
>>> "a" * 9

# 输出: 'aaaaaaaaa'
````

除了连接简单字符串外，还可以进行加法操作：

````python
>>> "a" + "aa"

# 输出: 'aaa'
````

对于其他所有情况，Python 会抛出 TypeError。这意味着你不能将数字和字符串相加：

```python
>>> "a" + 9

# TypeError: can only concatenate str (not "int") to str
```

不要把它们分开（除了毫无意义之外）：

````python
>>> "a" / 9

# TypeError: unsupported operand type(s) for /: 'str' and 'int'
````

从外部观察者的角度来看，JavaScript 在这方面完全混乱不堪，原因在于臭名昭著的类型转换。不仅 JavaScript 的算术运算符可以将数字自由地转换为字符串：

````javascript
"a" + 9

// 输出: "a9"
````

当进行无效的算术运算时，它们不会抛出任何错误：

````javascript
"a" / 9

// 输出: NaN
````

相反，我们得到的是 NaN，这是一个由无效算术运算产生的特殊 JavaScript 值，处理起来很困难，直到 ECMAScript 2015 中的 Number.isNaN 出现。

# Python 和 JavaScript 中的加减运算符

| 操作符 | PYTHON | JAVASCRIPT |
| :----- | :----- | :--------- |
| 递增   | 不适用 | ++         |
| 递减   | 不适用 | --         |

JavaScript 有加法和减法运算符，两者都可以使用前缀（在数字前面）：

````javascript
var a = 34;
++a
````

或后缀（数字之后）：

````javascript
var a = 34;
a++
````

在第一种情况（前缀）中，运算符会将数字加1并返回新的数字：

````javascript
var a = 34;
++a
// 返回 35
````

在第二种情况（后缀）中，运算符会增加数字，但返回原始的数字：

````javascript
var a = 34;
a++
// 返回 34
// 增加到 35
````

相同的规则也适用于减法运算符。

在 Python 中，没有递增/递减运算符，而是需要使用赋值运算符。以下是 Python 中的加法赋值：

````python
>>> a = 34
>>> a += 1
# a 现在是 35
````

这是一个减法赋值：

````python
>>> a = 35
>>> a -= 2
# a 现在是 33
````

JavaScript 也有赋值运算符。

# Python 和 JavaScript 中的比较运算符

JavaScript 和 Python 拥有相同的比较运算符，只是三重等于号除外，这正是 JavaScript 奇特的强制类型转换规则的象征。

关于这个主题已有大量文献，我就不多赘述了。以下是 Python 和 JavaScript 的比较运算符并列对比：

| 操作符     | PYTHON | JAVASCRIPT |
| :--------- | :----- | :--------- |
| 大于号     | >      | >          |
| 小于号     | <      | <          |
| 大于等于号 | >=     | >=         |
| 小于等于号 | <=     | <=         |
| 等于       | ==     | ==         |
| 全等       | 不适用 | ===        |
| 不等       | !=     | !=         |
| 严格不等   | 不适用 | !==        |

更准确地说，Python 还有 is 操作符（此处不讨论），在我看来，它更属于身份运算符的范畴。

这里的关键在于，Python 在比较值时具有可预测性：

````python
>>> 9 == "9"

# 输出: False
````

而JavaScript则在每次涉及抽象比较运算符时都会执行一次转换：

````javascript
9 == "9"

// 输出: true
````

在这里，第一个运算符9在比较之前被转换为字符串。为了避免转换，必须使用“严格比较运算符”，也称为三重等于：

````javascript
9 === "9"

// 输出: false
````

# Python 和 JavaScript 中的逻辑运算符

既然我们已经讨论了算术运算符和比较运算符，现在就来了解一下它们的伙伴：逻辑运算符。哦，我的朋友，我还能记得高中时的布尔代数。你呢？

以下是 Python 和 JavaScript 中最常见的逻辑运算符：

| 操作符 | PYTHON | JAVASCRIPT |
| :----- | :----- | :--------- |
| 逻辑与 | and    | &&         |
| 逻辑或 | or     | \|\|       |
| 逻辑非 | not    | !          |

逻辑运算符在代码中根据表达式的执行结果来决定是否执行某项操作时非常有用。例如，我们希望只有当 2019 大于 1900 时才打印“我很好”。以下是使用逻辑运算符和 Python 实现的方法：

````python
>>> 2019 > 1900 and print("I am cool")

# 输出: "I am cool"
````

并且表示：只有当左侧条件为真时，才执行右侧的操作。JavaScript 中的相同逻辑对应为：

````javascript
2019 > 1900 && console.log("I am cool")
````

逻辑或运算符的作用恰恰相反。or 表示：只有当左边的内容为假时，才执行右边的内容。以下是一个 Python 的示例：

````python
>>> 2019 > 1900 or print("I am cool")

# 输出: True
````

结果为 True，因为 2019 大于 1900，所以评估在此处停止。以下是 JavaScript 中的相同逻辑：

````javascript
2019 > 1900 || console.log("I am cool")
````

最后但同样重要的是，还有逻辑取反操作，当你希望反转某个表达式的结果时非常有用。例如，即使左侧的表达式为假，我们也可以输出“I am cool”。如何实现？使用 Python 中的 not 操作符即可：

````python
>>> not 2019 > 151900 and print("I am cool")

# 输出: "I am cool"
````

2019 明显小于 151900，但逻辑运算不会改变结果，因此正确的表达式仍会被计算。以下示例应更易于理解：

````python
>>> not False and print("I am cool")

# 输出: "I am cool"
````

JavaScript 中的逻辑否定使用感叹号代替：

````javascript
!false && console.log("I am cool")
````

# Python 和 JavaScript 的基本数据类型

在计算机编程中，数据类型是可供操作的“形状”。大多数编程语言都包含一组基本的数据类型，例如字符串、数字和布尔值。

Python 和 JavaScript 也不例外。以下是两种语言中可用的最重要基本数据类型的概览（n/a 表示不适用）。

| PYTHON  | JAVASCRIPT | Python 中的可变对象 | JS 中的可变对象 |
| :------ | :--------- | :------------------ | :-------------- |
| float   | Number     | no                  | no              |
| int     | BigInt     | no                  | no              |
| int     | n/a        | no                  | n/a             |
| string  | String     | no                  | no              |
| boolean | Boolean    | no                  | no              |
| None    | Null       | no                  | no              |
| n/a     | Undefined  | n/a                 | no              |
| n/a     | Symbol     | n/a                 | no              |

JavaScript有八种类型，其中七种称为原始类型（Object 是一种独立的类型）。从表格中可以看出，Python 和 JavaScript 的基本类型都是不可变的。例如，在 Python 中，字符串被视为不可变的 Unicode 字符序列。

与大多数基本类型一样，Python 字符串也具有执行常见操作的方法：

````python
>>> name = "caty"

>>> name.capitalize()
>>> name.center(40)
>>> name.count("t")

## and more!
````

由于字符串是不可变的，字符串操作的结果始终是一个新的字符串。

现在是数字。在 JavaScript 中，整数和浮点数没有区别，它们都是 Number 数据类型。而在 Python 中，整数和浮点数是分开的。

JavaScript 最近新增了 BigInt 原始类型，用于表示非常大的数字。而 Python 则似乎使用单一的 int 类型来处理小整数和大整数。

值得一提的是布尔类型，它在 Python 中可以取 False 或 True 的值。

关于特殊值的一个重要说明：Python 使用 None 来表示空值，而在 JavaScript 中则使用令人担忧的 null。

在 Python 中，既没有像 JavaScript 那样的未定义概念，也没有对应的 Symbol 类型，后者是 JavaScript 中一个较为晦涩的原始类型。

# Python 和 JavaScript 中的正则表达式

正则表达式是一种强大的文本模式匹配工具。在 Python 中处理正则表达式时，我们使用 re 模块。

要创建新的模式，我们可以使用 re.compile 来编译正则表达式：

````python
import re

regex = re.compile(r"\d\d\d\d")
````

compile对于复杂的正则表达式特别有用，因为它可以加快速度。

一旦我们有了正则表达式，就可以使用 .search() 将其与一段文本进行匹配：

````python
import re

regex = re.compile(r"\d\d\d\d")

text = "Your id is 4933"

match = regex.search(text)
````

我们使用 \d\d\d\d 在文本中查找四个连续的数字。如果找到匹配项，结果将是一个匹配对象，该对象包含两个方法：.start() 和 .end()。

这些方法分别返回模式被找到的文本部分的起始和结束索引：

````python
import re

regex = re.compile(r"\d\d\d\d")

text = "Your id is 4933"

match = regex.search(text)

start, end = match.start(), match.end()

# start 为 11 并且 end 为 15
````

通过这些索引，我们现在可以提取匹配项：

````python
import re

regex = re.compile(r"\d\d\d\d")

text = "Your id is 4933"

match = regex.search(text)

start, end = match.start(), match.end()

found = text[start:end] # 4933
````

在 JavaScript 中要获得相同的结果，我们可以使用字面量形式来构建正则表达式，或者使用 RegExp 构造函数：

````javascript
const regex = new RegExp(/\d\d\d\d/);
````

我们也可以向构造函数传递标志。这里我们构建一个全局正则表达式：

````javascript
const regex = new RegExp(/\d\d\d\d/, "g");
````

现在，当我们需要在给定的文本中匹配多个模式时，可以使用 .exec() 和 lastIndex 来实现，或者更优的方式是使用新的 String.prototype.matchAll()，它返回一个迭代器：

````javascript
const regex = new RegExp(/\d\d\d\d/, "g");
const text = "Your 7795 id is 4933";

const match = text.matchAll(regex);

const found = [...match].map((el) => el[0]);
// [ '7795', '4933' ]
````

# Python 数据类型与 JavaScript：不可变性与变量

从上表中你可能已经注意到，大多数基本的 Python 数据类型都是不可变的。而 JavaScript 在实际应用中似乎更为灵活。尝试在浏览器控制台或 Node.js REPL 中运行以下示例。数字？看起来是可变的：

````javascript
var a = 34;
++a
// 返回 35
````

布尔值？看起来也是可变的：

````javascript
var x = false;
x++;
// 返回 0 并且 x 变成 1
````

null？似乎又可变：

````javascript
var x = null;
x++;
// 返回 0 并且 x 变成 1
````

别被迷惑了。这里真正发生变化的不是底层的基本类型，而是变量所赋值的数值。

最后两个涉及布尔值和空值的例子属于类型转换的情况。引擎会将这两个值都转换为相应的数值表示，然后变量会被赋值为新的值。

请参见 [MDN 上的示例以获取更多信息](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)。

# Python 和 JavaScript 中的复杂数据类型

复杂数据类型是一种比字符串和数字等简单原始类型更高级的结构。在 Python 中，我们可以将列表、字典、集合和元组称为复杂数据类型。

在 JavaScript 中，这种区别则不太明显，因为 Object 是最顶层的复杂类型，而其他子类型（如 Array 和 Set）都是其“祖先”类型的特化版本（Function 本身也是一个对象）。

以下是 Python 和 JavaScript 中复杂数据类型的详细说明：

| PYTHON     | JAVASCRIPT | Python 中的可变对象 | JS 中的可变对象 |
| :--------- | :--------- | :------------------ | :-------------- |
| list       | Array      | yes                 | yes             |
| dictionary | Object     | yes                 | yes             |
| set        | Set        | yes                 | yes             |
| tuple      | 不适用     | 不适用              | 不适用          |

如您所见，JavaScript 中的数组和对象始终是可变的，因此对象也无法真正被保护（Object.freeze 只是浅层冻结）。不过，未来计划将为 JavaScript 添加不可变类型。

Python 的另一种不可变复数类型是元组（而列表、字典和集合则是可变的）。下面我们更详细地了解 Python 中的复数类型。

# Python 数据类型：列表和元组

Python中的列表是一种元素的集合，类似于JavaScript中的数组。以下是一个Python列表：

````python
>>> my_list = ["vale", 98, "caty", None]
````

列表操作总是会修改原始列表：

````python
>>> my_list = ["a", None, 44, True, "f"]

>>> my_list.append(44)
>>> my_list.remove('f')

>>> print(my_list) 

# 输出: ["a", None, 44, True, 44]
````

元组是不可变的，实际上它只有两个只读操作（索引和计数）：

````python
>>> my_tuple = ("vale", "Italy", 105)
>>> my_tuple.count("Italy") # 1
>>> my_tuple.index(105) # 2
````

请注意，元组用圆括号括起来。

我真的很喜欢Python能够使用加号运算符将两个列表连接在一起：

````python
>>> my_list = ["a", None, 44, True, "f"]
>>> another_list = ["b", None, 89, False, "x"]

>>> my_list + another_list

# 输出: ["a", None, 44, True, 44, "b", None, 89, False, "x"]
````

但别试图用 JavaScript 做那个把戏，你会惊讶的：

````javascript
var my_list = ["a", null, 44, true, "f"]
var another_list = ["b", null, 89, false, "x"]

result = my_list + another_list
// 结果是:"a,,44,true,fb,,89,false,x"
````

根据 JavaScript 规范，当两个操作数都不是字符串时，加法运算符会将它们转换为字符串，如本例所示。请注意，Python 列表和元组不能直接连接：

````python
>>> my_tuple = ("vale", "Italy", 105)
>>> my_list = ["a", None, 44, True, "f"]
>>> my_tuple + my_list

# 输出 TypeError: can only concatenate tuple (not "list") to tupl
````

# Python 数据类型：字典和 JavaScript 对象

JavaScript中的对象是一种用于存储键值对的容器，同时也是其他专用对象的基础：

````javascript
var obj = {
  name: "John",
  age: 33
};
````

“JavaScript 中几乎所有东西都是对象”不仅仅是一种说法，而是事实。数组、函数、集合等等，都是 JavaScript 的对象。

Python 有一个类似的东西叫做字典（简称 dict），但它只是一个容器，而不是基本的构建单元：

```python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }
```

可以通过键来访问或修改字典中的值：

````python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

>>> my_dict["name"]

>>> my_dict["city"] = "Florence"
````

当访问不存在的键时，Python 会抛出 KeyError：

````python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

>>> my_dict["not_here"]

# 输出: KeyError: 'not_here'
````

这个.get() 方法是直接访问键的更安全替代方案，因为它不会抛出异常，并且可以为不存在的键指定默认值：

````python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

>>> my_dict.get("not_here", "not found")

# 输出: 'not found'
````

其他只读操作包括 .items() 或 .keys()：

````python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

>>> my_dict.keys() # ['name', 'city', 'age']
````

你也可以使用 .clear() 方法从字典中移除元素或将其完全清空：

````python
>>> my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

>>> my_dict.pop("name") # 返回 'John' 并且移除

>>> my_dict.clear() # my_dict 现在置空了
````

列表、元组、字典和集合都是可迭代的集合或序列，因为它们包含一定数量的元素，并提供了与之交互的常见操作。

# 没有switch，没有party

“Python里没有switch？我该怎么做啊……” 这句话你可能几年前听过。没错，Python里确实没有switch语句。Java程序员喜欢它，JavaScript开发者也一样。

switch 语句是 JavaScript 中常见的写法。考虑以下示例：

````javascript
function getUrlConf(host) {
  switch (host) {
    case "www.example-a.dev":
      return "firstApp.urls";
    case "www-example-b.dev":
      return "secondApp.urls";
    case "www.example-c.dev":
      return "thirdApp.urls";
    default:
      return "Sorry, no match";
  }
}

getUrlConf("www-example-b.dev");
````

函数需要检查主机字符串，根据主机值返回相应的配置。使用 switch 时，我们会在 case 子句中比较 switch（主机）的值，例如 case "www.example-a.dev":。对于每个 case，都会返回一个值。default 子句则确保在没有匹配项时返回默认值。

在 Python 中没有 switch 语句：你可以用字典来实现相同的效果。

````python
def get_url_conf(host):
    mapping = {
        "www.example-a.dev": "firstApp.urls",
        "www-example-b.dev": "secondApp.urls",
        "www.example-c.dev": "thirdApp.urls"
    }

    return mapping.get(host, "Sorry, no match")
````

我觉得更干净。如果你喜欢的话，同样的模式也适用于 JavaScript。

# JavaScript 对象展开/合并，Python 字典展开/合并

ECMAScript 2018 引入了“展开”JavaScript对象的功能，也称为“展开运算符”。这种语法特别适合在不修改对象的情况下使用（或用于克隆对象）：

````javascript
const initial = {
  dontTouch: "my breil"
};

const next = { ...initial, dontTouch: "just a copy" };

// initial.dontTouch 为 "my breil"
// next.dontTouch 为 "just a copy"
````

或者将它们合并在一起：

````javascript
const a = {
  name: "Juliana",
  age: 33
};

const b = {
  surname: "Crain",
  city: "San Francisco"
};

const movie = {
  title: "The man in the high castle"
};

const all = { ...a, ...b, ...movie };

console.log(all);

/*
输出:
{
  name: 'Juliana',
  age: 33,
  surname: 'Crain',
  city: 'San Francisco',
  title: 'The man in the high castle'
}
 */
````

在使用 Object.assign 之前，已经实现了相同的效果：

````javascript
const initial = {
  dontTouch: "my breil"
};

const next = Object.assign({}, initial, { dontTouch: "just a copy" });
````

在 Python 中有几种方法可以得到相同的结果：其中一种是使用 dict.update()，这里我就不详细介绍了。

字典解包看起来更像 JavaScript 的对象展开，我更喜欢这种方式。以下是一个示例：

````python
initial = {"dont_touch": "my breil"}

next = {**initial, "dont_touch": "just a copy"}
````

初始值会扩展到下一个，而“dont_touch”的值会覆盖原始值，同时保留初始值。要合并两个或多个字典，我们可以这样做：

````python
a = {"name": "Juliana", "age": 33}

b = {"surname": "Crain", "city": "San Francisco"}

movie = {"title": "The man in the high castle"}

all = {**a, **b, **movie}
````

遗憾的是，字典解包存在一些限制，因此 Python 为字典添加了并集操作符。从 Python 3.9 开始，你可以使用并集操作：

````python
a = {"name": "Juliana", "age": 33}

b = {"surname": "Crain", "city": "San Francisco"}

movie = {"title": "The man in the high castle"}

all = a | b | movie ## Dict union!

print(all)

"""
输出

{'name': 'Juliana', 'age': 33, 'surname': 'Crain', 'city': 'San Francisco', 'title': 'The man in the high castle'}
"""
````

不错！更多详情请[点击这里](https://peps.python.org/pep-0584/)。

# Python 数据类型：集合与 JavaScript 集合

JavaScript 的 Set 是一种方便的数据结构，可用于存储唯一值。Set 可以包含原始类型（包括 null 和 undefined）或对象的引用：

````javascript
const mySet = new Set();

mySet.add( "aString" )
mySet.add( null )
mySet.add( NaN )
mySet.add(1)
mySet.add(1)

// 输出: Set { 'aString', null, NaN, 1 }
````

JavaScript Set 除了添加元素、检查元素是否存在或遍历它之外，几乎无法进行其他操作。Set 具备以下方法：

- .add
- .clear
- .delete
- .entries
- .forEach
- .has
- .keys
- .size
- .values

Python 的集合（Set）的工作方式大致相同。你可以向其中添加唯一元素，也可以检查这些元素：

````python
>>> my_set = set()
>>> my_set.add( "aString" )
>>> my_set.add( None )
>>> my_set.add( 1 )
>>> my_set.add( 2 )
>>> my_set.add( 1 )
>>> my_set

# 输出: {None, 2, 'aString', 1}
````

然而，与JavaScript的主要区别在于，Python在数学集合操作方面提供了更多实用的方法，例如“差集”、“交集”、“子集”、“超集”、“并集”等。

在 Python 中声明集合也有以下字面量形式：

````python
>>> my_set = { None, "caty", "venice", 84}
>>> another_set = { "and", "mouse", 44, "a" }
````

正如你可能猜到的，使用两种语言设置对于去除重复项非常有用。在 Python 中，还可以进行诸如并集操作等实用功能：

````python
>>> my_set | another_set

# 输出: {'and', 'mouse', None, 'venice', 'caty', 44, 84, 'a'}
````

或交集：

````python
>>> my_set = { None, "caty", "venice", 84, "common_element" }
>>> another_set = { "and", "mouse", 44, "a", "common_element" }
>>> my_set & another_set

# 输出: {'common_element'}
````

值得一提的是，集合在 JavaScript 和 Python 中都是可变的，但集合中的单个元素保持不可变。

# Python 和 JavaScript 中的成员运算符

“这个元素是否存在于另一个元素内部？”成员资格运算符知道答案。Python 和 JavaScript 都有一个名为 in 的成员资格运算符：

| PYTHON | JAVASCRIPT |
| :----- | :--------- |
| in     | in         |

在 Python 中，几乎可以对任何数据类型使用 in。例如，你可以检查一个字符是否出现在字符串中：

````python
>>> "o" in "Florence"

# 输出: True
````

它同样适用于列表、元组和字典：

````python
>>> my_list = ["vale", 98, "caty", None]
>>> 98 in my_list # 输出: True

>>> my_tuple = ("vale", "Italy", 105)
>>> "italy" in my_tuple # 输出: False

my_dict = {
    "name": "John", 
    "city": "Rome", 
    "age": 44
    }

"age" in my_dict # 输出: True
````

在 JavaScript 中，in 运算符既不适用于字符串，也不适用于数组，其行为并不直观：

````javascript
"a" in ["a", "b", "c"]
// 输出: false

"o" in "Florence"
// 输出: TypeError: Cannot use 'in' operator to search for 'o' in Florence
````

对于字符串来说毫无用处，而且它不会在数组中搜索实际的元素。它所查找的是数组索引：

````javascript
1 in ["a", "b", "c"]
// 输出: true
````

考虑到 Array 是 Object 的子类型，将其想象为具有以下结构的对象更为合理：

````javascript
var myArr = {
  0: "a",
  1: "b",
  2: "c"
};
````

简而言之，在 JavaScript 中，该方法仅对对象的键有效，如果给定的键存在于对象中，则返回 true：

````javascript
var my_obj = {"name": "John", "city": "Rome", "age": 44}

"name" in my_obj

// 输出: true
````

# 实例操作符：声明

“是谁创造了这个对象？”实例操作符试图回答这个问题。现在，在你指责我之前，请让我先澄清一下：下表只是我对一个更复杂故事的思维性呈现：

| PYTHON       | JAVASCRIPT |
| :----------- | :--------- |
| isinstance() | instanceof |
| type()       | typeof     |

正如你所见，这个问题下无法将 Python 和 JavaScript 进行一一对应，因为 Python 真正具有面向对象的特性，而 JavaScript 基于原型。

如果你对 JavaScript 有一点了解，就会知道“类”其实是一种幻觉，而每次我们谈论 JavaScript 中的类时，实际上都是在说谎。

但让我们通过一些例子来揭开我表格的神秘面纱。

#Python 类、isinstance 与 JavaScript 的 instanceof

考虑一个 Python 类及其从该类创建的新对象：

````python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_details(self):
        details = f"Name: {self.name} - Age: {self.age}"
        print(details)


tom = Person("Tom", 89)

tom.print_details()
````

什么是 tom？在面向对象编程中，我们说它是一个类的实例，也就是根据类的蓝图创建的新对象。Python 中的 isinstance（它更像一个函数而非运算符）会返回 True，如果某个对象看起来是由给定的类创建的。因此，在我们的例子中：

````python
>>> isinstance(tom, Person)

# 输出: True
````

为什么不试试 JavaScript 呢？以下是相同的类：

````javascript
class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printDetails() {
        const details = `Name: ${this.name} - Age: ${this.age}`
        console.log(details)
    }

}

const tom = new Person("Tom", 44)
````

汤姆现在是什么情况？我们来看看吧：

````javascript
console.log(tom instanceof Person)
// 输出: true
````

一个实例？！一点也不。tom 只是一个通过原型链与 Person.prototype 相关联的普通对象。实际上，它也与 Object 相关联。

````javascript
console.log(tom instanceof Object)
// 输出: true
````

因此，JavaScript 中的 instanceof 运算符会返回 true，如果一个对象看起来是由某个类创建的，但并非严格意义上的实例。只有当 tom 通过原型链与 Person.prototype 相连时，才会返回 true。

我尝试比较了两种语言的实例操作符，这是我能想到的最佳方法。我认为 Python 的 isinstance() 和 JavaScript 的 instanceof 相似，仅仅是因为它们的行为方式相同，但这仍然是一种危险的比较。

如果是这样，你可能会好奇，为什么要引入 isinstance()？这将引导我们进入下一节……

# Python 的 type() 和 JavaScript 的 typeof

当你想在 JavaScript 中检查某个值的类型时，typeof 就是你的得力助手：

````javascript
typeof "alex" // "string"
typeof 9 // "number"
typeof [1,2] // "object"
````

在 JavaScript 中，typeof 用于检查一个函数是否存在，例如：

````javascript
if (typeof window.futureStuff === "undefined") {
    window.futureStuff = function () {
        // 逻辑处理  
    }
}
````

从 JavaScript 来看，你可能希望在 Python 中找到一个类似的运算符。type() 函数可能是你的首选，因为它看起来与 JavaScript 的 typeof 相关。但 type() 返回的内容有所不同：

````python
>>> type(tom)
# 输出: <class 'person.Person'>

>>> type('ahh')
# 输出: <class 'str'>
````

用这个方法不太方便。isinstance() 更适合用于这个任务，因此我在上一节中提到了它。它的使用方法如下：

````python
>>> isinstance(9, int)
# 输出: True

>>> isinstance(tom, Person)
# 输出: True

>>> isinstance("caty", str)
# 输出: True

````

当需要将值与已知类型进行比较时，isinstance() 很有用。但有时你可能需要模拟 typeof 的功能。在这种情况下，仍然可以通过检查对象是否属于内置类型来使用 Python 的 type 函数：

````python
>>> type(9) is int
# 输出: True
````

# 如何在 Python 中处理异常：什么是异常？

考虑一个简单的 Python 函数。这里可能会出什么问题？

````python
def divide(a, b):
    result = a / b
    return result


divide(89, 6)
divide(89, "6")
divide(89, 2)
````

将代码保存到一个文件中（我把它命名为 exceptions.py），然后运行它。你会看到很多内容，更重要的是，会看到一个 TypeError：

````python
TypeError: unsupported operand type(s) for /: 'int' and 'str'
````

它来自第二次调用除法操作，我们试图将一个数字和一个字符串相除，这在 Python 中是无效的（JavaScript 也是如此），程序会停止，无法到达第三次函数调用。

Python 在这里所做的就是抛出一个异常，即一种会破坏我们代码的异常事件。

异常是严重的错误，大多数情况下会导致程序崩溃。我们如何处理异常，决定了程序是失败还是能够自行恢复。

# 在 Python 和 JavaScript 中处理同步异常

如果我们停留在一个同步的世界中，Python 和 JavaScript 在处理异常方面就非常相似。

Python 中有 try/except 语句。try 块应处理代码的“正常路径”，而 except 则用于捕获实际发生的异常。

之前的示例可以重写为：

````python
def divide(a, b):
    try:
        return a / b
    except TypeError:
        print("Oops!")

divide(89, 6)
divide(89, "6")
divide(89, 2)
````

请注意，应在 except 中指定错误类型，例如在本例中为 TypeError。

try/except 的含义大致是：尝试执行这段代码，如果失败就拦截错误并执行其他操作。

现在程序会打印“Oops!”，但不会再停止。所有函数调用（除出错的那一个外）都会继续执行。

你已经学会了如何在 Python 中处理异常！那 JavaScript 呢？

考虑以下示例（JavaScript）：

````javascript
function find(member, target) {
  return member in target;
}

find("a", "siena");
````

这是对 in 运算符的无效使用（它仅适用于对象）。

运行代码后，你应该能看到：

````javascript
TypeError: Cannot use 'in' operator to search for 'a' in siena
````

好的，JavaScript，说得对。在 JavaScript 中处理错误时，有 try/catch 语句。try 会尝试正常路径，而 catch 则处理可能出现的问题。

我们可以重写代码（再调用一次 find 来测试程序）为：

````javascript
function find(member, target) {
  try {
    return member in target;
  } catch (err) {
    console.log("Oops!");
  }
}

find("a", "siena");
var result = find("city", { name: "Jane", city: "London" });
console.log(result);
````

现在程序会打印“Oops!”、“true”，并且不再停止。

注意参数 err？接下来我们将在下一节中看看如何使用它。

悄悄告诉你，查看[《JavaScript错误处理的完整指南》](https://www.valentinog.com/blog/error/)以深入了解错误和异常。

# 如何处理异常：在 Python 和 JavaScript 中使用错误信息

处理异常固然很好，但打印“Oops”就不太好了。最好打印错误信息会更好。

在 JavaScript 中，我们可以使用 catch 的参数，通常约定为 error 或 err，它包含实际的异常对象。

反过来，几乎每个异常都有一个名为 message 的属性，其中包含实际的错误文本。之前的 JavaScript 示例变为：

````javascript
function find(member, target) {
  try {
    return member in target;
  } catch (err) {
    console.log(err.message);
  }
}

find("a", "siena");
var result = find("city", { name: "Jane", city: "London" });
console.log(result);
````

打印的内容为：

````javascript
Cannot use 'in' operator to search for 'a' in siena
true
````

比“Oops”好得多。

在 Python 中，你可以使用 as 来实现相同的功能：

````python
def divide(a, b):
    try:
        return a / b
    except TypeError as err:
        print(err)
````

示例不言自明：捕获 TypeError 并创建一个名为 err 的绑定以方便使用，然后打印错误信息。

# 在 Python 和 JavaScript 中自定义异常

就像编程中的几乎所有事物一样，即使是最基本的概念，术语也往往模糊不清。

以“throw”这个词为例。在JavaScript中，当开发者需要终止程序时，我们通常会说“throw”，表示“嘿，这不行了，我们得停止”。

错误可能由 JavaScript 引擎抛出，也可能由开发者在检查无效值时故意引发。

我们也可以用“raise”代替“throw”，并将错误称为“异常”。为什么要 raise 或 throw 错误呢？再来看一下 JavaScript 的例子。我们知道，in 运算符只对对象有效。

如果检查参数目标，当它是一个字符串时，我们可以抛出错误。具体方法如下：

````javascript
function find(member, target) {
  if (typeof target === "string")
    throw TypeError("Target must be an object, got string");

  try {
    return member in target;
  } catch (err) {
    console.log(err.message);
  }
}
````

现在调用该函数：

````javascript
find("a", "siena");
````

添加抛出操作的净效果是，该函数的使用者将收到错误信息：

````javascript
Error: Target must be an object, got string
````

这是可以预料到的，我们希望在目标是字符串时停止执行，因此代码将永远不会进入 try 块。

现在让我们回到 Python。我们留下了以下代码：

````python
def divide(a, b):
    try:
        return a / b
    except TypeError as err:
        print(err)
````

在这里，我们可以在除法运算前检查两个参数是否都是数字，然后抛出错误。Python 中对应的抛出方法是 raise：

````python
def divide(a, b):
    if isinstance(a, str) or isinstance(b, str):
        raise TypeError("Expected in, got object")
    try:
        return a / b
    except TypeError as err:
        print(err)
````

调用该函数时：

````python
divide(1, "2")
````

你应该看到：

````python
TypeError: Expected in, got object
````

注意这次使用 TypeError 来创建自定义错误消息。如果你愿意，也可以继承 Exception 来创建自己的自定义异常：

````python
class CustomError(Exception):
    pass


def divide(a, b):
    if isinstance(a, str) or isinstance(b, str):
        raise CustomError("Expected in, got object")
    try:
        return a / b
    except TypeError as err:
        print(err)


divide(1, "2")
````

除了 raise，我们还可以使用 assert，这在开发调试中非常方便：

````python
def divide(a, b):
    assert isinstance(a, str), "Expected int, got object"
    assert isinstance(a, str), "Expected int, got object"
    try:
        return a / b
    except TypeError as err:
        print(err)


divide(1, "2")
````

# 使用 reStructuredText 编写 Python 代码文档

在 JavaScript 中，我们使用 JSDoc 来为类、函数参数、函数返回值等添加文档说明。以下是一个带有 JSDoc 注解的函数示例：

````javascript
/**
 * Raises a number to exponent
 * @param {number} value - The base to raise
 * @param {number} exponent - The exponent
 * @return {number} - The exponent power
 */
function poooow(value, exponent) {
  return value ** exponent;
} 
````

注意参数和返回值中的“number”类型。通过添加这些类型提示，你可以帮助IDE在使用函数时提供辅助（并非字面意义上的双关）。同样的概念也适用于Python。

如何在 Python 中添加代码文档？实际上有多种方法，但推荐使用 reStructuredText。reStructuredText 是纯文本格式，可以嵌入到 Python 的文档字符串中。

文档字符串（Docstring）只是一个位于 Python 函数或模块内部的字符串，用于为代码提供说明。为了让你更好地理解，这里有一个 Python 函数中的文档字符串示例：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    """
    return string * count
````

当您决定为参数和返回值添加文档时，就会用到 reStructuredText。以下是我们的示例，已加入 reStructuredText：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    :param string: The string to repeat
    :param count: The number of repeats
    :return: The string repeated N times
    """
    return string * count
````

我知道，文档看起来可能有些冗余，但如果你决定尝试静态类型系统，reStructuredText 就能大放异彩。首先，先来简单了解一下类型理论。

# 一点类型理论：动态类型与静态类型

Python 和 JavaScript 是动态语言，这意味着它们几乎完全赋予程序员自由。例如，在 JavaScript 中，一个变量最初可能存储一个字符串，之后可以被修改为存储布尔值，而 JavaScript 引擎不会对此提出异议。（不过，你可以使用 const 来防止基本类型被重新赋值。）

Python 的情况也是如此。考虑以下示例：

````python
>>> name = "Caty"
>>> name = True
>>> print(name)
True
````

变量名最初是字符串类型，但随后会变为布尔类型。大多数情况下，只要具备自律性，就能驾驭动态类型并安然入睡。但在某些情况下，动态类型可能不允许使用，或风险过高（例如金融系统）。

与动态类型相反，静态类型意味着为每个变量分配固定的类型，因此意外更改类型的难度会增加。

然而，静态类型是一种不同的东西，学习它可能会是一段痛苦的过程，尤其是对初学者而言。

幸运的是，无论是在 JavaScript 还是 Python 中，我们都可以使用文档来实现“渐进式类型”。

接下来我们看看如何在 Python 中使用 reStructuredText 添加类型。

# 使用 reStructuredText 进行 Python 的渐进式输入

使用 reStructuredText，你可以在不向代码中添加实际类型的情况下，通过静态类型检查来体验 Python 的静态类型。

除了常见的标签如“:param”和“:return”之外，reStructuredText 还提供了“:type”和“:rtype”，分别用于为参数和返回值添加类型。

如果你想跟着代码进行，现在是创建并激活一个 Python 虚拟环境的好时机（在下一节中我们还需要安装 mypy）：

````bash
mkdir docs_and_typings && cd $_

python3 -m venv venv

source venv/bin/activate
````

为了演示示例，请在项目文件夹中创建一个名为 my_str_utils.py 的新文件，并添加以下函数：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    :param string: The string to repeat
    :param count: The number of repeats
    :return: The string repeated N times
    """
    return string * count
````

现在我们来在 reStructuredText 中使用 :type 和 :rtype 添加类型：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    :param string: The string to repeat
    :type string: str
    :param count: The number of repeats
    :type count: int
    :return: The string repeated N times
    :rtype: str
    """
    return string * count
````

这是渐进式输入：你现在拥有了一个已输入的函数，无需承受静态类型系统的认知负担。大多数IDE能够识别reStructuredText类型的语法，在PyCharm中，当参数类型与实际传入参数类型不匹配时，系统会发出警告：

![](https://www.valentinog.com/blog/python-for-js/gradual-typing-python.png)

在 PyCharm 中，点击函数名称后按 Ctrl+Q（或 MacOS 上的 F1），即可获取实际的类型提示：

![](https://www.valentinog.com/blog/python-for-js/gradual-typing-type-hints-python.png)

这些提示与我们将在下一节中看到的“真实类型提示”相同（大多数情况下，即使没有 :rtype，PyCharm 也能仅通过检查返回语句来推断返回类型）。

在 JavaScript 中，我们可以使用 JSDoc 类型来实现相同的效果。

# Python 和 JavaScript 中的静态类型

我之前给出的渐进式类型的定义有些模糊。确实，通过文档字符串中的代码注释可以实现静态类型检查。

但对渐进式类型化的更严格解释是：在代码中逐步添加真实类型的进程。而这里的“类型”指的是可以使用工具进行检查的类型注解。

JavaScript 有 TypeScript：这是一种可集成的 JavaScript 上层技术。TypeScript 是一种独立的语言，但可以逐步融入任何 JavaScript 代码库中。

Python 的情况也是如此：近年来，它引入了一种基于“类型提示”的可选类型系统。接下来，我们将从宏观角度来了解 Python 的类型提示。一旦掌握了基本概念，你便有望将类型应用于自己的 Python 代码中。让我们以上一节中的 string_repeat 函数为例：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    :param string: The string to repeat
    :type string: str
    :param count: The number of repeats
    :type count: int
    :return: The string repeated N times
    :rtype: str
    """
    return string * count
````

这次我们将移除 reStructuredText 类型：

````python
def string_repeat(string, count):
    """
    Repeats a string N times
    :param string: The string to repeat
    :param count: The number of repeats
    :return: The string repeated N times
    """
    return string * count
````

此时，IDE 将会丢失所有提示信息。但如果你还记得上一节的内容，“真实”的类型提示类似于“参数：类型”，因此在函数签名中添加它们应该很容易：

````python
def string_repeat(string: str, count: int):
    # omit
````

该风格与 TypeScript 中的用法相似。你也可以使用 -> 类型来指定返回值类型：

````python
def string_repeat(string: str, count: int) -> str:
    """
    Repeats a string N times
    :param string: The string to repeat
    :param count: The number of repeats
    :return: The string repeated N times
    """
    return string * count
````

一旦代码完成类型注解，就可以使用名为 mypy 的工具来检查其正确性，这将是下一节的主题。

# 使用 mypy 检查类型

mypy 是一个用于 Python 的类型检查器。要在你的测试项目中安装 mypy，请确保先激活虚拟环境，然后运行：

````bash
pip install mypy
````

打开 my_str_utils.py，尝试用浮点数而不是整数来使用 string_repeat：

````python
def string_repeat(string: str, count: int) -> str:
    """
    Repeats a string N times
    :param string: The string to repeat
    :param count: The number of repeats
    :return: The string repeated N times
    """
    return string * count


string_repeat('hello', 15.6)
````

IDE会发出警告，但你也可以使用 mypy 来检查 Python 脚本：

````bash
mypy my_str_utils.py
````

mypy 也会提醒你：

````bash
my_str_utils.py:11: error: Argument 2 to "string_repeat" has incompatible type "float"; expected "int"
Found 1 error in 1 file (checked 1 source file
````

与 TypeScript 不同，后者会编译成“原生” JavaScript，而 mypy 不生成任何代码，它只是进行类型检查。

# Python 用于 JavaScript 开发者：更进一步

你可能感兴趣的其他文章：

- [Making sense of asynchronous Python for JavaScript developers](https://www.valentinog.com/blog/async-python/)

感谢您的阅读，敬请关注[VALENTINO GAGLIARDI](https://www.valentinog.com/)博客！
