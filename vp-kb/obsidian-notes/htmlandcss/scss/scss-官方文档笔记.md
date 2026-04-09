---
id: htmlAndCss-scss-office-node
slug: /htmlAndCss-scss-office-node
title: sass官方文档学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - htmlandcss/scss
---
# Sass特点

1. 使用变量：
   * 可以把反复使用的`css`属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。
   * 对于仅使用过一 次的属性值，你可以赋予其一个易懂的变量名，让人一眼就知道这个属性值的用途。

# 1. 使用变量

## Q：为什么要在sass中引入变量？

* A：只需修改一处，其他引用的值随之改变。
  * css若需要一个不同的值，只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变。

## Q：如何声明变量？

* A：使用`$`符号来标识变量(老版本的`´sass`使用`!`来标识变量）

  ````scss
  //标识变量nav-color
  $nav-color: #F90;
  nav {
    //标识变量width
    $width: 100px;
    //使用变量width
    width: $width;
    //变量使用nav-color
    color: $nav-color;
  }
  
  //编译后
  
  nav {
    width: 100px;
    color: #F90;
  }
  ````

## Q：sass使用范围？

* A：任何可以用作`css`属性值的赋值都 可以用作`sass`的变量值，甚至是以空格分割的多个属性值

## Q：如何分格多个属性值？

* A：

  ````scss
  //方法一：空格分割
  $basic-border: 1px solid black;
  
  //方法二：逗号分割
  $plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;
  ````

## Q：变量使用范围？

* A：

  * 变量可以在`css`规则块定义之外存在。

    ````scss
    $nav-color: #F90;
    nav {
      color: $nav-color;
    }
    ````

  * 当变量定义在`css`规则块内，那么该变量只能在此规则块内使用。

    ````scss
    nav {
      $width: 100px;
      width: $width;
    }
    ````

## Q：如何引用变量？

* A：

  * 单层引用

    ````scss
    $highlight-color: #F90;
    .selected {
      border: 1px solid $highlight-color;
    }
    
    //编译后
    
    .selected {
      border: 1px solid #F90;
    }
    ````

  * 多层嵌套引用

    ````scss
    $highlight-color: #F90;
    $highlight-border: 1px solid $highlight-color;
    .selected {
      border: $highlight-border;
    }
    
    //编译后
    
    .selected {
      border: 1px solid #F90;
    }
    ````

## Q：如何给变量命名？

* A：使用中划线的方式更为普遍。`sass`的变量名可以与`css`中的属性名和选择器名称相同，包括中划线和下划线。

  * scss做了兼容，用中划线声明的变量可以使用下划线的方式引用，反之亦然。

    ````scss
    $link-color: blue;
    a {
      color: $link_color;
    }
    
    //编译后
    
    a {
      color: blue;
    }
    ````

## Q：为什么用中划线声明的变量可以使用下划线的方式引用？

* A：中划线和下划线的变量，其实指向的是同一个变量。
  * 在`sass`的大 多数地方，中划线命名的内容和下划线命名的内容是互通的，除了变量，也包括对混合器和Sass函数的命名。
  * 但是在`sass`中纯`css`部分不互通，比如类名、ID或属性名。

# 2.嵌套CSS 规则

## Q：如何使用选择器嵌套？

* A：

  ````scss
  #content {
    article {
      h1 { color: #333 }
      p { margin-bottom: 1.4em }
    }
    aside { background-color: #EEE }
  }
  
  /* 编译后 */
  #content article h1 { color: #333 }
  #content article p { margin-bottom: 1.4em }
  #content aside { background-color: #EEE }
  ````

  > PS：注意：大多数情况下这种简单的嵌套都没问题，但是有些场景下不行（如：想要在嵌套的选择器 里边立刻应用一个类似于`：hover`的伪类）

## Q：如何在伪类使用嵌套CSS规则？

* A：通过&链接解决

  ````scss
  article a {
    color: blue;
    &:hover { color: red }
  }
  
  /* 编译后 */
  article a { color: blue }
  article a:hover { color: red }
  ````

## Q：如何在父选择器之前添加选择器？

* A：

  ````scss
  //示例：当用户在使用IE浏览器时，通过JavaScript在<body>标签上添加一个ie的类名。
  #content aside {
    color: red;
    body.ie & { color: green }
  }
  
  /*编译后*/
  #content aside {color: red};
  body.ie #content aside { color: green }
  ````

## Q：如何使用群组选择器的嵌套？

* A：

  ````scss
  .container {
    h1, h2, h3 {margin-bottom: .8em}
  }
  
  /*编译后*/
  .container h1, .container h2, .container h3 { margin-bottom: .8em }
  
  //对于内嵌在群组选择器内的嵌 套规则，处理方式也一样
  nav, aside {
    a {color: blue}
  }
  /*编译后*/
  nav a, aside a {color: blue}
  ````

  >PS：注意
  >
  >* 虽然`sass`让你的样式表看上去很小，但实际生成的`css`却可能非常大，这会降低网站的速度。

## Q：如何选择特定选择器下的子选择器元素？

* A：使用`>`

  ````scss
  //选择器会选择article下的所有命中section选择器的元素
  article section { margin: 5px }
  //选择器只会选择article下紧跟着的子元素中命中section选择器的元素。
  article > section { border: 1px solid #ccc }
  ````

## Q：如何选择同层相邻组合选择器？

* A：使用`+`

  ````scss
  //示例：选择header元素后紧跟的p元素
  header + p { font-size: 1.1em }
  ````

## Q：如何选择同层选择器？

* A：使用`~`

  ````scss
  //示例：选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素
  article ~ article { border-top: 1px dashed #ccc }
  ````

## Q：如何将属性嵌套？

* A：

  ```scss
  nav {
    border: {
    style: solid;
    width: 1px;
    color: #ccc;
    }
  }
  /*编译后*/
  nav {
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
  }
  
  //示例：指明例外规则
  nav {
    border: 1px solid #ccc {
    left: 0px;
    right: 0px;
    }
  }
  /*编译后*/
  nav {
    border: 1px solid #ccc;
    border-left: 0px;
    border-right: 0px;
  }
  ```

# 3.导入SASS文件
