---
id: react-freeCodeCamp
slug: /react-freeCodeCamp
title: 【freeCodeCamp】【前端开发库】React
date: 2022-05-10T00:00:00.000Z
tags:
  - react/【面向学习】
---
# [创建一个简单的 JSX 元素](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-simple-jsx-element)

【我的提交】

````jsx
const JSX = <h1>Hello JSX!</h1>;
````

【涉及知识点】

* JSX 是 JavaScript 的语法扩展
  * 可以直接在 JavaScript 中编写 HTML
    * 助于保持代码的可读性
  * 可以直接在 JSX 中编写 JavaScript
    * 只需在花括号中写 JavaScript 的代码
  * 浏览器不能解析 JSX
* 转换器 Babel
  * 将 JSX 代码编译为 JavaScript

# [创建一个复杂的 JSX 元素](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-complex-jsx-element)

【我的提交】

````jsx
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

【涉及知识点】

* JSX必须返回单个元素。
  * 父元素将包裹所有其他级别的嵌套元素
  * 渲染多个元素时，可以把它们都用圆括号括起来

# [在 JSX 中添加注释](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/add-comments-in-jsx)

【我的提交】

````jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* this is my commit */}
  </div>
);
````

【涉及知识点】

* 用 `{/* */}` 语法来包裹注释文本。

# [渲染 HTML 元素为 DOM 树](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-html-elements-to-the-dom)

【我的提交】

````jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// 在这行下面添加代码
const targetNode=document.getElementById('challenge-node');
ReactDOM.render(JSX,targetNode);
````

【涉及知识点】

* `ReactDOM.render(componentToRender, targetNode)`渲染 API
  * 可以将 JSX 直接渲染到 HTML DOM
  * 参数
    * `componentToRender`：要渲染的 React 元素或组件
    * `targetNode`：将要渲染到的 DOM 节点
* `document.getElementById(string)`获取DOM中id为xxx的节点

# [在 JSX 中定义一个 HTML Class](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/define-an-html-class-in-jsx)

【我的提交】

````jsx
const JSX = (
  {/*this is my commit*/}
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
````

【涉及知识点】

* JSX 使用 `className` 来代替为 HTML 的 class 名
* JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式

# [了解自闭合 JSX 标签](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/learn-about-self-closing-jsx-tags)

【我的提交】

````jsx
const JSX = (
  <div>
    {/* this is my commit */}
    <h2>Welcome to React!</h2> <br/>
    <p>Be sure to close all tags!</p>
    {/* this is my commit */}
    <hr/>
  </div>
);
````

【涉及知识点】

* 任何 JSX 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。(即可都可支持单标签)

# [创建一个无状态的函数组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-stateless-functional-component)

【我的提交】

````jsx
const MyComponent = function() {
  // 修改这行下面的代码
  return (
    <div>this is my commit</div>
  )
  // 修改这行上面的代码
}
````

【涉及知识点】

* 使用 JavaScript 函数创建React 组件

  * 创建*无状态函数组件*

    > 无状态组件：
    >
    > * 能接收数据并对其进行渲染的组件，但不管理或跟踪该数据的更改的组件。

  * 用函数创建组件，只需编写一个返回 JSX 或 `null` 的 JavaScript 函数。

  * 函数名以大写字母开头。

# [创建一个 React 组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-react-component)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 修改这行下面的代码
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )

    // 修改这行上面的代码
  }
};
````

【涉及知识点】

* 用 ES6 的 `class`语法创建React组件
  * 使用 `super()` 调用父类的构造函数，即本例中的 `React.Component`
  * 组件初始化
    * 在组件的 `constructor` 里调用 `super`，并将 `props` 传递给它们

# [用组合的方式创建一个 React 组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-component-with-composition)

【我的提交】

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

【涉及知识点】

* 在react父组件中引用一个子组件
  * 子组件引用要确保标签闭合

# [使用 React 渲染嵌套组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-react-to-render-nested-components)

【我的提交】

````jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* 修改这行下面的代码 */ }
      <TypesOfFruit/>
      { /* 修改这行上面的代码 */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* 修改这行下面的代码 */ }
        <Fruits/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

【涉及知识点】

* 组件
  * 将 UI 分解为基本的构建块
  * 有助于将负责 UI 的代码与负责处理应用程序逻辑的代码分开
  * 可以大大简化复杂项目的开发和维护。

# [组合 React 组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/compose-react-components)

【我的提交】

````jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* 修改这行下面的代码 */ }
        <NonCitrus/>
        <Citrus/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* 修改这行下面的代码 */ }
        <Fruits/>
        { /* 修改这行上面的代码 */ }
        <Vegetables />
      </div>
    );
  }
};
````

【涉及知识点】

* React可以在其它组件中渲染 JSX 元素、无状态函数组件和 ES6 类组件

# [将 class 组件渲染到 DOM 树](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-a-class-component-to-the-dom)

【我的提交】

````jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* 修改这行下面的代码 */}
        <Fruits/>
        <Vegetables/>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
};

// 修改这行下面的代码
const targetDom=document.getElementById('challenge-node')
ReactDOM.render(<TypesOfFood/>,targetDom);
````

【涉及知识点】

* ReactDOM.render(`<ComponentToRender />`, targetNode)
  * 用于 ES6 class 组件和函数组件都可以
  * 将 JSX 元素渲染到 DOM

# [从零开始写一个 React 组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/write-a-react-component-from-scratch)

【我的提交】

````jsx
// 修改这行下面的代码
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
      <h1>My First React Component!</h1>
    </div>
    )
  }
}
const targetNode=document.getElementById('challenge-node')
ReactDOM.render(<MyComponent/>,targetNode);
````

【涉及知识点】

* 

# [将 Props 传递给无状态函数组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/pass-props-to-a-stateless-functional-component)

【我的提交】

````jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* 修改这行下面的代码 */ }
      <p>The current date is: {props.date}</p>
      { /* 修改这行上面的代码 */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* 修改这行下面的代码 */ }
        <CurrentDate date={Date()}/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

【涉及知识点】

*  在 React 中，可以将属性传递给子组件。
  * 把创建的 React 支持的**自定义 HTML 属性**传递给组件。
  * 要将 `prop` 的值视为 JavaScript，必须将它们括在花括号中

# [传递一个数组作为 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/pass-an-array-as-props)

【我的提交】

````jsx
const List = (props) => {
  { /* 修改这行下面的代码 */ }
  return <p>{props?.tasks?.join(',')}</p>
  { /* 修改这行上面的代码 */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* 修改这行下面的代码 */ }
        <List tasks={["walk dog", "workout",'test','test1']}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout",'test','test1']}/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

【涉及知识点】

* 数组作为 `props` 传递。 要将数组传递给 JSX 元素，必须将其视为 JavaScript 并用花括号括起来

# [使用默认的 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-default-props)

【我的提交】

````jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// 修改这行下面的代码
ShoppingCart.defaultProps={items:0}
````

【涉及知识点】

* MyComponent.defaultProps = {}设置默认 props 

# [覆盖默认的 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/override-default-props)

【我的提交】

````jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* 修改这行下面的代码 */ }
    return <Items quantity={10}/>
    { /* 修改这行上面的代码 */ }
  }
};
````

*  在 React 中，显式设置组件的 prop 值即可覆盖默认 props。

# [使用 PropTypes 来定义 Props 的类型](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-proptypes-to-define-the-props-you-expect)

【我的提交】

````jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// 修改这行下面的代码
Items.propTypes={quantity:PropTypes.number.isRequired }
// 修改这行上面的代码

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
````

【涉及知识点】

* `Compoment.propType={}`——验证组件是否接收了正确类型的 props

  ````jsx
  Compoment.propType={
    [key]:PropTypes.[typeof].[suff],
    /*		 typeof   类型						//	suff 				后缀
    			 func			方法								isRequird		必填
    			 number		数
    			 object 	对象
    			 string	  字符串
    			 symbol	  标记
    			 bool			布尔值
    			 array 		数组
    */
  ````
  

# [使用 this.props 访问 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/access-props-using-this-props)

【我的提交】

````jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* 修改这行下面的代码 */ }
            <Welcome name='lao'/>
            { /* 修改这行上面的代码 */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* 修改这行下面的代码 */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* 修改这行上面的代码 */ }
        </div>
    );
  }
};
````

【涉及知识点】

* 一个 ES6 类组件（即：不是无状态函数组件），接收 props需要在在访问它的代码前面添加 `this`

# [复习使用无状态函数组件的 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/review-using-props-with-stateless-functional-components)

【我的提交】

````jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// 修改这行下面的代码

const Camper=(props)=>{
  return <p>{props.name}</p>
}

Camper.propTypes={name:PropTypes.string.isRequired}
Camper.defaultProps={
  name:'CamperBot'
}
````

# [创建一个有状态的组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-stateful-component)

【我的提交】

````jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // 只修改这一行下面的代码
    this.state={
      firstName:'lao',
    }
    // 只修改这一行上面的代码
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
````

【涉及知识点】

* 什么是state
  *  state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。 
  * 

* 初始化state

  * 位置：在类组件的 `constructor` 上声明——初始化state

  * 规范：`state` 属性必须设置为 JavaScript `object`（对象）
  * 可以在组件的整个生命周期内访问 `state` 对象， 可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。

# [在用户界面中渲染状态](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-state-in-the-user-interface)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <h1>{this.state.name}</h1>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

【涉及知识点】

* 定义了组件的初始 state 之后，就可以在要渲染的 UI 中显示它。

  * 通过在组件中使用this.state调用对应的数据
  * 在 render 方法的 `return` 中访问 state 值，必须把这个值用花括号括起来。

* React.state

  * 可以跟踪应用程序中的重要数据

  * 根据数据的变化渲染 UI。 如果数据发生变化，UI 也会随之改变。

    【更新过程】

    1.  React 使用所谓的虚拟 DOM 来跟踪幕后的变化
    2. 当 state 数据更新时，它会使用该数据触发组件的重新渲染 -- 包括接收 prop 数据的子组件。

# [以另一种方式在用户界面中渲染状态](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-state-in-the-user-interface-another-way)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // 修改这行下面的代码
    const name=this.state.name;
    // 修改这行上面的代码
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <h1>{name}</h1>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
````

【涉及知识点】

* 赋值访问state
  1. 声明函数、从 `state` 或 `props` 中访问数据、对此数据执行计算等
  2. 将任何数据赋值给 `return` 语句中可以访问的变量。

# [用 this.setState 设置状态](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/set-state-with-this-setstate)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
 	handleClick() {
    // 修改这行下面的代码
    this.setState({
      name:'React Rocks!'
      })
    // 修改这行上面的代码
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
````

【涉及知识点】

* 更新state值

  * React 提供了 `setState` 方法来更新组件的 `state`

    * `this.setState()`，传入键值对的对象， 其中键是 state 属性，值是更新后的 state 数据。

    * 【注意】React 要求永远不要直接修改 `state`，而是在 state 发生改变时始终使用 `this.setState()`。

      ````jsx
      //【错误示例】
      handleClick() {
          // 修改这行下面的代码
          this.state.name='React Rocks!'
          // 修改这行上面的代码
        }
      ````

    * React 可以批量处理多个 state 更新以提高性能。（即：通过 `setState` 方法进行的 state 更新可以是异步的）

# [将 this 绑定到 Class 方法上](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/bind-this-to-a-class-method)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // 修改这行下面的代码
    this.handleClick=this.handleClick.bind(this);
    // 修改这行上面的代码
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* 修改这行上面的代码 */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
````

【涉及知识点】

* Function.bind()
* react中的this指的是组件类不是undefined

# [使用 State 切换元素](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-state-to-toggle-an-element)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // 修改这行下面的代码
    this.toggleVisibility=this.toggleVisibility.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  toggleVisibility(){
    this.setState(state=>({
      visibility:!state.visibility,
    }))
  }
  // 修改这行上面的代码
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
````

# [React: 创建一个可以控制的输入框](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-controlled-input)

【我的提交】

````jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // 修改这行下面的代码
    this.handleChange=this.handleChange.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  handleChange(event){
    this.setState({
      input:event.target.value,
    })
  }
  // 修改这行上面的代码
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */}
        <input 
          onChange={this.handleChange}
          value={this.state.input}
        />
        { /* 修改这行上面的代码 */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
````

# [React: 创建一个可以控制的表单](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/create-a-controlled-form)

【我的提交】

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // 修改这行下面的代码
    this.setState((pre)=>({
      ...pre,
      submit:pre.input,
    }))
    event.preventDefault();
    // 修改这行上面的代码
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* 修改这行下面的代码 */}
          <input
            value={this.state.input}
            onChange={this.handleChange}
          />
          {/* 修改这行上面的代码 */}
          <button type='submit'>Submit!</button>
        </form>
        {/* 修改这行下面的代码 */}
        <h1>{this.state.submit}</h1>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
```

# [将 State 作为 Props 传递给子组件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/pass-state-as-props-to-child-components)

【我的提交】

````jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* 修改这行下面的代码 */}
         <Navbar name={this.state.name}/>
         {/* 修改这行上面的代码 */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* 修改这行下面的代码 */}
      <h1>Hello, my name is:{this.props.name} </h1>
      {/* 修改这行上面的代码 */}
    </div>
    );
  }
};
````

# [传递回调作为 Props](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/pass-a-callback-as-props)

【我的提交】

````jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* 修改这行下面的代码 */ }
        <GetInput 
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue}/>
        { /* 修改这行上面的代码 */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
````

# [使用生命周期方法 componentWillMount](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-the-lifecycle-method-componentwillmount)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // 修改这行下面的代码
    console.log(this.props)
    // 修改这行上面的代码
  }
  render() {
    return <div />
  }
};
````

# [使用生命周期方法：componentDidMount](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-the-lifecycle-method-componentdidmount)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* 修改这行下面的代码 */}
        <h1>Active Users:{this.state.activeUsers} </h1>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
````

# [添加事件侦听器](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/add-event-listeners)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // 修改这行下面的代码
  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleKeyPress);
  }
  // 修改这行上面的代码
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
````

# [使用 shouldComponentUpdate 优化重新渲染](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/optimize-re-renders-with-shouldcomponentupdate)

【我的提交】

````jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // 修改这行下面的代码
    return nextProps.value%2==0;
    // 修改这行上面的代码
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
````

# [介绍内联样式](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/introducing-inline-styles)

【我的提交】

````jsx
class Colorful extends React.Component {
  render() {
    return (
      <div 
        style={{
          color:'red',
          fontSize:'72px',
        }}
      >Big Red</div>
    );
  }
};
````

# [在 React 中添加内联样式](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/add-inline-styles-in-react)

【我的提交】

````jsx
const styles={
  color: "purple", 
  fontSize: 40,
  border:'2px solid purple'
}
// 修改这行上面的代码
class Colorful extends React.Component {
  render() {
    // 修改这行下面的代码
    return (
      <div 
        style={styles}
      >Style Me!</div>
    );
    // 修改这行上面的代码
  }
};
````

# [在 React Render 方法中使用 JavaScript](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-advanced-javascript-in-react-render-method)

【我的提交】

````jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // 修改这一行
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* 修改这行下面的代码 */}
          {answer}
          {/* 修改这行上面的代码 */}
        </p>
      </div>
    );
  }
}
````

# [使用 If-Else 条件进行渲染](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-with-an-if-else-condition)

【我的提交】

````jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // 修改这行下面的代码
    if(this.state.display){
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
      )
    }else{
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
      );
    }
  }
};
````

# [使用 && 获得更简洁的条件](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use--for-a-more-concise-conditional)

【我的提交】

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // 修改这行下面的代码
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display&&<h1>Displayed!</h1>}
       </div>
    );
  }
};
```

# [使用三元表达式进行条件渲染](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-a-ternary-expression-for-conditional-rendering)

【我的提交】

````jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // 修改这行下面的代码
    this.state={
      input:'',
      userAge:'',
    };
    // 修改这行上面的代码
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* 修改这行下面的代码 */}
        {this.state.userAge===''?buttonOne:this.state.userAge>=18?buttonTwo:buttonThree}
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
````

#  [使用 Props 有条件地渲染](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-conditionally-from-props)

【我的提交】

````jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* 修改这行下面的代码 */}
    return <h1>
        {this.props.fiftyFifty?'You Win!':'You Lose!'}
    </h1>;
    {/* 修改这行上面的代码 */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // 完成 return 语句
      return {
        counter: prevState.counter+1,
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // 修改这一行
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* 修改这行下面的代码 */}
        <Results fiftyFifty={expression}/>
        {/* 修改这行上面的代码 */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

````



# [根据组件状态有条件地更改内联 CSS](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/change-inline-css-conditionally-based-on-component-state)

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // 修改这行下面的代码
    if(this.state.input.length>15){
      inputStyle.border='3px solid red';
    }
    // 修改这行上面的代码
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# [使用 Array.map() 动态渲染元素](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-array-map-to-dynamically-render-elements)

````jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // 修改这行下面的代码
    this.state={
      toDoList:[],
      userInput:'',
    }
    // 修改这行上面的代码
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((v)=>{
      return (<li>{v}</li>)
    }); // 修改这一行
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
````

# [给同级元素一个唯一的键属性](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/give-sibling-elements-a-unique-key-attribute)

````jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((v)=>{
    return (<li key={v}>{v}</li>)
  }); // 修改这一行
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
````

# [使用 Array.Filter() 动态过滤数组](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/use-array-filter-to-dynamically-filter-an-array)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter((user)=>user.online); // 修改这一行
    const renderOnline = usersOnline.map((v)=>{
      return (<li key={v.username}>{v.username}</li>)
    }); // 修改这一行
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

# [用 renderToString 在服务器上渲染 React](https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/react/render-react-on-the-server-with-rendertostring)

````jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// 修改这行下面的代码
ReactDOMServer.renderToString(<App/>);
````

