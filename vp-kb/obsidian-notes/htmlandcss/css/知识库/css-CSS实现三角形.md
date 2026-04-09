---
id: htmlAndCss-css-triangle
slug: /htmlAndCss-css-triangle
title: CSS实现三角形
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/css/知识库
---
# 前言

【目的】

- 通过总结小伙伴们面试涉及到的问题，来进行前端知识的查漏补缺
- 给准备面试的小伙伴总结知识，也帮助自己更深入的了解前端知识。



【内容】

- 首先将介绍相关内容
- 然后列出常见的面试题型。



【==温馨提示==】

- 笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。



------



# 知识介绍

## 方法一：使用 border (常见)

【解释】不设置宽高，用边框大小控制三角型大小

【分解步骤】

1. 设置一个`div`不设宽高

   【示例】

   ````html
   <style>
       #triangle{
           width: 0;
           height: 0;
           border: 100px solid;
           border-color: orangered skyblue gold yellowgreen;
       }
   </style>
   ````

   ![1654310301831](D:\Data\9_Typora图片缓存\1654310301831.png)

2. 设置透明

   * 留下想要指向方向**相反**的边框设定，其他方向的边框设为`transparent`透明

   【示例】*实现指向向上的三角形*

   ````html
   <style>
       .Up{
           width: 0;
           height: 0;
           border-top: 100px solid transparent; 
           border-right: 100px solid transparent;
           border-left: 100px solid transparent;
           border-bottom: 100px solid orangered;
       }
   </style>
   ````

   【效果图】*指向上，指向下，指向左，指向右*

   ![1654311896967](D:\Data\9_Typora图片缓存\1654311896967.png)



### 如何设置不同的三角形

* 可以通过调整不同方向边框的值来实现不同方向和大小的三角形



## 方法二：使用 linear-gradient 

【解释】两色渐变，调为实色，一色透明

【分解步骤】

1. 两色渐变

   ````html
   <style>
       .first{
           background: linear-gradient(45deg, deeppink, yellowgreen);
       }
   </style>
   ````

2. 调为实色

   ````html
   <style>
       .second{
           background: linear-gradient(45deg, deeppink, deeppink 50%, yellowgreen 50%, yellowgreen 100%);
       }
   </style>
   ````

3. 一色透明

   ````html
   <style>
       .second{
           background: linear-gradient(45deg, deeppink, deeppink 50%, transparent 50%, transparent 100%);
       }
   </style>
   ````

【效果图】

![1654346110676](D:\Data\9_Typora图片缓存\1654346110676.png)



### 如何设置不同的三角形

* 通过旋转 `rotate` 或者 `scale`，也能得到各种角度，不同大小的三角形



## 方法三：使用 clip-path

【解释】裁剪多边型的方式，创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

【示例】

````html
<style>
    div{
        width: 100px;
        height: 100px;
        background: gold;
        clip-path: polygon(0 0, 0 100%, 100% 100%);
    }
</style>
````

`clip-path`：

* polygon(`x1` `y1`，`x2` `y2`，`x3` `y3`)；

[了解更多clip-path属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

【效果图】

![1654346655807](D:\Data\9_Typora图片缓存\1654346655807.png)

### 如何设置不同的三角形

* 可以借助[CSS clip-path maker](https://bennettfeely.com/clippy/)



## 方法四：利用字符

三角形形状的字符的十进制 Unicode 表示码

````html
<div class="one">&#9658; </div>
<div class="two">&#9660; </div>
<div class="three">&#9650; </div>
<div class="four">&#8895; </div>
<div class="five">&#9651; </div>
````

【效果图】 

![1654347871855](D:\Data\9_Typora图片缓存\1654347871855.png)

【==注意==】用`font-size`控制大小，用`color`控制颜色



# 面试常见题目

>简答题

【类似题目】

[用CSS实现三角形](https://www.mianshiya.com/qd/bf4a0bf261ee46d109491caf53545ba9)

[CSS画正方体，三角形](https://www.mianshiya.com/qd/17e3426e61c8972300aded2d3d51d661)

[如何画一个三角形](https://www.mianshiya.com/qd/bf4a0bf261c8971f00abdbd27d82945e)

......



# 结语

【感谢】

***感谢程序员鱼皮提供[面试鸭](https://www.mianshiya.com/)平台!!!***

***感谢各位读者能看到最后!!!***

