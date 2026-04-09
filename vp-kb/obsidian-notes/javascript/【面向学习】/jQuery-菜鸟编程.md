---
id: javascript-jQuery-cainiao
slug: /javascript-jQuery-cainiao
title: 【jQuery】【菜鸟编程】学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向学习】
---
# 前言

【内容】

* jQuery菜鸟编程学习笔记
* 具体详情看目录



【目的】

* **记录本人在jQuery学习中的笔记**
* **方便日后的工作与学习。**



【学习资料】

[jQuery教程-菜鸟教程](https://www.runoob.com/jquery/jquery-tutorial.html)



【温馨提示】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。

---



# jQuery快速了解

## 啥是jQuery？

* 是一个 JavaScript 函数库
* 是一个轻量级的"写的少，做的多"的 JavaScript 库



## 能干什么？

* HTML 元素选取
* HTML 元素操作
* CSS 操作
* HTML 事件函数
* JavaScript 特效和动画
* HTML DOM 遍历和修改
* AJAX
* Utilities
* 提供了大量的插件



## 如何在网页文件中引入jQuery？

> 方法一：本地引用

* 从[jQuery官网](https://jquery.com/download/)下载jQuery库

  * 下载版本（二选一）
    * Production version - 用于实际的网站中，已被精简和压缩。
    * Development version - 用于测试和开发（未压缩，是可读的代码）。

* 将下载的文件放在网页的同一目录下

* 在html文件中用`<script>`标签引用

  ````html 
  <head>
  	<script src="jquery-对应版本.js"></script>
  </head>
  ````

> 方法二：通过CDN（内容分发网络） 引用

* 直接选一个复制到html中用`<script>`标签引用

````html
/*Staticfile CDN*/
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>

/*百度 CDN:*/
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
</script>

/*又拍云 CDN*/
<script src="https://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js">
</script>

/*新浪 CDN*/
<script src="https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js"></script>

/*Microsoft CDN*/
<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
````

【==PS==】推荐使用方法二引入jQuery

* 减少加载时间。
  * **【解释】** *许多用户在访问其他站点时，已经从百度、又拍云、新浪、谷歌或微软加载过 jQuery。所以结果是，当他们访问您的站点时，会从缓存中加载 jQuery*
* 提高加载速度。
  * **【解释】** *大多数 CDN 都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应*



## 如何查看jQuery使用版本？

* 按`F12`打开 Console（控制台） 窗口
* 输入`$.fn.jquery `命令查看当前 jQuery 使用的版本



## 如何使用jQuery？

### jQuery语法

#### 基础语法

* 通过选取 HTML 元素，并对选取的元素执行某些操作

【格式】

````javascript
$(selector).action()
````

`$`：定义jQuery

`selector`（选择符）："查询"和"查找" **HTML 元素**（[具体详情](#jQuery选择器)）

`action()`：执行对元素的操作



#### 文档就绪事件

* 所有 jQuery 函数位于一个 document ready 函数中
  * **【原因】** *为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。*

【格式】

> 格式一：

````java
$(document).ready(function(){
   // 开始写 jQuery 代码...
});
````

> 格式二：简洁写法（与以上写法效果相同）

````javascript
$(function(){
   // 开始写 jQuery 代码...
});
````

【拓展】**JavaScript文档就绪事件**

> 格式:

````javascript
window.onload = function () {
    // 执行代码
}
````

![](https://www.runoob.com/wp-content/uploads/2019/05/20171231003829544.jpeg)



### jQuery选择器

* 允许对 HTML 元素组或单个元素进行操作。
* 更css中的选择器相同。
* 所有选择器都以美元符号开头：`$()`。

|  常用选择器  |    格式     |
| :----------: | :---------: |
|  元素选择器  | $("元素名") |
|  id 选择器   | $("#id名")  |
| class 选择器 | $(".类名")  |

[了解更多（无须深究可暂时跳过，用到时再具体了解）](https://www.runoob.com/jquery/jquery-ref-selectors.html)



#### 如何在独立文件中使用jQuery函数？

* 将jQuery 函数放到独立的 .js 文件中。

* 将函数直接添加到 `<head>` 部分中

  *示例：*

  ````html
  <head>
  <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
  </script>
  <script src="my_jquery_functions.js"></script>
  </head>
  ````

【好处】

* jQuery 函数易于维护



### jQuery事件

#### 啥是事件？

* 页面对不同访问者的响应

* 常见 DOM 事件：

  |                           鼠标事件                           |                           键盘事件                           |                         表单事件                          |                       文档/窗口事件                       |
  | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: |
  |   [click](https://www.runoob.com/jquery/event-click.html)    | [keypress](https://www.runoob.com/jquery/event-keypress.html) | [submit](https://www.runoob.com/jquery/event-submit.html) |   [load](https://www.runoob.com/jquery/event-load.html)   |
  | [dblclick](https://www.runoob.com/jquery/event-dblclick.html) | [keydown](https://www.runoob.com/jquery/event-keydown.html)  | [change](https://www.runoob.com/jquery/event-change.html) | [resize](https://www.runoob.com/jquery/event-resize.html) |
  | [mouseenter](https://www.runoob.com/jquery/event-mouseenter.html) |   [keyup](https://www.runoob.com/jquery/event-keyup.html)    |  [focus](https://www.runoob.com/jquery/event-focus.html)  | [scroll](https://www.runoob.com/jquery/event-scroll.html) |
  | [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) |                                                              |   [blur](https://www.runoob.com/jquery/event-blur.html)   | [unload](https://www.runoob.com/jquery/event-unload.html) |
  |   [hover](https://www.runoob.com/jquery/event-hover.html)    |                                                              |                                                           |                                                           |

[了解更多（无须深究可暂时跳过，用到时再具体了解）](https://www.runoob.com/jquery/jquery-ref-events.html)



#### 如何设置jQuery事件?

【格式】

````javascript
$("selecter").action（function(){
    //动作触发后执行的代码！！！
}）;
````

`selecter`：[选择器](#jQuery选择器)

`action`：事件

`function`：函数



# jQuery 效果

## 隐藏/显示

> hide()【隐藏】和 show()【显示】

【格式】

````javascript
$("selecter").hide(speed,callback);
$("selecter").hide(speed,callback);
````

`speed`（隐藏/显示的速度）：可选

* 值：`slow`、`fast`、`毫秒`

`callback`（隐藏/显示后执行的函数）：可选



> toggle()【将显示的隐藏，将隐藏的显示】

【格式】

````javascript
$("selecter").toggle(speed,callback);
````



## 淡入/淡出

【==注意==】

* 大小写不能变

> fadeln()【淡入已已隐藏的元素】和 fadeOut() 【淡出可见元素】

【格式】

````javascript
$("selector").fadeIn(speed,callback);
$("selector").fadeOut(speed,callback);
````

`speed`（隐藏/显示的速度）：可选

- 值：`slow`、`fast`、`毫秒`

`callback`（淡入后执行的函数）：可选



> fadeToggle() 【元素已淡出，添加淡入效果；元素已淡入，添加淡出效果】

【格式】

````javascript
$("selector").fadeToggle(speed,callback);
````



> fadeTo()  【渐变淡入淡出】

【格式】

````javascript
$("selector").fadeTo(speed,opacity,callback);
````

` opacity `(不透明度)：将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）

【==注意==】

* 没有默认参数，必须加上  slow/fast/Time



## 滑动

> slideDown() 【向下滑动元素】 和 slideUp()【向上滑动元素】

【格式】

````javascript
$("selector").slideDown(speed,callback);
$("selector").slideUp(speed,callback);
````

`speed`（效果的时长）：可选

- 值：`slow`、`fast`、`毫秒`

`callback`（滑动后执行的函数）：可选



> slideToggle()【已向下滑动的元素，向上滑动；已向上滑动的元素，向下滑动】

【格式】

````javascript
$("selector").slideToggle(speed,callback);
````



## 动画

> animate()【创建自定义动画】

【格式】

````javascript
 $("selector").animate({params},speed,callback);
````

`params`（形成动画的 CSS 属性）：必需

* **可操作多个属性**
  * 可以同时使用多个属性
  * 可以操作所有 CSS 属性
    * ==必须使用**驼峰标记**法书写所有的属性名==
      * 例如必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
    * 色彩动画并不包含在核心 jQuery 库中
      * 如果需要生成颜色动画，您需要从 [jquery.com](http://jquery.com/download/) 下载 
        [颜色动画](http://plugins.jquery.com/color/) 插件。
* **可使用相对值**
  * 相对值（该值相对于元素的当前值）。需要在值的前面加上` += `或 `-=`
* **可使用预定义的值**
  * 可以把属性的动画值设置为 `show`、`hide` 或 `toggle`
* **可使用对列功能**
  * 编写多个 animate() 调用，**逐一运行**这些 animate 调用。

`speed`（效果的时长）：可选

- 值：`slow`、`fast`、`毫秒`

`callback`（动画完成后执行的函数）：可选

【==注意==】

* 如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute
  * 【原因】*默认情况下，所有 HTML 元素都有一个静态位置，且无法移动。*



## 停止动画

> stop() 【在它们完成之前，停止动画或效果】

* 适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画

【格式】

````javascript
 $("selector").stop(stopAll,goToEnd);
````

`stopAll`(是否应该清除动画队列)：

* `false`:默认
  * 仅停止活动的动画，允许任何排入队列的动画向后执行。
* `true`:所有动画都不执行

`goToEnd`（是否立即完成当前动画）：

* `false`:默认
  * 会清除在被选元素上指定的当前动画
* `true`
  * 执行完当前动画再停止后续动画



## Callback方法（回调）

* 在当前动画 100% 完成之后执行
* 有Callback和无Calback的区别
  * 有Callback：执行完动画在执行回调函数
  * 无Callback：直接执行后续函数



## 链（Chaining）

* 可以把动作/方法链接在一起
* 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）
* 依次执行

【格式】

````javascript
$("selecter").action1().action2().action3()....actionN();
````

【缩进格式】

````javascript
$("selecter").action1()
    .action2()
    .action3()
    ...
    .actionN();
````

【==注意==】

* 无须担心缩进格式中的空格
  * 【原因】*jQuery 会抛掉多余的空格，并当成一行长代码来执行上面的代码行。*



## 更多方法【了解即可】

[jQuery 效果方法](https://www.runoob.com/jquery/jquery-ref-effects.html)



# jQuery HTML

* jQuery 拥有可操作 HTML 元素和属性的强大方法。
* jQuery 中非常重要的部分，就是操作 DOM 的能力。
* jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。

【拓展】**什么是DOM？**

* DOM = Document Object Model（文档对象模型）
* DOM 定义访问 HTML 和 XML 文档的标准



## 获取内容和属性

### 获取内容方法

| 方法名 |          设置或返回内容          |
| :----: | :------------------------------: |
| text() |        所选元素的文本内容        |
| html() | 所选元素的内容（包括 HTML 标记） |
| val()  |           表单字段的值           |



### 获取属性

> attr() 【获取自定义属性值】

【格式】

````javascript
$("selecter").attr("想要获取值的属性")
````



> prop()【获取固有属性值】

【格式】

````javascript
$("selecter").prop("想要获取值的属性")
````

【PS】

* 具有 true 和 false 两个属性的属性，如 checked, selected 或者 disabled 使用prop()



【拓展】**啥是固有属性？**

* 元素本身就带有的属性
* W3C 标准里就包含有的属性
*  IDE 里能够智能提示出的属性



#### attr()和prop()的区别

|                                |    **attr()**    |   **prop()**   |
| :----------------------------: | :--------------: | :------------: |
|            **用途**            | 获取自定义属性值 | 获取固有属性值 |
| **如果没有相应的属性，返回值** |   `undefined`    |   `空字符串`   |



## 设置内容和属性

### 设置内容方法

|        方法名        |          设置或返回内容          |
| :------------------: | :------------------------------: |
|   text("文本内容")   |        所选元素的文本内容        |
| html("带标签的内容") | 所选元素的内容（包括 HTML 标记） |
|      val("值")       |           表单字段的值           |



#### text()、html() 以及 val() 的回调函数

【格式】

````javascript
$("selecter").text(function(index,origText){
    //方法代码
});
$("selecter").html(function(index,origText){
    //方法代码
});
$("selecter").val(function(index,origText){
    //方法代码
});
````

`index`：被选元素列表中当前元素的下标

`origText`：原始（旧的）值。



### 设置属性

> attr()方法设置属性值

【格式】

````javascript
//设置单个属性
$("selecter").attr("属性","想要设置的值");

//设置多个属性
$("selecter").attr({
    "属性1":"属性1的值",
    "属性2":"属性2的值",
    ....
    "属性N":"属性N的值",
});
````



#### attr() 的回调函数

【格式】

````javascript
$("selecter").attr("属性",function(index,orgValue){
    //方法代码
});
````

`index`：被选元素列表中当前元素的下标

`orgValue`：原始（旧的）值



## 添加元素/内容

> append()【在被选元素的**结尾**插入内容（仍然在该元素的内部）】

【格式】

````javascript
$("selecter").append("追加文本");
````



> prepend() 【在被选元素的**开头**插入内容（仍然在该元素的内部）】

【格式】

````javascript
$("selecter").prepend("在开头追加文本");
````



> 通过 append() 和 prepend() 方法添加若干新元素、

【思路】

* 创建若干个新元素
  * 这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建
* 然后通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）

【格式】

````javascript
var txt1="<p>文本-1。</p>";              // 使用 HTML 标签创建文本
var txt2=$("<p></p>").text("文本-2。");  // 使用 jQuery 创建文本
var txt3=document.createElement("p");
    txt3.innerHTML="文本-3。";               // 使用 DOM 创建文本 text with DOM
$("body").append(txt1,txt2,txt3);        // 追加新元素
````



> after() 【在被选元素之**后**插入内容】 和 before()【在被选元素之**前**插入内容】

【格式】

````javascript
$("selecter"").after("在元素后面添加文本");

$("selecter").before("在元素前面添加文本");
````



> 通过 after() 和 before() 方法添加若干新元素

【思路】

* 创建若干新元素
  * 这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建
* 然后通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）

【格式】

````javascript
var txt1="<b>I </b>";                    // 使用 HTML 创建元素
var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
$("selecter").after(txt1,txt2,txt3);          // 在图片后添加文本
````



#### 【append/prepend】和【after/before】有什么区别?

* 【append/prepend】 是在选择元素**内部**嵌入。
* 【after/before】 是在元素**外面**追加。



## 删除元素/内容

### remove()方法

> 删除被选元素**和**子元素

【格式】

````javascript
$("selecter").remove();
````



> 过滤被删除的元素

【格式】

````javascript
$("selecter").remove("selecter");
````



### empty()方法

> 删除被选元素的子元素

【格式】

````javascript
$("selecter").empty();
````



## 获取并设置CSS类

|     方法名      |                功能                 |
| :-------------: | :---------------------------------: |
|  `addClass()`   |     向不同的元素添加 class 属性     |
| `removeClass()` | 在不同的元素中删除指定的 class 属性 |
| `toggleClass()` | 对被选元素进行添加/删除类的切换操作 |

【格式】

````javascript
$("元素1,元素2,元素3,...,元素N").addClass("类名1 类名2 类名N");

$("元素1,元素2,元素3,...,元素N").removeClass("类名1 类名2 类名N");

$("元素1,元素2,元素3,...,元素N").toggleClass("类名1 类名2 类名N");
````

【==注意==】

* 指定多个元素用`,`隔开
* 添加多个类用`空格`隔开



## CSS()方法

> 返回指定的 CSS 属性的值

【格式】

````javascript
$("selecter").css("propertyname");
````

`propertyname`：想要获取值的CSS属性



> 设置指定的 CSS 属性

【格式】

````javascript
$("selecter").css("propertyname","value");
````

`propertyname`：想要设置值的CSS属性

`value`：该属性的值



>设置多个 CSS 属性

【格式】

````javascript
$("selecter").css({
    "属性1":"值1",
    "属性2":"值2",
    ...
    "属性N":"值N",
});
````



## 尺寸

![](https://www.runoob.com/images/img_jquerydim.gif)

### 【设置或返回元素的**宽度**】

|     方法名     |            描述            |
| :------------: | :------------------------: |
|   `width()`    | 不包括内边距、边框或外边距 |
| `innerWidth()` |         包括内边距         |
| `outerWidth()` |      包括内边距和边框      |

【格式】

```javascript
$("selecter").width();

$("selecter").innerWidth();

$("selecter").outerWidth();
```



### 【设置或返回元素的**高度**】

|     方法名     |            描述            |
| :------------: | :------------------------: |
|   `height()`   | 不包括内边距、边框或外边距 |
| `innerWidth()` |         包括内边距         |
| `outerWidth()` |      包括内边距和边框      |

【格式】

```javascript
$("selecter").height();

$("selecter").innerHeight();

$("selecter").outerHeight();
```



## 了解更多

[jQuery HTML / CSS 方法](https://www.runoob.com/jquery/jquery-ref-html.html)



# jQuery 遍历

## 什么是遍历？

* 就是移动
  * 【解释】*用于根据其相对于其他元素的关系来"查找"（或选取）HTML 元素。以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。*



## 对DOM 进行遍历

* 从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）

![](https://www.runoob.com/images/img_travtree.png)



### 祖先【向上遍历 DOM 树】

|      方法名      |              功能描述               |              方法返回              |
| :--------------: | :---------------------------------: | :--------------------------------: |
|    `parent()`    |    只会向上一级对 DOM 树进行遍历    |        被选元素的直接父元素        |
|   `parents()`    | 一路向上直到文档的根元素 (`<html>`) |       被选元素的所有祖先元素       |
| `parentsUntil()` |                                     | 介于两个给定元素之间的所有祖先元素 |

【格式】

````javascript
/* parent方法 */
//返回"selecter"的直接父元素
$("selecter").parent();

/* parents方法 */
//返回"selecter"的所有祖先元素
$("selecter").parents();
//返回"selecter"的所有祖先元素中的被选中元素
$("selecter").parents("selecterChosen");

/* parentsUntill方法 */
//返回"selecterStart"到"selecterEnd"中所有祖先元素
$("selecterStart").parentsUntill("selecterEnd");
````



### 后代【向下遍历 DOM 树】

|    方法名    |           功能描述            |         方法返回         |
| :----------: | :---------------------------: | :----------------------: |
| `children()` | 只会向下一级对 DOM 树进行遍历 | 被选元素的所有直接子元素 |
|   `find()`   |   一路向下直到最后一个后代    |    被选元素的后代元素    |

【格式】

````javascript
/* children方法 */
//返回被选元素的所有直接子元素
 $("selecter").children();
//使用可选参数来过滤对子元素的搜索
 $("selecter").children("selecterChosen");

/* find方法 */
//返回属于"selecter"后代的所有"selecterChosen"元素
$("selecter").find("selecterChosen");
//返回"selecter"的所有后代
$("selecter").find("*");
````



### 同胞【在 DOM 树中水平遍历】

|    方法名     |                 方法返回                 | 方向相反方法  |
| :-----------: | :--------------------------------------: | :-----------: |
| `siblings()`  |          被选元素的所有同胞元素          |               |
|   `next()`    | 只返回一个元素，被选元素的下一个同胞元素 |   `prev()`    |
|  `nextAll()`  |       被选元素的所有跟随的同胞元素       |  `prevAll()`  |
| `nextUntil()` | 介于两个给定参数之间的所有跟随的同胞元素 | `prevUntil()` |

【格式】

````javascript
/* siblings() 方法 */
//返回 "selecter" 的所有同胞元素
$("selecter").siblings();
//返回属于 "selecter" 的同胞元素中的所有 "selecterChosen" 元素
$("selecter").siblings("selecterChosen");

/* next() 方法 */
//返回 "selecter" 的下一个同胞元素
$("selecter").next();

/* nextAll() 方法 */
//返回 "selecter" 的所有跟随的同胞元素
$("selecter").nextAll();

/* nextUntil() 方法 */
//返回介于 "selecterStart" 与 "selecterEnd" 元素之间的所有同胞元素
$("selecterStart").nextUntil("selecterEnd");
````



### 过滤【缩小搜索元素的范围】

#### 基本过滤方法

* 允许您基于其在一组元素中的位置来选择一个特定的元素。

|  方法名   |            方法返回            |
| :-------: | :----------------------------: |
| `first()` |       被选元素的首个元素       |
| `last()`  |     被选元素的最后一个元素     |
|  `eq()`   | 被选元素中带有指定索引号的元素 |

【格式】

````javascript
/* first() 方法 */
//选取首个 "selecterFather" 元素内部的第一个 "selecterSon" 元素
$("selecterFather selecterSon").first();

/* last() 方法 */
//选择最后一个 "selecterFather" 元素中的最后一个 "selecterSon" 元素
$("selecterFather selecterSon").last();

/* eq() 方法 */
//选取第 index+1 个 "selecter" 元素    (索引号从 0 开始)
$("selecter").eq(index);
````



#### 其他过滤方法

* 允许您选取匹配或不匹配某项指定标准的元素。

> filter() 方法

* 允许您规定一个标准。
  * 匹配这个标准的元素：会被从集合中删除
  * 匹配的元素：会被返回

【格式】

````javascript
//返回带有 "selecterChosen" 的所有 "selecter" 元素
$("selecter").filter("selecterChosen");
````



> not() 方法

* not() 方法与 filter() 相反

* 允许您规定一个标准。
  - 匹配这个标准的元素：会被返回
  - 匹配的元素：会被从集合中删除

【格式】

````javascript
//返回不带有 "selecterChosen" 的所有 "selecter" 元素
$("selecter").not("selecterChosen");
````



## 了解更多

[jQuery 遍历方法](https://www.runoob.com/jquery/jquery-ref-traversing.html)



# jQuery AJAX

## 啥是AJAX？

* 与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。
* AJAX = 异步 JavaScript 和 XML



## jQuery与AJAX有啥关系？

* jQuery 提供多个与 AJAX 有关的方法。
* 通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。



## AJAX load()方法

* 从服务器加载数据，并把返回的数据放入被选元素中。

【格式】

````javascript
$(selector).load(URL,data,callback);
````

` URL`（希望加载的 URL）：必需

`data`（与请求一同发送的查询字符串键/值对集合）：可选

`callback`（ load() 方法完成后所执行的函数名称）：可选

* 可以设置不同的参数：
  * `responseTxt` ：包含调用成功时的结果内容
  * `statusTXT` ：包含调用的状态
  * `xhr` ：包含 XMLHttpRequest 对象



## AJAX get()/post()方法

* 通过 HTTP GET 或 POST 请求从服务器请求数据。



### HTTP 请求：GET 与 POST 的区别

|                             |          GET           |                     POST                      |
| :-------------------------: | :--------------------: | :-------------------------------------------: |
|    **对指定的资源操作**     |        请求数据        |               提交要处理的数据                |
|      **数据能否缓存**       |         可缓存         |                   无法缓存                    |
|     **发送的数据数量**      | 只能发送有限数量的数据 |              可以发送大量的数据               |
|      **数据发送位置**       |     在 URL 中发送      |               在正文主体中发送                |
|         **安全性**          |   发送的数据不受保护   |              发送的数据是安全的               |
| **数据在 URL 栏中是否公开** |          公开          |                    不公开                     |
|        **可变大小**         |      2000 个字符       |                 最多允许 8 Mb                 |
|        **主要作用**         |        获取信息        |                   更新数据                    |
|     **表单提交时编码**      |   只接受 ASCII 字符    | 不绑定表单数据类型，并允许二进制和 ASCII 字符 |



### jQuery $.get() 方法

* 通过 HTTP GET 请求从服务器上请求数据。

【格式】

````javascript
$.get(URL,callback);
````

`URL`（希望请求的 URL）：必需

`callback`（请求成功后所执行的函数名）：可选



### jQuery $.post() 方法

* 通过 HTTP POST 请求向服务器提交数据。

【格式】

````javascript
$.post(URL,data,callback); 
````

`URL`（希望请求的 URL）：必需

`data`（连同请求发送的数据）：可选

`callback`（请求成功后所执行的函数名）：可选



### 了解更多

[jQuery AJAX 方法](https://www.runoob.com/jquery/jquery-ref-ajax.html)



# 结语

【感谢】

***感谢菜鸟编程提供学习的平台!!!***

***感谢各位读者能看到最后!!!***

