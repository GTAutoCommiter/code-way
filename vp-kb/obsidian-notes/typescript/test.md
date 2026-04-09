---
title: test
tags:
  - TypeScript
---
# TypeScript 知识目录

## 1. TypeScript 基础
1.1 TypeScript 简介  

   - 什么是 TypeScript？  
   - TypeScript 与 JavaScript 的关系  
1.2 安装与配置  
   - 安装 TypeScript  
   - 配置文件：`tsconfig.json`  
1.3 基本类型  
   - `number`、`string`、`boolean`  
   - `null`、`undefined`  
   - `any`、`void`、`never`  
1.4 类型注解与推断  
   - 显式类型注解  
   - 类型推断  

---

#### **2. 高级类型**
2.1 联合类型与交叉类型  
   - 联合类型（`|`）  
   - 交叉类型（`&`）  
2.2 字面量类型  
   - 字符串字面量类型  
   - 数字字面量类型  
2.3 类型别名与接口  
   - `type` 关键字  
   - `interface` 关键字  
2.4 类型断言  
   - `as` 语法  
   - 尖括号语法  
2.5 类型保护  
   - `typeof`、`instanceof`  
   - 自定义类型保护  

---

#### **3. 函数**
3.1 函数类型  
   - 函数声明与表达式  
   - 可选参数与默认参数  
3.2 函数重载  
   - 函数重载的定义与使用  
3.3 箭头函数  
   - 箭头函数的类型注解  

---

#### **4. 类与面向对象编程**
4.1 类的基本语法  
   - 类的定义与实例化  
   - 构造函数与属性  
4.2 继承与多态  
   - `extends` 关键字  
   - 方法重写  
4.3 访问修饰符  
   - `public`、`private`、`protected`  
4.4 抽象类与接口  
   - 抽象类（`abstract`）  
   - 接口的实现（`implements`）  
4.5 静态成员与只读属性  
   - `static` 关键字  
   - `readonly` 关键字  

---

#### **5. 接口与类型别名**
5.1 接口的定义与使用  
   - 可选属性与只读属性  
   - 函数类型与索引签名  
5.2 接口的继承  
   - 接口的多重继承  
5.3 类型别名与接口的区别  
   - 使用场景与选择  

---

#### **6. 泛型**
6.1 泛型的基本概念  
   - 泛型函数  
   - 泛型类  
6.2 泛型约束  
   - 使用 `extends` 约束泛型  
6.3 泛型工具类型  
   - `Partial`、`Required`、`Readonly`  
   - `Pick`、`Omit`、`Record`  

---

#### **7. 模块与命名空间**
7.1 模块化开发  
   - `export` 与 `import`  
   - 默认导出与命名导出  
7.2 命名空间  
   - `namespace` 关键字  
   - 命名空间与模块的区别  

---

#### **8. 高级特性**
8.1 装饰器  
   - 类装饰器  
   - 方法装饰器  
   - 属性装饰器  
8.2 混入（Mixins）  
   - 混入的实现与使用  
8.3 条件类型  
   - `extends` 关键字  
   - 条件类型的嵌套  
8.4 映射类型  
   - `in` 关键字  
   - 内置映射类型  

---

#### **9. 类型声明与第三方库**
9.1 类型声明文件  
   - `.d.ts` 文件  
   - 声明全局变量与函数  
9.2 使用 DefinitelyTyped  
   - 安装第三方类型声明  
9.3 自定义类型声明  
   - 为第三方库编写类型声明  

---

#### **10. 工程化与工具**
10.1 配置 TypeScript 项目  
   - `tsconfig.json` 详解  
10.2 与 Webpack 集成  
   - 配置 `ts-loader`  
10.3 与 Babel 集成  
   - 使用 `@babel/preset-typescript`  
10.4 代码格式化与 linting  
   - ESLint 与 Prettier  

---

#### **11. 实战项目**
11.1 配置 React + TypeScript 项目  
   - 支持 JSX  
   - 类型化 Props 与 State  
11.2 配置 Node.js + TypeScript 项目  
   - 支持 CommonJS 与 ES Modules  
11.3 配置 Vue + TypeScript 项目  
   - 支持 Vue 单文件组件  

---

#### **12. 学习资源**
12.1 官方文档  
   - [TypeScript 官方文档](https://www.typescriptlang.org/)  
12.2 书籍  
   - 《深入理解 TypeScript》  
   - 《TypeScript 编程》  
12.3 视频教程  
   - Udemy：TypeScript 完全指南  
   - Frontend Masters：TypeScript 深度解析  
