---
id: frontend-jest-note
slug: /frontend-jest-note
title: 【jest】学习笔记
date: 2022-05-10T00:00:00.000Z
tags:
  - 前端
---
# 初始化相关

## Q：如何在项目中引入jest？

* A：在开发依赖中引入jest

  ````bash
  //yarn环境
  yarn add jest --dev
  
  //npm环境
  npm instail jest -D
  ````

## Q：如何使用？

* A：

  1. 先创建逻辑文件`xxx.js`

  2. 创建测试用例文件`xxx.test.js`

  3. 跑测试用例

     ````bash
     //yarn 环境
     yarn test
     //npm 环境
     npm start test
     ````

     > PS：注意在执行之前，检查package.json配置脚本设置
     >
     > ````json
     > "scripts": {
     >   "test": "jest"
     > },
     > ````

## Q：如何写测试用例？

* A：

##  Q：如何在jest适配es6

* A：

  1. 引入bebal

     ````bash
     yarn add @babel/core @babel/preset-env
     ````

  2. 在项目同级文件中添加`.babelrc`文件

     ````javascript
     ````

     

# 配置相关

# 匹配器相关

