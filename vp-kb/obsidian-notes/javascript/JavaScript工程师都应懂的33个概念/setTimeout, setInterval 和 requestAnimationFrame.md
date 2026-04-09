---
id: javascript-shouldKnow-setTimeFunction
slug: /javascript-shouldKnow-setTimeFunction
title: 'setTimeout, setInterval 和 requestAnimationFrame'
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---
# setTimeout

## Q：能干啥？

* A：用于在指定的毫秒数后调用函数或计算表达式。

## Q：如何使用？

* A：

  ````javascript
  setTimeout(code, milliseconds, param1, param2, ...)
  setTimeout(function, milliseconds, param1, param2, ...)
  ````

  * `code/function`（必填）：要调用一个代码串，也可以是一个函数
  * `milliseconds`：执行或调用 code/function 需要等待的时间，以毫秒计。
  * `param1, param2, ...`：传给执行函数的其他参数

## Q：如何清除计时器？

* A：

  ````javascript
  clearTimeout(计时器标识);
  ````

## Q：如何判断setTimeout中的this指向？

* A：调用的对象是谁？this就是指向谁！

## Q：设置延时为0，就立即执行吗？

* 错，即便延时为0，必须要等到当前脚本的同步任务和“任务队列”中已有的事件，全部处理完以后，才会执行setTimeout指定的任务。

# setInterval

## Q：能干啥？

* A：可按照指定的周期（以毫秒计）来调用函数或计算表达式。

## Q：如何使用？

* A：

  ````javascript
  setInterval(code, milliseconds);
  setInterval(function, milliseconds, param1, param2, ...)
  ````

  * `code/function`（必填）：要调用一个代码串，也可以是一个函数。
  * `milliseconds`（必填）：周期性执行或调用 code/function 之间的时间间隔，以毫秒计。
  * `param1, param2, ...`：传给执行函数的其他参数

## Q：如何清除？

* A：

  ````javascript
  clearInterval(计时器标识)
  ````

## Q：setTimeout() 和 setInterval()都设置相同时间，有什么区别？

* A：
  * setTimeout：规定多少秒后执行一次。
  * setInterval：规定多少秒内执行。

# requestAnimationFrame

## Q：能干啥？

* A：要求浏览器在下次重绘之前调用指定的回调函数更新动画。
