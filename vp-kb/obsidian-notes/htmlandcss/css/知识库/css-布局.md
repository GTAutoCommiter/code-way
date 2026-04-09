---
id: htmlAndCss-css-layout
slug: /htmlAndCss-css-layout
title: css-布局
date: 2024-06-27T00:00:00.000Z
tags:
  - htmlandcss/css/知识库
---
## 居中布局

### 方法一：flex布局

````css
.vertical-container {
  height: 300px;
	display: flex;
  align-items: center;
  justify-content: center;
}
````

### 方法二：设置margin

```scss
.father-ele {
  width:100vw;
  margin: 0 auto;
  .son-ele{
    //注意子元素宽度小于父元素宽度。
    width:90vw;
  }
}
```

## 左右布局

### 方法一：使用flex

````scss
.main{
  display:flex;
  flex-direction:column;
  .left-box{
    flex:1;
  }
  .right-box{
    flex:1;
  }
}
````

