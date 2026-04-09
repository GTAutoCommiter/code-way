---
id: npm-useNote
slug: /npm-useNote
title: 【npm】使用技巧
date: 2022-05-10T00:00:00.000Z
tags:
  - npm/知识库
---
# 指令相关

## Q：如何添加依赖至开发环境？

* A：

  ````shell
  npm install {包名} -D
  ````

# 访问依赖库相关

## Q：如何查看依赖库相关信息？

* A：访问对应地址：

  ````bash
  https://registry.npmjs.org/-/package/{库名}/dist-tags
  
  //示例
  https://registry.npmjs.org/-/package/create-react-app/dist-tags
  ````

  * 访问结果

    | 字段   | 描述     |
    | ------ | -------- |
    | next   |          |
    | latest | 最新版本 |
    | canary |          |

## Q：如何清除项目中的node_modules?

* A：

  ````shell
  rm -rf node_modules
  ````

## Q：npm和npx有何不同？

* A：
  * npm：用来下载包
  * npx：会将node_modules中的`.bin`文件临时添加为环境变量
    * 就可以访问环境变量中的应用程序

## Q：如何查看当前源地址？

* A：

  ````bash
  npm get config registry
  ````


## Q：如何查看本地依赖列表？

* A：

  ````bash
  #当前
  npm list
  #查看全局
  npm list -g <suffix>
  ````

  * `suffix`：后缀
  
    | 后缀 | 描述 |
    | ---- | ---- |
    |      |      |
  
    

# 自封装包相关

## Q：如何产生临时依赖包，在本地测试包的功能性？

* A：

  1. 在自封装包项目执行`npm link`产生临时包
  2. 在测试项目中使用`npm link <包名>`引入临时包

  > 注意：两个项目一定要在同一个包管理工具下。

## Q：如何解除临时依赖包？

* A：

  1. 在依赖包中执行

     ````bash
     npm unlink
     ````

  2. 在临时依赖引入项目中执行

     ````bash
     npm unlink <依赖包名>
     ````

## Q：如何使用命令更新package版本？

* A：

  ````javascript
  npm version [action]
  ````

  > 基本号构成
  >
  > ````javascript
  > 版本号基本是由三位数字组成：
  >    1   .   0   .   0
  > [MAJOR].[MINOR].[PATCH]
  > ````

  `action`:

  * `major`：进行不兼容的API更改时的版本
  * `minor`：以向后兼容的方式添加功能时的版本
  * `patch`：向后兼容的错误修复程序的版本


# Package.json相关

## Q：各字段含义？

* A：

  | 字段        | 描述                 |
  | ----------- | -------------------- |
  | name        | 包名，必须要独一无二 |
  | version     | 版本号               |
  | author      | 作者                 |
  | description | 描述信息             |
  | keywords    | 关键词，提升SEO      |
  | repository  | 代码托管位置         |
  | license     | 许可证               |
  | homepage    | 包的主页或者文档首页 |
  | bugs        | 用户问题反馈地址     |
  | main        | 入口文件             |
  | scripts     | 存放可执行脚本       |
  |             |                      |


# 报错处理

## 【Bug】Assertion failed: (thread_id_key != 0x7777)

* 【原因】
  * 因为node-fibers在 nodejs >=16.x 的版本已经被弃用了
* 【解决方法】
  * 切换至低于16的版本
  * 


