---
id: frontend-eslint-note
slug: /frontend-eslint-note
title: 【Eslint】学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - 前端
---
# 基本知识

## Q：是什么？

* A：可组装的 JavaScript 和 JSX 检查工具。

## Q：能干啥？

* A：用来检测 js 和 jsx 语法的工具，可以配置各项功能。

## Q：如何添加配置？

* A：

  * 方法一：.eslintrc.*：新建文件，位于项目根目录

    * `.eslintrc`
    * `.eslintrc.js`
    * `.eslintrc.json`

    > 区别在于配置格式不一样

  * 方法二：`package.json` 中 `eslintConfig`：不需要创建文件，在原有文件基础上写

## Q：配置文件内容含义？

* A：

  ````javascript
  module.exports = {
    // 解析选项
    parserOptions: {},
    // 具体检查规则
    rules: {},
    // 继承其他规则
    extends: [],
    // ...
    // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
  };
  ````

  * parserOptions 解析选项

    ````javascript
    parserOptions: {
      ecmaVersion: 6, // ES 语法版本
      sourceType: "module", // ES 模块化
      ecmaFeatures: { // ES 其他特性
        jsx: true // 如果是 React 项目，就需要开启 jsx 语法
      }
    }
    ````

  * rules 具体规

    | 值               | 描述                                                         |
    | ---------------- | ------------------------------------------------------------ |
    | `"off"` 或 `0`   | 关闭规则                                                     |
    | `"warn"` 或 `1`  | 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)      |
    | `"error"` 或 `2` | 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出) |

    * 示例

      ````javascript
      rules: {
        semi: "error", // 禁止使用分号
        'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句，否则警告
        'default-case': [
          'warn', // 要求 switch 语句中有 default 分支，否则警告
          { commentPattern: '^no default$' } // 允许在最后注释 no default, 就不会有警告了
        ],
        eqeqeq: [
          'warn', // 强制使用 === 和 !==，否则警告
          'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
        ],
      }
      ````

  * extends 继承

    * 示例：

      ````javascript
      // 例如在React项目中，我们可以这样写配置
      module.exports = {
        extends: ["react-app"],
        rules: {
          // 我们的规则会覆盖掉react-app的规则
          // 所以想要修改规则直接改就是了
          eqeqeq: ["warn", "smart"],
        },
      };
      ````

      
