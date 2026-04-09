---
title: document
tags:
  - javascript/WebAPI
---
## Document.cookie

### 获取当前网页cookie

> 方法一：控制台指令获取

````javascript
document.cookie
````

> 方法二：交互式获取

* 进入浏览器调试面板>应用>cookies

### cookie属性

| 属性名   | 值类型  | 描述                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| HttpOnly | boolean | 只有在HTTP请求中，cookie才会被发送到服务器，而无法通过脚本等方式被访问。 |
| Secure   | boolean | 只有在使用安全的HTTPS连接时，cookie才会被发送到服务器，非加密的HTTP连接无法获取cookie |
| SameSite |         |                                                              |

### cookie何时被销毁？

* 

### 如何修改当前cookie?

````javascript
document.cookie='{cookie名}={修改值}; {属性名}={属性值};...;'

//document.cookie='name=cookieNewValue'
````

### 怎么防止别的脚本获取cookie？

> 方法一：设置cookie的HttpOnly属性

`````javascript
document.cookie='...; HttpOnly=true'
`````

> 方法二：设置cookie的“Secure”属性

````javascript
document.cookie='...; Secure=true'
````

> 方法三：使用同源策略

````javascript
document.cookie='...; SameSite=Strict'
````

