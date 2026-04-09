---
id: react-shangguigu
slug: /react-shangguigu
title: 【尚硅谷】React技术全家桶
date: 2022-05-10T00:00:00.000Z
tags:
  - react/【面向学习】
---

# 前言

【内容】

* 

【目的】

* 

【学习资源】

* 【视频资源】
  * [尚硅谷React技术全家桶全套完整版（零基础入门到精通/男神天禹老师亲授）](https://www.bilibili.com/video/BV1wy4y1D7JT?p=1)
* 【参考笔记】
  * [React简介--尚硅谷react全家桶笔记总结](https://blog.csdn.net/weixin_44987713/article/details/114990470)
  * [React尚硅谷张天禹笔记（更新中......）](https://blog.csdn.net/weixin_52617854/article/details/125131757)



---



# 初识React

## React的基本使用

### 依赖包

|           文件名           |                作用                 |
| :------------------------: | :---------------------------------: |
|       `babel.min.js`       |       1、ES6转ES5，2、js转jsx       |
|   `react.development.js`   |             react核心库             |
| `react-dom.development.js` | react扩展库（功能之一react操作DOM） |



#### 如何引入依赖包？

1. 首先**在项目中**创建js文件夹

2. 将依赖包拖入js文件夹

3. 在**页面文件**中引入依赖包

   【==注意==】引入页面文件中需要按顺序引入

   ````html
   <!-- 引入react核心库 -->
   <script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入reat-dom,用于支持react操作DOM -->
   <script type="text/javascript" src="../js/react-dom.development.js"></script>
   <!-- 引入babel,用于将jsx转为js -->
   <script type="text/javascript" src="../js/babel.min.js"></script>
   ````
   
   * 【解释】核心库必须先就位了，扩展库才能进一步去引入，否则找不到东西



### 如何运行第一个React？

【示例】

````html
<!-- 准备好一个容器 -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入reat-dom,用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel,用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">/* 此处一定要写babel*/
        // 1.创建虚拟DOM
        const VDOM =<h1>Hello,React</h1>/* 此处一定不要写引号，因为不是字符串*/
        // 2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM,document.getElementById('test'))
</script>
````



#### 常见问题

> 没有准备容器

【报错类型】**所给的容器不是DOM结点**

![1655344865980](D:\Data\9_Typora图片缓存\1655344865980.png)



>创建虚拟DOM时使用引号

【错误示例】*上述代码第13行，使用引号*

````javascript
const VDOM ="<h1>Hello,React</h1>"
````

* 【效果】

  ![1655345238535](D:\Data\9_Typora图片缓存\1655345238535.png)

【正确示例】*上述代码第13行，不使用引号*

````javascript
const VDOM =<h1>Hello,React</h1>
````

* 【效果】

  ![1655345348076](D:\Data\9_Typora图片缓存\1655345348076.png)



>脚步类型不是babel

【错误示例】

````html
<script type="text/javascript">/* 此处没改babel*/
        // 1.创建虚拟DOM
        const VDOM =<h1>Hello,React</h1>
        // 2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM,document.getElementById('test'))
</script>
````

* 【报错类型】**语法错误，不认识`<`**

  ![1655345647015](D:\Data\9_Typora图片缓存\1655345647015.png)



### 创建虚拟DOM的两种方式

#### 1、纯JS方式（一般不用）

【示例】*创建一个`id`为`title`内容为`Hello,React`的`h1`标签*

````html
<!-- 准备好一个容器 -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入reat-dom,用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>

<script type="text/javascript">
    // 1.创建虚拟DOM
    const VDOM =React.createElement("h1",{id:'title'},'Hello,React')
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
</script>
````

> 【拓展】**`createElement()`的用法**
>
> * 【语法】
>
>   ````javascript
>   createElement('标签名'，{标签属性}，'标签内容')
>   ````
>
> * 【区别】**`document.createElement()`和`React.createElement()`的区别**
>
>   | `document.createElement()` | `React.createElement()` |
>   | :------------------------: | :---------------------: |
>   |        创建真实DOM         |       创建虚拟DOM       |

【示例】*若在上述案例的基础上在`h1`标签内套入`span`标签*

````javascript
//其他代码于上述代码一样
//第11行代码改为
const VDOM =React.createElement("h1",{id:'title'},React.createElement("span",{},'Hello,React')
````



#### 2、JSX方式

【示例】*创建一个`id`为`title`内容为`Hello,React`的`h1`标签*

````html
<!-- 准备好一个容器 -->
<div id="test"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入reat-dom,用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel,用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>

<script type="text/babel">/* 此处一定要写babel*/
	// 1.创建虚拟DOM
    const VDOM =<h1 id="title" >Hello,React</h1>/* 此次一定不要写引号，因为不是字符串*/
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
</script>
````

【示例】*若在上述案例的基础上在`h1`标签内套入`span`标签*

````javascript
//其他代码于上述代码一样
//第13行代码改为
const VDOM =(
	<h1 id="title" >
        <span>Hello,React</span>
	</h1>
)
````

【==注意==】

* 浏览器并不认识JSX（下图蓝色框所示）代码

  ![1655558710896](D:\Data\9_Typora图片缓存\1655558710896.png)

  * 通过`babel`（上图红色圈）翻译成JS创建虚拟DOM（如下图蓝框所示）代码

    ![1655558802889](D:\Data\9_Typora图片缓存\1655558802889.png)

    * 浏览器最终读的是JS代码



##### JSX用来干啥？（存在的意义）

* 帮助开发人员更好的创建虚拟DOM，写起来更流畅
  
* 【解释】通过上述JSX方式创建多层嵌套虚拟DOM案例与JS方式创建多层嵌套虚拟DOM案例就体现出JSX创建虚拟DOM的方便性。
  
* JSX里面这种写法创建虚拟DOM其实就是原始JS创建虚拟DOM的**语法糖**

  * > 【拓展】**啥是语法糖?**
    >
    > 可以简单的理解为一种简写方式，更加便捷的方式



### 虚拟DOM与真实DOM

#### 关于虚拟DOM

1. 本质是Object类型的对象（一般对象）

   ````javascript
   console.log('虚拟DOM',VDOM);
   ````

   ![1655559865036](D:\Data\9_Typora图片缓存\1655559865036.png)

   ---

2. 虚拟DOM比较**“轻”**，真实DOM比较**“重”**

   【解释】因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。

   * 【图示】虚拟DOM属性

     ![1655560119570](D:\Data\9_Typora图片缓存\1655560119570.png)

   * 【图示】真实DOM属性

     ![1655560159630](D:\Data\9_Typora图片缓存\1655560159630.png)

   ---

3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上



## React JSX

### 啥是JSX？

1. 全称: JavaScript XML

2. react定义的一种类似于XML的JS扩展语法: JS + XML

   > 【拓展】**啥是XML？**
   >
   > * 早期用于存储和传输数据
   >
   > * 【示例】
   >
   >   ````xml
   >   <student>
   >       <name>Tom</name>
   >       <age>19</age>
   >   </student>
   >   ````
   >
   >   * 【不足之处】实际上需要的数据只是Tom和19，但是标签比数据还要多。于是就演变出JSON来存储和传输数据。
   >
   >     【示例】上述的XML数据写成JSON
   >
   >     ````json
   >     "{"name":"Tom","age":19}"
   >     ````
   >
   >     * JSON中常用的方法
   >       * parse：奖JSON字符串解析成JS对应的数组和对象
   >       * stringfy：将JS中的字符串转成JSON中的对象



### JSX语法规则

1. **定义虚拟DOM时，不要写引号。**

   【解释】之前对[创建虚拟DOM时使用引号](#常见问题)有提到

   ---

2. **标签中混入==JS表达式==时要用`{}`。**

   【示例】*通过用`toLowerCase`方法修改虚拟DOM的`id`，通过用`toUpperCase`方法修改DOM的内容*

   ````html
   <!-- 准备好一个容器 -->
   <div id="test"></div>
   <!-- 引入react核心库 -->
   <script type="text/javascript" src="../js/react.development.js"></script>
   <!-- 引入reat-dom,用于支持react操作DOM -->
   <script type="text/javascript" src="../js/react-dom.development.js"></script>
   <!-- 引入babel,用于将jsx转为js -->
   <script type="text/javascript" src="../js/babel.min.js"></script>
   
   <script type="text/babel">
   	const myId ='Lao'
       const myData = 'Hello,react'
       // 1.创建虚拟DOM
       const VDOM =(
       	<h1 id={myId.toLowerCase()} >
       		<span>{myData.toUpperCase()}</span>
       	</h1>
       )
   
   	// 2.渲染虚拟DOM到页面
       ReactDOM.render(VDOM,document.getElementById('test'))
   </script>
   ````

   【==注意==】区分：**js语句(代码)**与**js表达式**

   |      JS语句(代码)      |                       JS表达式                       |
   | :--------------------: | :--------------------------------------------------: |
   | 控制代码走向的，没有值 | 一个表达式会产生一个值，可以放在任何一个需要值的地方 |
   |        `if(){}`        |                  变量（例如：`a`）                   |
   |       `for(){}`        |                        `a+b`                         |
   | `switch(){case:xxxx}`  |          函数调用表达式（例如：`demo(1)`）           |
   |                        |         有返回值的函数（例如：`arr.map()`）          |
   |                        |     定义一个函数（例如：`function test () {}`）      |

   ---

3. **样式的类名指定不要用`class`，要用`className`。**

   【示例】*给H1标签引入`title`样式*

   * > CSS样式

     ````css
     .title{
         background-color: orange;
         width: 200px;
     }
     ````

   * > html

     ````html
     <body>
         <!-- 准备好一个容器 -->
         <div id="test"></div>
         <!-- 引入react核心库 -->
         <script type="text/javascript" src="../js/react.development.js"></script>
         <!-- 引入reat-dom,用于支持react操作DOM -->
         <script type="text/javascript" src="../js/react-dom.development.js"></script>
         <!-- 引入babel,用于将jsx转为js -->
         <script type="text/javascript" src="../js/babel.min.js"></script>
     <script type="text/babel">/* 此处一定要写babel*/
     	const myId ='Lao'
         const myData = 'Hello,react'
         // 1.创建虚拟DOM
         const VDOM =(
         	<h1 className='title' id={myId.toLowerCase()} >
             	<span>{myData.toUpperCase()}</span>
             </h1>
         )
     
     	// 2.渲染虚拟DOM到页面
         ReactDOM.render(VDOM,document.getElementById('test'))
     </script>
     ````

   ---

4. **内联样式，要用`style={{key:value}}`的形式去写。**

   【示例】在上述示例的基础上给`span`标签使用内联样式

   * > CSS样式同上

   * > HTML（上例代码HTML的14~18行代码改为下述代码）

     ````html
     const VDOM =(
     <h1 className='title' id={myId.toLowerCase()} >
         <span style={{color:'white',fontSize:'29px'}}>{myData.toUpperCase()}</span>
     </h1>
     )
     ````

     【==注意==】

     * 花括号的区别

       ![1655564560216](D:\Data\9_Typora图片缓存\1655564560216.png)

       * 最外层花括号（如图红框所示）：表示要写入JS表达式
       * 最里层花括号（如图蓝框所示）：表示写的不是JS中的函数数组，而是对象
       
     * 写多个单词组成的属性时，要用小驼峰形式（如`fontSize`）

   ---

5. **只有一个根标签**

6. **标签必须闭合**

7. **标签首字母**

   【==注意==】**创建虚拟DOM中的不是HTML标签，而是JSX标签**。

   ![1655601566404](D:\Data\9_Typora图片缓存\1655601566404.png)

   * 但是**这些JSX标签会被转化成HTML标签**
     * 若**小写**字母开头
       * 则将该标签转为html中同名元素，
       * 若html中无该标签对应的同名元素，则报错。
     * 若**大写**字母开头
       * react就去渲染对应的组件，
       * 若组件没有定义，则报错。



## 模块与组件、模块化与组件化的理解

### 模块与组件

|                  |                     模块                     |                             组件                             |
| :--------------: | :------------------------------------------: | :----------------------------------------------------------: |
|    **是啥？**    | 向外提供特定功能的js程序, 一般就是一个js文件 | 用来实现局部功能效果的**代码和资源的集合**(html/css/js/image等等) |
| **为什么要用？** |    随着业务逻辑增加，代码越来越多且复杂。    |                     一个界面的功能更复杂                     |
|   **能干啥？**   |     复用js, 简化js的编写, 提高js运行效率     |             复用编码, 简化项目编码, 提高运行效率             |



### 模块化与组件化

|                          模块化                          |                          组件化                          |
| :------------------------------------------------------: | :------------------------------------------------------: |
| 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用 | 当应用是以多组件的方式实现, 这个应用就是一个组件化的应用 |



# React面向组件编程

> 【==注意==】
>
> * 为了缩短篇幅，专注于核心内容，后续代码块中只展示核心内容
>
>   * 请读者根据视频自行补全(下面内容)
>
>     ````html
>     <!-- 准备好一个容器 -->
>     <div id="test"></div>
>     <!-- 引入react核心库 -->
>     <script type="text/javascript" src="../js/react.development.js"></script>
>     <!-- 引入reat-dom,用于支持react操作DOM -->
>     <script type="text/javascript" src="../js/react-dom.development.js"></script>
>     <!-- 引入babel,用于将jsx转为js -->
>     <script type="text/javascript" src="../js/babel.min.js"></script>
>     ````

## 使用React开发者工具调试

* 具体安装过程[尚硅谷react教程_开发者工具的安装](https://www.bilibili.com/video/BV1wy4y1D7JT?p=8&vd_source=2f682a60feabf0f730ad09e0f980ce83)视频已经很详细了。



## 如何定义组件？

### 函数式组件

* 用函数定义出来的组件
* 函数名就是组件名

【示例】

````html
<script type="text/babel">
	// 1.创建函数式组件
    function MyComponent(){
    	return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
    }
    // 2.渲染组件到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('test'))
</script>
````

* 【==注意==】
  * **函数名首字母必须大写** *（如上述代码第11行`MyComponent`）*

    【错误示例报错】出错原因[JSX语法规则第7条](#JSX语法规则)

    ![1655625580892](D:\Data\9_Typora图片缓存\1655625580892.png)

    ---

  * **函数必须有返回值**

  * **渲染组件到页面必须写组件标签，别直接写组件名字** *（如上述代码第15行第一个参数）*

    【错误示例报错】*函数类型不能作为React结点*

    ![1655625333543](D:\Data\9_Typora图片缓存\1655625333543.png)

  ---

* 【使用开发者工具】观察上述示例

  * 【图示】`MyComponent`组件名*（如下图右侧）*所对应的区域*（如下图左侧）*

    ![1655625838076](D:\Data\9_Typora图片缓存\1655625838076.png)

    【图示】React身上的属性*（如下图最上层蓝框）*，当前页面React渲染版本*（如下图最下层蓝框）*

    ![1655625902692](D:\Data\9_Typora图片缓存\1655625902692.png)

  ---



#### React对函数式组件的工作原理

**执行了`ReactDOM.render(…`之后，发生了什么？**

1. React解析组件标签，找到了`MyComponent`组件。

2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。



### 类式组件

> 【复习】[类的相关知识](https://www.bilibili.com/video/BV1wy4y1D7JT?p=10&vd_source=2f682a60feabf0f730ad09e0f980ce83)
>
> * 类中的构造器不是必须写的，要对实例 进行一些初始化的操作，如添加指定属性是才写。
> * 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
> * 类中所定义的方法，都是放在了类的原型对象上，供实例去使用。

* 类名就是组件名

【示例】

````html
<script type="text/babel">
    // 1.创建类式组件
    class MyComponent extends React.Component{
        render() {
            return  <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
        }
    }
    // 2.渲染组件到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('test'))
</script>
````

* 【==注意==】

  * 使用类式创建组件，必须继承`React.Component`类*（如上述代码第11行）*

  * `render()`*（如上述代码第12行）*是必须写的，而且必须要有返回值（返回值就是想要渲染的内容）

    * 【疑问】**`render`是放在哪里的？**

      * `MyComponent`的原型对象上，供实例使用。

        ![1655639435095](D:\Data\9_Typora图片缓存\1655639435095.png)

        * 【疑问】**实例是谁创建的？**
          * [在React对类式组件的工作原理的第二步](#React对类式组件的工作原理)被new出来的。

    * 【疑问】**render中的this是谁？**

      * `MyComponent`的实例对象 （ 又称`MyComponent`组件实例对象）。

        ![1655640618602](D:\Data\9_Typora图片缓存\1655640618602.png)



#### React对类式组件的工作原理

**执行了`ReactDOM.render(…`之后，发生了什么？**

1. React解析组件标签，找到了`MyComponent`组件。

2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。



## 组件实例（类式组件）的三大核心属性

### state	状态

通过构建组件的两种方式可以知道

|          函数式          |           类式           |
| :----------------------: | :----------------------: |
| 适用于【简单组件】的定义 | 适用于【复杂组件】的定义 |

* 【疑问】**啥是复杂组件？啥是简单组件？**

  |              | 复杂组件 | 简单组件 |
  | :----------: | :------: | :------: |
  | **有无状态** |    有    |    无    |



#### 啥是状态？

![1655641470040](D:\Data\9_Typora图片缓存\1655641470040.png)

* 组件的状态里面**存着数据**
* 数据的改变**驱动着页面的展示**



#### state初始化

* state是组件对象最重要的属性, 值是**对象**(可以包含多个key-value的组合)
  * 【疑问】**为啥是对象？**
    * 因为方便获取，直接`this.想要获取的属性名`，如果用数组还要知道具体下标。

【示例】

````html
<script type="text/babel">
    // 1.创建函数式组件
    class Weather extends React.Component{
        constructor(props){
            super(props);
            //初始化一个isHot属性，设置为true
            this.state={isHot:true}
        }
        render(){
            const{isHot}=this.state
            return <h1>今天天气很{isHot?'炎热':'凉爽'}</h1>
        }
    }
    // 2.渲染组件到页面
    ReactDOM.render(<Weather/>,document.getElementById('test'))
</script>
````



#### 事件绑定

##### 【复习】原生JS事件绑定

> 方法一

【示例】

````html
<button id="btn1">按钮1</button>
<script type="text/javascript">
    const btn1=document.getElementById('btn1')
    btn1.addEventListener('click',()=>{
        alert('按钮1被点击了')
    })
</script>
````



> 方法二

【示例】

````html
<button id="btn2">按钮2</button>
<script type="text/javascript">
    const btn2=document.getElementById('btn2')
    btn2.onclick=()=>{
        alert('按钮2被点击了')
    }
</script>
````



> 方法三（React中更推荐这种方式）

【示例】

````html
<button onclick="demo()">按钮3</button>
<script type="text/javascript">
    function demo(){
        alert('按钮3被点击了')
    }
</script>
````



##### React事件绑定

【示例】

````html
<script type="text/babel">
    // 1.创建函数式组件
    class Weather extends React.Component{
        constructor(props){
            super(props);
            // 初始化状态
            this.state={isHot:true}
        }
        render(){
            // 读取状态
            const{isHot}=this.state
            return <h1 onClick={demo}>今天天气很{isHot?'炎热':'凉爽'}</h1>
        }
    }
    // 2.渲染组件到页面
    ReactDOM.render(<Weather/>,document.getElementById('test'))

    function demo(){
        console.log('标题被点击了')
    }
</script>
````

* 【==注意==】

  * **React对事件封装采用小驼峰形式** *（如上述代码第20行`onClick`与原生JS`onclick`不同）*

    * 【错误示例】*上述代码第20行使用`onclick`指定点击事件*

      * 【报错提示】

        ![1655650818293](D:\Data\9_Typora图片缓存\1655650818293.png)

    ---

  * **React事件监听必须是一个函数** *（如上述代码第20行需要使用`{}`将函数包裹）* 

    * 【错误示例】*上述代码第20行使用字符串（`"demo"`）*

      * 【报错提示】

        ![1655651111225](D:\Data\9_Typora图片缓存\1655651111225.png)

    ---

  * **`{}`里面不要写小括号形式的函数调用** *（如上述代码第20行`{demo}`而不是`{demo()}`）*

    * 【解释】

      ![1655651545311](D:\Data\9_Typora图片缓存\1655651545311.png)

      * `onClick={demo()}`*（如上图第一个红框）*是一个赋值语句（要把右边的`{demo()}`赋值给左边的`onClick`）
      * 右边`demo()`是一个函数调用表达式，把`demo()`调用的返回值交给了`onClick`作为回调
        * `demo()`函数本身*（如上图第而二个红框）*也有返回值`undefined`，`undefined`交给`onClick`作为回调
      * 导致onClick无法实现事件正常绑定

    ---



#### 类中的this

* 组件中render方法中的this为组件实例对象

* 组件自定义的方法中this为`undefined`

  * 【原因】组件自定义的方法不是通过实例调用的

    * 【解释】

      * 由于自定义的方法是作为`onClick`的回调，所以不是通过实例调用的，是直接调用

        1. 【解释】**通过实例调用和直接调用的区别**

           ````javascript
           class Person{
               constructor(name,age){
                   this.name = name;
                   this.age=age;
               }
               study(){
                   // study方法放在哪里？——类的原型对象上，供实例使用
                   // 通过Person实例调用study时，study中的this就是Person实例
                   console.log(this);
               }
           }
           const p1=new Person('tom',18)
           p1.study()  //通过实例调用study方法
           const x=p1.study
           x()//直接调用
           ````

           【图示】*第一行：通过实例调用，第二行：直接调用*

           ![1655736907540](D:\Data\9_Typora图片缓存\1655736907540.png)

           * 【疑问】**为什么`x()`直接调用为`undefined`?**
             * 【解释】***往下看***

        ---

      * 类中方法默认开启了局部的严格模式，所以组件自定义的方法中this为`undefined`

        1. 【==注意==】类中方法默认开启了局部的严格模式，与`babel`没有关系

        2. 【解释】**直接调用时，局部开启严格模式和未开启的区别**

           ````javascript
           //开启局部的严格模式
           function demo(){
               'use strict'
               console.log(this);
           }
           //直接调用
           demo()
           //未开启
           function demo2(){
               console.log(this);
           }
           //直接调用
           demo2()
           ````

           【图示】*第一行：开启局部的严格模式，第二行：未开启*

           ![1655736401507](D:\Data\9_Typora图片缓存\1655736401507.png)

    ---



##### 如何解决组件自定义的方法中this指向组件实例对象？

> 方法一：强制绑定this: 通过函数对象的bind()

【示例】

````javascript
class Weather extends React.Component{
    constructor(props){
        super(props);
        // 初始化状态
        this.state={isHot:true}
        //通过函数对象的bind()，强制绑定this
        this.changeWeather=this.changeWeather.bind(this)
    }
    render(){
        // 读取状态
        const{isHot}=this.state
        return <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
    }
    changeWeather(){
        //changeWeather放在哪里？——Weather的原型对象上，供实例使用
        // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
        // 类中方法默认开启了局部的严格模式，所以changeWeather中的this为undefined 
        console.log(this)
    }  
}
// 2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('test'))
````

* 【解释】

  ![1655738285664](D:\Data\9_Typora图片缓存\1655738285664.png)

  * `this.changeWeather`*（如图红色方框）*即便自身没有`changeWeather`也能找到`changeWeather()`

    * 【原因】`this.changeWeather`*（如图红色方框）* 会顺着原型找到，在原型对象上的`changeWeather()`

  * `.bind`能干两件事

    1. 改变函数中的`this`
       * 【疑问】`.bind(this)`这个`this`是啥？
         * 构造器*（上图第二个红圈）*中的`this`就是实例对象*（上图第一个红圈）*
    2. 生成一个新的函数

  * `this.changeWeather.bind(this)`一旦执行完了，获得一个新的函数而且这个`this`就是实例对象。

  * 然后该函数通过赋值语句放到了实例的自身并起了个名字叫`changeWeather`（`this.changeWeather`）

    * 【图示】上述结果就会让实例自身也有`changeWeather`方法*（如下图第一个红框）*，原型上也有`changeWeather`方法*（下图第二个红框）*

      ![1655739223501](D:\Data\9_Typora图片缓存\1655739223501.png)

      * 【==注意==】虽然此时自身也有`changeWeather`方法*（如上图第一个红框）*，但是原型上的`changeWeather`方法*（如上图第二个红框）*不能没有
        * 【解释】自身的方法是通过原型上的方法生成一个新的挂载到自身才得到的



> 方法二：箭头函数

* [点此跳转](#state的简写方式)



#### 如何修改state值

【==注意==】状态（state）数据，不能直接修改或更新

* 【示例】

  ````jsx
   class Weather extends React.Component{
      constructor(props){
          super(props);
          // 初始化状态
          this.state={isHot:true}
          this.changeWeather=this.changeWeather.bind(this)
      }
      render(){
          // 读取状态
          const{isHot}=this.state
          return <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
      }
      changeWeather(){
          const isHot = this.state.isHot
          //严重注意：状态（state）不可直接更改，下面这行就是直接更改！！！
          //this.state.isHot =!isHot	//这是错误的写法
          console.log(this)
  	}  
  }
  ReactDOM.render(<Weather/>,document.getElementById('test'))
  ````



##### 使用setState()方法

【==注意==】状态（state）必须通过`setState`进行更新

* 【示例】在上述示例的基础上修改第16行代码

  ````jsx
  this.setState({isHot:!isHot})
  ````

  * 【疑问】**`setState`进行状态更新的动作到底是替换还是合并？**
  
* 是合并，不是替换
  
* 【疑问】**`constructor`构造器调用几次？**
  
  * 1次。
  
    * 【原因】只有一个`<Weather>`标签，只new了一次
  
        ````jsx
        ReactDOM.render(<Weather/>,document.getElementById('test'))
      ````
  
* 【疑问】**`rander`调用几次？**
  
    * `1+n`次
      
    * 【原因】`1`是初始化的那次，`n`是状态更新的次数
  * 【所以】==**组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)**==
  
    #### 



#### state的简写方式

* `state`初始化状态直接在类里面写`state`赋值语句

* 自定义方法——要用赋值语句的形式+箭头函数
  * 类中可以直接写赋值语句，就是直接往实例身上追加一个属性或方法。
    * 【==注意==】如果该属性需要外部传值，则需要用构造器

【示例】

````jsx
// 1.创建组件
class Weather extends React.Component{
    //初始化状态（简写）
    state = {isHot:false,wind:'微风'}
render(){
    const{isHot,wind}=this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'},{wind}</h1>
}
//自定义方法——要用赋值语句的形式+箭头函数
changeWeather = ()=>{
    const isHot=this.state.isHot
    this.setState({isHot:!isHot})
}  
}
// 2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('test'))
````

* 自定义方法要用赋值语句的形式（仅把自定义方法从**原型**上换到**实例自身**上）

  * 【图示】`changeWeather`*（下图红框）*相当于给实例追加的属性放在了实例自身上（即原型上已经没有`changeWeather`），方法*（下图蓝框）*相当于属性值。

  ![1655973016998](D:\Data\9_Typora图片缓存\1655973016998.png)

* 使用箭头函数

  * 【箭头函数特点】没有this，但是在箭头函数里使用this，他会找外层函数的this作为箭头函数的this去使用



### props	属性

* 每个组件对象都会有props(properties的简写)属性

* 组件标签的所有属性都保存在props中



#### props用来干啥？

* 通过标签属性从组件外向组件内传递变化的数据*（大白话：将组件外部数据，写入组件内）*

【图示】不是将state中的数据导入组件中，而是从外部导入组件中*（如下图箭头）*

![1655975477863](D:\Data\9_Typora图片缓存\1655975477863.png)



#### props怎么用？

##### props基本使用

* 直接在自定义组件标签写入标签属性

【示例】

````jsx
// 创建组件
class Person extends React.Component {
    render() {
        // 使用解构赋值的方法就不用写{this.props.name}
        const {age,sex} = this.props
        return (
            <ul>
                <li>姓名：{this.props.name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
        )
    }
}
// 渲染组件到页面
ReactDOM.render(<Person name='tom' age='18' sex='男' />, document.getElementById('test'))
````

* 【工作流程】

  ![1656079117150](D:\Data\9_Typora图片缓存\1656079117150.png)

  * React在new`Person`实例*（如上图第一个蓝框）*的时候，把`name`*（如图中间的蓝框）*作为key，把`tom`*（如图最右侧的蓝框）*作为value

  * 把整个`key:value`收集好，放入`Person`实例中的`props`

    ![1656079613670](D:\Data\9_Typora图片缓存\1656079613670.png)
  
* 【==注意==】组件内部不要修改props数据



##### 批量传递

【示例】

* 【HTML】

  ````html
  <div id="test"></div>
  <div id="test1"></div>
  <div id="test2"></div>
  ````

* 【JSX】

  ````jsx
  // 创建组件
  class Person extends React.Component {
      render() {
          // 使用解构赋值的方法就不用写{this.props.name}
          const {name,age,sex} = this.props
          return (
              <ul>
                  <li>姓名：{name}</li>
                  <li>性别：{sex}</li>
                  <li>年龄：{age}</li>
              </ul>
          )
      }
  }
  // 渲染组件到页面
  ReactDOM.render(<Person name='tom' age='19' sex='男' />, document.getElementById('test'))
  ReactDOM.render(<Person name='jerry' age='18' sex='女' />, document.getElementById('test1'))
  
  const p={name:"lao",age:21,sex:'男'}
  // ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex} />, document.getElementById('test2'))
  ReactDOM.render(<Person {...p} />, document.getElementById('test2'))   
  ````

  【==注意==】

  * 第21行是第20行的语法糖。

  * 第19行p对象中的`key`要与第5行中的变量名一致

  * 第21行代码中的`{...p}`**不是**复制对象，react中的`{}`*（如下图两个红框）*是作为分隔符使用，在react中`...p`*（如下图蓝框）*在遍历对象。

    ![1656123402271](D:\Data\9_Typora图片缓存\1656123402271.png)

    【疑问】**为啥在React中展开运算符可以遍历对象？**

    * 【原因】babel*（如下图第二个红框）*加上react核心库*（如下图第一个红框）*，就允许展开运符遍历对象，【==注意==】**仅仅适用与标签属性的传递**

      ![1656123606786](D:\Data\9_Typora图片缓存\1656123606786.png)



> 【复习】`...`展开运算符
>
> * 又称拓展运算符
>
> * 【用法】
>
>   1. **展开数组，分别输出**
>
>      【示例】
>
>      ````js
>      let arr1=[1,3,5,7,9]
>      let arr2=[2,4,6,8,10]
>      //展开数组，分别输出
>      console.log(...arr1)
>      //输出数组
>      console.log(arr1)
>      ````
>
>      ![1656122411631](D:\Data\9_Typora图片缓存\1656122411631.png)
>
>   2. **拼接数组**
>
>      【示例】
>
>      ````js
>      let arr1=[1,3,5,7,9]
>      let arr2=[2,4,6,8,10]
>      let arr3=[...arr1,...arr2]
>      console.log(arr3)
>      ````
>
>      ![1656122546727](D:\Data\9_Typora图片缓存\1656122546727.png)
>
>   3. **函数传参**
>
>      【示例】
>
>      ````js
>      function sum(...numbers){
>          console.log(numbers);
>          return numbers.reduce((preValue,currentValue)=>{
>              return preValue + currentValue
>          })
>      }
>      console.log(sum(1,2,3,4));
>      ````
>
>      ![1656122757517](D:\Data\9_Typora图片缓存\1656122757517.png)
>
>   4. **复制对象（构造字面量对象时使用展开语法）**
>
>      【示例】
>
>      ````js
>      let person = {name:'tom',age:18}
>      //复制对象
>      let person2 = {...person}
>      // console.log(...person); //报错，展开运算符不能展开对象
>      person2.name='lao'
>      console.log(person2);
>      console.log(person);
>      ````
>
>      ![1656123254431](D:\Data\9_Typora图片缓存\1656123254431.png)
>
>      * 【==注意==】`...`拓展运算符不能展开对象
>
>        * 【报错类型】
>
>          ![1656123217467](D:\Data\9_Typora图片缓存\1656123217467.png)
>
>   5. **合并**
>
>      【示例】
>
>      ````js
>      let person = {name:'tom',age:18}
>      let person3={...person,name:'jack',address:'地球'}
>      console.log(person);
>      console.log(person3);
>      ````
>
>      ![1656124043218](D:\Data\9_Typora图片缓存\1656124043218.png)



##### 对props进行限制

###### 对标签属性进行类型、必要性的限制

【==注意==】要先引入`prop-types`依赖包，用于对组件标签属性进行限制

【格式】

````jsx
实例（类）名.propTypes={
    //具体规则
}
````

|        具体规则        |         描述         |
| :--------------------: | :------------------: |
|   `PropTypes.string`   |  限定属性值为字符串  |
|   `PropTypes.number`   |   限定属性值为数值   |
|    `PropTypes.func`    |   限定属性值为函数   |
| `PropTypes.isRequired` | 限定属性值为必传属性 |

【==注意==】外部的`propTypes`的`p`是小写的，内部具体规则的`PropTypes`的`P`是大写的

* 【解释】
  * 外部的`propTypes`用小写是因为React的要求，不加这个属性，底层get就无法get到
  * 内部的`PropTypes`是引入`prop-types`依赖包的库，所以要用大写



###### 指定默认标签属性值

【格式】

````jsx
实例（类）名.defaultProps={
    //具体属性默认值
}
````



【综合示例】

````html
<!-- 准备好一个容器 -->
<div id="test"></div>
<div id="test1"></div>
<div id="test2"></div>

<!-- 引入react核心库 -->
<script type="text/javascript" src="../js/react.development.js"></script>
<!-- 引入reat-dom,用于支持react操作DOM -->
<script type="text/javascript" src="../js/react-dom.development.js"></script>
<!-- 引入babel,用于将jsx转为js -->
<script type="text/javascript" src="../js/babel.min.js"></script>
<!-- 引入prop-types.用于对组件标签属性进行限制 -->
<script type="text/javascript" src="../js/prop-types.js"></script>
<script type="text/babel">
         // 创建组件
         class Person extends React.Component {
             render() {
                 // 使用解构赋值的方法就不用写{this.props.name}
                 const {name,age,sex} = this.props
                 return (
                     <ul>
                         <li>姓名：{name}</li>
                         <li>性别：{sex}</li>
                         <li>年龄：{age}</li>
    </ul>
                 )
             }
         }
         //对标签属性进行类型、必要性的限制
         Person.propTypes ={
            name:PropTypes.string.isRequired,   //限制name必传，且为字符串
            sex:PropTypes.string,   //限制sex为字符串
            age:PropTypes.number,   //限制age为数值
            speak:PropTypes.func,   //限制speak为函数
         }
         //指定默认值标签属性值
         Person.defaultProps={
            sex:'男',   //sex默认值为男 
            age:18,     //age默认值为18
         }
         // 渲染组件到页面
         ReactDOM.render(<Person name='tom'speak={speak} />, document.getElementById('test'))
         ReactDOM.render(<Person name='jerry' age={19} sex='女' />, document.getElementById('test1'))

         const p={name:"lao",age:21,sex:'男'}
         // ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex} />, document.getElementById('test2'))
         ReactDOM.render(<Person {...p} />, document.getElementById('test2'))

         function speak(){
            console.log('我说话了');
         }
</script>
````

【==注意==】

* 若出现限定报错，则可能是prop传值时类型出错，使用`{}`传数值或函数*（如上述代码第42行，第43行）*
  * 第42行【限定报错】限定传入的是函数，但是传入的是字符串

    ![1656144906470](D:\Data\9_Typora图片缓存\1656144906470.png)

  * 第43行【限定报错】限定传入的是数值，但是传入的是字符串

    ![1656145017025](D:\Data\9_Typora图片缓存\1656145017025.png)



###### 简写方式

* 【目的】将红色框的内容放入类的里面

  ![1656146232128](D:\Data\9_Typora图片缓存\1656146232128.png)

* 【方法】将实例名*（即上图红框中的`Person`）*改为`static`放入类中

【上述示例简写】将上述代码第15行到第51行代码简写为下述代码

````jsx
// 创建组件
class Person extends React.Component {
    //对标签属性进行类型、必要性的限制
    static propTypes = {
        name: PropTypes.string.isRequired,   //限制name必传，且为字符串
        sex: PropTypes.string,   //限制sex为字符串
        age: PropTypes.number,   //限制age为数值
        speak: PropTypes.func,   //限制speak为函数
    }
//指定默认值标签属性值
static defaultProps = {
    sex: '男',   //sex默认值为男 
    age: 18,     //age默认值为18
}
render() {
    // 使用解构赋值的方法就不用写{this.props.name}
    const { name, age, sex } = this.props
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}
}
// 渲染组件到页面
ReactDOM.render(<Person name='tom' speak={speak} />, document.getElementById('test'))
ReactDOM.render(<Person name='jerry' age={19} sex='女' />, document.getElementById('test1'))

const p = { name: "lao", age: 21, sex: '男' }
// ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex} />, document.getElementById('test2'))
ReactDOM.render(<Person {...p} />, document.getElementById('test2'))

function speak() {
    console.log('我说话了');
}
````



#### 类式组件中的构造器与props（==建议：能省略就省略==）

##### 类中的构造器用来干啥？

- **通过给 `this.state` 赋值对象来初始化内部 state。**

  【示例】[state初始化](#state初始化)

  ![1656164528051](D:\Data\9_Typora图片缓存\1656164528051.png)

  * 【可被替代】[state的简写方式](#state的简写方式)

- **为事件处理函数绑定实例**

  【示例】[React事件处理函数绑定](#如何解决组件自定义的方法中this指向组件实例对象？)

  ![1656164627822](D:\Data\9_Typora图片缓存\1656164627822.png)

  * 【可被替代】[用赋值语句的形式+箭头函数](#state的简写方式)

    ![1656164956715](D:\Data\9_Typora图片缓存\1656164956715.png)

> 【==说明==】**类中的构造器可有可无**
>
> * 【解释】类中的构造器的两个用途都有可被替代的方法。



##### 构造器传入props再传给super有什么影响？

* 构造器是否接收props，是否传递给super

  * 【取决于】是否希望在构造器中通过this访问props

    * 希望

      ````jsx
      constructor(props){
          super(props)
          console.log('constructor',this.props)
      }
      ````

    * 不希望

      ````jsx
      constructor(props){
          super()
          console.log('constructor',props)	//正确获取到props
          console.log('constructor',this.props)	//输出undefined
      }
      ````

      ![1656165731938](D:\Data\9_Typora图片缓存\1656165731938.png)



#### 函数式组件使用props

* 函数式组件只能使用props
  * 【解释】函数式组件没有实例，所以不能使用`state`和`refs`，但是函数可以接受参数

【示例】

````jsx
//创建组件
function Person(props) {
    const { name, age, sex } = props
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}
//对标签属性进行类型、必要性的限制
Person.propTypes = {
    name: PropTypes.string.isRequired,   //限制name必传，且为字符串
    sex: PropTypes.string,   //限制sex为字符串
    age: PropTypes.number,   //限制age为数值
}
//指定默认值标签属性值
Person.defaultProps = {
    sex: '男',   //sex默认值为男 
    age: 18,     //age默认值为18
}
// 渲染组件到页面
ReactDOM.render(<Person name='tom' sex='男' age={18} />, document.getElementById('test'))
````

* 【==注意==】函数式组件对props进行限定只能在外部



### refs	标识

* 组件内的标签可以定义ref属性来标识自己*（大白话：就相当于原生中的id，可以理解为打标识）*



#### refs用来干啥？

* 收集`render()`虚拟DOM渲染成**真实DOM后的结点**

  【示例】

  ````jsx
  //创建组件
  class Demo extends React.Component{
      showDate= ()=>{
          //函数体
          console.log(this);
      }
      render() {
          return(
              <div>
                  <input ref='input1' type="text" placeholder='点击提按钮提示数据'/>&nbsp;
                  <button  onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                  <input type="text" placeholder='失去焦点提示数据'/>
              </div>
          )
      }
  }
  //渲染组件到页面
  ReactDOM.render(<Demo/>,document.getElementById('test'))
  ````

  ![1656210956437](D:\Data\9_Typora图片缓存\1656210956437.png)

  * `key`：在`render()`虚拟结点中指定的`ref`的值

  * `value`：当前所处的结点*（如下图红框部分，上述代码第10行）*

    ![1656211017090](D:\Data\9_Typora图片缓存\1656211017090.png)



#### refs怎么用？

##### 编码

###### 字符串形式的ref（==已经不被react官网推荐使用==）

【示例】

````jsx
//创建组件
class Demo extends React.Component{
    // 展示左侧输入框中的数据
    showDate= ()=>{
        const {input1} = this.refs
        alert(input1.value)
    }
    // 展示右侧输入框中的数据
    showDate2 = ()=>{
        const {input2} = this.refs
        alert(input2.value)
    }
    render() {
        return(
            <div>
                <input ref='input1' type="text" placeholder='点击提按钮提示数据'/>&nbsp;
                <button  onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                <input ref='input2' onBlur={this.showDate2} type="text" placeholder='失去焦点提示数据'/>
            </div>
        )
    }
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('test'))
````



###### 回调形式的ref

> 【拓展】**啥是回调函数？**
>
> * 【需要满足三个特点】
>   1. 定义了函数
>   2. 没有调用
>   3. 函数最终执行了
>
> *（大白话：你定义了一个函数，你没有去调用，别人去调用了）*



【示例】

````jsx
//创建组件
class Demo extends React.Component{
    // 展示左侧输入框中的数据
    showDate= ()=>{
        const {input1} = this
        alert(input1.value)
    }
    // 展示右侧输入框中的数据
    showDate2 = ()=>{
        const {input2} = this
        alert(input2.value)
    }
    render() {
        return(
            <div>
                <input ref={(currentNode)=> this.input1 =currentNode} type="text" placeholder='点击提按钮提示数据'/>&nbsp;
                <button  onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
                <input ref={(currentNode)=> this.input2 =currentNode} onBlur={this.showDate2} type="text" placeholder='失去焦点提示数据'/>
            </div>
        )
    }
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('test'))
````

* 【疑问】**`ref={(currentNode)=> this.input1 =currentNode}`啥意思？**

  * 【解释】

    * 把当前结点*（下图的第二个蓝勾）*放在组件实例自身上*（下图的第一个蓝勾）*叫`input1 `

      ![1656231515310](D:\Data\9_Typora图片缓存\1656231515310.png)

* 【疑问】**`ref={(currentNode)=> this.input1 =currentNode}`调用几次？**

  * `ref` 回调函数是以***内联函数***的方式定义的，在***更新过程***中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。（==以后开发时，就写内联也无关影响==）

    * > 【疑问】**啥是内联函数?**
      >
      > * 写在元素标签内部的函数，就是内联函数
      >
      > 【疑问】**啥是更新过程？**
      >
      > * 更新`state`（状态）的过程

    * 【示例】

      ````jsx
      //创建组件
      class Demo extends React.Component{
      
          state ={isHot:true}
      
      showInfo = ()=>{
          const {input1} = this
          alert(input1.value)
      }
      
      changeWeather= ()=>{
          //获取原来的状态
          const {isHot}=this.state
          //更新状态
          this.setState({isHot:!isHot})
      }
      
      render() {
          const {isHot}=this.state
          return(
              <div>
                  <h2>今天天气很{isHot?'炎热':'凉爽'}</h2>
                  <input ref={(currentNode)=> {this.input1 =currentNode;console.log('@',currentNode);} } type="text" />&nbsp;
                  <button  onClick={this.showInfo}>点我提示左侧的数据</button>&nbsp;
                  <button  onClick={this.changeWeather}>点我切换天气</button>&nbsp;
              </div>
          )
      }
      }
      //渲染组件到页面
      ReactDOM.render(<Demo/>,document.getElementById('test'))
      ````

      ![1656233901645](D:\Data\9_Typora图片缓存\1656233901645.png)

      * 【解释】**出现上图控制台输出结果的原因**

        * 第一行输出：第一次渲染页面

          ![1656234032869](D:\Data\9_Typora图片缓存\1656234032869.png)

          * 为了保证组件能够出现在页面上，需要调用一次`render()`
            * 第一次调用`render()`，执行到回调形式ref*（如上图橙色框）*，就出现第一次输出

        * 第二三行输出：更新state（状态）

          ![1656234336461](D:\Data\9_Typora图片缓存\1656234336461.png)

          * state（状态）发生了改变，又要调用一次`render()`

            * 又发现回调形式的ref*（如上图红框）*，但此时不是之前的函数，是新的函数

              * > 【疑问】**那之前的函数去哪了？**
                >
                > * 被释放了，没了

              * 为了保证上一次的内容被清空，所以传入了`null`*（如上图左侧第一个箭头）*

              * 到了第二次才把当前结点*（上图左侧第一个红框）*放进ref*（如上图左侧第二个箭头）*

    * 【如何避免上述问题】**将 ref 的回调函数定义成 class 的绑定函数的方式**

      * 【示例】

        ````jsx
        //创建组件
        class Demo extends React.Component{
        
            state ={isHot:true}
        
        showInfo = ()=>{
            const {input1} = this
            alert(input1.value)
        }
        
        changeWeather= ()=>{
            //获取原来的状态
            const {isHot}=this.state
            //更新状态
            this.setState({isHot:!isHot})
        }
        //将 ref 的回调函数定义成 class 的绑定函数的方式
        saveInput= (currentNode)=>{
            this.input1 =currentNode;
            console.log('@',currentNode);
        }
        
        render() {
            const {isHot}=this.state
            return(
                <div>
                    <h2>今天天气很{isHot?'炎热':'凉爽'}</h2>
                    {/*<input ref={(currentNode)=> {this.input1 =currentNode;console.log('@',currentNode);} } type="text" />&nbsp;*/}
                    <input ref={this.saveInput} type="text"/>
                    <button  onClick={this.showInfo}>点我提示左侧的数据</button>&nbsp;
                    <button  onClick={this.changeWeather}>点我切换天气</button>&nbsp;
                </div>
            )
        }
        }
        //渲染组件到页面
        ReactDOM.render(<Demo/>,document.getElementById('test'))
        ````



###### createRef创建ref容器（目前React最推荐的形式）

* `React.createRef`调用后可以返回一个容器，该容器可以存储被ref所标识的节点

  * 【理解】

    ![1656296611948](D:\Data\9_Typora图片缓存\1656296611948.png)

    * `render()`执行到被ref所标识的节点*（上图红框）*时，发现使用了ref*（如图最低第一个蓝框）*并且用的是`createRef`*（上图顶层蓝圈）*创建的容器
      * 把当前ref*（上图蓝色箭头）*所在的结点*（上图第一个红色箭头）*直接存储到容器*（上图第二个红色箭头）*里面

  * 【==注意==】一个`React.createRef`创建的容器，只能存一个结点，`render()`中用几个*（下图第二个红框）*，就要创建几个容器*（下图第一个红框）*

    ![1656297300420](D:\Data\9_Typora图片缓存\1656297300420.png)

【示例】

````jsx
//创建组件
class Demo extends React.Component{
    /* 
                React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
             */
myRef = React.createRef()
myRef2 = React.createRef()
// 展示左侧输入框中的数据
showDate= ()=>{
    alert(this.myRef.current.value)
}
// 展示右侧输入框中的数据
showDate2 = ()=>{
    alert(this.myRef2.current.value)
}
render() {
    return(
        <div>
            <input ref={this.myRef} type="text" placeholder='点击提按钮提示数据'/>&nbsp;
            <button  onClick={this.showDate}>点我提示左侧的数据</button>&nbsp;
            <input onBlur={this.showDate2} ref={this.myRef2} type="text" placeholder='失去焦点提示数据'/>&nbsp;                    
        </div>
    )
}
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('test'))
````



##### 事件处理

1. 通过`onXxx`属性指定事件处理函数(==注意大小写==)

   * 【示例】原生`onclick`，React重新封装为`onClick`等

     * > 【解释】
       >
       > * React使用的是自定义(合成)事件, 而不是使用的原生DOM事件
       >
       >   * 【原因】**为了更好的兼容性**
       >
       > * React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
       >
       >   * 【原因】**为了高效**
       >
       >   * 【示例】
       >
       >     ![1656298383743](D:\Data\9_Typora图片缓存\1656298383743.png)
       >
       >     * React在工作的时候将事件*（上图红框）*加在了div*（上图蓝框）*上
       >        
       >       * 【疑问】**为什么要这样做？**
       >        
       >         	>【拓展】**事件委托的原理**
       >         	>
       >         	>让子元素事件冒泡回父元素

2. 通过`event.target`得到发生事件的DOM元素对象

   * 【目的】避免过度使用ref

   * 【前提】发生事件的DOM和要操作的DOM是同一个

   * 【示例】

     ````jsx
     //创建组件
     class Demo extends React.Component{
     showDate2 = (event)=>{
         alert(event.target.value)
     }
     render() {
         return(
             <div>
                 <input onBlur={this.showDate2} type="text" placeholder='失去焦点提示数据'/>&nbsp;                    
             </div>
         )
     }
     }
     //渲染组件到页面
     ReactDOM.render(<Demo/>,document.getElementById('test'))
     ````



## 如何收集表单数据?

### 非受控组件

* 页面中所有输入DOM现用现取

  * 【疑问】**啥是现用现取？**

    ![1656303326725](D:\Data\9_Typora图片缓存\1656303326725.png)

    * 点击登录*（上图最下方红**圈**）*，表单调用回调函数*（上图最上方红**圈**）*
    * 在函数内直接获取节点*（上图第一个红**框**）*，直接取节点的`.value`值*（上图第二个红**框**）*

【示例】

````jsx
//创建组件
class Login extends React.Component{
    handleSubmit = (event)=>{
        event.preventDefault(); //阻止表单提交
        const {username,password} = this
        alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                用户名：<input ref={c=>this.username = c} type='text' name='username'/>
                密码：<input ref={c=>this.password = c} type='password' name='password'/>
                <button>登录</button>
            </form>
        )
    }
}
//渲染组件到页面
ReactDOM.render(<Login/>,document.getElementById('test'))
````



### 受控组件（==建议使用==）

#### 到底受到谁的控制？

* 页面中所有输入类DOM，随着你的输入就能维护到state（状态）里面*（如下图右侧箭头）*，等需要用的时候再从state（状态）中调用出来*（如下图左侧箭头）*。**（大白话：类似于Vue中的双向数据绑定）**

  ![1656305692893](D:\Data\9_Typora图片缓存\1656305692893.png)

【示例】

````jsx
//创建组件
class Login extends React.Component {
    // 初始化状态
    state ={
        username:'',    //用户名
        password:'',    //密码
    }

// 保存用户名到状态中
saveUsername = (event)=>{
    this.setState({username:event.target.value})
}

// 保存密码到状态中
savePassword = (event)=>{
    this.setState({password:event.target.value})
}

// 表单提交的回调
handleSubmit = (event) => {
    event.preventDefault(); //阻止表单提交
    const { username, password } = this.state
    alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
}
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            用户名：<input onChange={this.saveUsername} type='text' name='username' />
            密码：<input onChange={this.savePassword} type='password' name='password' />
            <button>登录</button>
        </form>
    )
}
}
//渲染组件到页面
ReactDOM.render(<Login />, document.getElementById('test'))
````

【优势】省略ref



## 【拓展】高阶函数与函数柯里化（==了解即可==）

### 啥是高阶函数？

* 如果一个函数**符合下面2个规范中的任何一个**，那该函数就是高阶函数。

  1. 若A函数，接收的**参数是一个函数**

     【示例】`Promise`、`setTimeout`、`arr.map()`等等

     ````js
     new Promise(()=>{})
     
     setTimeout(()=>{})
     ````

  2. 若A函数，调用的**返回值依然是一个函数**

     【示例】

     ````jsx
     // 初始化状态
     state = {
         username: '',    //用户名
         password: '',    //密码
     }
     
     // 保存表单数据到状态中	//高阶函数
     saveFormData = (dataType) => {
         return (event) => {
             this.setState({[dataType]:event.target.value})
         }
     }
     
     // 表单提交的回调
     handleSubmit = (event) => {
         event.preventDefault(); //阻止表单提交
         const { username, password } = this.state
         alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
     }
     render() {
         return (
             <form onSubmit={this.handleSubmit}>
                 用户名：<input onChange={this.saveFormData('username')} type='text' name='username' />
                 密码：<input onChange={this.saveFormData('password')} type='password' name='password' />
                 <button>登录</button>
             </form>
         )
     }
     }
     //渲染组件到页面
     ReactDOM.render(<Login />, document.getElementById('test'))
     ````

     * 【工作流程】

       ![1657105416093](D:\Data\9_Typora图片缓存\1657105416093.png)

       * 将`saveFormData()`*（如上图最**底**层**第二个**红框）*返回的函数*（如上图**上**层**第一个**红框）*交给`onChange`*（如图最**底**层**第一个**红框）*做为回调函数
       * 当在输入框中输入是，调用的是`return`函数*（如上图**上**层**第一个**红框）*

     * 【疑问】**如何实现动态指定对象属性名？**

       * 在动态属性变量加上`[]`

         【示例】如上述代码中的

         ````jsx
         this.setState({[dataType]:event.target.value})
         ````

       > 【复习】对象的相关知识
       >
       > * 间接指定对象属性名
       >
       >   【示例】
       >
       >   ````js
       >   let a ='name'
       >   let obj={}  //{name:'tom'}
       >   obj[a]='tom'
       >   console.log(obj);
       >   ````



### 啥是函数柯里化？

* 通过**函数调用**继续**返回函数**的方式，实现**多次接收参数最后统一处理**的函数编码形式。

  【示例】

  ````js
  // 没有使用函数柯里化
  function sum(a,b,c){
      return a+b+c
  }
  
  // 使用函数柯里化
  function sum2(a){
      return (b)=>{
          return (c)=>{
              return a+b+c
          }
      }
  }
  const result= sum(1,2,3)
  console.log(result);
  
  const result2= sum2(1)(2)(3)
  console.log(result2);
  ````

  ![1657106574635](D:\Data\9_Typora图片缓存\1657106574635.png)

  【示例】[高阶函数代码示例中](# 啥是高阶函数？)涉及到的函数柯里化

  ![1657106502818](D:\Data\9_Typora图片缓存\1657106502818.png)

  * 【解释】
    * `saveFormData`接到一个参数*（如上图第一个红框）*，`saveFormData`是一个函数，返回也是一个函数
    * 返回的函数中也接到一个参数*（如上图第二个红框）*
    * 两个函数接收到两个参数，最后得到一个统一的处理*（如上图蓝框）*



## 啥是组件生命周期？

* 又称
  * 生命周期回调函数
  * 生命周期钩子函数
  * 生命周期函数
  * 生命周期钩子
* 组件从创建到死亡它会经历一些特定的阶段。
* React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。
* 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。



### React生命周期（旧）

【流程图】**React生命周期（旧）**

![1657201573284](D:\Data\9_Typora图片缓存\1657201573284.png)

【==注意==】生命周期钩子什么时候调与代码顺序无关



#### 初始化（挂载时）阶段	由ReactDOM.render()触发---初次渲染

![1657204179910](D:\Data\9_Typora图片缓存\1657204179910.png)

【工作流程】

1. 执行`constructor()`
2. 执行`componentWillMount()`
3. 执行`render()`
   * 必须要用
4. 执行`componentDidMount()`
   * 【常用】一般在这个钩子中做一些初始化的事
     * 【例如】开启定时器、发送网络请求、订阅消息



【示例】**模拟React生命周期挂载时流程**

````jsx
class Count extends React.Component {
    // 构造器
    constructor(props){
        console.log('Count---constructor');
        super(props)
        // 初始化状态
        this.state = {count:0}
    }

    // 加1按钮的回调
    add = ()=>{
        // 获取原略
        const {count} = this.state
        // 更新状态
        this.setState({count:count+1})
    }

    // 组件将要挂载的钩子
    componentWillMount(){
        console.log('Count---componentWillMount');
    }

    // 组件挂载完毕的钩子
    componentDidMount(){
        console.log('Count---componentDidMount');
    }

    render() {
        console.log('Count---render');
        const {count} = this.state
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
ReactDOM.render(<Count/>,document.getElementById('test'))
````

![1657202816740](D:\Data\9_Typora图片缓存\1657202816740.png)



#### 更新阶段	由组件内部this.setSate()或父组件重新render触发

![1657203922267](D:\Data\9_Typora图片缓存\1657203922267.png)

##### ②	setState（正常更新）

* 调了`setState`方法就更新状态（state）
* 一更新状态就从新调render



【工作流程】

1. 调用`setState`方法更新状态（state）

2. 调用`shouldComponentUpdate`（组件是否应该被更新）钩子*（可以理解为阀门）*

   * 若返回`false`：不再向下走*（如下图红叉显示）*

     ![1657204626150](D:\Data\9_Typora图片缓存\1657204626150.png)

   * 若返回`true`：继续向下执行

     * 【==注意==】如果不写`shouldComponentUpdate`中的值，也会有默认返回值`true`
     
   * 【==注意==】写了`shouldComponentUpdate`就要设置返回值，否则报错
   
     * ![1657329586049](D:\Data\9_Typora图片缓存\1657329586049.png)
   
3. 调用`componentWillUpdate`（组件将要更新的钩子）

4. 调用`rander`（渲染界面）

5. 调用`componentDidUpdate`（组件更新完毕的钩子）



【示例】

````jsx
class Count extends React.Component {
    // 构造器
    constructor(props) {
        console.log('Count---constructor');
        super(props)
        // 初始化状态
        this.state = { count: 0 }
    }

    // 加1按钮的回调
    add = () => {
        // 获取原略
        const { count } = this.state
        // 更新状态
        this.setState({ count: count + 1 })
    }

    // 卸载组件按钮的回调
    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }

    // 组件将要挂载的钩子
    componentWillMount() {
        console.log('Count---componentWillMount');
    }

    // 组件挂载完毕的钩子
    componentDidMount() {
        console.log('Count---componentDidMount');
    }

    // 组件将要卸载的钩子
    componentWillUnmount() {
        console.log('Count---componentWillUnmount');
    }

    // 控制组件更新的“阀门”
    shouldComponentUpdate() {
        console.log('Count---shouldComponentUpdate');
        return true
    }

    // 组件将要更新的钩子
    componentWillUpdate() {
        console.log('Count---componentWillUpdate');
    }

    // 组件更新完毕的钩子
    componentDidUpdate() {
        console.log('Count---componentDidUpdate');
    }

    render() {
        console.log('Count---render');
        const { count } = this.state
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>卸载组件</button>
            </div>
        )
    }
}
ReactDOM.render(<Count />, document.getElementById('test'))
````

* 【==注意==】写代码时，最好将生命钩子写一起，回调函数写一起

![1657335044716](D:\Data\9_Typora图片缓存\1657335044716.png)



##### ③	forceUpdate	（强制更新）	(用的不多)

【适用场景】

* 不对状态（state）进行任何修改，只是想更新一下



【工作流程】

1. 触发`forceUpdate()`方法
2. 调用`componentWillUpdate`（组件将要更新的钩子）
3. 调用`rander`（渲染界面）
4. 调用`componentDidUpdate`（组件更新完毕的钩子）



【示例】在上例代码基础中添加下述代码

````jsx
// 强制更新按钮的回调
force = () => {
    this.forceUpdate()
}

render() {
    console.log('Count---render');
    const { count } = this.state
    return (
        <div>
            <h2>当前求和为{this.state.count}</h2>
            <button onClick={this.add}>点我+1</button>
            <button onClick={this.death}>卸载组件</button>
            <button onClick={this.force}>不更改任何状态中的数据，强调更新一下</button>
        </div>
    )
}
````

![1657336272577](D:\Data\9_Typora图片缓存\1657336272577.png)



##### ①	父组件render

【工作流程】

1. 父组件一旦从新`render`

2. 响应`componentWillReceiveProps`（组件将要接收参数）生命钩子

   * 该生命钩子还可以接收参数

   * 【疑问】啥时候调用？
     * 组件将要接收到`props`时调用
       * 【==注意==】第一次传入的`props`不算调用，以后传的才算

3. 调用`shouldComponentUpdate`（组件是否应该被更新）钩子

4. 调用`componentWillUpdate`（组件将要更新的钩子）

5. 调用`rander`（渲染界面）

6. 调用`componentDidUpdate`（组件更新完毕的钩子）



【示例】

````jsx
//创建父组件A
class A extends React.Component {
    // 初始化状态
    state = { carName: '奔驰' }

    changeCar = () => {
        this.setState({ carName: '奥拓' })
    }


    render() {
        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <B carName={this.state.carName} />
            </div>

        )
    }
}

//创建子组件B
class B extends React.Component {
    // 组件将要接收新的props的钩子
    componentWillReceiveProps(props) {
        console.log('B---componentWillReceiveProps', props);
    }

    // 控制组件更新的“阀门”
    shouldComponentUpdate() {
        console.log('B---shouldComponentUpdate');
        return true
    }

    // 组件将要更新的钩子
    componentWillUpdate() {
        console.log('B---componentWillUpdate');
    }

    // 组件更新完毕的钩子
    componentDidUpdate() {
        console.log('B---componentDidUpdate');
    }

    render() {
        console.log('B---rander');
        return (
            <div>我是B组件，接收到的车市：{this.props.carName}</div>
        )
    }
}

// 渲染组件
ReactDOM.render(<A />, document.getElementById('test'))
````

![1657360653728](D:\Data\9_Typora图片缓存\1657360653728.png)



#### 卸载组件	由ReactDOM.unmountComponentAtNode()触发

![1657379928247](D:\Data\9_Typora图片缓存\1657379928247.png)

【工作流程】

* 执行`componentWillUnmount()`
  * 【常用】一般在这个钩子中做一些收尾的事
    * 【例如】关闭定时器、取消订阅消息



### React生命周期（新）

【==注意==】适用于React最新版本（16.8.4以上不包含16.8.4）

* 在新版本中旧版本的*部分钩子*需要在前面加`UNSAFE_`才能消除下述警告，继续工作

  【弃用警告】

  ![1657414442032](D:\Data\9_Typora图片缓存\1657414442032.png)

  * 【需要加`UNSAFE_`的钩子】（巧记：所有带`Will`的钩子，除了`componentWillUnmount`）**（==即将废弃==）**

    ![1657414954850](D:\Data\9_Typora图片缓存\1657414954850.png)

    * `UNSAFE_componentWillMount`（组件将要挂载的钩子）
    * `UNSAFE_componentWillUpdate`（组件将要更新的钩子）
    * `UNSAFE_componentWillReceiveProps`（组件将要接收新的props的钩子）



【流程图】**React生命周期（新）**

![1657414057352](D:\Data\9_Typora图片缓存\1657414057352.png)

* 【对比旧的生命周期】

  ![1657415377504](D:\Data\9_Typora图片缓存\1657415377504.png)

  * 没有了`componentWillMount`、`componentWillReceiveProps`、`UNSAFE_componentWillUpdate`*（如上图左侧三个蓝勾）*
  * 多了两个钩子`getDerivedStateFromProps`和`getSnapshotBeforeUpdate`*（如上图右侧两个红框）*
  * 其他流程基本一致



#### 挂载时

【工作流程】

1. 执行`constructor()`

2. 执行`getDerivedStateFromProps()`（从props中得到一派生的状态）

   * > 啥是派生

   * > 如何使用

     【示例】

     ````javascript
     static getDerivedStateFromProps(props,static){
         return null || obj
     }
     ````

     

3. 执行`render()`

4. 执行`componentDidMount()`



#### 更新时



## 虚拟DOM与DOM Diff算法



# react应用（基于react脚手架）

## 啥是脚手架？

* 用来帮助程序员快速创建一个基于xxx库的模板项目
  * 包含了所有需要的配置（语法检查、jsx编译、devServer…）
  * 下载好了所有相关的依赖
  * 可以直接运行一个简单效果
* 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化



###  啥是React脚手架

* react提供了一个用于创建react项目的脚手架库: `create-react-app`
* 项目的整体技术架构为:  `react` + `webpack` + `es6 `+`eslint`



## 如何搭建React脚手架的项目

1. 进入`cmd`（以管理员模式）,全局安装

   ````shell
   npm i -g create-react-app
   ````

2. 切换到想创项目的目录，使用命令

   ````shell
   create-react-app 项目名称
   ````

3. 进入项目文件夹

   ````shell
   cd 项目文件夹
   ````

4. 启动项目

   ````shell
   npm start
   ````



## React脚手架项目结构

【图示】**React脚手架项目大致结构**

![1655801440904](D:\Data\9_Typora图片缓存\1655801440904.png)



### 由外往里介绍

#### `node_modules`

* 依赖所存放的位置



#### public文件夹

* 存放静态资源文件
  * 【疑问】**啥是静态资源？**
    * 页面、样式、公共的图片



##### `index.html`主页面

* public里面只有一个`.html`文件

* 内容

  ````html
  <head>
      <meta charset="utf-8" />
      <!-- %PUBLIC_URL%代表public文件夹的路径 -->
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- 开启理想视口,用于做移动端网页的适配 -->
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- 用于配置浏览器标签+地址栏的颜色(仅支持安卓浏览器) -->
      <meta name="theme-color" content="#000000" />
      <meta
            name="description"
            content="Web site created using create-react-app"
            />
      <!-- 用于指定网页添加到手机主屏幕后的图标 -->
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <!-- 应用加壳时的配置文件 -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
      <title>React App</title>
  </head>
  <body>
      <!-- 若浏览器不支持js则展示标签中的内容 -->
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
  
  </body>
  ````



#### src文件夹

##### `App.css`

* 存放组件样式



##### `App.js`

* 定义App组件

* 内容

  ![1655803429307](D:\Data\9_Typora图片缓存\1655803429307.png)

  * 定义一个App组件*（如上图第一个红框）*
  * 将App组件通过ES6语法暴露出去*（如上图第二个红框）*

* 【疑问】**为啥只定义一个App组件？**

  ![1655803599635](D:\Data\9_Typora图片缓存\1655803599635.png)
  * 只把一个组件（App组件）放到`root`容器里*（如上个图第一个红框）*

    * 【原因】**`ReactDom.render`不是追加，而是会顶掉之前的已有的组件**

      ![1655803744888](D:\Data\9_Typora图片缓存\1655803744888.png)

  * 用React脚手架进行开发的适合`ReactDom.render`方法只执行一次（即把App组件放入`root`结点里）

    * 而App里的子组件*（如上图蓝框和黄框）*顺带着也有了。



##### `App.test.js`

* 专门用于给app组件做测试的



##### `index.css`

* 通用样式



##### `index.js`

* 入口文件

* 内容

  ````javascript
  // 导入react核心库
  import React from 'react';
  // 引入reactDOM
  import ReactDOM from 'react-dom/client';
  // 引入通用样式
  import './index.css';
  // 引入App组件
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  
  // 渲染App组件
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  reportWebVitals();
  ````

  * 渲染App组件（上述代码第12~17行）相当于

    ![1655804620628](D:\Data\9_Typora图片缓存\1655804620628.png)

    * 【疑问】**为什么`<App/>`外部要包裹`<React.StrictMode>`?**
      * 能检查`<App/>`组件以及在`<App/>`中的子组件写的东西是否合理
      * 【==注意==】这里的`<React.StrictMode>`与严格模式没有任何关系



### 整个页面执行顺序

1. 来到`src`下的`index.js`

   * 引入react核心库、引入reactDOM、引入样式

     ![1655805137885](D:\Data\9_Typora图片缓存\1655805137885.png)

   * 然后触发`ReactDOM.reader`,其实真正渲染的是`<App/>`，到`root`

2. 自动去`public`找`index.html`里的`root`结点*（如下图高亮部分）*

   ![1655805309713](D:\Data\9_Typora图片缓存\1655805309713.png)

3. App组件就渲染到页面上，并引入相关样式

   ![1655805409731](D:\Data\9_Typora图片缓存\1655805409731.png)



## 脚手架的模块化

### 组件模块化

1. 在`src`文件夹下新建`components`文件夹，所有自定组件存放在该文件夹

2. 每个组件用一个文件夹单独存放，命名用首字母大写标识为组件

   * 组件文件

     * 【格式】组件封装代码模板

       ````jsx
       //导入react核心库
       import React,{Component} from 'react'
       //引入组件样式
       import '/组件样式路径'
       
       //创建并暴露组件
       export default class 组件名 extends Component{
           render(){
               return({
                   <h1 className='组件样式'>这是组件封装模板</h1>
               })
           }
       }
       ````

     * 【==建议==】

       * 组件代码可以用`.jsx`后缀名来区分组件与`.js`组件逻辑功能
       * 可以都用`index.jsx`表示组件，前提是放在一个一组件名区分的文件夹下。
         * 好处：App组件引入时路径可以相对简便
         * 弊端：要注意是哪个组件。

   * 组件样式文件



### 样式模块化

> 方法一：样式嵌套

【格式】

````css
.组件样式名{
    //Css样式
    .h1{    
    }
}
````



> 方法二：改样式文件名

1. 在文件名和后缀名中间加上`.module`*（如下图高亮部分）*

   【示例】

   ![1655948342506](D:\Data\9_Typora图片缓存\1655948342506.png)

2. 引入到组件中*（如下图第2行代码）*，并应用样式*（如下图第6行）*

   【示例】

   ![1655948448265](D:\Data\9_Typora图片缓存\1655948448265.png)



## 组件化编码流程（通用）

1. 拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件
   1. 动态显示初始化数据
      1. 数据类型
      2. 数据名称
      3. 保存在哪个组件?
   2. 交互(从绑定事件监听开始)



## 案例相关知识点

### 拆分组件、实现静态组件

![1656815072170](D:\Data\9_Typora图片缓存\1656815072170.png)

【==注意==】`className`、`style`的写法

* 【示例】`className`的写法

  ![1656815302103](D:\Data\9_Typora图片缓存\1656815302103.png)

* 【示例】`style`的写法

  ![1656815238682](D:\Data\9_Typora图片缓存\1656815238682.png)



### 动态初始化列表，如何确定将数据放在哪个组件的state中？

* 某个组件使用：放在其自身的state中

* 某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）



### 关于父子之间通信

* 【父组件】给【子组件】传递数据：通过props传递

  ![1656815538414](D:\Data\9_Typora图片缓存\1656815538414.png)

* 【子组件】给【父组件】传递数据：通过props传递，要求**==父==提前给子传递一个函数**

  * 【前提】**==父==提前给子传递一个函数**

    ![1656815495660](D:\Data\9_Typora图片缓存\1656815495660.png)

  * 【子组件】通过props传递数据给父组件

    ![1656815790284](D:\Data\9_Typora图片缓存\1656815790284.png)



【==注意==】

* `defaultChecked` 和 `checked`的区别，类似的还有：`defaultValue` 和 `value`

  * `defaultChecked`：只有在第一次使用时起作用，以后不起作用。

* 状态在哪里，操作状态的方法就在哪里

  * 【示例】

    ![1656815938992](D:\Data\9_Typora图片缓存\1656815938992.png)



# react ajax

## 前置说明

1. React本身只关注于界面, 并不包含发送ajax请求的代码
   * 【说明】不存在`React.get(url)`
2. 前端应用需要通过ajax请求与后台进行交互(json数据)
3. react应用中需要集成第三方ajax库(或自己封装)



## 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入**不建议**使用
2. axios: 轻量级, **建议**使用
   1. 封装XmlHttpRequest对象的ajax
   2. promise风格
   3. 可以用在浏览器端和node服务器端



### 如何使用axios

#### 1、为项目引入axios库

在命令行输入

````shell
npm add axios
//或
yarn add axios
````



#### 2、为脚手架配置代理

【报错】跨域

![1656939351282](D:\Data\9_Typora图片缓存\1656939351282.png)

##### 啥是跨域？

【示例】

![1656939555584](D:\Data\9_Typora图片缓存\1656939555584.png)

* 客户端所处的端口3000*（如上图左侧蓝色部分）*，想要访问服务器所处端口5000*（如上图右侧红色部分）*
  * 当一个请求被送出去*（如上图第一根橙色箭头）*的时后，ajax引擎*（如上图粉线）*放行。
  * 但当响应往回回*（如上图第二根橙色箭头）*的时候，ajax引擎把此次响应拦截在外侧*（如图粉线所示）*因为跨域了。



##### 啥是代理？

* 所谓的代理就是出现一个中间人*（如下图粉色方框）*

【示例】

![1656941411247](D:\Data\9_Typora图片缓存\1656941411247.png)

* 代理也是开在3000端口*（如图粉色内容）*，3000端口除了开起了脚手架*（如图蓝色方框）*，也开启了微小服务器*（如图粉色内容）*
* 所处用户端是3000给3000发请求*（如图**左**侧最**上**方橙线）*
  * 代理服务器就将刚发来的请求，发送给服务端端口5000*（如图**右**侧最**上**方橙线）*
* 服务端5000响应的内容，代理服务器也会收到*（如图**右**侧最**下**方橙线）*
  * 【疑问】**为什么代理服务器在端口3000可以收到服务器端口5000的响应？**
    * 因为代理没有ajax引擎
  * 代理服务器收到来自服务端的响应后，会把内容交给浏览器*（如图**左**侧最**下**方橙线）*
    * 此时ajax引擎*（如图红线）*判断用户端所处端口与代理服务器端口一致，放行



##### 如何开启代理？

###### 方法一	在`package.json`中追加配置	(适用于只配置一个代理)

|                  优点                  |                      缺点                      |
| :------------------------------------: | :--------------------------------------------: |
| 配置简单，前端请求资源可以不加任何前缀 | 不能配置多个代理（如果请求的不同服务器就不行） |

1. **在`package.json`中追加配置**

   【格式】

   ````json
   "proxy":"访问服务器端口"
   ````

   【示例】

   ````json
   "proxy":"http://localhost:5000"
   ````

2. **修改axios请求**

   【格式】

   ````jsx
   axios.get('http://localhost:项目端口/students').then()}
   ````

   【示例】

   ````jsx
   axios.get('http://localhost:3000/students').then(
       response =>{console.log('成功了',response.data);},
       error=>{console.log('失败了',error);}
   )
   ````

【==注意==】**并不是所有设置好代理的请求都访问服务器**

* 如果项目中的public**有**请求数据

  * 则获取到***本项目public中***的请求数据

* 如果项目中的public**没有**请求数据

  * 则前往访问服务器中寻找

    * 若目标访问服务器中**有**请求数据

      * 则返回***服务器中***的请求数据

    * 若目标访问服务器中**没有**请求数据

      【报错】404

      ![1656943804169](D:\Data\9_Typora图片缓存\1656943804169.png)



###### 方法二	创建代理配置文件	（适用于配置多个代理）

|                     优点                     |                缺点                |
| :------------------------------------------: | :--------------------------------: |
| 可以配置多个代理，可以灵活控制请求是否走代理 | 配置繁琐，前端请求资源时必须加前缀 |



1. **在src下创建配置文件`setupProxy.js`**

   ![1656944103277](D:\Data\9_Typora图片缓存\1656944103277.png)

2. **编写代理配置规则**

   【示例】
   
   ```js
   const {createProxyMiddleware:proxy} = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```
   
   * 【==注意==】**不能用ES6写，要用CJS写**
     * 【解释】因为`setupProxy.js`不是给前端代码用于执行的，是把这个文件加入到wwbpack配置文件里
   
3. **修改axios请求**

   【示例】

   ````jsx
   getStudentData =()=>{
       axios.get('http://localhost:3000/api1/students').then(
           response =>{console.log('成功了',response.data);},
           error=>{console.log('失败了',error);}
       )
   }
   getCarData =()=>{
       axios.get('http://localhost:3000/api2/cars').then(
           response =>{console.log('成功了',response.data);},
           error=>{console.log('失败了',error);}
       )
   }
   
   render() {
       return (
           <div>
               <button onClick={this.getStudentData}>点我获得学生数据</button>
               <button onClick={this.getCarData}>点我获得汽车数据</button>
           </div>
       )
   }
   ````



## 案例相关知识点

### 解构赋值

> 传统解构赋值

【示例】

````js
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
````



> 连续解构赋值

【示例】

````js
let obj = {a:{b:1}}
const {a:{b}} = obj; //连续解构赋值
````



> 连续解构赋值+重命名

【示例】

````js
let obj = {a:{b:1}}
const {a:{b:value}} = obj; //连续解构赋值+重命名
````



### 兄弟组件之间如何直接进行数据交互？

#### 消息订阅与发布机制

【适用于】

* 不仅适用于兄弟组件之间，还适用于任意两个组件之间的数据交互



【工作流程】

1. **消息名**
   * 相当与订阅报纸，交钱，说好地址，订阅哪一种报纸
2. **发布消息**
   * 相当于等邮递员送报纸



##### 如何实现？

1. 在项目中，下载PubSubJS工具库

   ````shell
   npm add pubsub-js
   ````

2. 确定哪个组件是消息发布者，哪个组件是消息订阅者

   1. **引入**

      ````jsx
      import PubSub from 'pubsub-js'
      ````

   2. **发布消息**

      * 【判断是否设为消息发布者】哪个组件**要传数据**，就在哪个组件中发布消息

      * 【格式】

        ````jsx
        PubSub.publish('消息名'，'发布的数据')
        ````

      * 【示例】

        ````jsx
        PubSub.publish('lao',{isFirst:false,isLoading:true})
        ````

   3. **订阅消息**

      * 【判断是否设为消息订阅者】哪个组件**要接收数据**，就在哪个组件中订阅消息

      * 【格式】

        ![1657440126696](D:\Data\9_Typora图片缓存\1657440126696.png)

        * `MY TOPIC`：所要订阅的（消息名）
        * `mySubscriber`：（函数）

      * 【工作流程】

        1. 当在要接收数据的组件中，去订阅消息
        2. 指定所要订阅的消息名*（如上图第一个蓝框）*
           * 如果有组件发布了该订阅名的消息，就要被调用函数*（如上图第二个蓝框）*
             * 在调用函数时有两个参数*（如上图第一个红框）*
               * `msg`：订阅的消息名
               * `data`：交给你的数据

      * 【示例】

        ````jsx
        this.token = PubSub.subscribe('lao',(_,stateObj)=>{
            this.setState(stateObj)
        })
        ````

   4. **取消订阅**

      * 要在组件的componentWillUnmount中取消订阅

      * 【示例】

        ````jsx
        PubSub.unsubscribe(this.token)
        ````

        

# react-router（路由）

## 啥是SPA？

* 单页Web应用
  * 【疑问】**啥是单页应用？**
    * 整个应用只有**一个完整的页面**
* 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新**
  * 单页面，多组件
* 数据都要经过ajax请求获取，并在前端异步展现



## 啥是路由？

* 一个路由就是一个映射关系`(key:value)`
* key为路径, value可能是function或component
* 在React中靠路由链接实现切换组件



### 路由的分类

#### 后端路由	（value是function）

* 用来处理客户端提交的请求。

* 注册路由： router.get(path, function(req, res))

* 【工作过程】

  ![1657546370933](D:\Data\9_Typora图片缓存\1657546370933.png)

  1. 当node接收到一个请求时, 根据请求路径找到匹配的路由,
  2. 调用路由中的函数来处理请求, 返回响应数据



#### 前端路由	（value是component）

* 每一个路径，对应一个组件

![1657545825947](D:\Data\9_Typora图片缓存\1657545825947.png)

* 用于展示页面内容。

* 注册路由:

* 【工作过程】

  ![1657545425848](D:\Data\9_Typora图片缓存\1657545425848.png)

  1. 点击导航区中的路由链接*（如图中高亮的`Home`）*，不会导致页面的跳转
     - 此时只是将浏览器中的地址改为`/home`
  2. 路由中有专门监测路径变化*（如图右侧路径发生改变）*的机制
     - 监测到，就把相应的组件展示到页面中*（如图蓝色箭头所示）*



## 如何使用react-router-dom？

> 啥是react-router-dom？

* react的一个插件库
* 专门用来实现一个SPA应用
* 基于react的项目都回用到此库



> 如何安装插件库

**react-router-dom:five:**

````shell
npm i react-router-dom@5
````

**react-router-dom:six:**

````shell
npm add react-router-dom
````



> 基本使用

1. 明确好界面中的导航区、展示区

2. 导航区的a标签改为Link标签

   ````jsx
   <Link to="/xxxxx">Demo</Link>
   ````

3. 展示区写Route标签进行路径的匹配

   ````jsx
   <Route path='/xxxx' component={Demo}/>
   ````

   * 虽然没有写Demo标签，但是路由组件根据路径匹配上了之后，也会展示Demo组件

4. `<App>`的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`



### 内置组件

> 路由组件与一般组件不同之处

|     不同之处      |               一般组件               |                 路由组件                 |
| :---------------: | :----------------------------------: | :--------------------------------------: |
|     **写法**      |              `<Demo/>`               | `<Route path="/demo" component={Demo}/>` |
|   **存放位置**    |              components              |                  pages                   |
| **接收到的props** | 写组件标签时传递了什么，就能收到什么 |           接收到三个固定的属性           |

【路由组件：接收到三个固定的属性】

````jsx
history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
location:
        pathname: "/about"
        search: ""
        state: undefined
match:
        params: {}
        path: "/about"
        url: "/about"
````



#### BrowserRouter

* 对应`Click Browser History`

* 路径中不会出现`#`，而是出现`/`



#### HashRouter（哈希路由）

* 对应`Hash History`

* 路径中出现`#`，`#`后面属于hash值（锚点值）

  ![1658961866199](D:\Data\9_Typora图片缓存\1658961866199.png)

  【==注意==】`#`后面的值都不会作为资源带给服务器



#### Redirect



#### Route（注册路由）

**示例：**

````jsx
<Route path="路由链接路径" component={组件名}/>
````

【==注意==】

* 必须在注册路由外侧包括路由器

  【报错提示】

  ![1658849343600](D:\Data\9_Typora图片缓存\1658849343600.png)

* 整个应用只能由一个路由器管理

  * 在App渲染中包裹

    ![1658849474028](D:\Data\9_Typora图片缓存\1658849474028.png)



#### Link（路由链接）

**示例：**

````jsx
<Link className='样式' to='要跳转的路径'></Link>
````

【==注意==】

* `to`:一般写成小写，带杠`/`不带点`.`

* 需要在`Link`的外侧包上`Router`

  【报错提示】

  ![1658848763453](D:\Data\9_Typora图片缓存\1658848763453.png)

  > 【拓展】Router包括两种
  >
  > ![1658848827477](D:\Data\9_Typora图片缓存\1658848827477.png)
  >
  > * BrowserRouter
  >   * 路径中不会出现`#`，而是出现`/`
  > * HashRouter
  >   * 路径中出现`#`



#### NavLink



#### Switch





# react UI组件库

【PS：个人建议】用多就会，边做项目边看文档API

* material-ui(国外)
* ant-design(国内蚂蚁金服)



# redux



# 拓展

## setState

### 更新状态

【==注意==】React中的状态更新是异步的

* 【解释】什么是异步的
  * ![1660146190043](D:\Data\9_Typora图片缓存\1660146190043.png)
    1. setState是同步的，是setState引起的**后续动作是异步的**
    2. 先往下执行，执行输出语句*（如上图第12行代码）*，输出结果为0
    3. 执行完render*（如上图第15行代码）*后，才修改count的值

> 方法一（对象式）

【使用原则】

* 如果新状态不依赖于原状态

【格式】

````jsx
setState(stateChange, [callback])
````

`stateChange`：状态改变对象

* 该对象可以体现出状态的更改

  * 【示例】

    ````jsx
    add=()=>{
        //1.获取原理的count值
        const {count} = this.state
        //2.更新状态
        this.setState({count:count+1})
        console.log(this.state.count);
    }
    ````

`callback`：（可选）回调函数

* 在状态更新完毕、界面也更新后(render调用后)才被调用

  * 【示例】

    ````jsx
    add=()=>{
        //1.获取原理的count值
        const {count} = this.state
        //2.更新状态
        this.setState({count:count+1},()=>{
            	console.log(this.state.count);
        })
    }
    ````

  * 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取



> 方法二（函数式）

* 对象式的setState是函数式的setState的简写方式（语法糖）

【使用原则】

* 如果新状态依赖于原状态

【格式】

````jsx
setState(updater, [callback])
````

`updater`：返回`stateChange`对象的函数

* 可以接收到**state**和**props**

  * 【示例】

    ````jsx
    state={count:0}
    add=()=>{
        this.setState((state,props)=>{
            return {count:state.count+1}
        })
        //简写
    	this.setState( state => ({count:state.count+1))
    }
    
    ````


`callback`：（可选）回调函数

* 在状态更新、界面也更新后(render调用后)才被调用。



## lazyLoad



## Hooks

### 能干啥？

* 可以在函数组件中使用 state 以及其他的 React 特性



### 怎么用？

#### State Hook

* 让函数组件也可以有state状态, 并进行状态数据的读写操作

【格式】

````jsx
const [xxx, setXxx] = React.useState(initValue)
````

`xxx`：状态名

`setXxx`：更改状态**方法**

* 写法一：(参数为非函**数值**, 直接指定新的状态值, 内部用其覆盖原来的状态值)

  ````jsx
  setXxx(newValue)
  ````

* 写法二：(参数为**函数**, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值)

  ````jsx
  setXxx(value => newValue)
  ````

`initValue`：初始值



#### Effect Hook

* 可以在函数组件中执行*副作用*操作（用于模拟类组件中的生命周期钩子）

##### 用来干嘛？

* 发ajax请求数据获取
* 设置订阅/启动定时器
* 手动更改真实DOM

##### 怎么用？

【格式】

````jsx
useEffect(() => { 
	// 在此可以执行任何带副作用操作
		return () => { // 在组件卸载前执行
		// 在此做一些收尾工作, 比如清除定时器/取消订阅等
	}
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
````

`[stateValue]`：监测状态改变**（不写`[]`,默认所有状态都监测）**

* `stateValue`：所要监测的状态

  * 不写：默认谁都不监测

  

可以把 useEffect Hook 看做如下三个函数的组合

* `componentDidMount()`

  【对应】如下图红圈部分

  ![1660662907627](D:\Data\9_Typora图片缓存\1660662907627.png)

* `componentDidUpdate()`

  【对应】如下图红圈部分

  ![1660662693248](D:\Data\9_Typora图片缓存\1660662693248.png)

* `componentWillUnmount()`

  【对应】如下图红圈部分

  ​	![1660663238409](D:\Data\9_Typora图片缓存\1660663238409.png)



#### Ref Hook

##### 用来干什么？

* 在函数组件中存储/查找组件内的**标签**或任意其它数据

##### 怎么用？

* 功能与[React.createRef()](# refs	标识)一样

【格式】

````jsx
const refContainer = useRef()
````

`refContainer`：自定义容器名

## Freagment



## Context



## 组件优化



## render props



## 错误边界



## 组件通信方式



# 结语

