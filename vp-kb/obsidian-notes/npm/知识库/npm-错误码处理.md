---
id: npm-errorNote
slug: /npm-errorNote
title: 【npm】错误码处理
date: 2022-05-10T00:00:00.000Z
tags:
  - npm/知识库
---
# E400

* 报错内容

  ````bash
  npm ERR! 400 Bad Request - PUT https://registry.npmjs.org/@jv%2ftoolbox-js
  ````

* 处理方法

  

# E402

* 报错内容

  ````bash
  ````

* 原因：

  * 尝试发布公共范围的包时会发生这种情况。默认访问级别为私有。

* 解决方法

  1. 到`package.json`设置`publishConfig`字段

     ````json
     {
       //...
       "publishConfig": {
         "access": "public",
         "registry": "https://registry.npmjs.org/"
       }
     }
     ````

# E404

* 报错内容

  ````bash
  npm ERR! 404 Not Found - PUT https://registry.npmjs.org/@jv%2ftoolbox-js - Not found
  ````

* 解决方法：

  1. 检查npm源地址

     ````bash
     npm config get proxy
     ````

     * 若是null，则设置npm源地址

       ````bash
       npm config set proxy https://registry.npmjs.org/
       ````





