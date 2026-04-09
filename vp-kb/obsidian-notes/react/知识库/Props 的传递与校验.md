---
title: Props 的传递与校验
tags:
  - react/知识库
---
## 1. 什么是props？

* React 组件使用 *props* 来互相通信。
* 每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它
* Props 是传递给 JSX 标签的信息。

## 2.向组件传递 props

1. 将props 传递给子组件

   ````jsx
   export default function Profile() {
     return (
       <Avatar
         person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
         size={100}
       />
     );
   }
   ````

2. 在子组件中读取 props

   ````jsx
   function Avatar({ person, size }) {
     // 在这里 person 和 size 是可访问的
   }
   ````

## 3.从组件读取 props

* props 正是 组件的唯一参数！ React 组件函数接受一个参数，一个 props 对象

  ````jsx
  //即可将其写为
  function Avatar(props) {
    //下列写法为解构
    let person = props.person;
    let size = props.size;
    // ...
  }
  ````

## 4.为 props 指定默认值

> 方法一：通过解构方式来设置默认值

* 通过在参数后面写 `=` 和默认值来进行解构

  ````jsx
  function Avatar({ person, size = 100 }) {
    // ...
  }
  ````

* 默认值仅在缺少 `size` prop 或 `size={undefined}` 时生效。 

* 如果传递了 `size={null}` 或 `size={0}`，默认值将 **不** 被使用。

> 方法二：使用 defaultProps（类组件）

* 类组件中可以使用 defaultProps

  ````jsx
  class Button extends React.Component {
    render() {
      return <button>{this.props.text}</button>;
    }
  }
  
  Button.defaultProps = {
    text: '点击'
  };
  ````

## 5. 如何校验Props?

> 方法一：使用propTypes定义props的类型

````jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes={quantity:PropTypes.number.isRequired }

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

> 方法二：使用typescript



### Q：Props 如何随时间变化？

* A：
  * 一个组件可能会随着时间的推移收到不同的 props——即 Props 并不总是静态的
  * props 是 不可变的（一个计算机科学术语，意思是“不可改变”）。
    * 当一个组件需要改变它的 props（例如，响应用户交互或新数据）时，它不得不“请求”它的父组件传递 **不同的 props** —— 一个新对象！
    * 它的旧 props 将被丢弃，最终 JavaScript 引擎将回收它们占用的内存。
