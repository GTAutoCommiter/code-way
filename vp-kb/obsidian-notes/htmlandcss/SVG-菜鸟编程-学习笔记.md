---
id: htmlAndCss-svg-cainiao-note
slug: /htmlAndCss-svg-cainiao-note
title: 【SVG】【菜鸟编程】学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - HTML/CSS
---
# 前言

**此笔记为本人在菜鸟编程学完SVG之后，对所学知识进行的整理。**



**此笔记用于记录本人在学习中还有不懂以及值得注意的地方。以方便日后的工作与学习。**



**笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。**



## 注意

**此笔记相对精炼，请读者结合平台学习更佳**

学习平台：[SVG 教程-菜鸟编程](https://www.runoob.com/svg/svg-tutorial.html)



---

# 什么是SVG？

* Scalable Vector Graphics（可伸缩矢量图形）
* 用于网络，基于矢量的图形
* 用 XML 格式定义图形
* 不失帧
* 使用 `.svg`（全部小写）作为SVG文件的扩展名。

**格式：**

````html
<svg version="" baseProfile="" width="" height="" xmlns="">
    <!--svg内容-->
</svg>
````

`<svg>`：根元素

`width`和`height`：***SVG文档***的宽度和高度

`version`：使用的 SVG 版本

`xmlns`：SVG 命名空间



## HTML引入SVG

### 方法比较

|                  | 使用` <embed>` 标签 | 使用 `<object>` 标签 | 使用 `<iframe>` 标签 |
| :--------------: | :---------------: | :----------------: | :----------------: |
|  **浏览器支持**  |       所有        |        所有        |        所有        |
|   **脚本使用**   |       允许        |     ==不允许==     |        允许        |
| **HTML4和XHTML** |    ==不推荐==     |        支持        |     ==不推荐==     |
|    **HTML5**     |       允许        |        支持        |        允许        |



### 具体用法

> 方法一：embed标签引入

````html
 <embed src=".svg文件名带后缀" type="image/svg+xml" /> 
````



> 方法二：object标签引入

````html
 <object data=".svg文件名带后缀" type="image/svg+xml"></object> 
````



> 方法三：iframe标签引入

````html
 <iframe src=".svg文件名带后缀"></iframe> 
````



> 方法四：直接在HTML嵌入SVG代码

````html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <!--SVG内容-->
</svg>
````



> 方法五：a标签链接到SVG文件

````html
 <a href=".svg文件名带后缀">查看 SVG 文件</a> 
````



# SVG内容速览

|  标签名  |  描述  |
| :------: | :----: |
|   rect   |  矩形  |
|  circle  |   圆   |
| ellipse  |  椭圆  |
|   line   |  直线  |
| polygon  | 多边形 |
| polyline | 多段线 |
|   path   |  路径  |
|   text   |  文本  |

## SVG标签通用属性

|    属性名    |    描述     |
| :----------: | :---------: |
|    width     |    宽度     |
|    height    |    高度     |
|     fill     |   背景色    |
|    stroke    |  边框颜色   |
| stroke-width |  边框宽度   |
|    style     | 定义CSS属性 |



# SVG常用元素

## rect（矩形）

**格式：**

````html
<rect x="可选" y="可选" rx="可选" ry="可选" width="" height="" style=""/>
````

**特殊属性：**

`x`：矩形的左侧位置（矩形的左边框与浏览器窗口左边界的距离）

`y`：矩形的顶端位置（矩形的上边框与浏览器窗口上边界的距离）

`rx`和`ry`：可使矩形产生圆角。



> 额外拓展：
>
> CSS属性：
>
> - `fill-opacity`：**填充**颜色透明度（合法的范围是：0 - 1）
> - `stroke-opacity`：**轮廓**颜色的透明度（合法的范围是：0 - 1）
> - `opacity`：**元素**的透明值 (范围: 0 到 1)。



## circle（圆）

**格式：**

````html
<circle cx="" cy="" r="" fill="" />
````

**特殊属性：**

`cx`：**圆心**的x坐标

`cy`：**圆心**的y坐标

`r`：半径

==注意：如果忽略`cx`和`cy`，圆心默认被设置为（0，0）==



## ellipse（椭圆)

**格式：**

````html
<ellipse cx="" cy="" rx="" ry="" style=""/>
````

**特殊属性：**

`cx`：椭圆**中心**的x坐标

`cy`：椭圆**中心**的y坐标

`rx`：**水平**半径

`ry`：**垂直**半径



## line（直线）

**格式：**

```html
<line x1="" y1="" x2="" y2="" style=""/>
```

**特殊属性：**

`x1`：x 轴定义线条的开始

`y1`： y 轴定义线条的开始

`x2`：x 轴定义线条的结束

`y2`： y 轴定义线条的结束



## polygon（多边形）

**格式：**

````html
<polygon points="x1,y1 x2,y2 ... xn,yn" style=""/>
````

**特殊属性：**

`points`：定义多边形每个角的 x 和 y 坐标，用`空格`隔开



>额外拓展：
>
>CSS属性：
>
>- fill-rule(图形填充规则)
>
>  - 判断一点在内部还是外部
>    - 1、从该点作任意方向的一条射线，然后检测射线与图形路径的交点情况。
>    - 2、
>
>  |        属性值         | 描述 |                           判断规则                           |
>  | :-------------------: | :--: | :----------------------------------------------------------: |
>  | **nonzero（默认值）** | 非零 | 从0开始计数，路径从左向右穿过射线则计数加1，从右向左穿过射线则计数减1。得出计数结果后，如果结果是0，则认为点在图形外部，否则认为在内部。 |
>  |        evenodd        | 奇偶 | 交点数量。如果结果是奇数则认为点在内部，是偶数则认为点在外部 |
>  |        inherit        |      |                                                              |



## polyline（多段线）

**格式：**

````html
<polyline points="x1,y1 x2,y2 ... xn,yn" style=""/>
````

`points`：定义多段线每个点的 x 和 y 坐标，用`空格`隔开



## path（路径）

**格式：**

````html
<path d="M开始数据 路径数据1 路径数据2 ... Z" />
````

`路径数据`=`路径数据命令`+`点坐标(坐标x和y用空格隔开)` 

**路径数据命令：**

|      M       |    L     |     H      |     V      |     C      |
| :----------: | :------: | :--------: | :--------: | :--------: |
|     开始     | 直线达到 | 水平线达到 | 垂直线达到 | 弯曲线达到 |
|    **S**     |  **Q**   |   **T**    |   **A**    |   **Z**    |
| 平滑曲线达到 |          |            |            |  关闭路径  |



## text（文本）

**格式：**

````html
<text x="" y="" fill="" transform="">文本内容</text>
````

**特殊属性：**

`x`和`y`：与矩形的属性一样就不过多赘述了

`transform`：与CSS3`transform`属性一样【[了解更多](https://www.runoob.com/cssref/css3-pr-transform.html)】

[关于text的更多用法](https://www.runoob.com/svg/svg-text.html)



## Stroke 属性

|      属性名      |                    描述                    |
| :--------------: | :----------------------------------------: |
|      stroke      |       定义一条线，文本或元素轮廓颜色       |
|   stroke-width   |                  轮廓厚度                  |
|  stroke-linecap  | 不同类型的开放路径的终结（设置相同的重点） |
| stroke-dasharray |                  创建虚线                  |



# SVG滤镜元素

* 滤镜=特殊效果
* `defs`==**元素**==：
  * 所有互联网的SVG滤镜都用该元素定义
  * 定义短并含有特殊元素（如滤镜）定义。
* `filter`==**标签**==：
  * 定义SVG滤镜
  * 使用id属性来定义向图形应用哪个滤镜

**格式：**

````html
<svg>
    <defs>
        <filter id="">
            <!--滤镜内容-->
        </filter>
    </defs>
</svg>
````

==注意：上述代码只是为了让读者了解大致结构，有些元素省略==

 

## 滤镜内容

###  feGaussianBlur（模糊效果）

**格式：**

````html
<
````

**属性：**

`in`：

`stdDeviation`：模糊量

`filter="url(#id)"`：将`常用元素`的滤镜属性与设置的滤镜效果实现==（前提滤镜要能实现，而且有单独用`id`或`class`标识）==

*示例:*

````html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f1)" />
</svg> 
````

*效果：*

![1649681273475](https://www.runoob.com/images/svg_fegaussianblur.jpg)



### feOffset（阴影）

**格式：**

````html
<feOffset result="offOut" in="" dx="" dy=""/>
````



**实现思路：==注意：以下代码只是步骤中的关键代码，具体实现看[源代码](https://www.runoob.com/svg/svg-feoffset.html)==**

* 步骤一：初步平移

  ````html
  <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
  ````

* 步骤二：模糊偏移图像

  ````html
  <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
  ````

* 步骤三：修改模糊偏移图像颜色

  ````html
  <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
  ````

  ==修改了`in`属性的值==

* 步骤四：阴影上在涂上一层颜色

  ````html
  <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
  ````

  ==对这个句关键代码不了解的可以[看原文底下的评论区](https://www.runoob.com/svg/svg-feoffset.html)有做详细的解释==



### ~Gradient（渐变）

* 渐变：一种从一种颜色到另一种颜色的平滑过渡。



#### linearGradient（线性渐变）

**格式：**

````html
<linearGradient id="" x1="" y1="" x2="" y2="" >
	<stop offset="" style="stop-color:rgb( , , );"/>
    <stop offset="" style="stop-color:rgb( , , );"/>
</linearGradient>
````

**特殊属性：**

`x1`和`y1`：**开始**位置

`x2`和`y2`：**结束**位置

| 线性渐变类型 |            实现            |
| :----------: | :------------------------: |
|   水平渐变   | y1和y2相等，而x1和x2不同时 |
|   垂直渐变   | x1和x2相等，而y1和y2不同时 |
|   角形渐变   | x1和x2不同，且y1和y2不同时 |

`stop`标签：定义渐变颜色



---

### radialGradient （放射性渐变）

**格式：**

````html
<radialGradient id="" cx="" cy="" r="" fx="" fy="">
    <stop offset="" style="" />
    <stop offset="" style=""/>
</radialGradient>
````

**特殊属性：**

`cx`和`cy`：定义**最外**层圆

`fx`和`fy`：定义**最内**层圆



# 额外学习

[更多SVG示例](https://www.runoob.com/svg/svg-examples.html)

[SVG参考手册](https://www.runoob.com/svg/svg-reference.html)

[SVG在线编辑器](https://c.runoob.com/more/svgeditor/)



# 结语

***感谢菜鸟编程提供学习的平台***

***感谢各位读者能看到最后***

