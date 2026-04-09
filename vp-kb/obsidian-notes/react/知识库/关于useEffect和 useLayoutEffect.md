---
title: 关于useEffect和 useLayoutEffect
tags:
  - react/知识库
---
`useEffect` 和` useLayoutEffect`这两个钩子函数允许你在 React 完成 DOM 更新后执行副作用操作：

- `useEffect`：通常用于处理不需要同步执行的操作，如网络请求、手动 DOM 操作等。它们会在浏览器绘制之后异步执行。

- `useLayoutEffect`：如果你需要在浏览器绘制之前执行某些操作，比如测量 DOM 元素的布局信息，则应使用 `useLayoutEffect`。它会在浏览器绘制之前同步执行 。

---



useEffect

1. 在同步状态下多个useEffect按顺序输出
2. 在异步状态下

useEffect 和 useLayoutEffect

1. 在同步状态下useLayoutEffect先于useEffect输出(与位置无关)
2.  

