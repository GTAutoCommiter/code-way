---
id: vue-note-shangguigu
slug: /vue-note-shangguigu
title: 【尚硅谷】Vue2.0+Vue3.0
date: 2022-05-10T00:00:00.000Z
tags:
  - Vue
---
# 前言

【目的】



【学习资源】

* 【学习视频】
  * [尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=1)
* 【参考笔记】
  * [Vue学习笔记（尚硅谷天禹老师）](https://blog.csdn.net/qq_55593227/article/details/119717498)
* 【视频中出现的代码】
  * [学习代码](https://gitee.com/lao-jiawei/code-study/tree/master/%E5%89%8D%E7%AB%AF/vue/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/vue_basic)



【==温馨提示==】



---



# 初识Vue

## Vue官网使用指南

### 官网地址

* [Vue.js官网](https://cn.vuejs.org/)



#### 如何合理使用导航栏？

* [API](https://cn.vuejs.org/v2/api/)——相等于Vue字典（遇到不会的方法就找）
* [风格指南](https://cn.vuejs.org/v2/style-guide/)——代码规范（暂时不用看，等把vue都学完了才看）
* [Cookbook](https://cn.vuejs.org/v2/cookbook/)——Vue开发技巧
* [Awesome](https://github.com/vuejs/awesome-vue)——更多Vue优秀的组件



## 如何搭建Vue开发环境？

### 1、 下载一个开发版本的Vue

* [官网开发版下载地址](https://cn.vuejs.org/v2/guide/installation.html#%E7%9B%B4%E6%8E%A5%E7%94%A8-lt-script-gt-%E5%BC%95%E5%85%A5)——【==注意==】选择开发版本

  * 【拓展】**开发版与生产版的区别**

    |          |                开发版                |                   生产版                    |
    | :------: | :----------------------------------: | :-----------------------------------------: |
    | **区别** |       包含完整的警告和调试模式       |                 删除了警告                  |
    | **选择** | 开发的时候，最好用这个。出错了有提示 | x项目写完了，要上线了，为了让vue.js体积更小 |

* 引入vue.js

  * 在项目中新建文件夹命名为“JS”
  * 将下载的`Vue.js`文件拖入JS文件夹中
  * 在想要调用vue的html文件的< head>标签内引入Vue

  【示例】

  ````html
  <script type="text/javascript" src="../js/vue.js"></script>
  ````

  【==注意==】src路径为vue.js的相对路径

* 此时出现两个警告（先忽略，下一步解决）

  * 【警告一】建议下载Vue开发者工具，达到一个更好的开发体验。

    ![1653748417412](D:\Data\9_Typora图片缓存\1653748417412.png)

  * 【警告二】你正在运行一个开发者版本的vue，请你确定你在生产环境下不要这样做（简单来说，就是vue引入的内容用点大，用此上线不太好）

    ![1653748537559](D:\Data\9_Typora图片缓存\1653748537559.png)

* 验证是否引入成功（在控制台输入`Vue`）

  * 成功

    ![1653748728762](D:\Data\9_Typora图片缓存\1653748728762.png)

  * 失败

    ![1653748832022](D:\Data\9_Typora图片缓存\1653748832022.png)



### 2、按照Vue开发者调试工具（处理警告一）

> Vue开发者工具扩展链接：
> 【下载开发者工具】：
> https://pan.baidu.com/s/1MtYvMPew4lb14piIrs9x6w 
> 提取码：6666 

* 具体安装方式视频已经十分详细，请小伙伴们移步到[尚硅谷Vue技术_搭建Vue开发环境](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=4)



【==注意==】**直接拖入，还未消除警告的情况**

* 点击详情

  ![1653749371783](D:\Data\9_Typora图片缓存\1653749371783.png)

* 打开此项

  ![1653749424396](D:\Data\9_Typora图片缓存\1653749424396.png)



### 3、关闭提示（处理警告二）

* 在html文件`< body>`标签内写入脚本

  ````html
  <script type="text/javascript">
          Vue.config.productionTip=false;//阻止 vue 在启动时生成生产提示。
  </script>
  ````



【拓展】**Vue的全局配置**

* 什么是全局配置？

  * 一处修改，到处可用

  ![1653749600480](D:\Data\9_Typora图片缓存\1653749600480.png)

* 先了解`productionTip`

  ![1653749777288](D:\Data\9_Typora图片缓存\1653749777288.png)



## 如何让Vue工作？

### 1、准备好一个容器

```html
<div id="root">
    <h1>Hello,{{name}}}</h1>
</div>
```

* `容器`：
  * 容器里的代码依然符号html规范，只不过混入了一些特殊的Vue语法
* 容器里的代码被称为【Vue模板】
  * 作用：
    * 为Vue提供模板
    * 把Vue解析后的成果，告诉Vue往哪放。
* `{{xxx}}`：
  * 中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性

> 【拓展】**Vue模板解析流程**
>
> 1. 先有容器，然后在有Vue实例
> 2. 当Vue实例开始工作后
>    1. 读取`el`对应的容器
>    2. 开始对容器进行解析，解析容器中有没有一些特殊的Vue语法
>    3. 解析之后，判断Vue实例中是否有容器所需的属性。
>    4. Vue实例中有容器所需要的属性，
>    5. 则将Vue实例中的属性值传给容器设置Vue语法的地方
>    6. 将容器中原有的Vue语法部分替换成Vue实例中的值，生成一个新的容器
> 3. 将解析完的容器替换掉原有的整个容器

> 【拓展】**js表达式 和 js代码（语句）的区分**
>
> 1. 表达式：一个表达式会产生一个值，可以放在任何已需要值的地方
>
>    【示例】
>
>    （1）.a
>
>    （2）.a+b
>
>    （3）.demo(1)
>
>    （4）.x === y? 'a'  : 'b'
>
> 2. js代码（语句）
>
>    【示例】
>
>    （1）if（）{}
>
>    （2）for（）{}



### 2、必须创建一个Vue实例

* **想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象**
* ==Vue实例与容器是一一对应的==
* 真实开发中只有一个Vue实例，并且会配合着组件一起使用

> 创建Vue实例

````html
<script type="text/javascript">
    Vue.config.productionTip=false;

    //创建Vue实例模板
    new Vue({
        el:"#root",
        data:{
            name:'lao'
        }
    })
</script>
````

* `el`：用于指定当前Vue实例为哪个容器服务
  * 值：通常为**css选择器**字符串
* `data`：用于存储数据，数据共el所指定的容器去使用
  * 一旦data中的数据发生变化，那么模板中用到该数据的地方也会**自动更新**



# Vue核心

## 模板语法

### 插值语法

【功能】

* 用于解析**标签体**内容

【格式】

````html
<标签>this is a {{js表达式}}</标签>
````

`{{xxx}}`：xxx是js表达式

* 且可以直接读取到data中的所有区域

【==注意==】

* 若遇到多处使用Vue语法的地方可以设置为多个层级

  【示例】

  ````html
  <div id="root">
      <h3>你好，{{name}}</h3>
       <a v-bind:href="auther.url.toUpperCase()">点我去{{auther.name}}学习</a>
  </div>
  <script type="text/javascript">
          Vue.config.productionTip=false;
          new Vue({
              el:'#root',
              data:{
                  name:'Vue初学者',
                  //设置为多个层级
                  auther:{
                      name:"lao-jiawei的博客",
                      url:'https://www.cnblogs.com/lao-jiaweijarvee/'
                  }
              }
          })
  </script>
  ````



### 指令语法

【功能】

* 用于解析标签（包括：标签属性、标签体内容、绑定事件…）

【格式示例】**用Vue的指令语法，来修改`a`标签的`href`值**

````html
<a v-bind:href="xxx"></a>
<!--"v-bind:" 可简写为-->
<a :href="xxx">
````

`xxx`：同样要写js表达式

* 且可以直接读取到data中的所有属性

【==注意==】

* Vue中有很多的指令，且形式都是`v-???`，此处我们只是拿`v-bind`举个例子
* 不是所有指令都可以简写为`:`



## 数据绑定

### 单项绑定（`v-bind`）

* 数据只能从data流向页面（*如图橙色线*）

  ![1653879844195](D:\Data\9_Typora图片缓存\1653879844195.png)



### 双向绑定（`v-model`）

* 数据不仅能从data流向页面（*如图红色线*），还可以从页面流向data（*如图粉色线*）

  ![1653879908241](D:\Data\9_Typora图片缓存\1653879908241.png)

  【解释】橙色线

  * 由与单向数据表单值绑定的值也是data中的name值，所以`v-model`改变了data中的name，name值改变了单向表单值也改变了。

* 一般都应用在表单类元素上（如：`<input>`、`<select>`、`<textarea>`等）



【格式示例】**`v-model`双向绑定表单数据**

````html 
双向数据绑定：<input type="text" v-model:value="name">
<!--"v-model:value"可简写为"v-model"，因为"v-model"默认收集的就是value值-->
双向数据绑定：<input type="text" v-model="name">
````



## el与data的两种写法

### el的两种写法

> 写法一：创建Vue实例对象的时候配置el属性

【示例】

````html
<div id="root">
    <h1>Hello,{{name}}!</h1>
</div>
<script>
    Vue.config.productionTip = false;
    new Vue({
        el:'#root',
        data:{
            name:'Vue初学者'
        }
    })
</script>
````



>写法二：先创建Vue实例，随后再通过`vm.$mount('#root')`指定el的值

* 更灵活

【示例】

````html
<div id="root">
    <h1>Hello,{{name}}!</h1>
</div>
<script>
    Vue.config.productionTip = false;
    const vm=new Vue({
        data:{
            name:'Vue初学者'
        }
    })
    vm.$mount('#root');
</script>
````



### data的两种写法

>写法一：对象式

【示例】

````javascript
new Vue({
    el：'#root',
    data:{
    	name:'Vue初学者'
	}
})
````



>写法二：函数式

* 使用组件时，data必须使用函数式，否则会报错

【示例】

````javascript
new Vue({
    el:'#root',
    data:function(){
    	return{
            name:'Vue初学者'
        }
	}
	//可简写成
	data(){
        return{
            name:'Vue初学者'
        }
    }
})
````

【==注意==】

* 由Vue管理的函数，一定不能写成箭头函数，否则this就不再是Vue实例了

  【data使用普通函数】此处的this是Vue实例对象

  ![1653887707369](D:\Data\9_Typora图片缓存\1653887707369.png)

  【data使用箭头函数】this指向全局的`window`

  ![1653887773288](D:\Data\9_Typora图片缓存\1653887773288.png)

  * 【解释】this没有自己的函数，就往外找，往外找就找到全局的`window`



## MVVM模型

![](https://resource.shangmayuan.com/droxy-blog/2019/12/10/1c22a3cbd2214c378917c9cb971c5b2f-1.jpg)

【MVVM模型与代码的关系对应图】

![1653888921757](D:\Data\9_Typora图片缓存\1653888921757.png)

M：模型（Model），data中的数据

V：视图（View），模板代码

VM：视图模型（ViewModel），Vue实例

* 在文档中经常会使用 `vm` (ViewModel 的缩写) 这个变量名表示 Vue 实例。

  ````javascript
  //所以以后接收Vue实例用vm接收
  const vm = new Vue({
      
  })
  ````

* data中所有的属性，最后都出现在了vm身上

  【示例】

  ````javascript
  const vm=new Vue({
      el:'#root',
      data:{
          name:'Vue初学者',
          address:'Shenzhen',
          a:'1'    
      }
  })
  ````

  ![1653889827717](D:\Data\9_Typora图片缓存\1653889827717.png)

* vm身上所有的属性 及 Vue原型身上所有的属性，在Vue模板中都可以直接使用



## 数据代理

### 回顾Object.defineProperty方法

【格式】

````javascript
Object.defineProperty(obj,prop,{
    //descriptor
})
````

`obj`：要定义属性的**对象**

`prop`：要定义或修改的**属性的名称**或 `Symbol` 

`descriptor`：要定义或修改的属性**描述符**。

* 描述符

  * `value`：设置属性值

  * `enumberable`：控制属性是否可以枚举

    * false：默认值，不可枚举
    * true：可以被枚举。

  * `writable`：控制属性是否可以被修改

    * false：默认值，不可被修改
    * true：可以被修改。

  * `configurable`：控制属性是否可以被删除

    * false：默认值，不可被删除
    * true：可以被删除。

  * `get()`：当有人**读取**`obj`对象的`prop`属性时，get函数（getter）就会被调用，且返回值就是`prop`的值*（现用现取）*

    * 【示例格式】

      ````html
      <script type="text/javascript">
      	let number = 18;
          let person = {
              name:'lao',
              sex:'男',
          }
          Object.defineProperty(person,'age',{
              get(){
                  console.log('有人读取age属性了')
                  return number;
              }
          })
      </script>
      ````

  * `set()`：当有人**修改**`obj`对象的`prop`属性时，et函数（setter）就会被调用，且会收到具体值

    * 【示例格式】以上述例子追加

      ````javascript
      set(value){
          console.log('有人修该了age属性，且值是',value)
          number=value
      }
      ````

**返回值：**被传递给函数的对象



#### 使用Object.defineProperty方法添加属性和属性值 与 直接在对象体内添加的区别

|                    | 使用Object.defineProperty方法 | 直接在对象体内添加 |
| :----------------: | :---------------------------: | :----------------: |
| **枚举性（遍历）** |         默认不可枚举          |       可枚举       |
|     **修改性**     |         默认不可修改          |       可修改       |
|     **删除性**     |        默认不可被删除         |     可以被删除     |

 

### 什么是数据代理？

* 通过 一个对象代理对另一个对象中的属性的操作（读/写）

  ![1653898390626](D:\Data\9_Typora图片缓存\1653898390626.png)

  【示例】以上图为例

  ````javascript
  let obj={x:100}
  let obj2={y:200}
  
  Object.defineProperty(obj2,'x',{
      get(){
          return obj.x;
      },
      set(value){
          obj.x=value
      }
  })
  ````

  ![1653898956201](D:\Data\9_Typora图片缓存\1653898956201.png)



### Vue中的数据代理

![](https://img-blog.csdnimg.cn/img_convert/1fbebd52e39fa5a97210ee65d0a58069.png)

* Vue中的数据代理通过vm对象来代理data对象中属性的操作（读/写）

  ![1653905272376](D:\Data\9_Typora图片缓存\1653905272376.png)

  **【验证一】红线：vm的`name`到底读的是不是`data.name`**

  * 修改data中的`name`属性值

    ![1653905727006](D:\Data\9_Typora图片缓存\1653905727006.png)

  * `vm,name`也随之改变

    ![1653905819646](D:\Data\9_Typora图片缓存\1653905819646.png)

  **【验证二】蓝线：如何实现修改`name`通过setter修改到`data.name`**

  * 直接在控制台修改`vm.name`

    ![1653906171101](D:\Data\9_Typora图片缓存\1653906171101.png)

  * 浏览器显示也随之修改

    ![1653906326656](D:\Data\9_Typora图片缓存\1653906326656.png)

    * 【说明】`vm.name`===`_data.name` == = `data.name`

      ![1653906444294](D:\Data\9_Typora图片缓存\1653906444294.png)

【好处】更加方便的操作`data`中的数据



#### 基本原理：

* 通过`object.defineProperty()`把`data`对象中所有属性添加到`vm`上。
* 为每一个添加到`vm`上的属性，都指定一个`getter/setter`。
* 在`getter/setter`内部去操作（读/写）`data`中对应的属性。



## 事件处理

### 事件的基本使用

* 使用`v-on:xxx`或`@xxx`绑定事件，其中`xxx`是事件名

  【示例】*使用`v-on:click`或`@click`绑定点击事件*

  ````html
  <div id="root">
      <h2>hello,{{name}}</h2>
      <button v-on:click="showInfo1">点我提示信息1</button>
      <!--或简写为-->
      <button @click="showInfo2">点我提示信息2</button>
  </div>
  ````

* 事件的回调需要配置在methods对象中，最终会在`vm`上

  【示例】

  ````javascript
  const vm = new Vue({
      el:'#root', 
      data:{
          name:'Vue初学者'
      },
      methods:{
          showInfo1(event){
              alert("同学你好!");
          },
          showInfo2(evnet){
              alert("同学你好!!");
          }
      }
  })
  console.log(vm)
  ````

  【留意下图最后两行】*说明事件的回调，最终会在`vm`上*

  ![1653957209037](D:\Data\9_Typora图片缓存\1653957209037.png)

* methods中配置的函数，**不要用箭头函数！**否则this就不是vm了

  【使用常用函数】this是`vm`

  ````javascript
  methods:{
      showInfo1(event){
          console.log(this === vm)
      }
  }
  ````

  ![1653958752067](D:\Data\9_Typora图片缓存\1653958752067.png)

  【使用箭头函数】this是`window`

  ````javascript
  methods:{
      showInfo1:(event)=>{
          console.log(this)
      }
  }
  ````

  ![1653958934950](D:\Data\9_Typora图片缓存\1653958934950.png)

* methods中配置的函数，都是被Vue所管理的函数，this的指向是`vm`或组件实例对象

* `@click="demo`和`@click="demo($event)"`效果一致，但后者可以传参

  【示例】

  ````html
  <div id="root">
          <h2>hello,{{name}}</h2>
          <button v-on:click="showInfo1">点我提示信息(不传参)</button>
          <button @click="showInfo2(66,$event)">点我提示信息2(传参)</button>
  </div>
  <script>
      Vue.config.productionTip = false 
      const vm=new Vue({
          el:'#root', 
          data:{
              name:'Vue初学者'
          },
          methods:{
              showInfo1(event){
                  alert("同学你好！")
              },
              showInfo2(number,event){
                  console.log(number,event)
              }
          }
      })
  </script>
  ````

  【触发`showInfo2`方法得到的结果】

  ![1653959523546](D:\Data\9_Typora图片缓存\1653959523546.png)



### Vue中的事件修饰符

> prevent：阻止默认事件（常用）

【示例】*阻止`a`标签的默认跳转行为。*

````html
<div id="root">
    <h2>Hello,{{name}}!!</h2>
    <a href="https://www.cnblogs.com/lao-jiaweijarvee/" @click="showInfo">不阻止默认跳转</a>
    <br/>
    <a href="https://www.cnblogs.com/lao-jiaweijarvee/" @click.prevent="showInfo">已使用prevent阻止默认跳转</a>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            name:'Vue初学者'
        },
        methods:{
            showInfo(e){
                alert('同学你好！')
            }
        }
    })
</script>
````

![1653966946582](D:\Data\9_Typora图片缓存\1653966946582.png)

【效果】

* 点击第一个链接，跳出弹窗，点击确认后，执行默认事件，跳转至相关页面。
* 点击第二个链接，跳出弹窗，点击确认后，不执行默认事件，没有跳转至相关页面



> stop：阻止事件冒泡（常用）

【示例】

* 【==注意==】*该示例无法直接复制粘贴运行，需要读者自行调整*

````html
<!--Css样式-->
<style>
    *{
        margin-top: 20px;
    }
    .demo1{
        height: 50px;
        background-color: skyblue;
    }
</style>
<!--body内容-->
<body>
    <div id="root">
        <h2>Hello,{{name}}!!</h2>
        <div class="demo1" @click="showInfo">
             <button @click="showInfo">没添加stop效果</button>
            <button @click.stop="showInfo">已使用stop阻止事件冒泡</button>
        </div>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false
        new Vue({
            el:'#root',
            data:{
                name:'Vue初学者'
            },
            methods:{
                showInfo(e){
                    alert('同学你好！')
                }
            }
        })
</script>
</body>
````

![1653966744899](D:\Data\9_Typora图片缓存\1653966744899.png)

【效果】

* 单击盒子，弹出一次弹窗
  * 【原因】在`div`上，绑定了点击事件
* 单击第一个按键，弹出两次弹窗
  * 【原因】点击的是按钮，但是最后冒泡冒到`div`上，又触发了事件。
* 单击第二个按键，弹出一次弹出
  * 【原因】在第二个按钮`@click`后加了`stop`，阻止了事件冒泡到`div`上



【拓展】 修饰符可以连续写

* 【示例】

  ````html
  <a @click.prevent.stop="showInfo">已使用stop阻止事件冒泡</a>
  ````



> once：事件只触发一次（常用）

【示例】

````html
<div id="root">
    <h2>Hello,{{name}}!!</h2>
    <button @click="showInfo">无添加任何效果</button>
    <button @click.once="showInfo">使用once事件只触发一次</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            name:'Vue初学者'
        },
        methods:{
            showInfo(e){
                alert('同学你好！')
            }
        }
    })
</script>
````

![1653966711387](D:\Data\9_Typora图片缓存\1653966711387.png)

【效果】

* 点击第一个按钮，弹窗弹出，关闭弹窗再次点击，弹窗又会再次弹出。
* 点击第二个按钮，弹窗只弹出一次，关闭弹窗再次点击，弹窗不再弹出。



> capture：使用事件的捕获模式

【示例】

````html
<!--Css样式-->
<style>
    *{
        margin-top: 20px;
    }
    .box1{
        padding: 5px;
        background-color: skyblue;
    }
    .box2{
        padding: 5px;
        background-color: orange;
    }
</style>
<!--body内容-->
<body>
    <div id="root">
        <h2>Hello,{{name}}!!</h2>
        <h3>未使用</h3>
        <div class="box1" @click="showMsg(1)">
            div1
            <div class="box2" @click="showMsg(2)">
                div2
            </div>
        </div>
        <br/>
        <h3>已使用capture事件捕获模式</h3>
        <div class="box1" @click.capture="showMsg(1)">
            div1
            <div class="box2" @click="showMsg(2)">
                div2
            </div>
        </div>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false
        new Vue({
            el:'#root',
            data:{
                name:'Vue初学者'
            },
            methods:{
                showMsg(msg){
					console.log(msg)
				}
            }
        })
    </script>
</body>
````

![1653967726595](D:\Data\9_Typora图片缓存\1653967726595.png)

【效果】

* 未使用效果

  * 点击`div1`:

    ![1653967840636](D:\Data\9_Typora图片缓存\1653967840636.png)

  * 点击`div2`:

    ![1653967859358](D:\Data\9_Typora图片缓存\1653967859358.png)

    【原因】先捕获*（蓝线）*再冒泡*（红线）*，**默认情况下，冒泡阶段后再处理事件**

    ![1653968379295](D:\Data\9_Typora图片缓存\1653968379295.png)

* 使用效果

  * 点击`div1`:

    ![1653967891407](D:\Data\9_Typora图片缓存\1653967891407.png)

  * 点击`div2`:

    ![1653967914769](D:\Data\9_Typora图片缓存\1653967914769.png)

    【原因】先捕获再冒泡，`div1`中添加了`capture`所以**在捕获阶段就开始处理事件，再冒泡**



> self：只有`event.target`是当前操作的元素时才触发事件

````html
<!--Css内容-->
<style>
    *{
        margin-top: 20px;
    }
    .demo1{
        height: 50px;
        background-color: skyblue;
    }
</style>
<!--body内容-->
<body>
    <div id="root">
        <h2>Hello,{{name}}!!</h2>
        <h3>未使用</h3>
        <div class="demo1" @click="showInfo">
            <button @click="showInfo">点我提示信息</button>
        </div>
        <h3>使用self</h3>
        <div class="demo1" @click.self="showInfo">
            <button @click="showInfo">点我提示信息</button>
        </div>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false
        new Vue({
            el:'#root',
            data:{
                name:'Vue初学者'
            },
            methods:{
                showInfo(e){
					// alert('同学你好！')
                    console.log(e.target);
				}
            }
        })
    </script>
</body>
````

![1653976046923](D:\Data\9_Typora图片缓存\1653976046923.png)

【效果】

* 使用self的效果

  【说明】无论冒泡到哪去，`event.target`始终是`button`，不可能冒泡到`div`中

  ![1653976111022](D:\Data\9_Typora图片缓存\1653976111022.png)

* 对`div`使用self使用的效果

  【说明】因为`event.target`不是`div`是`button`，所以没有触发事件。

  ![1653976134682](D:\Data\9_Typora图片缓存\1653976134682.png)



> passive：事件的默认行为立即执行，无需等待事件回调执行完毕



### 键盘事件

【使用示例】

````html
<body>
    <div id="root">
        <h2>Hello,{{name}}</h2>
        <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo">
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            name:'Vue初学者'
        },
        methods: {
            showInfo(e){
                console.log(e.target.value)
            }
        },
    })
</script>
````

|    keydown     |     keyup      |
| :------------: | :------------: |
| 按键按下就触发 | 按键抬起才触发 |

| Vue中常用的按键别名 |                 描述                  |
| :-----------------: | :-----------------------------------: |
|        enter        |                 回车                  |
|       delete        |      删除(捕获“删除”和“退格”键)       |
|         esc         |                 退出                  |
|        space        |                 空格                  |
|         tab         | 换行(特殊，**必须配合keydown**去使用) |
|         up          |                  上                   |
|        down         |                  下                   |
|        left         |                  左                   |
|        right        |                  右                   |

**系统修饰键（用法特殊）：ctrl、alt、shift、meta(win键)**

- 配合`keyup`使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发

  【拓展】系统修饰键指定唯一键，才触发效果

  * 【示例】*只识别`ctrl`+`y`时，才能触发`showInfo`事件*

    ````html
    <input type="text" placeholder="按下回车提示输入" @keydown.ctrl.y="showInfo">
    ````

- 配合`keydown`使用：正常触发事件

* 对于Vue未提供别名的按键。可以使用原始的key值去绑定。

* 别名由多个单词组成的，如`CapsLock`切换大小写，则写成`caps-lock`（短横线命名）
* **并不是**所以按键都可以绑定事件

* 可以使用`keyCode`去指定具体的按键，比如：@keydown.13="showInfo"，**（不推荐）**
* Vue.config.keyCodes.自定义键名 = 键码，可以自定义按键别名**（不推荐）**



## 计算属性与监视（侦听）

### 计算属性-computed

#### 什么是计算属性？

用已有写完的属性去加工去计算，生成一个全新的属性，这就是计算属性。

【定义】要用的属性不存在，需要通过**已有属性**计算得来。

* 【==注意==】是已有属性，不是已有随便的变量，如果完全脱离vue管理，无法监测变量的改变。

【原理】底层借助了`Objcet.defineproperty()`方法提供的`getter`和`setter`。



#### 如何配置计算属性？

【示例】

````javascript
const vm=new Vue({
    el:'#root', 
    data:{ 
        firstName:'张',
        lastName:'三'
    },
    computed:{
        //fullName是由firstName和lastName通过计算得出的一个新的计算属性
        fullName:{
            //get有什么作用？
            //当有人读取fullName时，get就会被调用，且返回值作为fullName的值
            get(){
                //get此时的this指向的是vm
                return this.firstName + '-' + this.lastName
            },
            set(value){
                const arr = value.split('-')
                this.firstName = arr[0]
                this.lastName = arr[1]
            }
        }
    }
})
````

【优势】与`methods`实现相比，内部有缓存机制（复用），效率更高，调试方便

- **什么是缓存？**
  - 计算属性第一次被调用计算出的值，被缓存。后续再调用直接从缓存取出。



> 关于`get()`

* **get函数什么时候执行？**
  * **初次**读取时会执行一次
  * 当依赖的**数据发生改变**时会被再次调用

【==注意==】**`vm._data`中只有data中的属性，没有计算属性**

![1654084963198](D:\Data\9_Typora图片缓存\1654084963198.png)

* 【解释】因为计算属性是属于以后计算出来的东西

  * 计算属性最终会出现在vm上，直接读取使用即可（==不要出现`{{fullName.get()}}`==）

    【原理】

    ![1654085773001](D:\Data\9_Typora图片缓存\1654085773001.png)

    * 计算属性往`vm`上放时
      * `vm`自动找到`get()`（自动调用`get()`），获取其返回值
      * 拿到`get()`的返回值再放到`vm`，放上去的名字叫`fullName`



> 关于`set()`

* `set()`不是必须写的

  * 可以使用计算属性的简写形式

    * 【前提】很确定该计算属性，只用作读取，不做修改

    【示例】*上述示例中的`fullName`计算属性可简写为*

    ````javascript
    computed:{
        fullName(){
            return this.firstName + '-' + this.lastName
        }
    }
    ````

* **`set()`什么时候调用？**

  * 当计算属性被修改时

* 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

【==注意==】

* `get()`和`set()`都不能写成箭头函数，因为`this`会指向`window`，而不是`vm`



### 监视（侦听）属性-watch

#### 如何添加监视（侦听）属性？

【格式】

````javascript
new Vue({
    el:'selecter', 
    data:{},
    computed:{},
    methods:{},
    //监视属性
    watch:{
        //配置对象
        监视属性名:{
            //配置对象，具体怎么监视
            }
        }
    }
})
````

* 当被监视（侦听）的属性变化时，回调函数自动调用，进行相关操作

  * 【回调函数】*handler*

    * **handler什么时候调用？**

      * 当监控属性发生改变时

    * **handler有什么用？**

      * 监控属性发生的改变

      * 可以得到修改前的值，也可以得到修改后的值

        【示例】

        ````javascript
        handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
        }
        ````

  * 【更多配置对象】*immediate*

    * 布尔值：`false`（默认值）
    * 初始化时，让handler调用一下

* 监视（侦听）的属性必须存在，才能进行监视

  * 不仅可以监视（侦听）data中的属性，也可以监视（侦听）计算属性。
  * 若监视（侦听）的属性不存在，也不报错。

#### 监视（侦听）写法    

* **如何选择用哪个写法？**
  * 创建实例时已经想明白监视（侦听）谁（用写法一）
  * 创建实例时不知道监视（侦听）谁，后续用户的一些行为才意识到要监视（侦听）谁（用写法二）

> 写法一：创建Vue时传入watch配置

【示例】

````javascript
new Vue({
    el:'selecter', 
    data:{...},
    computed:{...},
    methods:{...},
    watch:{
        isHot:{
            immediate:true, //初始化时让handler调用一下
                //handler什么时候调用？当isHot发生改变时
                handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue)
            }
        }
    }
})
````



【简写示例】*创建Vue时传入watch配置的**正常写法**与**简写***

* 【==前提==】监视属性除了handler没有**其他配置项**（如`immediate`、`deep`等），可以进行简写。

````javascript
new Vue({
    el:'selecter', 
    data:{...},
    computed:{...},
    methods:{...},
        watch:{
            //正常写法
            isHot:{
				handler(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue)
				}
			}, 
            //简写
            isHot(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue,this)
			}
        }
})
````



> 写法二：通过`vm.$watch`监视

【示例】

````javascript
vm.$watch('isHot',{
	immediate:true,
	handler(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue)
	}
})
````



【简写示例】*通过`vm.$watch`监视（侦听）的**正常写法**与**简写***

* 【==前提==】监视（侦听）属性除了handler**没有其他配置项**（如`immediate`、`deep`等），可以进行简写。

````javascript
//正常写法
vm.$watch('isHot',{
    handler(newValue,oldValue){
        console.log('isHot被修改了',newValue,oldValue)
    }
})
//简写
vm.$watch('isHot',function(newValue,oldValue){
    console.log('isHot被修改了',newValue,oldValue,this)
})
````



#### 深度监视（侦听）

* Vue中的watch默认不监测对象内部值的改变（一层）

* 在watch中配置deep:true可以监测（侦听）对象内部值的改变（多层）

  【示例】*如何监视（侦听）多级结构中的**所有属性**，和如何监视（侦听）多级结构中的**某一属性***

  ````html
  <body>
      <div id="root">
          <h3>a的值是:{{numbers.a}}</h3>
  		<button @click="numbers.a++">点我让a+1</button>
          </div>
      <script>
          Vue.config.productionTip = false 
          new Vue({
              el:'#root', 
              data:{ 
                  isHot:true,
                  numbers:{
                      a:1,
                      b:1,
                  }
              },
              watch:{
                  //监视多级结构中所有属性的变化
                  numbers:{
                      deep:true,
                      handler(){
                          console.log('numbers改变了')
                      }
                  }
                  //监视多级结构中某个属性的变化
                  'numbers.a':{
  					handler(){
  						console.log('a被改变了')
  					}
  				} 
              }
          })
      </script>
  </body>
  ````

【==注意==】

* Vue自身可以监测对象内部值的改变，==但Vue提供的watch默认不可以==

  【说明】*Vue自身可以监测对象内部值的改变*

  ![1654184323450](D:\Data\9_Typora图片缓存\1654184323450.png)

  ![1654184354277](D:\Data\9_Typora图片缓存\1654184354277.png)

* 使用watch时根据监视数据的具体结构，决定是否采用深度监视



### 计算属性`computed`与监视属性`watch`的对比

**computed和watch之间的区别：**

* computed能完成的功能，watch都可以完成

  【示例】姓名案例用`watch`实现

  ````javascript
  new Vue({
      el:'#root', 
      data:{ 
          firstName:'张',
          lastName:'三',
          fullName:'张-三'
      },
      watch:{
          firstName(val){
              this.fullName = val + '-' + this.lastName
          },
          lastName(val){
              this.fullName = this.firstName + '-' + val
          }
      }
  })
  ````

  【对比示例】姓名案例用`computed`实现

  ````javascript
  new Vue({
      el:'#root', 
      data:{ 
          firstName:'张',
          lastName:'三'
      },
      computed:{
          fullName(){
              return this.firstName + '-' + this.lastName
          }
      }
  })
  ````

* watch能完成的功能，computed不一定能完成，例如：**watch可以进行异步操作**

  【示例】*姓名案例用`watch`**实现**在页面修改姓名后一秒后更新`fullName`计算属性*

  ````javascript
  new Vue({
      el:'#root', 
      data:{ 
          firstName:'张',
          lastName:'三',
          fullName:'张-三'
      },
      watch:{
          firstName(val){
              setTimeout(()=>{
                  this.fullName = val + '-' + this.lastName
              },1000);
          },
          lastName(val){
              this.fullName = this.firstName + '-' + val
          }
      }
  })
  ````

  * 【实现原因】`watch`不是靠返回值实现数据维护的。

    ![1654224157838](D:\Data\9_Typora图片缓存\1654224157838.png)

    * 【解释】定时器用箭头函数时的`this`是`vm`
      1. 也是由`JS`引擎帮你调用的定时器，此时定时器内没有`this`，就向外（`firstName`的`this`）找
      2. 而`firstName`是一个普通函数，由vue管理的函数。所以`firstName`里的`this`指的就是`vm`

  

  * 【==注意==】定时器`setTimeout()`所指定的数据回调不受vue控制。是浏览器定时模块控制的。

    * 【示例】*若定时器用普通函数*

    ![1654223727912](D:\Data\9_Typora图片缓存\1654223727912.png)

    * 【上图的this】指向的是`window`

      ![1654223748252](D:\Data\9_Typora图片缓存\1654223748252.png)

      【解释】定时器所指定的回调是由JS引擎帮你调用的，帮你调用的时候this已经给定义好就是`window`

  

  【错误示例】*姓名案例用`computed`**无法实现**在页面修改姓名后一秒后更新`fullName`计算属性*

  ````javascript
  new Vue({
      el:'#root', 
      data:{ 
          firstName:'张',
          lastName:'三'
      },
      computed:{
          fullName(){
              setTimeout(()=>{
              	return this.firstName + '-' + this.lastName
              },1000);
          }
      }
  })
  ````

  * 【原因】计算属性里是无法开启异步任务去维护数据的，主要是靠返回值`return `



【==注意==】**两个重要的小原则**

* 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
* 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。



## class与style绑定

【==注意==】下列所有示例的`style`样式可以前往[【参考笔记】](https://blog.csdn.net/qq_55593227/article/details/119717498)中对比的原码。这里为了节省篇幅就不把源码复制过来了。



### 绑定class样式写法

* 正常的样式正常写`class`，动态的样式写`:class`（加入了`:`）

  【实现】红的和绿的叠加成一个class属性。

  ![1654226214432](D:\Data\9_Typora图片缓存\1654226214432.png)

  【区别】**加了`:`和不加的区别**

  * 加了`:`后面跟的是一个表达式，vue介入解析这个加了`:`的表达式
  * 不加就是正常指定一个属性



> **字符串**写法
>
> 适用于：样式的**类名不确定**，需要**动态指定**
>
> * 【解释】**啥是类名不确定？**
>   * 正如下示例中的mood，并不是style中已有的类名，而是创建的一个属性。更具后续确定类名后，再修改data中的mood属性值。

【示例】

````html
<div id="root">
	<div class="basic" :class="mood" @click="changeMood">{{name}}</div>
</div>
````

* 【解释】**啥是字符串写法？**

  ![1654226562390](D:\Data\9_Typora图片缓存\1654226562390.png)
  
  * `:class`动态指向class，读取mood，mood的值是**字符串**，以后就算再变，也是变红框里的**字符串**。



>**数组**写法
>
>适用于：要绑定的样式个数不确定、名字也不确定
>
>* 【优势】随时可以通过`Vue开发者工具`或`控制台`给DOM添加或删除样式

【示例】*可在Vue开发者工具中自由添加删除已有样式*

````html
<div id="root">
    <h2>可在Vue开发者工具中自由添加删除已有样式</h2>
    <div class="basic" :class="classArr">{{name}}</div> <br/><br/>
</div>
<script type="text/javascript">
        Vue.config.productionTip = false
            
        const vm = new Vue({
            el:'#root',
            data:{
                name:'Vue初学者',
                mood:'normal',
                //用数组来保存样式，可以在Vue开发者工具中自由添加删除已有样式
                classArr:['style1','style2','style3']
            }
        })
</script>
````

![1654243577132](D:\Data\9_Typora图片缓存\1654243577132.png)



【示例】*点击div时，随机切换样式*

````html
<div id="root">
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'Vue初学者',
            mood:'normal'
        },
        methods: {
            changeMood(){
                //用数组来存储需要随机改变的样式可能
                const arr = ['happy','sad','normal']
                const index = Math.floor(Math.random()*3)
                this.mood = arr[index]
            }
        },
    })
</script>
````

![1654243736907](D:\Data\9_Typora图片缓存\1654243736907.png)

* `mood`属性值会随着点击事件而随机改变。



> **对象**写法
>
> 适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用

【示例】*可以通过Vue开发工具来勾选是否采用设定样式*

````html
<div id="root">
    <h2>可以通过Vue开发工具来勾选是否采用设定样式</h2>
    <div class="basic" :class="classObj">{{name}}</div>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'Vue初学者',
            classObj:{
                style1:false,
                style2:false
            }
        }
    })
</script>
````

![1654244184413](D:\Data\9_Typora图片缓存\1654244184413.png)



### 绑定style样式写法

【==注意==】

* 绑定style样式后，在vue中管理的style属性采用**小驼峰命名法**（如原来的`font-size`就要写成`fontSize`）

> **对象**写法

【示例】*可以在Vue开发者工具中，对样式进行修改*

````html
<div id="root">
    <h2>可以在Vue开发者工具中，对样式进行修改</h2>
    <div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'Vue初学者',
            styleObj:{
                fontSize: '40px',
                color:'red',
            }
        }
    })
</script>
````

![1654244843556](D:\Data\9_Typora图片缓存\1654244843556.png)



> **数组**写法

【示例】*绑定style，数组写法的两种不同用法。*【==注意==】**观察两个写法的不同之处**

````html
<div id="root">
    <!-- 绑定style样式--数组写法 -->
    <h2>数组写法用法一</h2>
    <div class="basic" :style="styleArr">{{name}}</div>
    <h2>数组写法用法二</h2>
    <div class="basic" :style="[styleObj,styleObj2]">{{name}}</div>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false

    const vm = new Vue({
        el:'#root',
        data:{
            name:'Vue初学者',
            //用法二中数组中两个style对象的写法
            styleObj:{
                fontSize: '40px',
                color:'red',
            },
            styleObj2:{
                backgroundColor:'orange'
            },
            //用法一的styleArr数组属性的写法
            styleArr:[
                {
                    fontSize: '40px',
                    color:'blue',
                },
                {
                    backgroundColor:'gray'
                }
            ]
        }
    })
</script>
````

![1654245400866](D:\Data\9_Typora图片缓存\1654245400866.png)



## 条件渲染

### v-if

> 写法

````html
<标签 v-if="表达式"></标签>
<标签 v-else-if="表达式"></标签>
<标签 v-else></标签>
````

* `表达式`：能够转成一个布尔值的表达式
  * `true`：所绑定的标签显示

  * `false`：所绑定的标签隐藏

    * 【解释】*`v-if`如何实现隐藏?*

      * 【示例】*通过`v-if`实现条件渲染，可在Vue开发者工具中改变a来控制h2内容的显示*

        ````html
        <div id="root">
            <h2 v-if="a">Hello,{{name}}!</h2>
        </div>
        <script type="text/javascript">
            Vue.config.productionTip = false
        
            const vm = new Vue({
                el:'#root',
                data:{
                    name:'Vue初学者',
                    a:false
                }
            })
        </script>
        ````
        【说明】**`v-if`的底层实现是通过移除DOM元素**

        ![1654248640675](D:\Data\9_Typora图片缓存\1654248640675.png)

        > 特点：不展示的DOM元素直接被移除

* `v-if`可以和`v-else-if`、`v-else`一起使用，但要求结构不能被打断

  * 【==注意==】

    1. **`v-if`和`v-else-if`、`v-else`一起使用时，和其他语言的if语句一样，其中之一满足了，后面的就不再执行了。**

       【示例】

       ````html
       <div id="root">
           <h2 v-if="a">Hello,{{name}}!</h2>
           <h2>当前的n值是:{{n}}</h2>
           <button @click="n++">点我n+1</button>
           <div v-if="n === 1">Angular</div>
           <div v-else-if="n === 1">React</div>
           <div v-else>Vue</div>
       </div>
       <script type="text/javascript">
           Vue.config.productionTip = false
       
           const vm = new Vue({
               el:'#root',
               data:{
                   name:'Vue初学者',
                   a:false,
                   n:0
               }
           })
       </script>
       ````

       【观察】此时第6行代码表达式也成立，但是并没有显示内容。

       ![1654306666125](D:\Data\9_Typora图片缓存\1654306666125.png)

    2. **结构不能被打断**

       【示例】

       ````html
       <div id="root">
           <h2 v-if="a">Hello,{{name}}!</h2>
           <h2>当前的n值是:{{n}}</h2>
           <button @click="n++">点我n+1</button>
           <div v-if="n === 1">Angular</div>
           <div v-else-if="n === 2">React</div>
           <div>@</div>
           <div v-else>Vue</div>
       </div>
       <script type="text/javascript">
           Vue.config.productionTip = false
       
           const vm = new Vue({
               el:'#root',
               data:{
                   name:'Vue初学者',
                   a:false,
                   n:0
               }
           })
       </script>
       ````

       【观察】被第7行代码打断处前半部分依然可以使用，但是后半部就无效且报错

       ![1654307242342](D:\Data\9_Typora图片缓存\1654307242342.png)



> 适用于

- **切换频率较低**的场景
  - 【解释】`v-if`不断删除节点恢复节点，存在一定效率上的问题。



【拓展】`template`配合`v-if`使用

* **啥是`template`?**

  * 模板，不影响结构，当渲染的时候`template`标签消失，标签内容结构不影响。

    【示例DOM】示例代码如下代码

    ![1654307952537](D:\Data\9_Typora图片缓存\1654307952537.png)

* 【示例】

  ````html
  <div id="root">
      <h2>当前的n值是:{{n}}</h2>
      <button @click="n++">点我n+1</button>
      <template v-if ="n===1">
          <h2 v-if="a">Hello,{{name}}!</h2>
          <h2>Shenzhen</h2>
      </template>
  </div>
  <script type="text/javascript">
      Vue.config.productionTip = false
  
      const vm = new Vue({
          el:'#root',
          data:{
              name:'Vue初学者',
              a:true,
              n:0
          }
      })
  </script>
  ````

  ![1654307759241](D:\Data\9_Typora图片缓存\1654307759241.png)

* 【==注意==】`template`只能配合`v-if`使用，不能配合`v-show`使用



### v-show

> 写法

````html
<标签 v-show="表达式"></标签>
````

`表达式`：能够转成一个布尔值的表达式

* `true`：所绑定的标签显示

* `false`：所绑定的标签隐藏

  * 【解释】*`v-show`如何实现隐藏?*

    * 【示例】*通过`v-show`实现条件渲染，可在Vue开发者工具中改变a来控制h2内容的显示*

      ````html
      <div id="root">
          <h2 v-show="a">Hello,{{name}}!</h2>
      </div>
      <script type="text/javascript">
          Vue.config.productionTip = false
      
          const vm = new Vue({
              el:'#root',
              data:{
                  name:'Vue初学者',
                  a:false
              }
          })
      </script>
      ````

      【说明】**`v-show`的底层实现是改变`display:none`来实现**

      ![1654247784754](D:\Data\9_Typora图片缓存\1654247784754.png)

      > 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

【==注意==】在一组`v-show`语句中，其中一条`v-show`满足条件后，后面的语句依然判断。

* 【示例】

  ````html
  <div id="root">
      <h2 v-show="a">Hello,{{name}}!</h2>
      <h2>当前的n值是:{{n}}</h2>
      <button @click="n++">点我n+1</button>
      <div v-show="n === 1">Angular</div>
      <div v-show="n === 2">React</div>
      <div v-show="n === 1">Vue</div>
  </div>
  <script type="text/javascript">
      Vue.config.productionTip = false
  
      const vm = new Vue({
          el:'#root',
          data:{
              name:'Vue初学者',
              a:false,
              n:0
          }
      })
  </script>
  ````

  【观察】此时第7行代码表达也满足条件，所以对应的内容也显现。

  ![1654306347642](D:\Data\9_Typora图片缓存\1654306347642.png)



> 适用于

- **切换频率较高**的场景
  - 【解释】因为`v-show`节点还在，只是`display:none`隐藏了。



【==注意==】使用`v-if`的时，元素可能无法获取到，而使用`v-show`一定可以获取到

* 【解释】`v-if`为false时整个DOM节点都删掉了还怎么获取，`v-show`只是将DOM节点用`display:none`隐藏起来，节点还在，所以还能获取到。



## 列表渲染

### v-for

* 用于展示**列表**数据

#### 格式

* 想要生成多个谁就在谁身上绑定`v-for`

````html
<标签 v-for="xxx in yyy" :key=""></标签>
````

`xxx`：形参，代表数据池中的每一个数据。

* 可以在标定标签内用插值语法`{{xxx}}`使用

`yyy`：vue中data的数据（数据池）

* `yyy`中的长度是几，就能生成多少个`xxx`



#### 可遍历数据

【==注意==】遍历不同数据，参数获取值不一样。

>数组

【示例】

````html
<div id="root">
    <h2>人员列表（遍历数组）</h2>
    <ul>
        <!--p为person中每一个item，index是person中每个item的数组下标-->
        <li v-for="(p,index) in persons" :key="index">
            {{p.name}}-{{p.age}}
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            //persons数组
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20}
            ]
        }
    })
</script>
````

![1654316842992](D:\Data\9_Typora图片缓存\1654316842992.png)



>对象

【示例】

````html
<div id="root">
    <h2>汽车信息（遍历对象）</h2>
    <ul>
        <!--value为car对象中的键值，k为对象中的属性-->
        <li v-for="(value,k) in car" :key="k">
            {{k}}-{{value}}
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            //car对象
            car:{
                name:'奥迪A8',
                price:'70万',
                color:'黑色'
            }
        }
    })
</script>
````

![1654316871158](D:\Data\9_Typora图片缓存\1654316871158.png)



>字符串（用的少）

````html
<div id="root">
    <h2>遍历字符串</h2>
    <ul>
        <!--char为str字符串中单个字符，index为char所在下标-->
        <li v-for="(char,index) in str" :key="index">
            {{char}}-{{index}}
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            //str字符串
            str:'hello'
        }
    })
</script>
````

![1654316810873](D:\Data\9_Typora图片缓存\1654316810873.png)



>指定次数（用的少）

【示例】

````html
<div id="root">
    <h2>遍历指定次数</h2>
    <ul>
        <!--number是循环五次的次数，index是五次循环次数的下标-->
        <li v-for="(number,index) in 5" :key="index">
            {{index}}-{{number}}
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
        }
    })
</script>
````

![1654317053953](D:\Data\9_Typora图片缓存\1654317053953.png)



### `:key`的作用及原理

【==温馨提示==】这一块单看我的笔记可能有点绕，建议先看[尚硅谷_key的作用及原理](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=30)再来看下面的笔记



#### 虚拟DOM中key的作用：

* key是虚拟DOM中对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：



#### 对比规则

1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
   1. 若虚拟DOM中内容**没变**, 直接使用之前的真实DOM
   2. 若虚拟DOM中内容**变了**, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
2. 旧虚拟DOM中未找到与新虚拟DOM相同的key：
   1. 创建新的真实DOM，随后渲染到到页面



#### 用index作为key可能会引发的问题：

1. 若对数据进行逆序添加、逆序删除等破坏顺序操作：
   * 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
2. 如果结构中还**包含输入类的DOM**：
   * 会产生错误DOM更新 ==> 界面有问题

【示例】*对包含输入类的DOM数据进行逆序添加操作*

````html
<div id="root">
    <h2>人员列表</h2>
    <button @click.once="add">添加老刘</button>
    <ul>
        <li v-for="(p,index) in persons" :key="index">
            {{p.name}} - {{p.age}}
            <input type="text">
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20}
            ]
        },
        methods: {
            add(){
                const p = {id:'004',name:'老刘',age:40}
                this.persons.unshift(p)
            }
        },
    })
</script>
````

【效果图】*用index作为key引发的问题*

![1654326772600](D:\Data\9_Typora图片缓存\1654326772600.png)![1654326789918](D:\Data\9_Typora图片缓存\1654326789918.png)

【出错原因分解】

1. vue根据初始数据生成虚拟DOM，然后将虚拟DOM转换为真实DOM，最后由用户在文本框内输入值。

![1654327713202](D:\Data\9_Typora图片缓存\1654327713202.png)

2. 用户点击`添加老刘`按钮后，生成新数据，vue根据新数据生成虚拟DOM

   ![1654327810661](D:\Data\9_Typora图片缓存\1654327810661.png)

3. vue对两份虚拟DOM依赖`key`的值进行对比算法得出新的DOM（[虚拟DOM中key的作用](# 虚拟DOM中key的作用：)）

   ![1654328923898](D:\Data\9_Typora图片缓存\1654328923898.png)

   * 【对比流程】[对比规则](# 对比规则)
     1. 在新的虚拟DOM里面，按照顺序取出第一个，监测出`key`的标识是`0`
     2. 到初始虚拟DOM里面找到与新虚拟DOM一样`key`的节点。
     3. 对比两边虚拟DOM的内容
        1. 对比文本节点（如图两个绿色方框）
           * 发现两个节点不一样
        2. 对比`input`节点（如图两个黄色方框）
           * 发现两个标签名一样，标签结构一样，标签所有属性都一样。

4. 对比第一条虚拟DOM结束后生成新的真实DOM

   ![1654327244436](D:\Data\9_Typora图片缓存\1654327244436.png)

   * 对于无法复用的节点*（也就是左侧绿色方框的内容）*，Vue将新虚拟DOM的文本节点生成全新的真实DOM节点*（这就是为什么说效率低，因为原有的文本节点一个也没复用）*
   * 对于可以复用的节点*（也就是黄色方框的内容）*，Vue将已产生的真实DOM复用给全新的真实DOM*（正如红线所示）*

5. 以此类推

【==注意==】

- 如果在`v-for`遍历表的时候，没有写`:key`vue会默认将遍历的`index`索引值自动作为`：key`



#### 开发中如何选择key?

1. 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值

   【好处】原有的已经产生的DOM可以复用，数据也不会错乱

   ![1654330141146](D:\Data\9_Typora图片缓存\1654330141146.png)

   【==注意==】vue并不知道哪些数据是唯一标识，所以要人为将唯一标识作为`:key`

2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表，使用index作为key是没有问题的



### 列表过滤

1. 获取用户输入

   * 通过`v-model`实现

2. 在列表里过滤

   > 方法一：用watch实现

   【示例】

   ````html
   <div id="root">
       <h2>人员列表</h2>
       <input type="text" placeholder="请输入名字" v-model="keyWord">
       <ul>
           <!--注意遍历的是filPersons-->
           <li v-for="(p,index) of filPersons" :key="index">
               {{p.name}}-{{p.age}}-{{p.sex}}
           </li>
       </ul>
   </div>
   
   <script type="text/javascript">
       Vue.config.productionTip = false
   
       new Vue({
           el:'#root',
           data:{
               keyWord:'',
               persons:[
                   {id:'001',name:'马冬梅',age:19,sex:'女'},
                   {id:'002',name:'周冬雨',age:20,sex:'女'},
                   {id:'003',name:'周杰伦',age:21,sex:'男'},
                   {id:'004',name:'温兆伦',age:22,sex:'男'}
               ],
               //用来存储过滤后产生的新数组。因为如果直接用persons接收改变的数组，原数据会被覆盖
               filPersons:[]
           },
           watch:{
               keyWord:{
                   //设置immediate先以val为空字符运行一次，watch发生检测,就会实现一上来就出现列表
                   immediate:true,
                   //val为更新后的值，即接收到的关键字
                   handler(val){
                       //将过滤后的结果存入filPersons
                       //this.persons获取到数据，filter实现过滤，拿到形参p（person中的每个对象）
                       this.filPersons=this.persons.filter((p)=>{
                           //return后面是过滤条件，persons对象中name属性值包含val
                           return p.name.indexOf(val) !== -1; 
                       })
                   }
               }
           }
       })
   </script>
   ````

   【拓展】**indexOf（value）**

   * 用来检测`value`是否存在字符串或数组中

     * **存在**：返回`value`所在下标

       【==注意==】所有字符串都包含空字符串，空字符串的下标也为`0`

     * **不存在**：返回`-1`

   

   【拓展】**filter是否更改原数组？**

   * 不修改，因为`filter`会返回一个全新的数组

   

   【拓展】**如何解决在VScode注释下方写代码注释不会展开?**

   * 在原有的注释体外添加`//#regin`和`//#endregin`

     ````javascript
     //#regin
     /*
     注释
     */
     //#endregin
     ````

     

   >方法二：使用计算属性实现

   【示例】

   ````html
   <div id="root">
       <h2>人员列表</h2>
       <input type="text" placeholder="请输入名字" v-model="keyWord">
       <ul>
           <li v-for="(p,index) of filPersons" :key="index">
               {{p.name}}-{{p.age}}-{{p.sex}}
           </li>
       </ul>
   </div>
   
   <script type="text/javascript">
       Vue.config.productionTip = false
   
       new Vue({
           el:'#root',
           data:{
               keyWord:'',
               persons:[
                   {id:'001',name:'马冬梅',age:19,sex:'女'},
                   {id:'002',name:'周冬雨',age:20,sex:'女'},
                   {id:'003',name:'周杰伦',age:21,sex:'男'},
                   {id:'004',name:'温兆伦',age:22,sex:'男'}
               ]
           },
           computed:{
               filPersons(){
                   //计算属性是靠返回值决定的，下面代码得到一个新数组，新数组再返回得到计算属性的值
                   return this.persons.filter((p)=>{
                       return p.name.indexOf(this.keyWord) !== -1
                   })
               }
           }
       })
   </script>
   ````



### 列表排序

1. 知道用户选择`升序`、`降序`还是`原顺序`
   * 需要定义一个属性来收集用户的选择
2. 实现排序
   * 【==注意==】过滤和排序是不分家的（过滤和排序需要配合使用，可以再过滤功能的基础上加上排序即可）

【示例】

````html
<div id="root">
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="keyWord">
    <button @click="sortType = 2">年龄升序</button>
    <button @click="sortType = 1">年龄降序</button>
    <button @click="sortType = 0">原顺序</button>
    <ul>
        <li v-for="(p,index) of filPersons" :key="p.id">
            {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
    </ul>
</div>

<script>
    new Vue({
        el:'#root',
        data:{
            persons:[
                {id:'001',name:'马冬梅',age:30,sex:'女'},
                {id:'002',name:'周冬雨',age:45,sex:'女'},
                {id:'003',name:'周杰伦',age:21,sex:'男'},
                {id:'004',name:'温兆伦',age:22,sex:'男'}
            ],
            keyWord:'',
            //定义一个sortType属性来收集用户的选择
            sortType:0,//0代表原顺序，1代表升序，3代表降序
        },
        computed:{
            filPersons(){
                //用arr将过滤后的数组收到
                const arr = this.persons.filter((p)=>{
                    return p.name.indexOf(this.keyWord) !== -1
                })
                //判断一下是否需要排序
                //sortType是否为真，1，2布尔值都为true
                if(this.sortType){
                    arr.sort((p1, p2)=>{
                        //注意此处p1,p2为对象
                        return this.sortType ===1 ? p2.age-p1.age : p1.age-p2.age
                    })
                }
                //返回排序后的数组arr
                return arr
            }
        }
    })
</script>
````

【拓展】**Array.sort(a,b)**

* `sort()`是改变原数组的
* `sort() `方法比较两个值时，将值发送给比较函数，根据返回的（负、零、正）值对值进行排序
* 【比较流程】
  1. 调用sort(40,100)
  2. 该函数计算 40-100，并返回 -60（负值）
  3. sort 函数会将 40 排序为小于 100 的值。

* 常用排序

  * 顺序

    ````javascript
    arr.sort((a,b)=>{
        return a-b;
    })
    ````

  * 降序

    ````javascript
    arr.sort((a,b)=>{
        return b-a;
    })
    ````



## Vue监测数据的原理

1. vue会监视data中所有层次的数据

### 如何监测对象中的数据？

* **通过setter实现监视，且要在`new Vue`时就传入要监测的数据**

  【解释】**如何通过setter实现监视？**

  ---

  * 【红色这一块】数据代理

    ![1654418576768](D:\Data\9_Typora图片缓存\1654418576768.png)

    【流程图】数据代理（在执行橙色线时完成两步操作）

    ![1654418476956](D:\Data\9_Typora图片缓存\1654418476956.png)

    【**数据代理完整过程**】

    ![1654419111817](D:\Data\9_Typora图片缓存\1654419111817.png)

    【步骤】

    1. 加工`data`（就是将每一组`key:value`形成一组`getter`和`setter`写法）

       【证明】由于`data`（蓝色框中内容）与`_data`（红框中内容）不一致，说明`data`经历过加工成为`_data`

       ![1654418817293](D:\Data\9_Typora图片缓存\1654418817293.png)

       * 【疑问】**为什么要加工，加工能干嘛？**

         * 加工一下就能做***响应式***了（数据变了，页面也跟着变）

           【关注下图黄线】

           ![1654419335773](D:\Data\9_Typora图片缓存\1654419335773.png)

           * 当修改`_data`里的`name`的时候，会引起`name`所对应的`setter`的调用
           * 这个`setter`里面写了个调用，这个调用可以重新解析模板
           * 通过加工就能实现对对象里面属性的监

    2. `vm._data=data`

  ---

  

  * **对象中后追加的属性，Vue默认不做响应式处理**

    【解释】Vue默认不做响应式处理

    ---

    * 【图示】用控制台给`student`对象追加`sex`属性并赋值为`男`

      ![1654480872845](D:\Data\9_Typora图片缓存\1654480872845.png)
      
    * 由于`sex`没有匹配的`setter`和`getter`，因此不是一个响应数据，所以页面没有更新数据。
  
  ---
  
  
  
* **如需给后添加的属性做响应式，请使用如下API：**      
  
    - `Vue.set(target,propertyName/index,value)`
    - `vm.$set(target,propertyName/index,value)`

---

#### API：set()的使用

##### 啥时候用？

* 给后添加的属性做响应式时使用。

##### 怎么用？

* 格式如上

  * `target`：要往谁的身上追加属性

    【==注意==】

    * 从`vm.`开始往后找对象

    * `vm`和`vm`上的根数据（即`data`或`_data`）不能**直接**作为`target`（如下图绿色框所示）

      ![1654482591800](D:\Data\9_Typora图片缓存\1654482591800.png)

      * 要想追加响应属性，可以借助`根数据`的对象属性（如图`student`对象属性）在里面追加响应属性。

  * `propertyName`：属性名

  * `value`：属性值

##### 不是万能的，有局限性

* `vm上的根数据`(即`data`或`_data`)不能作为`target`

  【报错】不允许添加一个响应式的数据在vue的实例身上

  ![1654482103035](D:\Data\9_Typora图片缓存\1654482103035.png)

  【简而言之】**不允许**用`set()`直接在`data`中*（如图示最上方的绿色方框）*追加响应式属性，**可以**在`data里的某个对象`*（如图示最下方的绿色方框）*追加响应式属性

  ![1654482024258](D:\Data\9_Typora图片缓存\1654482024258.png)

* vm也不能作为`target`

---



### Vue里不能监测到直接通过索引值修改数据的数据

【原因】Vue里面并没有为数组自动匹配`getter`和`setter`,所以即便数组中的数据能被改变，但是Vue监测不到，也不会引起页面的更新

* 【解释】

  1. 当定义一个数组属性时

     ````javascript
     const vm=new Vue({
         el:'#root',
         data:{
             school:{
                 name:'Vue初学者',
                 address:'深圳'
             },
             student:{
                 name:'tom',
                 age:{
                     rAge:40,
                     sAge:29
                 },
                 //当hobby定义为数组时
                 hobby:['抽烟','喝酒','烫头'],
                 friend:[
                     {name:'jerry',age:35},
                     {name:'tony',age:36}
                 ]
             }
         }
     }）
     ````

     【图示】蓝色框里并没有找到为红色框里服务的`setter`和`getter`

     ![1654484753065](D:\Data\9_Typora图片缓存\1654484753065.png)

  2. 当数组属性改为对象属性时

     ````javascript
     const vm=new Vue({
         el:'#root',
         data:{
             school:{
                 name:'Vue初学者',
                 address:'深圳'
             },
             student:{
                 name:'tom',
                 age:{
                     rAge:40,
                     sAge:29
                 },
                 //当hobby定义为对象时
                 hobby:{
                     h1:'抽烟',
                     h2:'喝酒',
                     h3:'烫头'
                 },
                 friend:[
                     {name:'jerry',age:35},
                     {name:'tony',age:36}
                 ]
             }
         }
     }）
     ````

     【图示】对象属性中的属性自动匹配`getter`和`setter`

     ![1654485065495](D:\Data\9_Typora图片缓存\1654485065495.png)



### 如何监测数组中的数据？

* 通过**包裹** *（如下图红框包蓝框）*数组更新元素的方法实现

  | 可以修改数组的方法 |            对元素的操作            |
  | :----------------: | :--------------------------------: |
  |       `push`       |           往数组最后新增           |
  |       `pop`        |            删除最后一个            |
  |      `shift`       |             删除第一个             |
  |     `unshift`      |            往前面加一个            |
  |      `splice`      | 在数组指定位置（插入、删除、替换） |
  |       `sort`       |             对数组排序             |
  |     `reverse`      |              反转数组              |

  >【拓展】**splice方法**
  >
  >* 格式：splice(index，length，"content")
  >  * `index`：要操作的下标
  >  * `length`：从开始操作到结束操作的长度
  >  * `content`：要更新的内容

  【==注意==】

  * 无法修改原数组的方法（如`filter`）不能监测到

  * 所调用的方法，不是原生对应的方法

    ![1654486246713](D:\Data\9_Typora图片缓存\1654486246713.png)

  

* **本质就是做了两件事：**

  ![1654486379468](D:\Data\9_Typora图片缓存\1654486379468.png)

  1. 调用原生对应的方法对数组进行更新
  2. 重新解析模板，进而更新页面



#### 在Vue修改数组中的某个元素一定要用如下方法

1. 使用这些API：`push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`
2. `Vue.set() `或 `vm.$set()`



## 收集表单数据

* 收集表单用`v-model`双向数据绑定



### v-model收集表单数据

#### 收集`<input type="text"/>`==输入框==的值

* `v-model`收集：`value`值（**用户输入的内容**）

【示例】*收集表单中的账户和密码*

````html
<div id="root">
    <form>
        账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
        密码：<input type="password" v-model="userInfo.password"> <br/><br/>
    </form>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{
                account:'',
                password:'',				
            }
        },
    })
</script>
````



#### 收集`<input type="radio"/>`==单选框==的值

* `v-model`收集：`value`值（**要给标签配置`value`属性**）

【示例】*收集表单中的性别*

````html
<div id="root">
    <form>
        性别：
        <!--
			设置name属性：才能实现二选一
			设置value属性：才能让v-model收集到值，否则收集为null
		-->
        男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
        女<input type="radio" name="sex" v-model="userInfo.sex" value="female">
    </form>
</div>
<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
                    //设置默认值
                    sex:'female',
                    }
			},		
        })
</script>
````



#### 收集`<input type="checkbox"/>`==多选框==的值

* `v-model`收集：`value`值（**要给标签配置`value`属性**）

  * 没有配置`value`属性

    * 收集的是checked属性（勾选 or 未勾选，是布尔值）

      【出现问题】*当勾选其中一个时，其他多选框也被勾选了*

      * 【原因】三个多选框都没有配置value属性，所以绑定同一个值。

        ![1654739451557](D:\Data\9_Typora图片缓存\1654739451557.png)

  * 配置了`value`属性：

    * `v-model`的初始值是**非数组**，那么收集的就是`checked`（勾选 or 未勾选，是布尔值）
    * `v-model`的初始值是**数组**，那么收集的就是`value`组成的数组

【示例】

````html
 <div id="root">
    <form>
        爱好：
        学习<input type="checkbox" v-model="userInfo.hobby" value="study">
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
    </form>
</div>
<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
                    
                    hobby:[],
                    }
			},		
        })
</script>
````



### v-model的三个修饰符：

* `lazy`：失去焦点后再收集数据

  * 【示例】

    ````html
    <textarea v-model.lazy="userInfo.other"></textarea>
    ````

* `number`：输入字符串转为有效的数字

  * 【示例】

    ````html
    年龄：<input type="number" v-model.number="userInfo.age">
    ````

    * 【==注意==】**`type="number"`和`v-model.number` 的区别**

      * `type="number"`：确保输入的是数值，在表单中输入字母，不显示

      * `v-model.number`：将收集的数据设置为数值。

        【原因】v-model双向绑定默认用户输入是字符串，用number就改为数值。

* `trim`：输入首尾空格过滤

  * 【示例】

    ````html
    账号：<input type="text" v-model.trim="userInfo.account">
    ````

  * 【===注意==】输入文本中间的空格无法过滤



## 过滤器

### 啥是过滤器？能干嘛？

* 过滤器的本质就是函数
* 对要显示的数据进行特定格式化后再显示（适用于一些**简单逻辑**的处理）。
  * 过于复杂的逻辑处理可以用**计算属性**、`methods`等



### 怎么用？

#### 1、**注册**过滤器

> 一、注册**局部**过滤器

##### 啥是局部过滤器？

* 绿色框中的方法就是局部过滤器，只能被红色的Vue实例所使用。如果载出现一个Vue实例，将无法使用，绿色框中的过滤器。

![1654761702240](D:\Data\9_Typora图片缓存\1654761702240.png)

````javascript
new Vue({
    el:'',
    data:{},
    filters:{
        //过滤器方法
    }
})
````



> 二、注册**全局**过滤器

##### 啥是全局过滤器?

* 可以用于多个Vue实例中

* 只能一个一个定义过滤器。
* 必须在`new Vue`之前就注册好全局过滤器

````html
Vue.filter(name,callback)
````

`name`：过滤器名

`callback`：回调函数，

【==注意==】

* 配置局部的是`filters`，配置全局的是`filter`



#### 2、使用过滤器

##### 在插值语法中使用

> 过滤器实现

【示例】

````html
<div id='root'>
    <!--timeFormater是一个函数，即便不写括号，也会自动调用time作为参数-->
    <h3>转换后时间：{{time | timeFormater}}</h3>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            time:1626750147900,
        },
        filters:{
            timeFormater(value){
                return dayjs(value).format("YYYY年MM月DD日 HH:mm:ss")
            }
        }
    })
</script>
````

* 【实现过程】

  ![1654757835539](D:\Data\9_Typora图片缓存\1654757835539.png)

  1. 首先读取`time`*（绿色部分）*
  2. 将`time`作为参数传给`timeFormater`*（如图粉色线所示）*
  3. `timeFormater`*（粉色部分）*是一个函数，函数的返回值被Vue拿到，拿到后替换掉*（如黄线所示）*整个插值语法（*红色部分*）



> 过滤器实现（传参）

【示例】*过滤器可以实现时间戳的转换，并且以指定格式输出*

````html
<div id='root'>
    <!--timeFormater方法中参数用来制定想要输出的格式-->
    <h3>转换后时间：{{time | timeFormater('YYYY_MM_DD')}}</h3>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            time:1626750147900,
        },
        filters:{
            //str在参数列表中赋值，意思是可以实现传参和不传参的方法调用
            //当有参数的方法调用时，str为传入的参数。
            //当没有参数的方法调用时，str为指定值
            timeFormater(value,str="YYYY年MM月DD日 HH:mm:ss"){
                return dayjs(value).format(str)
            }
        }
    })
</script>
````

* 【解释】**为什么方法调用有一个参数，而方法体却定义两个参数？**

  * `timeFormater`方法表明看上去只传入了一个参数，实际上是两个。

    1. 过滤器第一个参数（如图绿线所示），是自动传入的。（更古不变）

       ![1654760394323](D:\Data\9_Typora图片缓存\1654760394323.png)

    2. 过滤器第二个参数，才是方法中的参数（如图绿线所示）

  ![1654760456639](D:\Data\9_Typora图片缓存\1654760456639.png)



> 多个过滤器可以串联

【示例】*过滤器可以将时间戳转换成时间，并且只留前四位*

````html
<div id='root'>
    <!--timeFormater是一个函数，即便不写括号，也会自动调用time作为参数-->
    <h3>截取年月日：{{time | timeFormater() | mySlice}}</h3>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            time:1626750147900,
        },
        filters:{
            timeFormater(value,str=""){
                return dayjs(value).format("YYYY年MM月DD日 HH:mm:ss")
            },
            mySlice(value){
                return value.slice(0,4)
            }
        }
    })
</script>
````

* 【工作流程】

  ![1654761310037](D:\Data\9_Typora图片缓存\1654761310037.png)

  1. 将`time`交给`timeFormater`*（如图绿线所示）*

  2. `timeFormater`工作后的结果继续传给`mySlice`*（如图粉线所示）*

     【==注意==】

     * `time`不会直接交给`mySlice`方法处理的，一层一层传递下去。

     * 多个过滤器串联，并没有改变原本的数据，而是产生新的对应的数据

       ![1654761598343](D:\Data\9_Typora图片缓存\1654761598343.png)



##### 在v-bind中使用（不常见）

【示例】

````html
<div id='root'>
    <!--在v-bind中使用过滤器-->
    <h3 :x="msg | mySlice">Vue初学者</h3>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            msg:'你好，Vue初学者',
        },
        filters:{
            mySlice(value){
                return value.slice(0,4)
            }
        }
    })
</script>
````

![1654762680845](D:\Data\9_Typora图片缓存\1654762680845.png)

【==注意==】并不代表过滤器配合别的也行，例如（`v-model`就**无法配合**过滤器使用）



## 内置指令

### 啥是内置指令？

* Vue作者给定义好的指令



### 之前遇到的指令

|    指令    |                  描述                  |
| :--------: | :------------------------------------: |
| `v-bind:`  |    单向绑定解析表达式，可简写为`:`     |
| `v-model:` |              双向数据绑定              |
|  `v-for:`  |        遍历数组 / 对象 / 字符串        |
|  `v-on:`   |       绑定事件监听，可简写为`@`        |
|  `v-if:`   | 条件渲染（动态控制节点是**否存存在**） |
| `v-else:`  | 条件渲染（动态控制节点是**否存存在**） |
| `v-show:`  |  条件渲染 (动态控制节点**是否展示**)   |



### `v-text`指令

#### 能干啥？

* 向其所在的节点中渲染文本内容

* 【==注意==】**`v-text`不能用来解析标签**
  * 【示例】

    ````html
    <div id="root">
    	<div v-text="str"></div>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false 
        
        new Vue({
            el:'#root',
            data:{
                str:'<h3>你好啊！</h3>'
            }
        })
    </script>
    ````

    ![1654764513054](D:\Data\9_Typora图片缓存\1654764513054.png)



#### 与插值语法的区别

* `v-text`会替换掉节点中的内容，`{{xx}}`则不会



【示例】

````html
<div id="root">
    <div>你好，{{name}}</div>
    <div v-text="name"></div>
</div>
<script>
    Vue.config.productionTip = false 
    
    new Vue({
        el:'#root',
        data:{
            name:'Vue初学者',
            str:'<h3>你好啊！</h3>'
        }
    })
</script>
````

【解释】**`v-test`运行流程**

![1654763592731](D:\Data\9_Typora图片缓存\1654763592731.png)

* `v-text`会拿到`name`的值*（如图绿色所示）*，替换掉整个结点中的内容*（如图红色所示）*



### `v-html`指令

#### 能干啥？

* 向指定节点中渲染包含html结构的内容



#### 与插值语法的区别

|                            | `v-html` | 插值语法 |
| :------------------------: | :------: | :------: |
| **替换掉节点中所有的内容** |    会    |   不会   |
|      **识别html结构**      |   可以   |  不可以  |



#### ==严重注意：v-html有安全性问题！！！==

* 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击*（冒充用户攻击）*
* 一定要在可信的内容上使用v-html，永远不要用在用户提交的内容上！！！



### 拓展：快速了解cookie工作原理

**第一次请求：**

![1654776530933](D:\Data\9_Typora图片缓存\1654776530933.png)

##### 什么是cookie?

* `cookie`的本质就是字符串*（上图中的红色实体）*
* 里面的格式类似于对象一样

【第一次请求流程】

1. 浏览器携带用户名、密码，请求登录`github`网站。
2. github服务器检查用户名、密码是否匹配，匹配结束后跳转至相应页面同时传递`cookie`给浏览器。
3. 浏览器根据不同的网站，分类管理对应的`cookie`，浏览器保存了许多网站的`cookie`



**第二次请求：**

![1654777035671](D:\Data\9_Typora图片缓存\1654777035671.png)

【第二次请求流程】

1. 当用户再次访问github服务器时，请求同时携带浏览器中已经保存的`cookie`
   * 【疑问】**为什么会携带对应网站的`cookie`呢？**
     * 当时谁传给浏览器，浏览器就会带回当初的`cookie`访问回服务器
   * 【疑问】**`cookie`里面存的是什么呢？**
     * 存的东西可以理解为用户的身份标识，也就是github服务器以后在看到`cookie`的时候，就可以知道是谁又访问了。不用再输入用户名和密码了。
       * 【安全性】假如这个携带身份标识的`cookie`被别人获取了，别人就可以以你的身份信息，访问你的个人页面。
2. 服务器接收到`cookie`后开始校验
3. 校验成功后，github服务器响应用户请求，同时又返回一个新的`cookie`（这个`cookie`也有可能服务器不会再给）
4. 浏览器获取到新的`cookie`后有保存到浏览器中。

【==注意==】无法跨浏览器读取`cookie`

![1654777830168](D:\Data\9_Typora图片缓存\1654777830168.png)



### `v-cloak`指令

1. **本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉`v-cloak`属性**

   【解释】

   ![1654948092448](D:\Data\9_Typora图片缓存\1654948092448.png)

   1. 红色框内晚5秒，意味着粉色框内容也要晚5秒执行。

   2. 绿色框的内容，由于是在红色框延时前执行的，就会先显示在页面中。

      * 但是Vue在粉色框内还未被加载，所以绿色框内的效果无法显示

   3. 加上`v-cloak`属性后，当Vue实例创建完毕并接管容器（也就是执行到粉色框内容）后，会删掉`v-cloak`属性

      【JS堵塞时】

      ![1654948496989](D:\Data\9_Typora图片缓存\1654948496989.png)

      【JS堵塞后，Vue实例创建完毕并接管容器后】

      ![1654948547696](D:\Data\9_Typora图片缓存\1654948547696.png)

      

2. **使用css配合`v-cloak`可以解决网速慢时页面展示出`{{xxx}}`的问题**

   【实例】选中所有标签里面带有`v-cloak`属性的元素。

   ````html
   <style>
       [v-cloak]{
           display:none;
       }
   </style>
   ````

   【整个工作流程】

   ![1654948724435](D:\Data\9_Typora图片缓存\1654948724435.png)

   1. 绿色方框内容先渲染到页面中，由于标签内有`v-clock`,Css样式设置成`display:none`被隐藏
   2. 等JS阻塞过后，Vue实例创建完毕并接管容器后，绿色方框中的`v-clock`属性被删除。
      * 此时标签内用到Vue效果的内容就同步实现，不会出现先出现插值语法`{{}}`，后显示数据的效果。



### 【拓展】JS阻塞

#### 什么是JS阻塞？

* 外部JS延迟渲染，导致网页文本无法正常显示效果。
  【示例】

  ![1654947473693](D:\Data\9_Typora图片缓存\1654947473693.png)
  *  外部JS*（红色框）*、网页的核心内容`body`区*（绿色框）*、最后写的脚本*（粉色框）*
  * 外部JS晚了5秒钟，5秒钟期间`body`区*（绿色框）*无法被渲染到页面上的。最后写的脚本*（粉色框）也不能执行。



### `v-once`指令

1. **`v-once`所在节点在初次动态渲染后，就视为静态内容了**

   * 初次：第一次渲染

     ![1654949563855](D:\Data\9_Typora图片缓存\1654949563855.png)

   * 动态渲染：n读了（绿色所示），但是只读了一次

   * 视为静态内容：就是读完一次后，以后n再改变，设置了`v-once`的标签不会再读n的值了。

2. **以后数据的改变不会引起`v-once`所在结构的更新，可以用于优化性能**

【==注意==】不要与事件修饰符的`once`搞混淆了



### `v-pre`指令

1. 跳过其所在节点的编译过程。
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译



## 自定义指令

* Vue中的自定义指令其实就是对原生操作DOM进行封装

【==注意==】

- 指令定义时**不**加`v-`，但使用时**要**加`v-`
- 指令名如果是多个单词，**要**使用`kebab-case`命名方式，**不要**用`camelCase`*（小驼峰）*命名

### 如何自定义指令？

* 对象式和指令式的选择
  * 对象式：
    * 优势：可以处理一些细节问题
  * 指令式：
    * 优势：写起来简单
    * 弊端：不能处理一些细节问题

> 局部指令

**对象式**

````javascript
new Vue({
 	directives:{指令名:配置对象}   
 }) 		
````

**函数式**

````javascript
 new Vue({										
 	directives:{指令名:回调函数}   
 })
````

* `回调函数`：
  * 参数：
    * `element`：标签元素
    * `binding`：

【==注意==】

* 【区别】**自定义指令函数式与计算属性实现回调**

  |                  |  自定义指令函数式  | 计算属性 |
  | :--------------: | :----------------: | :------: |
  | **如何实现回调** | 靠函数所收到的参数 | 靠返回值 |



> 全局指令

**对象式**

````javascript
Vue.directive(指令名,配置对象)
````

**函数式**

````javascript
Vue.directive(指令名,回调函数)
````



### 配置对象中常用的3个回调

> `.bind:`指令与元素成功绑定时调用



> `inserted(element,binding):`指令所在元素被插入页面时调用



> `update(element,binding):`指令所在模板结构被重新解析时调用



### 如何使用自定义指令？

【示例】

````html
<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
````

【==注意==】

- 指令定义时**不**加`v-`，但使用时**要**加`v-`

# Vue组件化编程



# 使用Vue脚手架

## 如何安装Cli脚手架？

1. **以管理员模式**打开`cmd`

2. 配置`npm`淘宝镜像

   ````shell
    npm config set registry=https://registry.npm.taobao.org
   ````

3. 关掉`cmd`

4. 输入

   ````shell
   npm install -g @vue/cli
   ````




## 如何创建脚手架项目？

1. **以管理员模式**打开`cmd`

2. 修改所要创建项目的路径

3. 使用指令创建项目脚手架

   【格式】

   ````shell
   vue create 项目名
   ````

4. 进入项目文件运行服务器

   ````shell
   npm run serve
   ````

   【拓展】**如何停止服务器？**

   * `ctrl`+`c`

5. 复制显示的端口号，粘贴到浏览器上



## 分析脚手架结构

【大致结构图示】

![1655084961901](D:\Data\9_Typora图片缓存\1655084961901.png)

### .gitignore

【能干什么？】

* 用来设置哪些文件或文件夹不接受git管理



### babel.config.js

【能干什么？】

* 可以借助这个文件实现ES6转ES5



### package.json

![1655086679876](D:\Data\9_Typora图片缓存\1655086679876.png)

`serve`*（上图绿色方框内容）*：开发的过程中使用这个命令，系统帮你配置好服务器

`build`*（上图红色方框内容）*：开发完了，把整个工程变成浏览器可识别的东西

`lint`（上图粉色方框内容）：会对整个项目中的`.js`和`.vue`文件进行一次语法检查



### package-lock.json

【用来干什么？】

* 可以保证项目使用到的包安装到指定版本



### 以整个项目执行流程继续介绍

#### 1、main.js

* 当项目执行完`npm run serve`后就执行该文件

* 该文件是整个项目的入口文件

* 【内容分析】

  ![1655087516534](D:\Data\9_Typora图片缓存\1655087516534.png)

  * 15行代码相当于`el:'#app'`

【拓展】**VScode中如何开启终端？**

* `ctrl`+`·/~`（按键）



#### 2、App.vue

* `<template>`结构

* `<script>`交互

* `<style>`样式



#### 3、assets文件夹

【用来干啥？】

* 存储静态资源
  * 多个组件都会使用到的图片、视频



#### 4、components文件夹

【用来干什么？】

* 存储所有自己写的组件。

【==注意==】

* App.vue不放在这个文件夹中

* 添加完组件后，要在App.vue中引入组件

  【格式】

  ````javascript
  import 组件名 from '组件路径'
  ````



#### 5、public文件夹

* `favicon.ico`（页面图标）

* `index.html`（主页面）

  ![1655088456236](D:\Data\9_Typora图片缓存\1655088456236.png)

  【==注意==】

  * 第10行代码的`%=BASE_URL`指的就是`public`文件夹
  * **第20行的容器绝对不能删掉**



# Vue中的ajax



# vuex



# vue-router

## 初识vue-router

#### 啥是vue-router?

* vue 的一个**插件库**，专门用来实现SPA 应用



#### 啥是SPA应用?

![1655105827522](D:\Data\9_Typora图片缓存\1655105827522.png)

* 单页 Web 应用（single page web application，SPA）

* 整个应用只有**一个完整的页面**
  * 页面就是`index.html`

* 点击页面中的导航链接**不会刷新**页面，只会做页面的**局部更新**
  * 就是在展示区的位置，展示不同的组件
    * 如上图点击导航区的链接不会刷新页面，只会让展示区的内容发生改变
  * 【实现的前提】把不同的切换，形成组件

* 数据需要通过ajax请求获取



### 关于路由

#### 啥是路由？

* 一个路由就是一组映射关系（key - value）

  ![1655106444108](D:\Data\9_Typora图片缓存\1655106444108.png)

* key 为路径，value 可能是 function 或 componen



#### 路由分类

* 后端路由（研究服务器）

  * 理解：value 是 function，用于处理客户端提交的请求

  * 工作过程：服务器接收到一个请求时，根据**请求路径**找到匹配的**函数**来处理请求，返回响应数据

    ![1655106674657](D:\Data\9_Typora图片缓存\1655106674657.png)

    【解释】

    1. 获取请求路径*（如图红框所示）*的有效内容*（如图黄框所示）*
    2. 然后做匹配*（如图黄线所示）*也就是key对应上了。
    3. 把本次请求交给`value`*（如图粉框所示）*处理

* 前端路由

  * 理解：value 是 component，用于展示页面内容

  * 工作过程：当浏览器的路径改变时，对应的组件就会显示

    ![1655106006407](D:\Data\9_Typora图片缓存\1655106006407.png)

    【示例】

    1. 点击班级管理*（如上图红色框内容）*，引起路径变化*（红框引出线所示）*
    2. 浏览器路径发生变化被`router`监测到*（如图路径指向`router`所示）*
    3. 路由根据监测到的路径变化，匹配`route`规则，将对应组件显示到展示区中



## 如何使用路由？

1. 安装`vue-router`

   ````shell
   npm i vue-router
   ````

2. 应用插件

   ````javascript
   Vue.use(路由器名)
   ````

3. 编写`router`文件配置项：

4. 



## 嵌套路由



## 路由传参



## 响应式路由导航



# Vue UI组件库

## 常用组件库

### 移动端

* [Vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/)
* [Cube UI](https://didi.github.io/cube-ui/#/zh-CN)
* [Mint UI](http://mint-ui.github.io/#!/zh-cn)



### PC端

* [Element UI](https://element.eleme.cn/#/zh-CN)
* [IView UI](https://www.iviewui.com/)



### 如何使用？

1. 选择`npm`安装
2. 在`main.js`引入所需内容

#### 全盘引入

* 引入组件库

  【示例】*引入ElementUI组件库*

  ````javascript
  import ElementUI from 'element-ui';
  ````

  【==注意==】上述代码引入的是全套ElementUI组件库

* 引入样式

  【示例】*引入ElementUI样式*

  ````javascript
  import 'element-ui/lib/theme-chalk/index.css';
  ````

  【==注意==】上述代码引入的是全套ElementUI样式库

* 应用UI

  【示例】*应用ElementUI*

  ````javascript
  Vue.use(ElementUI);
  ````

  【==注意==】上述代码引用了所有组件库的组件。

3. 根据所需要的组件复制粘贴，通过文档来设置相关属性。



#### 按需引入

1. 安装 文档给的`babel-plugin`

   【格式】

   ````shell
   npm install xxx -D
   ````

2. 修改 `babel-config-js`

   【==注意==】

   * 保留项目原有的配置项，用`,`追加文档中相关配置。
   * `plugins`和`presets`同级。

3. 在`main.js`引入所用的部分组件

   * 【==注意==】具体引用格式根据UI组件库的为准

   【示例】

   ````javascript
   import { Button, Select } from 'element-ui';
   ````

4. 应用对应的部分组件

   * 【==注意==】具体引用格式根据UI组件库的为准

   【示例】

   ````javascript
   Vue.component(Button.name, Button);
   Vue.component(Select.name, Select);
   ````

   





# 结语

