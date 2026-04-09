---
id: javascript-shouldKnow-promise
slug: /javascript-shouldKnow-promise
title: Promise
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---
# Promise

## Q：是什么？

* A：是一个对象，它代表了一个异步操作的最终完成或者失败。

## Q：用来解决什么问题？

* A：解决[回调地狱](# Q：什么是回调地狱？)，解决嵌套问题。

## Q：如何使用？

* A：

  * 常见用法
  
    ````javascript
    const myPromise = new Promise((resolve, reject) =>{
    	//成功回调  
      //resolve('resolve');
      //失败回调
      //reject('error');
    }).then(resolveCallBack,rejectCallBack).finlly{
      //settled状态下回调用
    };
    
    function resolveCallBack(res){
      console.log(res);//"resolve";
    }
    
    function resolveCallBack(res){
      console.log(res);//"resolve";
    }
    ````
  
    >注意：
    >
    >* 所有的回调函数一定要有返回值，否则下一回调将无法获取上一个 Promise 的结果。
    >
    >* 即使 `.then()` 缺少返回 Promise 对象的回调函数，处理程序仍会继续到链的下一个链式调用
    >
    >  ````javascript
    >  //若then只给一个参数，出错直接进入catch中
    >  const myPromise = new Promise((resolve, reject) =>{
    >  	//成功回调  
    >    //resolve('resolve');
    >    //失败回调
    >    //reject('error');
    >  }).then((res)=>{
    >    console.log(res)//'resolve';
    >  }).catch((err)=>{
    >    console.log(err); //'error'
    >  })
    >  ````
  

## Q：什么是飘浮Promise？

* A：没有办法追踪状态的Promise（即：上一个处理程序启动了一个 Promise 但并没有返回它）

  ````javascript
  doSomething()
    .then((url) => {
    // 忘记返回了！
    fetch(url);
  })
    .then((result) => {
    // 结果是 undefined，因为上一个处理程序没有返回任何东西。
    // 无法得知 fetch() 的返回值，不知道它是否成功。
  });
  ````

## Q：关于Promise范式

* A：最好保持扁平化，不要嵌套 Promise

## Q：Promise有几种状态？

* A：一个 `Promise` 必然处于以下几种状态之一：
  - *待定（pending）*：初始状态，既没有被兑现，也没有被拒绝。
  - *已兑现（fulfilled）*：意味着操作成功完成。
  - *已拒绝（rejected）*：意味着操作失败。

## Q：Promise的状态可以回退吗？

* A：不能，如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已*敲定（settled）*。同时“完成”态和“拒绝”态不能相互转换。

  ![](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

## Q：Promise的执行顺序是怎样的？

* A：

  * 不同Promise按顺序优先>层级优先输出。

    【示例一】

    ````javascript
    Promise.resolve()
        .then(() => {
            console.log(0);
            return 4;
        })
        .then((res) => {
            console.log(res);
        });
    
    Promise.resolve()
        .then(() => {
            console.log(1);
        })
        .then(() => {
            console.log(2);
        })
        .then(() => {
            console.log(3);
        })
        .then(() => {
            console.log(5);
        });
    
    // 0 1 4 2 3 5
    ````

  * 返回then占一个层级，且等同层级其他then执行结束后再执行

    【示例二】

    ````javascript
    Promise.resolve()
        .then(() => {
            console.log(0);
            return {
                then(resolve) {
                    resolve(4);
                },
            };
        })
        .then((res) => {
            console.log(res);
        });
    
      Promise.resolve()
        .then(() => {
            console.log(1);
        })
        .then(() => {
            console.log(2);
        })
        .then(() => {
            console.log(3);
        })
        .then(() => {
            console.log(5);
        });
    
    // 0 1 2 4 3 5
    ````

  * then中返回Promise对象，相当于加多了一层。

    【示例三】

    ````javascript
    Promise.resolve()
        .then(() => {
            console.log(0);
            return Promise.resolve(4);
        })
        .then((value) => {
            console.log(value);
        });
    
    Promise.resolve()
        .then(() => {
             console.log(1);
        })
        .then(() => {
            console.log(2);
        })
        .then(() => {
            console.log(3);
        })
        .then(() => {
            console.log(5);
        });
        
    // 0 1 2 3 4 5
    ````

## Q：什么是thenable对象？

* A：是一个具有 `then` 方法的对象

## Q：Promise可以使异步任务的并发的方法？

* A：
  * Promise.all()：
    * 在**所有**传入的 Promise 都被兑现时兑现；
    * 在**任意一个** Promise 被拒绝时拒绝。
  * Promise.allSettled()：
    * 在**所有**的 Promise 都被敲定时兑现。
  * Promise.any()：
    * 在**任意一个** Promise 被兑现时兑现；
    * 仅在**所有**的 Promise 都被拒绝时才会拒绝。
  * Promise.race()：
    * 在**任意一个** Promise 被敲定时敲定。（即：在**任意一个** Promise 被兑现时兑现）；
    * 在**任意一个**的 Promise 被拒绝时拒绝

## Q：如何实现一个简单的Promise？

* A：其实本质就是个观察者模式

  * new Promise 的实现原理

    ````javascript
    // 定义状态
    const PENDING = "pending";
    const FULFILLED = "fulfilled";
    const REJECTED = "rejected";
    
    class SelfPromise {
      // 储存状态，初始值是 pending
      status = PENDING;
      // 成功之后的值
      value = null;
      // 失败之后的原因
      reason = null;
      
      // 保存所有的 onFulfilled 回调函数
      onFulfilledCallback = [];
      // 保存所有的 onRejected 回调函数
      onRejectedCallback = [];
    
      constructor(executor) {
        // 将 resolve 和 reject 传给 new Promsie 的回调函数
        executor(this.resolve, this.reject);
      }
    
      // 箭头函数可以使函数里面的 this 始终指向 Promise 实例对象
      resolve = (value) => {
        // 只有状态是 pending 的情况下，才改变为 fulfilled 状态
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = value;
          
          // 执行所有的 onFulfilled 回调函数
          this.onFulfilledCallbacks.forEach((fn) => fn(value));
        }
      };
    
      reject = (reason) => {
        // 只有状态是 pending 的情况下，才改变为 rejected 状态
        if (this.status === PENDING) {
          this.status = REJECTED;
          this.reason = reason;
              
          // 执行 onRejected 回调函数
          this.onRejectedCallbacks.forEach((fn) => fn(reason));
        }
      };
    }
    ````

  * then方法

    ````javascript
    then(onFulfilled, onRejected) {
      //实现then方法的链式调用
      const promise2=new SelfPromise((resolve,reject)=>{
        const fulfilledMicrotask = () => {
          const queueMicrotask(() => {
            // 获取上一个 then 方法的 fulfilled 回调函数的返回值
            const v = onFulfilled(this.value);
    
            // 根据返回值，改变 promise2 的状态，并建立与下一个 then 方法的关系
            // 将 promise2 传入判断是否返回自身
            resolvePromise(promise2, v, resolve, reject);
          });
        };
        
        const rejectedMicrotask = () => {
          queueMicrotask(() => {
            // 获取上一个 then 方法的 rejected 回调函数的返回值
            const v = onRejected(this.reason);
            
            //根据返回值，改变 promise2 的状态，并建立与下一个 then 方法的关系
            // 将 promise2 传入判断是否返回自身
            resolvePromise(promise2, v, resolve, reject);
          });
        };
    
        if (this.status === FULFILLED) {
          // 异步执行 fulfilled 回调函数
          fulfilledMicrotask();
        } else if (this.status === REJECTED) {
    
          // 异步执行 rejected 回调函数
          rejectedMicrotask();
        }else {
          // pending 状态下保存所有的回调函数
          // 添加订阅者（异步执行的回调函数）
          this.onFulfilledCallbacks.push(fulfilledMicrotask);
          this.onRejectedCallbacks.push(rejectedMicrotask);
        }
      })
      // 返回 Promise 对象
      return promise2;
    }
    ````

    * 解决then链式调用

      ````javascript
      function resolvePromise(promise2,value, resolve, reject) {
        // 如果 then 方法返回的是自身 Promise 对象，返回错误信息
        if (promise2 === value) {
          return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
        }
        if (typeof value === "object" || typeof value === "function") {
          if (value === null) {
            // 如果返回值是 null，
            // 直接调用 resolve 函数，promise2 的状态变为 fulfilled，
            // 返回值由下一个 then 方法的第一个回调函数接收。
            return resolve(value);
          }
          try {
            if (typeof value.then === "function") {
              // 如果返回值是 Promise 对象或者 thenable 对象
              // 那就只能交给它们的 then 方法来改变 promise2 的状态，以及获取相对应的状态值
              // 以下代码等同于 value.then((value) => resolve(value), (err) => reject(err))
              value.then(resolve, reject);
            } else {
              // 如果 then 不是函数，同 null 情况一样的处理逻辑。
              resolve(value);
            }
          } catch (error) {
            // 出现异常的情况下，调用 reject 函数
            // promise2 的状态变为 rejected，
            // 错误信息由下一个 then 方法的第二回调函数接收
            reject(error);
          }
        } else {
          // 如果返回值是其他对象或者原始数据类型值，同 null 情况一样的处理逻辑。
          resolve(value);
        }
      }
      ````

* 文章推荐：[我终于真正理解 Promise 了！ - 掘金 (juejin.cn)](https://juejin.cn/post/7261252130442805285)

# 链式调用

## Q：是什么？

* A：连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。

  ````javascript
  fun().then((res)=>res)
  ````

## Q：什么是回调地狱？

* A：

  ````javascript
  fun().then((res1)=>{
    fun2(res1).then((res2)=>{
      fun3(re2).then((res3)=>{
        ....
      })
    })
  })
  ````

# async/await

## Q：是什么？

* A： 

  * Async - 定义异步函数

    * 自动把函数转换为 Promise
    * 当调用异步函数时，函数返回值会被 resolve 处理
    * 异步函数内部可以使用 `await`

  * Await - 暂停异步函数的执行

    * 当使用在 Promise 前面时，`await` 等待 Promise 完成，并返回 Promise 的结果
    * `await` **只能**和 Promise 一起使用，**不能**和 callback 一起使用

    - `await` 只能用在 `async` 函数中

## Q：怎么用？

* A：

  ````javascript
  async fun()=>{
    const res=await reqFun();
  }
  ````

  * 错误处理
    * 处理一：使用 try/catch 进行错误处理
    * 处理二：在 Promise 中的 `.catch()` 分支会进入 `catch` 语句。
