---
title: Css知识目录
tags:
  - htmlandcss/css
---
# CSS 知识目录

## 1. CSS 基础
### 1.1 CSS 简介  

   - 什么是 CSS？  
   - CSS 的作用与语法  

### 1.2 CSS 引入方式  

   - 内联样式  
   - 内部样式表  
   - 外部样式表  

### 1.3 CSS 选择器  

   - 基本选择器：`*`、`tag`、`.class`、`#id`  
   - 组合选择器：` `（后代）、`>`（子元素）、`+`（相邻兄弟）、`~`（通用兄弟）  
   - 属性选择器：`[attr]`、`[attr=value]`  
   - 伪类选择器：`:hover`、`:nth-child()`、`:not()`  
   - 伪元素选择器：`::before`、`::after`  
  1.4 CSS 优先级与权重  
   - 优先级规则：`!important` > 内联样式 > ID > 类 > 标签  
   - 权重计算  

---

#### **2. CSS 盒模型**
2.1 盒模型简介  
   - 内容（content）、内边距（padding）、边框（border）、外边距（margin）  
2.2 标准盒模型与怪异盒模型  
   - `box-sizing: content-box`（默认）  
   - `box-sizing: border-box`  
2.3 外边距折叠  
   - 折叠规则与解决方法  

---

#### **3. CSS 布局**
3.1 浮动布局  
   - `float` 属性  
   - 清除浮动：`clearfix`  
3.2 定位布局  
   - `position` 属性：`static`、`relative`、`absolute`、`fixed`、`sticky`  
   - `z-index` 属性  
3.3 弹性布局（Flexbox）  
   - 容器属性：`display: flex`、`flex-direction`、`justify-content`、`align-items`  
   - 项目属性：`flex-grow`、`flex-shrink`、`flex-basis`  
3.4 网格布局（Grid）  
   - 容器属性：`display: grid`、`grid-template-columns`、`grid-template-rows`  
   - 项目属性：`grid-column`、`grid-row`、`grid-area`  
3.5 多列布局  
   - `column-count`、`column-gap`、`column-rule`  

---

#### **4. CSS 样式**
4.1 文本样式  
   - `font-family`、`font-size`、`font-weight`、`line-height`  
   - `text-align`、`text-decoration`、`text-transform`  
4.2 背景样式  
   - `background-color`、`background-image`、`background-position`  
   - `background-size`、`background-repeat`  
4.3 边框样式  
   - `border-width`、`border-style`、`border-color`  
   - `border-radius`  
4.4 阴影与渐变  
   - `box-shadow`、`text-shadow`  
   - 线性渐变：`linear-gradient()`  
   - 径向渐变：`radial-gradient()`  
4.5 过渡与动画  
   - 过渡：`transition`  
   - 动画：`@keyframes`、`animation`  

---

#### **5. CSS 响应式设计**
5.1 媒体查询  
   - `@media` 语法  
   - 常用媒体特性：`width`、`height`、`orientation`  
5.2 响应式单位  
   - `px`、`em`、`rem`、`vw`、`vh`、`%`  
5.3 响应式图片  
   - `srcset`、`sizes`  
   - `picture` 标签  

---

## 6. CSS 预处理器
6.1 Sass/SCSS  

   - 变量：`$variable`  
   - 嵌套规则  
   - 混合（Mixin）：`@mixin`、`@include`  
   - 继承：`@extend`  
6.2 Less  
   - 变量：`@variable`  
   - 嵌套规则  
   - 混合（Mixin）  
6.3 Stylus  
   - 变量：`variable = value`  
   - 嵌套规则  
   - 混合（Mixin）  

---

#### **7. CSS 框架**
7.1 Bootstrap  
   - 栅格系统  
   - 常用组件：按钮、表单、导航栏  
7.2 Tailwind CSS  
   - 实用类（Utility Classes）  
   - 响应式设计  
7.3 Foundation  
   - 栅格系统  
   - 常用组件  

---

#### **8. CSS 工程化**
8.1 CSS 模块化  
   - CSS Modules  
   - BEM 命名规范  
8.2 CSS-in-JS  
   - styled-components  
   - Emotion  
8.3 PostCSS  
   - 插件系统  
   - 常用插件：`autoprefixer`、`cssnano`  

---

#### **9. CSS 性能优化**
9.1 减少 CSS 文件大小  
   - 压缩 CSS：`cssnano`  
   - 删除未使用的 CSS：`PurgeCSS`  
9.2 提高渲染性能  
   - 减少重绘与回流  
   - 使用 `will-change`  
9.3 异步加载 CSS  
   - `rel="preload"`  
   - 动态加载 CSS  

---

#### **10. CSS 高级特性**
10.1 变量（Custom Properties）  
   - 定义与使用：`--variable`、`var(--variable)`  
10.2 滤镜（Filter）  
   - `blur()`、`brightness()`、`contrast()`  
10.3 混合模式（Blend Modes）  
   - `mix-blend-mode`、`background-blend-mode`  
10.4 裁剪与遮罩  
   - `clip-path`  
   - `mask`  

---

#### **11. 常见问题与解决方案**
11.1 浏览器兼容性  
   - 使用 `autoprefixer` 解决前缀问题  
   - 使用 `polyfill` 支持新特性  
11.2 布局问题  
   - 居中布局：水平居中、垂直居中  
   - 等高布局  
11.3 性能问题  
   - 减少 CSS 文件大小  
   - 优化关键渲染路径  

---

#### **12. 学习资源**
12.1 官方文档  
   - [MDN CSS 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS)  
12.2 书籍  
   - 《CSS 权威指南》  
   - 《CSS 揭秘》  
12.3 在线课程  
   - Udemy：CSS 完全指南  
   - Frontend Masters：CSS 深度解析  

