---
id: htmlAndCss-css-grid-gridGarden
slug: /htmlAndCss-css-grid-gridGarden
title: 【Grid Garden】grid布局练习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/css/知识库
---
# 前言：

**此笔记为本人完成[Grid Garden](https://cssgridgarden.com/#zh-cn)所有练习之后，对grid布局（网格布局）的复盘。**



**笔记中有些个人理解后整理的笔记，可能有所偏差，也恳请读者帮忙指出，谢谢。**



前端路线图：[Frontend Developer](https://roadmap.sh/frontend)

网格布局练习网站推荐：[Game for learning CSS Grid](https://cssgridgarden.com/#zh-cn)



***脚步再小，每一步都算数。***

------

# 什么是grid布局？

- 是一个基于网格的二维布局系统
- Grid 布局只对项目生效。
- 注意：`column, float, clear和vertical-align`对网格容器没有效果。



## **启用网格容器**

```css
div {
  display: grid;
}
```



# 布局属性

![在这里插入图片描述](https://img-blog.csdnimg.cn/75164e9b0e404a02a3bf03bbf1f648a5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


==注意：上图中组合属性的属性值需要设置最小子属性的值。==



## grid-column-start:

| 属性值 |      含义      |      例子       |
| :----: | :------------: | :-------------: |
|  正值  | 左边第几列开始 | 1（左边第1列）  |
|  负值  | 右边第几列开始 | -2（右边第1列） |

==注意：`grid-column-start`属性的负值与`grid-column-end`属性的负值不同。==

*示例：*

```css
/*从左起第3列开始*/
grid-column-start:3;

/*从右起第2列开始*/
grid-column-start:-3;
```



## grid-column-end:

| 属性值 | 描述             | 例子            |
| ------ | ---------------- | --------------- |
| 正值   | 到左边第几列结束 |                 |
| 负值   | 到右边第几列结束 | -2（右边第2列） |

`grid-column-start`和`grid-column-end`一起使用时，值最小当下限，值最大当上限。

*示例：`start`比`end`小*

```css
/*从第1列开始，到第4列结束，不包括第4列*/
#water {
    grid-column-start: 1;
	grid-column-end:4
}
```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/566850dfa72b4981bc62f573d3f1128c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)


*示例：`start`比`end`大*

```css
/*从第2列开始，到第5列结束，不包括第5列*/
#water {
  	grid-column-start: 5;
	grid-column-end:2;
}
```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/5afed3a24fa5456aa838a5513d78ccc3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




> ~:span

==注意`~`省略`grid-column-start`属性或`grid-column-end`属性==

- `span`指定所要跨越的宽度
- `span`只能是正值

*示例：*

```css
/*结合grid-column-end使用*/
#water {
  	grid-column-start: 2;
	grid-column-end:span 2;
}
```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/6eeadfdc1e4342b2b54d4d4d79958304.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)


*示例：*

```css
/*结合grid-column-start使用*/
#water {
	grid-column-start:span 3;
  	grid-column-end: 6;
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2f4cb9754e8745aba769db192ef36b63.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




## grid-column:  

- `grid-column`相当于`grid-column-start`和`grid-column-end`组合使用
- 格式：grid-column:start / end；可以一次接受两个值，用`/`分开。
- 只有一个值时，效果跟`grid-column-start`一样。
- 也可以加`span`，但是值的含义变了，`跨越宽度`/`结束位置-1`。



*示例：*

```css
/*从第四列开始，到第五列结束。*/
#water {
	grid-column:4/6;
}
```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/dbaeb31506a94654b5daf767b34cb2b6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




## grid-row-start:

- `grid-row-start`就像`grid-column-start`一样，只不过是在垂直方向指定起始位置。



## grid-row:

- 控制列
- 通常同时使用`grid-column`和`grid-row`来设置网格项在行和列中的位置。



## grid-area:

- 包括`grid-row-start`, `grid-column-start`, `grid-row-end`, `grid-column-end`，由`/`分开。
- 若存在多个网格项，可以任意覆盖。



**格式：**

```css
grid-area:grid-row-start/grid-column-start/grid-row-end/grid-column-end
```



*示例：*

```css
#water {
	grid-area: 1/2/4/6;
}

```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/9d50e5706ef64590bf6e65443b4f8e5e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




## grid-template-columns:和grid-template-rows:

- 设置列宽和行宽
- 可以用`px` 、`em`、`%`表示

*示例：*

```css
/*分别将列的宽度设置为100px、3em和40%。*/
#garden {
  	display: grid;
	grid-template-columns:100px 3em 40%;
  	grid-template-rows: 20% 20% 20% 20% 20%;
}

```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/3918345d7de747d3bc1981aa6eeeaccb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




- repeat（value, width）函数，
  - `value`:列|行数
  - `width`:列|行宽

*示例：*

```css
/*创建8列，每列占12.5%的宽度*/
#garden {
	display: grid;
	grid-template-columns:repeat(8,12.5%);
    /*等同于：grid-template-columns:12.5% 12.5% 12.5% ...12.5%;*/
  	grid-template-rows: 20% 20% 20% 20% 20%;
}

```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/d5d66af0a0274bf195f3d2ff028826a3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




- 网格系统也引入了一个新的单位，分数`fr`。
  - 格式：`分子`fr
  - 当列的宽度采用像素，百分比或者em的单位的时候，其他使用`fr`单位设置的列将会平分剩下的空间。

*示例：*

```css
/*杂草占据了你第一行的左1/6，胡萝卜占据着剩下的5/6。*/
#garden {
  	display: grid;
	grid-template-columns:1fr 5fr;
  	grid-template-rows: 20% 20% 20% 20% 20%;
}

```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/b13960e998cf47318ede1cbc9a7d4130.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




## grid-template

- 是`grid-template-rows`和`grid-template-columns`的缩写形式
- 格式：grid-template: `grid-template-columns` /`grid-template-rows`

*示例：*

```css
/*上部的60%，以及左侧的200像素。*/
#garden {
  	display: grid;
	grid-template: 60% 60%/200px;
}

```

*效果：*

![在这里插入图片描述](https://img-blog.csdnimg.cn/98d231830fa447c18ff5534a14e8f503.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGFvLWppYXdlaQ==,size_14,color_FFFFFF,t_70,g_se,x_16#pic_center)




# Order属性

- 使用`order`属性来重写它的顺序，这也是网格布局优于表格布局的好处之一。
- 默认所有的网格项的`order`都是0，但是顺序也可以被任意设置为正数或者负数，就像`z-index`一样。


