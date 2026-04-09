---
date: 2024-06-27T00:00:00.000Z
hide_title: true
title: getBaseURL
tags:
  - docs/jvtools/URL
---
<h3>
  <code>getBaseURL(url)</code>
</h3>

获取不带参数的base URL

#### 添加版本

1.0.7

#### 参数

1. `url` *(string)*: 含有参数的URL。

#### 返回

*(string)*: 不携带参数的base URL。

#### 例子

```javascript
const baseUrl=getBaseURL('http://url.com/page?name=Adam&surname=Smith');
console.log(baseUrl);
//'http://url.com/page'
```
