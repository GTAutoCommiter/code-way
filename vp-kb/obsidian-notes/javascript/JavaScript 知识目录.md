---
id: javascript-menu
slug: /javascript-menu
title: JavaScript 知识目录
date: 2022-05-10T00:00:00.000Z
tags:
  - JavaScript
---

# 权威网站

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
* 

# JavaScript 知识目录

## 1. JavaScript 基础
### 1.1 JavaScript 简介  

### 1.2 变量与常量  

   - [var、let、const ](https://lao-jiawei.github.io/docs/javascript/%E7%9F%A5%E8%AF%86%E5%BA%93/var%E3%80%81let%E3%80%81const)

### 1.3 数据类型  

   - 基本类型：`number`、`string`、`boolean`、`null`、`undefined`、`symbol`、`bigint`  
     - [基本类型](https://lao-jiawei.github.io/docs/javascript/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B)

   - 引用类型：`object`、`array`、`function`  

### 1.4 类型转换  

   - 显式转换：`Number()`、`String()`、`Boolean()`  
   - 隐式转换：`==` 与 `===`  

### 1.5 运算符  

   - 算术运算符：`+`、`-`、`*`、`/`、`%`  
   - 比较运算符：`>`、`<`、`>=`、`<=`、`==`、`===`  
   - 逻辑运算符：`&&`、`||`、`!`  
   - 赋值运算符：`=`、`+=`、`-=`  

### 1.6 控制流程  

   - 条件语句：`if`、`else`、`switch`  
   - 循环语句：`for`、`while`、`do...while`  
   - 跳转语句：`break`、`continue`、`return`  

---

## 2. 函数
### 2.1 函数声明与表达式  

### 2.2 箭头函数  

* 

### 2.3 函数参数  

   - 默认参数  
   - 剩余参数（`...args`）  

### 2.4 作用域与闭包  

   - 全局作用域与局部作用域  
   - 闭包的概念与应用  

### 2.5 高阶函数  

   - 函数作为参数  
   - 函数作为返回值  

### 2.6 递归函数  

---

## 3. 对象与面向对象编程
### 3.1 对象基础  

   - 创建对象：字面量、构造函数  
   - 访问属性：点符号、方括号  

### 3.2 对象方法  

   - `this` 关键字  
   - 方法的定义与调用  

### 3.3 原型与原型链  

   - `prototype` 与 `__proto__`  
   - 继承与原型链  

### 3.4 类（ES6）  

   - `class` 关键字  
   - 构造函数、实例方法、静态方法  
   - 继承：`extends` 与 `super`  

### 3.5 对象解构与扩展  

   - 解构赋值  
   - 扩展运算符（`...`）  

---

#### **4. 数组**
4.1 数组基础  
   - 创建数组  
   - 访问与修改元素  
4.2 数组方法  
   - 遍历：`forEach`、`map`、`filter`、`reduce`  
   - 查找：`find`、`findIndex`  
   - 排序：`sort`  
   - 操作：`push`、`pop`、`shift`、`unshift`、`splice`、`slice`  
4.3 数组解构与扩展  
   - 解构赋值  
   - 扩展运算符（`...`）  

---

#### **5. 异步编程**
5.1 回调函数  
5.2 Promise  
   - `Promise` 的基本用法  
   - `then`、`catch`、`finally`  
   - `Promise.all`、`Promise.race`  
5.3 async/await  
   - `async` 函数  
   - `await` 关键字  
5.4 事件循环与任务队列  
   - 宏任务与微任务  
   - `setTimeout`、`setInterval`  
   - `requestAnimationFrame`  

---

#### **6. DOM 操作**
6.1 DOM 基础  
   - DOM 树结构  
   - 节点类型：元素节点、文本节点、属性节点  
6.2 选择元素  
   - `document.querySelector`、`document.querySelectorAll`  
   - `getElementById`、`getElementsByClassName`、`getElementsByTagName`  
6.3 操作元素  
   - 修改内容：`innerHTML`、`textContent`  
   - 修改样式：`style`、`classList`  
   - 修改属性：`getAttribute`、`setAttribute`  
6.4 事件处理  
   - 事件监听：`addEventListener`  
   - 事件对象：`event`  
   - 事件冒泡与捕获  
6.5 动态创建与删除元素  
   - `createElement`、`appendChild`、`removeChild`  

---

#### **7. BOM 操作**
7.1 `window` 对象  
   - `window.location`、`window.history`  
   - `window.navigator`  
7.2 定时器  
   - `setTimeout`、`setInterval`  
   - `clearTimeout`、`clearInterval`  
7.3 弹窗与对话框  
   - `alert`、`confirm`、`prompt`  

---

#### **8. ES6+ 新特性**
8.1 块级作用域  
   - `let` 与 `const`  
8.2 模板字符串  
8.3 解构赋值  
8.4 默认参数与剩余参数  
8.5 箭头函数  
8.6 模块化  
   - `import` 与 `export`  
8.7 新的数据结构  
   - `Map`、`Set`、`WeakMap`、`WeakSet`  
8.8 迭代器与生成器  
   - `Symbol.iterator`  
   - `for...of` 循环  
   - 生成器函数（`function*`）  

---

#### **9. 错误处理与调试**
9.1 错误类型  
   - `Error`、`SyntaxError`、`TypeError`、`ReferenceError`  
9.2 错误处理  
   - `try...catch...finally`  
   - `throw` 语句  
9.3 调试工具  
   - 浏览器开发者工具  
   - `console` 方法：`log`、`error`、`warn`、`debug`  

---

#### **10. 性能优化**
10.1 代码优化  
   - 减少 DOM 操作  
   - 避免全局变量  
10.2 内存管理  
   - 垃圾回收机制  
   - 内存泄漏与排查  
10.3 网络优化  
   - 减少 HTTP 请求  
   - 使用缓存  

---

#### **11. 模块化与工程化**
11.1 模块化  
   - CommonJS  
   - ES Modules  
11.2 打包工具  
   - Webpack  
   - Rollup  
   - Vite  
11.3 代码规范  
   - ESLint  
   - Prettier  

---

#### **12. 高级主题**
12.1 设计模式  
   - 单例模式、工厂模式、观察者模式  
12.2 函数式编程  
   - 纯函数、高阶函数、柯里化  
12.3 Web Workers  
12.4 WebAssembly  
12.5 TypeScript 基础  
