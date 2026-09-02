---
title: '2026-04-09'
tags: []

---

# 声明

本文为译文，原文来自 [VALENTINO GAGLIARDI](https://www.valentinog.com/)：[《Python for JavaScript Developers》](https://www.valentinog.com/blog/python-for-js/)。译文仅供学习交流，部分表述根据中文语境进行了调整。如有翻译不当之处，欢迎指正。

---

# 目录

1. Python 和 JavaScript 中的算术运算符
2. Python 和 JavaScript 中的加减运算符
3. Python 和 JavaScript 中的比较运算符
4. Python 和 JavaScript 中的逻辑运算符
5. Python 和 JavaScript 的基本数据类型
6. Python 和 JavaScript 中的正则表达式
7. Python 数据类型与 JavaScript：不可变性与变量
8. Python 和 JavaScript 中的复杂数据类型
9. Python 数据类型：列表和元组
10. Python 数据类型：字典和 JavaScript 对象
11. 没有switch，没有party
12. JavaScript 对象展开/合并，Python 字典展开/合并
13. Python 数据类型：Set与 JavaScript Set
14. Python 和 JavaScript 中的成员运算符
15. 实例操作符：a disclaimer
16. Python 类、isinstance 与 JavaScript 的 instanceof
17. Python 的 type() 和 JavaScript 的 typeof
18. 如何在 Python 中处理异常：什么是异常？
19. 在 Python 和 JavaScript 中处理同步异常
20. 如何处理异常：在 Python 和 JavaScript 中使用错误信息
21. 在 Python 和 JavaScript 中自定义异常
22. 使用 reStructuredText 编写 Python 代码文档
23. 一点类型理论：动态类型与静态类型
24. 使用 reStructuredText 进行 Python 的渐进式输入
25. Python 和 JavaScript 中的静态类型
26. 使用 mypy 检查类型
27. Python 用于 JavaScript 开发者：更进一步

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

