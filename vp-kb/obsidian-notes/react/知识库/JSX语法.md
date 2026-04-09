---
id: react-jsx
slug: /react-jsx
title: JSX语法
date: 2025-02-05T00:00:00.000Z
tags:
  - react/知识库
---

# 1. JSX 简介

* 什么是 JSX？——是 JavaScript 语法扩展，可以让你在 JavaScript 文件中书写类似 HTML 的标签。  

* JSX 与 HTML 的区别?——jsx浏览器无法识别，html浏览器可以直接识别。

* JSX 与 React 的关系?——react通过jsx生成虚拟dom。

* 为什么使用 JSX？——实现**把 UI 的逻辑和结构都放在一个叫“组件”的东西里**。

  【解释】过去js（即UI逻辑）和html（即UI结构）是分开写的。

# 2. JSX 基础语法
## 2.1 JSX 表达式  

   - 在 JSX 中嵌入 JavaScript 表达式，使用 `{}` 包裹表达式  

     ````jsx
     
     ````

## 2.2 JSX 注释  

````jsx
//单行注释  

/*
多行注释 
*/
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* this is my commit */}
  </div>
);
````

## 2.3 JSX 中的字符串  

````jsx
//字符串直接量
<img
  className='avatar'
  src="https://i.imgur.com/7vQD0fPs.jpg"
  alt="Gregorio Y. Zara"
/>


//字符串插值 
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
````

## 2.4 JSX 中的布尔值、`null` 和 `undefined`  

   - 渲染控制  

---

# 3. JSX 元素与组件
## 3.1 JSX 元素 

````jsx 
//创建 JSX 元素  
const JSX = <h1>Hello JSX!</h1>;

//JSX 元素的嵌套 
const JSX=(
 <div>
  <h1>this is h1 tag</h1>
  <p>this is p tag</p>
  <ul>
    <li>this is li</li>
    <li>this is li</li>
    <li>this is li</li>
  </ul>
</div>
)
````

* JSX 是 JavaScript 的语法扩展
  * 可以直接在 JavaScript 中编写 HTML
* JSX必须返回单个元素。
  * 父元素将包裹所有其他级别的嵌套元素
  * 渲染多个元素时，可以把它们都用圆括号括起来

## 3.2 JSX 组件  

   - 函数组件  

     ````jsx
     const MyComponent ()=>{
       return (
         <div>
           <h1>Hello React!</h1>
         </div>
       )
     }
     ````

   - 类组件  

     ````jsx
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
       }
       render() {
         return (
           <div>
             <h1>Hello React!</h1>
           </div>
         )
       }
     };
     ````

     * 用 ES6 的 `class`语法创建React组件
       * 使用 `super()` 调用父类的构造函数，即本例中的 `React.Component`
       * 组件初始化
         * 在组件的 `constructor` 里调用 `super`，并将 `props` 传递给它们

## 3.3 组件命名规则  

   - 首字母大写  
   - 函数必须有返回值

## 3.4 组件嵌套与组合  

````jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* 修改这行下面的代码 */ }
        <ChildComponent/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

* 在react父组件中引用一个子组件
  * 子组件引用要确保标签闭合

# 4. JSX 属性

## 4.1 HTML 属性与 JSX 属性的区别  

   - `class` vs `className`  
   - `for` vs `htmlFor`  

## 4.2 动态属性  

   - 使用表达式设置属性  

## 4.3 布尔属性  

   - 省略属性值（如 `disabled`）  

## 4.4 展开属性（Spread Attributes）  

   - 使用 `{...props}` 传递属性  

---

# 5. JSX 中的样式
## 5.1 内联样式  

````jsx
const VDOM =(
<h1 className='title' id={myId.toLowerCase()} >
    <span style={{
       color:'white',
       fontSize:'29px'
    }}
    >{myData.toUpperCase()}</span>
</h1>
)
````

   - 使用 `style` 属性  
   - 样式对象写法，写多个单词组成的属性时，要用小驼峰形式（如`fontSize`）

## 5.2 CSS 类名  

   - 使用 `className`  

     ````jsx
     const JSX = (
       <div className='myDiv'>
         <h1>Add a class to this div</h1>
       </div>
     );
     ````

     * JSX 使用 `className` 来代替为 HTML 的 class 名
     * JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式

   - 动态类名  

  ````jsx
  const JSX = (
    <div className={isDarkTheme?'dark':''}>
      <h1>Add a class to this div</h1>
    </div>
  );
  ````

  

## 5.3 CSS Modules  

   - 模块化样式  

## 5.4 样式库集成  

   - Styled Components  
   - Tailwind CSS  

---

# **6. JSX 中的事件处理**
## 6.1 事件绑定  

   - 使用 `onClick`、`onChange` 等  

     ````jsx
     const Demo()=>{
       function handleOnClick(){
         console.log('标题被点击了')
       }
       return (<Button onClick={handleOnClick}>test</Button>)
     }
     ````

     > 【注意】
     >
     > 1. 事件封装采用小驼峰形式
     >
     > 2. 事件监听必须是一个函数
     >
     > 3. `{}`里面不要写小括号形式的函数调用
     >
     >    ````jsx 
     >    //🚫
     >    const Demo()=>{
     >      function handleOnClick(){
     >        console.log('标题被点击了')
     >      }
     >      return (<Button onClick={handleOnClick()}>test</Button>)
     >    }
     >    ````

## 6.2 事件对象  

   - 获取事件对象（`event`）  

## 6.3 传递参数  

   - 使用箭头函数或 `bind` 方法  

## 6.4 阻止默认行为与冒泡  

   - `event.preventDefault()`  
   - `event.stopPropagation()`  

---

# **7. JSX 中的条件渲染**
## 7.1 使用 `if-else` 语句  

## 7.2 使用三元运算符  

## 7.3 使用逻辑与（`&&`）  

## 7.4 使用 `null` 或 `undefined` 隐藏元素  

---

# **8. JSX 中的列表渲染**
## 8.1 使用 `map` 渲染列表  

## 8.2 列表中的 `key` 属性  

   - `key` 的作用与重要性  

## 8.3 列表渲染的性能优化  

   - 避免不必要的渲染  

---

# **9. JSX 中的 Fragments**
## 9.1 什么是 Fragments？  

## 9.2 使用 `<React.Fragment>`  

## 9.3 使用简写语法 `<>...</>`  

## 9.4 Fragments 的使用场景  

---

# **10. JSX 中的插槽与子元素**
## 10.1 使用 `props.children`  

## 10.2 传递多个子元素  

## 10.3 插槽模式（Slot Pattern）  

## 10.4 高阶组件与插槽  

---

# **11. JSX 中的特殊用法**
## 11.1 使用 `dangerouslySetInnerHTML`  

   - 渲染 HTML 字符串  

## 11.2 使用 `key` 强制重新渲染组件  

## 11.3 使用 `ref` 访问 DOM 元素  

## 11.4 使用 `React.createElement` 替代 JSX  

---

# **12. JSX 与 TypeScript**
## 12.1 类型检查  

   - 组件 Props 类型定义  

## 12.2 泛型组件  

## 12.3 类型推断与 JSX  

---

# **13. JSX 常见问题与注意事项**
## 13.1 JSX 中的自闭合标签  

## 13.2 JSX 中的转义字符  

## 13.3 JSX 中的性能问题  

## 13.4 JSX 与 Babel 的关系  

---

#### **14. JSX 最佳实践**
14.1 保持 JSX 简洁  
14.2 避免嵌套过深  
14.3 使用组件拆分复杂 JSX  
14.4 使用工具格式化 JSX（如 Prettier）  





### Q：如何通过 JSX 展示信息

* A：遵循JSX规则

  1. 只能返回一个根元素

     * 如果想要在一个组件中包含多个元素，**需要用一个父标签把它们包裹起来**。

       ````jsx
       <>
       //可以用空标签来包裹，这个空标签被称作 Fragment。React Fragment 允许你将子元素分组，而不会在 HTML 结构中添加额外节点。
       </>
       ````

     * 【原因】JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，**不能在一个函数中返回多个对象**，除非用一个数组把他们包装起来。

  2. 标签必须闭合

  3. 使用驼峰式命名法给大部分属性命名！

     ````jsx
     <Test className={} onClick={}/>
     ````

     【原因】JSX 最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。但JavaScript 对变量的命名有限制。

### Q：如何在 JSX 的大括号内使用 JavaScript 对象？

* 大括号使用位置：

  * 用作 JSX 标签内的**文本**

    ````jsx
    <h1>{name}'s To Do List</h1>
    ````

  * 用作紧跟在 `=` 符号后的 **属性**

    ````jsx
    <Image src={avatar}/>
    // 但是 src="{avatar}" 只会传一个字符串 {avatar}
    <Image src='{avatar}'
    ````

* 必须用另一对额外的大括号包裹对象

  ````jsx
  export default function TodoList() {
    return (
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    );
  }
  ````

  * 内联 `style` 属性 使用驼峰命名法编写
