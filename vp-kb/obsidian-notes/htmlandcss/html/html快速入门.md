---
id: htmlAndCss-html-note
slug: /htmlAndCss-html-note
title: html快速入门
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/html
---
# 前言

此笔记为本人根据B站up主[宇哥在学习](https://space.bilibili.com/72076631)发布的[【建议收藏】手把手带你了解前端学习路线和时间规划，学完找工作不是问题](https://www.bilibili.com/video/BV1uf4y1U7YT?spm_id_from=333.880.my_history.page.click)视频所说的前端学习线路，重新对HTML知识进行系统整理。



## 线路图：

==注意：（标签含义）==

* `白色`：
  * `字体`：基础，必须会。
  * `带星`：重中之重，最好能讲清楚原理或自己实现。
* `红色`：
  * `字体`：有多余的时间再看。
  * `带星`：可以不看。
  * `线:`：不影响学习进度，可以先跳过。

![1649727548982](D:\Data\9_Typora图片缓存\1649727548982.png)



## 注意：

* **由于此前有一定HTML基础，所以该笔记的内容过于简略。**
* **该笔记内容为路线图中的==白色基础必会部分==。**

* **需要详细学习可以移步：[HTML 教程-菜鸟编程](https://www.runoob.com/html/html-tutorial.html)**



# 常用标签语法

## 常用标签：

### p（段落）

* 表示**段落**

**格式：**

````html
<p>输入新段落的内容</p>
````

==注意：==

* `p`是块级元素
* 浏览器会自动在段落的前后添加空行。



### h1-h6（标题）

* 默认所有标题都以粗体显示
* 字号：`h1` > `h2` > `h3` > `h4` > `h5` > `h6`
* 每个标题之间的间隔是由浏览器默认的CSS制造的。

**格式：**

````html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
````

==注意：==

* 创建分级标题时，要避免跳过某些级别。（即避免高跳低，允许低跳到高）
* 不要使用`h1`~`h6`标记副标题、标语以及无法成为独立标题的子标题。



### span（没有其他合适的元素时才使用它）

* 用于对文档中的行内元素进行组合
* 没有任何默认格式
*  只适合包围字词或短语内容。

**格式：**

````html
<!--用id唯一地标识span包含的内容-->
<span id="name">创建希望包含在span里的内容</span>

<!--用类标识-->
<span class="name">创建希望包含在span里的内容</span>
````

==注意：==

* 可以同时添加`class`和`id`属性
* **class和id的区别**
  * `class`:用于一组元素
  * `id`:用于标识页面中单独的、唯一的元素。



### img（插入图像）

* 定义页面中的图像
* 必须属性`src`和`alt`

**格式：**

````html
<img src="imgae.url" alt="代替文本" width=”x“ height="y"/>
````

`src`:指示图像文件在服务器上的**位置**

`alt`:提供图像无法显示时的**替代文本**

`width`:指定图像的**宽度**

`height`:指定图像的**高度**

[更多属性](https://www.runoob.com/tags/tag-img.html)



==注意：==

* 图像必须先上传到服务器上，访问者才可能看到。
* 不要用`alt`文本代替图像的`caption`
* `width`和`height`以**像素**为单位



### a（链接）

* 定义超链接，用于从一个页面链接到另一个页面

**格式：**

````html
<a href="链接地址" rel="链接标签" title="链接描述"</a>

<!--块级链接-->
<a href="链接地址" rel="链接标签" title="链接描述">
    <p></p>
    <img/>
</a>
````

`href`:（指定链接的目标）

* 超文本引用
  * `相对URL`：指向站内网页的链接
  * `绝对URL`：指向其他网站页面的链接

- 当访问者指向链接，在浏览器中、目标URL会显示在状态栏中。

`rel`:

* `rel`属性是可选的。
* 不要让链接的标签太长。

[更多属性](https://www.runoob.com/tags/tag-a.html)



## 布局用到的一些标签

### div

* 定义一个分隔区或者一个区域部分
* 常用与组合块级元素。

**格式：**

````html
<div></div>
````

[更多属性](https://www.runoob.com/tags/tag-div.html)



### ul（无序列表)

* `ul`默认情况下、`无序列表`前面显示实心的圆点。


**格式：**

````html
<ul>
    <li>添加要包含在列表项目内的内容</li>
    <li>文本</li>
    <li>链接</li>
    <li>img元素等</li>
</ul>
````

[更多属性](https://www.runoob.com/tags/tag-ul.html)



### ol（有序列表）

* `ol`默认使用阿拉伯数字创建带编号的`有序列表`

**格式：**

````html
<ol start="" type="" reversd="">
    <li>添加要包含在列表项目内的内容</li>
    <li>文本</li>
    <li>链接</li>
    <li>img元素等</li>
</ol>
````

`start`:指定编号起始值。

[更多属性](https://www.runoob.com/tags/tag-ol.html)



### form（表单）和 input（输入元素）

> form

* 一个包含表单元素的区域

**格式：**

````html
<form>
    input元素
</form>
````



> input

* 输入类型是由`type`定义的

**input元素格式：**

````html
<input type="类型名 " name="" value="">
````

`type`:类型名

|  类型名  |   描述   |
| :------: | :------: |
|   text   |  文本域  |
| password | 密码字段 |
|  radio   | 单选按钮 |
| checkbox |  复选框  |
|  submit  | 提交按钮 |



### table（表格）

* 搭配
  * `th`设置表头
  * `tr`控制行数
  * `td`控制列数

**格式：**

````html
<table border="1">
    <tr>
        <th>第一列表头</th>
        <th>第二列表头</th>
    </tr>
    <tr>
        <td>第一行，第一列</td>
        <td>第一行，第二列</td>
    </tr>
    <tr>
        <td>第二行，第一列</td>
        <td>第二行，第二列</td>
    </tr>
</table>
````

​	`border`:边框属性，==若不定义表格默认无边框==

[更多表格标签](https://www.runoob.com/html/html-tables.html)



## 常用的文本标签

### b（粗体）

* 将文本变为**粗体**
* 做为最后的选择，只有在没有其他标记比较合适时才使用它。

**格式：**

````html
<b>输入需要显示粗体的文本</b>
````



### i（斜体）

* 将文本变为**斜体**
* 多用于*分类名称、技术术语、外语里的惯用语、翻译散文、西方文字中的船舶名称*等。

**格式：**

````html
<i>输入需要显示斜体的文本</i>
````



### small（旁注）

- 表示**细则一类的旁注**
- 显示威小字号
- ==一定要在符合内容语义的情况下使用，而不是为了减小字号而使用==
- 只适用于短语，不要用它标记长的法律声明。

**格式：**

```html
<small>输入表示免责声明、注解、署名等类型的文本</small>
```



### strong（重要程度）和em（强调文本）

* 表示内容的重要性，**标记重要文本**。
* `em`表示内容的着重点，**强调文本**
* 两个标签既可以单独使用，也可以一起使用
* 浏览器将`strong`文本以粗体显示。

**格式：**

````html
<!--strong和em一起使用-->
<strong>输入想标记为<em>输入想要强调的文本</em>重要内容的文本</strong>

<!--strong和em分开使用-->
<strong>输入想标记为重要内容的文本</strong><em>输入想要强调的文本</em>

<!--strong嵌套使用，要比其他的strong文本更为重要-->
<strong>输入想标记为<strong>输入想要嵌套的重要内容文本</strong>重要内容的文本</strong>

<!--em嵌套使用-->
<em>输入想强调<em>输入想要嵌套的强调文本</em>的文本</em>
````



==注意==

* 不要使用`b`元素代替`strong`,不要使用`i`元素代替`em`。
* HTML5中，`em`表示强调的**唯一元素**，而`strong`表示重要程度
* `em`用于所有层次的强调，`strong`用于表示重要性，其他情况使用`b`和`i`。



### del （删除线）

* 表示删除线
* **既可以包围短语内容（行类元素），又可以包围块级别内容的元素。**

**格式：**

````html
<del>添加需要删除线的文本</del>
````

[更多属性](https://www.runoob.com/tags/tag-del.html)



### code（标记代码）

* 短语标标签，用来定义计算机代码文本

**格式：**

````html
<code>
    print("Hello World");
</code>
````



## 放在头部的标签

### title（标题）

* 必需的
* ==一个HTML文档中只能有一个`title`标签==
* 遗漏`title`标签，文档作为HTML是无效的。

**格式：**

````html
<head>
    <title >文档标题</title>
</head>
````



### style（定义文档样式信息）

* 每个 HTML 文档能包含多个 `style` 标签。

**格式：**

````html
<head>
    <title >文档标题</title>
    <style type="text/css">
        /*文本样式*/
    </style>
</head>
````

`type`:规定样式类型

[更多属性](https://www.runoob.com/tags/tag-style.html)



### script（定义客户端脚本）

**格式：**

````html
<head>
    <!--省略部分内容-->
    <script src="外部脚本的URL">
        /*脚本内容*/
    </script>
</head>
````

`src`:==如果使用`src`属性，则`script`元素必须是空的==

[更多属性](https://www.runoob.com/tags/tag-script.html)



### link（定义两个链接文档之间的关系）

**格式：**

````html
<head>
    <link charset="字符编码" href="被链接资源的URL">
</head>
````

[更多Link对象属性](https://www.runoob.com/jsref/dom-obj-link.html)



# HTML5新标签和语义化

**什么是语义化？**

说白了就是一看到标签就知道它所定义的内容（当然这个能力需要一定的英语及基础），如`<form>`一看就是表单，`<table>`就是表格等。



## HTML5新标签

![](https://www.runoob.com/wp-content/uploads/2013/07/html5-layout.jpg)

### header（页眉）

* 文档或者文档的一部分区域的页眉
* `header`标签不能被放在`footer`、`address`或者是另一个`header`元素内部。

**格式：**

````html
<article>
    <header>
        <!--页面内容-->
    </header>
</article>
````

[更多属性](https://www.runoob.com/tags/tag-header.html)



### section（章节）

* 用来定义章节、头部、底部或者文档的其他区域。

**格式：**

````html
<section>
    <!--章节内容-->
</section>
````

[更多属性](https://www.runoob.com/tags/tag-section.html)



### footer（页脚）

* 定义页脚
* 在一个文档中，可以定义多个 `<footer>`元素。

**格式：**

````html
<footer>
    <!--页脚内容-->
</footer>
````

[更多属性](https://www.runoob.com/tags/tag-footer.html)



### aside (侧边栏)

* 定义主区域内容之外的内容

**格式：**

````html
<aside>
    <!--侧边栏内容-->
</aside>
````



### nav（标记导航）

* `nav`中的链接可以指向页面中的内容。（与word文档的导航目录一样）

**格式：**

````html
<nav role="">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
</nav>
````

`role`:

* 可选，可以提高可访问性

[更多属性](https://www.runoob.com/tags/tag-nav.html)

### main（文档主体）

* 用于指定文档的主体内容。
* 在一个文档中，`main`元素是==唯一的==

**格式：**

````html
<main>
    <!--文档主体内容-->
</main>
````



### article（独立的内容）

-  定义独立的内容
- 定义的内容本身==必须是有意义的且必须是独立于文档的其余部分。==
- 说白了就是引用

**格式：**

```html
<article>
    <!--独立的内容-->
</article>
```

[了解更多](https://www.runoob.com/tags/tag-article.html)



### figure（流内容）

* 定义独立的流内容（`流内容`：图像、图表、照片、代码等等）
* `figure`元素内容应该与主内容相关，如果被删除，对文档流==不产生==影响。
* 用`figcaption`标签定义`figure`元素的标题
* `figcaption`元素被置于 `figure"`元素的第一个或最后一个子元素的位置。

**格式：**

````html
<figure>
    <!--流内容-->
    <figcaption>流内容标题</figcaption>
</figure>
````



## ==HTML5 Web存储==

* 在本地存储用户的浏览数据

* 存储在Web存储中数据
  * 以 键/值 对存在
  * 只允许该网页访问使用
  * 不会被保存在服务器上
  * 用于用户请求网站数据上
  
* 使用前需检查浏览器是否支持

  ````javascript
  if(typeof(Storage)!=="undefined")
  {
      // 是的! 支持 localStorage  sessionStorage 对象!
      // 一些代码.....
  } else {
      // 抱歉! 不支持 web 存储。
  }
  ````



![](https://www.runoob.com/wp-content/uploads/2019/04/3793073884-56950753e65db_articlex.png)

### localStorage

* 用于==长久保存==整个网站的数据，保存的数据没有过期时间，直到手动去除。

==注意：键/值对通常以字符串存储，若要修改存储类型，要转换格式==

>存储

**格式：**

````javascript
//写法1：
localStorage.setItem("key","value");

//写法2：
locaStorage.key="value"
````



> 查找

**格式：**

````javascript
//写法1：
document.getElementById("id").innnerHTML = localStorage.getItem("key");

//写法2：
document.getElementById("id").innerHTML = localStorage.key;
````



> 删除单个数据

**格式：**

````javascript
localStorage.removeItem("key");
````



> 删除所有数据

**格式：**

````javascript
localStorage.clear();
````



> 获取某个索引

**格式：**

````javascript
localStorage.key(index);
````



### sessionStorage

* 用于==临时保存==同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
* 可使用的API与`loacalStorage`相同



## audio（音频）

* 可以在 `audio`标签之间放置文本内容，这些文本信息将会被显示在那些不支持 `audio`标签的浏览器中

**格式：**

````html
<audiio controls>
    <source src="" type="">
    您的浏览器不支持 video 标签。
</audiio>
````

`controls`：控制控件

`src`：音频文件URL

`type`：文件类型

[更多属性](https://www.runoob.com/tags/tag-audio.html)



## video（视频）

**格式：**

````html
<video width="" height="" control>
    <source src="" type="">
    您的浏览器不支持 audio 标签。
</video>
````

`width`：播放器宽度

`height`：播放器高度

==其他属性大致跟audio一样就不过多赘述==

[更多属性](https://www.runoob.com/tags/tag-video.html)



## HTML5 SVG（可伸缩矢量图形）

**SVG**

* 用于网格，基于矢量的图形
* 用`xml`格式定义图形
* 不失帧

**格式：**

````html
<svg xmlns="" version="" height="">
    <!--svg内容-->
</svg>
````

[快速了解](https://www.cnblogs.com/lao-jiaweijarvee/p/16133538.html)



# 结语

