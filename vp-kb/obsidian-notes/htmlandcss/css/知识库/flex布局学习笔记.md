---
id: htmlAndCss-css-flex-note
slug: /htmlAndCss-css-flex-note
title: flex布局学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/css/知识库
---

# 什么是Flex布局?

- Flex 是Flexible Box 弹性盒子
- 为盒状模型提供最大的灵活性
- 任何一个容器都可以指定为Flex布局

==注意：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。==



# 基本概念

![](https://img-blog.csdnimg.cn/img_convert/4c478e38bb33b36928dd1f4cd36178bc.png)

`flex container`:采用Flex布局的元素，简称"容器”。

- 容器默认存在两根轴：
  - `main axis`:水平的主轴
    - 开始位置`main start`
    - 结束位置`main end`
  - `cross axis`:垂直的交叉轴
    - 开始位置`cross start`
    - 结束位置`cross end`



`flex item`:容器中所有子元素，简称"项目"。

- `main size`:单个项目占据的主轴空间
- `cross size`:占据的交叉轴空间



# 容器的属性

**种类：**

|     属性名     |        用途        |
| :------------: | :----------------: |
| flex-direction |    项目排列方向    |
|   flex-wrap    |      项目换行      |
|   flex-flow    |   排列方向+换行    |
|   flex-flow    |   主轴上对齐方式   |
|  align-items   |  交叉轴上对齐方式  |
| align-content  | 多根轴线的对齐方式 |

**插入位置：**

```css
.box{
  display: flex;
  /*容器属性*/
}
```



### flex-direction属性（项目排列方向）

|     属性值      |       描述       |
| :-------------: | :--------------: |
| **row（默认）** | **从`左`到`右`** |
|   row-reverse   |   从`右`到`左`   |
|     column      |   从`上`到`下`   |
| column-reverse  |   从`下`到`上`   |



### flex-wrap属性（项目换行）

|      属性值      |    描述    |
| :--------------: | :--------: |
| **nowrap(默认)** | **不换行** |
|       wrap       | 向`下`换行 |
|   wrap-reverse   | 向`上`换行 |

==注意：容器一定要有指定`width`和`height`==



### flex-flow属性（前两种属性和）

==注意：==

- 该属性的属性值为上述属性值排列组合，用`空格`隔开
- 两个属性值互换位置依旧可以实现



*示例：*

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title></title>
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            div{
                height: 100px;
                width: 100px;
                border: 1px solid;
            }

            #father{
                width: 1000px;
                height: 200px;
                display: flex;
                flex-flow: wrap row ;
            }
        </style>
    </head>
    <body>
        <div id="father">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </body>
</html>
```



#### 疑问：如何控制从哪里开始换行？

待解决，请大佬在评论区教一下。



### justify-content属性（主轴上对齐方式）

|          属性值          |              描述              |
| :----------------------: | :----------------------------: |
| **flex-start（默认值）** |         **`起点`对齐**         |
|         flex-end         |           `终点`对齐           |
|          center          |           `中点`对齐           |
|      space-between       | 两端对齐，项目之间的间隔相等。 |
|       space-around       |    每个项目两侧的间隔相等。    |



### align-items属性（交叉轴上对齐方式）

==注意：`flex-start`、`flex-end`、`center`属性值与` justify-content`中的一样，就不赘述了==

|        属性值         |                           描述                           |
| :-------------------: | :------------------------------------------------------: |
|       baseline        |                项目的第一行文字的基线对齐                |
| **stretch（默认值）** | **如果项目未设置高度或设为auto，将占满整个容器的高度。** |



### align-content属性（多根轴线的对齐方式）

> 注意⚠️：如果项目只有一根轴线，该属性不起作用
>
> * 即需要搭配`flex-wrap`属性使用，若`flex-wrap`属性值为`no-wrap`，该属性就不起作用。

包含` justify-content`所有属性值，多了`stretch`属性且为默认值。

#### Q：`align-content`和`justify-content`的区别？

* A：`align-content`相当于y轴上的`justfify-content`，只不过需要出现换行（产生多条轴线）才生效。



# 项目的属性

**种类：**

|   属性名    |                  用途                  |
| :---------: | :------------------------------------: |
|    order    |                排列顺序                |
|  flex-grow  |                放大比例                |
| flex-shrink |                缩小比例                |
| flex-basis  |             占据的主轴空间             |
|    flex     | `flex-grow`+`flex-shrink`+`flex-basis` |
| align-self  |                                        |

**插入位置：**

```css
.item {
    /*项目属性*/
}
```



### order属性（排列顺序）

数值越小，排列越靠前，默认为0。



### flex-grow属性（放大比例）

**按比放大**

- 默认为0，即如果存在剩余空间，也不放大。
- 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
- 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。



### flex-shrink属性（缩小比例）

- 默认为1，即如果空间不足，该项目将缩小。
- 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
- 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

==注意：负值对该属性无效。==



### flex-basis属性（占据的主轴空间main size）

- 定义值为在分配多余空间之前，项目占据的主轴空间
- 默认值为auto，即项目的本来大小
- 可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。



### flex属性

- flex-grow, flex-shrink 和 flex-basis的简写

==建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。==

**格式（后两个属性可选）：**

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

- 默认值为0 1 auto
- 两个快捷值
  - `auto` (1 1 auto)
  - ` none` (0 0 auto)



### align-self属性（允许单个项目有与其他项目不一样的对齐方式）

- 可覆盖`align-items`属性
- 默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。
- 该属性可能取6个值，除了`auto`，其他都与`align-items`属性完全一致。
