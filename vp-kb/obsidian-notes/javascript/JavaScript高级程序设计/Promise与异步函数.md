---
title: Promise与异步函数
tags:
  - javascript/JavaScript高级程序设计
---
# Promise

* 存在三个状态：`padding`（等待）、`fulfilled`（完成）、`rejected`（拒绝）。

  > ⚠️注意：
  >
  > * `padding`可以转为`fulfilled`或`rejected`，且不可逆。
  > * `fulfilled`不能与`rejected`相互转换。

## promise构造函数如何实现?

````javascript

const PROMISE_TYPE = {
  PADDING: 'padding',
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
}
export class MyPromise {
  constructor(exec) {
    //初始化状态为padding
    this.state = PROMISE_TYPE.PADDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    //设置resolve方法
    const resolve = (value) => {
      //只有状态为padding，才允许改变状态
      if (this.state === PROMISE_TYPE.PADDING) {
        this.value = value;
        this.state = PROMISE_TYPE.FULFILLED;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    }
    //设置reject方法
    const reject = (reason) => {
      //      //只有状态为padding，才允许改变状态
      if (this.state === PROMISE_TYPE.PADDING) {
        this.reason = reason;
        this.state = PROMISE_TYPE.REJECTED;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    }
    try {
      exec(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }
  //...
}
````

## Promise.then方法如何实现？

````javascript
export class MyPromise {
  constructor(exec) {
   //...详情请看promise构造函数如何实现?
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;

    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    let p2 = new MyPromise((resolve, reject) => {
      //处理异步回调
      if (this.state === PROMISE_TYPE.PADDING) {
        //将成功回调压入成功回调栈中
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0)
        })
        
        //将失败回调压入失败回调栈中
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0)
        })
      }
      // 处理成功回调结果
      if (this.state === PROMISE_TYPE.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0)
      }
      // 处理失败回调结果
      if (this.state === PROMISE_TYPE.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0)
      }
    })

  }
}
````

* `resolvePromise`

  ````javascript
  const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    let called;
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
      try {
        let then = x.then;
        if (typeof then === 'function') {
          then.call(x, y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          }, r => {
            if (called) return;
            called = true;
            reject(r);
          })
        } else {
          resolve(x);
        }
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  }
  ````

  
