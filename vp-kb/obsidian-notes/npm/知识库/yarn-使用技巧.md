---
id: npm-yarn-useNote
slug: /npm-yarn-useNote
title: 【yarn】使用技巧
date: 2022-05-10T00:00:00.000Z
tags:
  - npm/知识库
---
# 包相关

## Q：如何在项目中的包更换版本？

````shell
yarn add {包名}@{版本}
````

## Q：如何添加依赖至开发环境？

````bash
yarn add --dev {依赖名}
````

## Q：如何移除指定依赖？

````bash
yarn remove {包名}
````

## Q：如何升级指定依赖

````bash
yarn upgrade {包名} {版本号}
````

> PS：若不给版本号，则默认获取最新版本
