---
id: react-office
slug: /react-office
title: React官方文档
date: 2022-05-10T00:00:00.000Z
tags:
  - react/【面向学习】
---
## 简介

### Q：React属于哪种设计模式？

* A：严格说并不属于MVC和MVVM，更多是视图的渲染，并没有对`Model`和`controller`进行操作
  * ui=`render(data)`单向数据流

## 组件

* 是什么？——应用程序中可复用的 UI 元素

  >就像使用 HTML 标签一样，你可以组合、排序和嵌套组件来绘制整个页面。
  >
  >是一段可以使用标签进行扩展 的 JavaScript 函数

* 怎么封装一个组件？

  ````jsx
  export default function Profile() {
    return(
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
    );
  }
  ````

  【解释】

  1. 导出组件

     * export default——标签一个文件中的主要函数以便以后可以从其他文件引入它

  2. 定义函数

     * React 组件是常规的 JavaScript 函数，但 **组件的名称必须以大写字母开头**，否则它们将无法运行！

  3. 添加标签

     * 返回jsx标签

     * 标签和 `return` 关键字不在同一行，则必须把它包裹在一对括号中

  4. 使用组件？

     * 嵌套组件 
       * 组件可以渲染其他组件，但是 **请不要嵌套他们的定义**（即不要在组件中重新定义组件）
       * 应该在顶层定义每个组件（即子组件可以定义在主组件的下方

### Q：如何规范的对组件进行导入导出？

* A：

  1. 创建一个新的JS文件来存放该组件
  2. **导出** 该文件中的函数组件
     * 方法一：默认导出
     * 方法二：具名导出
  3. 在需要使用该组件的文件中 **导入**
     * 方法一：默认导入
     * 方法二：具名导入

  ### 何时使用默认和具名导入导出

  | 语法 | 导出语句                             | 导入语句                             |
  | ---- | ------------------------------------ | ------------------------------------ |
  | 默认 | `export default function Button(){}` | `import Button from './Button.js'`   |
  | 具名 | `export funtion Button(){}`          | `import {Button} from './Button.js'` |

  * 一个文件里有且仅有一个默认导出

  * 一个文件可以有多个具名导出
  * 默认导入时import 语句后面可以任意命名。
  * 具名导入时，导入和导出的名字必须一致。（称为具名导入导出的原因）
  * 选择：
    * 文件中仅包含一个组件时——默认导出
    * 文件中包含多个组件或某个值需要导出时——具名导出。

### Q：什么是根组件？

* A：App.js文件——所有组件都定义在该文件中

### Q：如何在一个文件中导入导出多个组件？

* A：同一文件中，有且仅有一个默认导出，但可以有多个具名导出！

### Q：如何将组件拆分成多个文件？

* A：将具名导出拆分成各个子组件

### 组件相关知识

[函数组件与类组件](https://github.com/lao-jiawei/lao-jiawei.github.io/issues/55)

[受控组件与非受控组件](https://github.com/lao-jiawei/lao-jiawei.github.io/issues/54)

 

## JSX

* 

## 状态(State)和属性(Props)

* * * 

### Q：如何给组件传递 JSX

* A：使用 JSX 展开语法传递 props 

  ````jsx
  function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props} />
      </div>
    );
  }
  ````

  * 将 JSX 作为子组件传递

    * 当内容嵌套在 JSX 标签中时，父组件将在名为 `children` 的 prop 中接收到该内容。

      ````jsx
      import Avatar from './Avatar.js';
      
      function Card({ children }) {
        return (
          <div className="card">
            {/*即children可以接收双标签中的嵌套内容*/}
            {children}
          </div>
        );
      }
      
      export default function Profile() {
        return (
          <Card>
            <Avatar
              size={100}
              person={{ 
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
              }}
            />
          </Card>
        );
      }
      ````

## 生命周期

## 事件处理

## 条件渲染

### Q：如何根据不同条件返回不同的 JSX？

* A：通过if/else语句判断

  ````jsx
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
  ````

### Q：如何根据不同条件包含或者去掉部分 JSX？

* A：直接返回 `null`。——处理不想进行渲染的元素

  ````jsx
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
  ````

## 列表和键

### Q：如何通过 JavaScript 的 `map()` 方法从数组中生成组件?

* A：

  1. 首先，把数据 **存储** 到数组中

  2. **遍历**  这个数组中的每一项，并获得一个新的 JSX 节点数组

  3. 然后用父节点包裹 **返回**子节点

     示例：

     ````jsx
     const people = [
       '凯瑟琳·约翰逊: 数学家',
       '马里奥·莫利纳: 化学家',
       '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
       '珀西·莱温·朱利亚: 化学家',
       '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
     ];
     
     export default function List() {
       const listItems = people.map(person =>
         <li>{person}</li>
       );
       return <ul>{listItems}</ul>;
     }
     ````

### Q：如何通过 JavaScript 的 `filter()` 筛选需要渲染的组件？

* A：

  1. 创建数组，自定义数据结构

  2. 使用filer按条件过滤出所需值

  3. 用map遍历过滤后的数组，并获得一个新的 JSX 节点数组

  4. 然后用父节点包裹 **返回**子节点

     示例：

     ````jsx
     //export const people = [
     //  {
     //    id: 0,
     //    name: '凯瑟琳·约翰逊',
     //    profession: '数学家',
     //    accomplishment: '太空飞行相关数值的核算',
     //    imageId: 'MK3eW3A',
     //  },
     //  ....
     //];
     
     export default function List() {
       const chemists = people.filter(person =>
         person.profession === '化学家'
       );
       const listItems = chemists.map(person =>
         <li>
           <img
             src={getImageUrl(person)}
             alt={person.name}
           />
           <p>
             <b>{person.name}:</b>
             {' ' + person.profession + ' '}
             因{person.accomplishment}而闻名世界
           </p>
         </li>
       );
       return <ul>{listItems}</ul>;
     }
     ````

### Q：何时以及为何使用 React 中的 key？

* A：
  * 直接放在 `map()` 方法里的 JSX 元素一般都需要指定 `key` 值——用 `key` 保持列表项的顺序
  * key 会告诉 React，每个组件对应着数组里的哪一项,React 可以把它们匹配起来。
    * 这在数组项进行移动（例如排序）、插入或删除等操作时非常重要。
    * 一个合适的 `key` 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树。

  * key 需要满足的条件
    * **key 值在兄弟节点之间必须是唯一的。** 不要求全局唯一，在不同的数组中可以使用相同的 key。
    * **key 值不能改变**，千万不要在渲染时动态地生成 ke

  * React 中需要 key的原因
    * 需要通过元素中唯一标识出某一项（JSX 节点或文件）来区分它们
    * 即使元素的位置在渲染的过程中发生了改变，它提供的 `key` 值也能让 React 在整个生命周期中一直认得它。
    * 不推荐用数组索引做key
      * 实际上没有显式地指定 `key` 值，React 默认会把数组项的索引当作 key 值来用
      * 但是数组项的顺序在插入、删除或者重新排序等操作中会发生改变，此时把索引顺序用作 key 值会产生一些微妙且令人困惑的 bug。

    * 不推荐在运行过程中动态地产生 key（如key={Math.random()}）
      * 会导致每次重新渲染后的 key 值都不一样，从而使得所有的组件和 DOM 元素每次都要重新创建。
      * 不仅会造成运行变慢的问题，更有可能导致用户输入的丢失。 

## 表单

## Hooks

### useState

```jsx
const [state,setState]=useState(initState)

//异步更新
setState(newState)

/*同步更新
⚠️注意 state 中不会自动补全旧的变量，需要如上使用扩展运算符合并
*/
setState((preState)=>({...preState,...newState}))
```

`state`：当前状态值

`setState`：更新状态方法

`initState`：初始化状态值

### useRef

* 使用场景

```jsx
const ref=useRef(initRef);

//更新值
ref.current=newRef;

//取值
const curRef=ref.current
```

### useEffect

````jsx
useEffect(()=>{
  return()=>{
    
  }
},[depend])
````

#### Q：若有多个或是嵌套useEffect执行顺序是什么？

* A：遵循递归顺序

  ````jsx
  const A=()=>{
    useEffect(()=>{
  		console.log('2')
    },[])
    
    useEffect(()=>{
      console.log('3')
    },[])
    return (<><B/></>)
  }
  const B=()={
    useEffect(()=>{
  		console.log('1')
  	},[])
    return (<>this is b<>)
  }
  ````

  

### useMomo

### useReducer

* 使用场景：用于优化`setState`过多

### useContext

* 使用场景：用于跨组件之间传递数据。

````javascript
import { createContext} from 'react';

// 1.使用createContext创建一个上下文对象
const MsgContext=createContext();

// 2.在顶层组件中 通过Provider组件提供数据
function App(){
  const test='this is a test'
  return (
    <div>
    	<MsgContext.Provider value={test}>
    		<A/>
    	</MsgContext.Provider>
    </div>
  )
}


function A(){
  return (
  	<div>
    	<B/>
    </div>
  )
}

// 3.在底层组件 通过useContext钩子函数使用数据
function B(){
  const useContxt(MsgContext);
  return (
    <div>
    </div>
  )
}
````

### useLayoutEffect



## Context API

## 路由

## 状态管理

## 性能优化

## 测试

## 部署和持续集成



## 使用JSX书写标签语言

### 为什么 React 将标签和渲染逻辑耦合在一起

* 随着 Web 的交互性越来越强，逻辑越来越决定页面中的内容。JavaScript 负责 HTML 的内容！
  * 【所以】 **在 React 中，渲染逻辑和标签共同存在于同一个地方——组件**
* 渲染逻辑和标签放在一起可以确保它们在每次编辑时都能保持互相同步。



## 在 JSX 中通过大括号使用 JavaScript



### 在 JSX 的大括号内调用 JavaScript 函数

* 大括号内的任何 JavaScript 表达式都能正常运行，包括像函数调用

## 条件渲染

### 一些你会在 React 代码库里遇到的常用的条件语法快捷表达式

* 三目运算符（`? :`） 

  ````jsx
  return (
    <li className="itema
      {/*如果 isPacked 为 true 时，则（?）渲染 name + ' ✔'，否则（:）渲染 name。*/}
      {isPacked ? name + ' ✔' : name}
    </li>
  );
  ````

  * 仅对于简单的条件判断

* 与运算符（`&&`）

  ````jsx
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
  ````

  * **切勿将数字放在 `&&` 左侧.**
    * JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。
    * 如果左侧是 `0`，整个表达式将变成左侧的值（`0`），React 此时则会渲染 `0` 而不是不进行渲染。



## 保持组件纯粹

### 纯函数是什么，以及它如何帮助你避免 bug

* 纯函数
  * **只负责自己的任务**。它不会更改在该函数调用前就已存在的对象或变量。
  * **输入相同，则输出相同**。给定相同的输入，纯函数应总是返回相同的结果。

* React 便围绕着纯函数概念进行设计
  * 对于相同的输入，所编写的 React 组件必须总是返回相同的 JSX。
  * React 的渲染过程必须自始至终是纯粹的。组件应该只 **返回** 它们的 JSX，而不 **改变** 在渲染前，就已存在的任何对象或变量

### 如何将数据变更与渲染过程分离，以保持组件的纯粹

* 将可变的量通过props来传递

  ````jsx
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export default function TeaSet() {
    return (
      <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </>
    );
  }
  ````

* 每个组件都应该自己计算 JSX！

  * 每个组件也应该“独立思考”，而不是在渲染过程中试图与其他组件协调，或者依赖于其他组件。

### 如何使用严格模式发现组件中的错误

* **通过重复调用组件函数，严格模式有助于找到违反这些规则的组件**。
  * React 提供了 “严格模式”，在严格模式下开发时，它将会调用每个组件函数两次。
* 使用React严格模式——用 `<React.StrictMode>` 包裹根组件。（一些框架会默认这样做。）
  * 严格模式在生产环境下不生效，因此它不会降低应用程序的速度。

## 将 UI 视为树

### React 如何看待组件结构

* React 以及许多其他 UI 库，将 UI 建模为树。

  ![](https://react.docschina.org/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.dark.png&w=1080&q=75)

### 渲染树是什么以及它有什么用处

* React 创建的 UI 树是由渲染过的组件构成的，被称为渲染树。
  * 这棵树由节点组成，每个节点代表一个组件。
  * 在 React 渲染树中，根节点是应用程序的根组件
    * 根组件是 `App`，它是 React 渲染的第一个组件。
  * 树中的每个箭头从父组件指向子组件。
* 渲染树表示 React 应用程序的单个渲染过程。
  * 在条件渲染中，父组件可以根据传递的数据渲染不同的子组件。
    * 每次渲染过程的渲染树可能都不同。
  * 有助于识别 React 应用程序中的顶级和叶子组件。
    * 顶级组件是离根组件最近的组件，它们影响其下所有组件的渲染性能，通常包含最多复杂性。
    * 叶子组件位于树的底部，没有子组件，通常会频繁重新渲染。
  * 识别这些组件类别有助于理解应用程序的数据流和性能。

### 模块依赖树是什么以及它有什么用处

* 模块依赖树中的每个节点都是一个模块，每个分支代表该模块中的 `import` 语句。
  * 树的根节点是根模块，也称为入口文件。它通常包含根组件的模块。
  * 构成树的节点代表模块，而不是组件。
* 依赖树对于确定运行 React 应用程序所需的模块非常有用。
  * 在为生产环境构建 React 应用程序时，通常会有一个构建步骤，该步骤将捆绑所有必要的 JavaScript 以供客户端使用。
  * 负责此操作的工具称为 bundler（捆绑器）并且 bundler 将使用依赖树来确定应包含哪些模块。
  * 了解应用程序的依赖树可能有助于调试问题。

# 添加交互

## 响应事件

### 编写事件处理函数的不同方法

1. 声明函数

   * 通常在你的组件 **内部** 定义。
   * 名称以 `handle` 开头，后跟事件名称。

2. 实现函数内部的逻辑

3. 然后 将其作为 prop 传入合适的 JSX 标签

   * 普通传入handle函数

     ````jsx
     function handleClick() {
         alert('你点击了我！');
       }
     
     return (
       <button onClick={handleClick}>
         点我
       </button>
     );
     /*
     注意错误下面属于直接调用，
     handleClick() 中最后的 () 会在 渲染 过程中 立即 触发函数，即使没有任何点击。
     这是因为在 JSX { 和 } 之间的 JavaScript 会立即执行。
     */
     <button onClick={handleClick()}>
     ````

   * 可在 JSX 中定义一个内联的事件处理函数

     ````jsx
     <button onClick={function handleClick() {
       alert('你点击了我！');
     }}>
     ````

   * 可使用箭头函数

     ````jsx
     <button onClick={() => {
       alert('你点击了我！');
     }}>
     //注意错误下面属于直接调用
       <button onClick={alert('...')}>
     ````

   * 传递给事件处理函数的函数应直接传递，而非调用。

### 如何从父组件传递事件处理逻辑

### 事件如何传播以及如何停止它们

* 阻止事件冒泡：`e.`

  ````jsx
  <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
    点击事件
  </button>
  ````

  
