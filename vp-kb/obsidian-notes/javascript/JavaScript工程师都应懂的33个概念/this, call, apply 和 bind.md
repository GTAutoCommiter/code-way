---
id: javascript-shouldKnow-changeThisFunction
slug: /javascript-shouldKnow-changeThisFunction
title: 'this, call, apply 和 bind'
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---
# this

## Q：是什么？

* A：JavaScript 语言的一个关键字。

## Q：什么时候产生？

* A：函数运行时，在函数体内部自动生成的一个对象。

## Q：使用范围？

* A：只能在函数体内部使用。

## Q：值是什么？

* A：函数的不同使用场合，`this`有不同的值。总的来说，`this`就是函数运行时所在的环境对象。

## Q：this的用法有哪些？

* A：

  1. 纯粹的函数调用

     * 全局性调用，因此`this`就代表全局对象

     ````javascript
     var x = 1;
     function test() {
        console.log(this.x);
     }
     test();  // 1
     ````

  2. 作为对象方法的调用

     * 这时`this`就指这个上级对象

     ````javascript
     function test() {
       //上级对象为obj
       console.log(this.x);
     }
     
     var obj = {};
     obj.x = 1;
     obj.m = test;
     
     //作为对象方法调用
     obj.m(); // 1
     ````

  3.  作为构造函数调用
  
     * `this`指这个构造函数生成的新对象
  
       ````javascript
       function test() {
       　//this为构造函数生成的对象
         this.x = 1;
       }
       
       //构造函数
       var obj = new test();
       obj.x // 1
       ````
  
  4. apply调用
  
     ````javascript
     var x = 0;
     function test() {
     　console.log(this.x);
     }
     
     var obj = {};
     obj.x = 1;
     //此时this为obj对象
     obj.m = test;
     //通过apply调用后，由于没有参数，默认this指向全局对象
     obj.m.apply() // 0

## Q：为什么this很重要？

* A：`this` 允许复用函数时使用不同的上下文。（即：“this” 关键字允许在调用函数或方法时决定哪个对象应该是焦点。）

## Q：绑定this方法有哪些？

* A：

  * 显式绑定：apply、call、bind

  * 隐式绑定：

    * 链式调用方法`obj.fun()`

    * new 实例化一个对象

    * 使用ES6的箭头函数

      > 箭头函数中的this：
      >
      > * 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined

    * 在函数内部使用 `_this = this`

## Q：this的指向是什么？

* A：this 永远指向最后调用它的那个对象

# apply

## Q：是什么？

* A：是函数的一个方法，作用是改变函数的调用对象。

## Q：怎么用？

* A：它的第一个参数就表示改变后的调用这个函数的对象。
  * 参数为空时，默认调用全局对象。
  
  * 以用数组传参而且 `.apply` 会在函数中为你自动展开
  
    ````javascript
    const languages = ['JavaScript', 'Ruby', 'Python']
    
    // greet.call(user, languages[0], languages[1], languages[2])
    greet.apply(user, languages)
    ````

## Q：如何实现？

* A：

  ````javascript
  Function.prototype.bind = function (context,...innerArgs) {
    var me = this
    return function (...finnalyArgs) {
      return me.call(context,...innerArgs,...finnalyArgs)
    }
  }
  ````

# call

## Q：是什么？

* A：是每个函数都有的一个方法，它允许你在调用函数时为函数指定上下文。

## Q：能干什么？

* A：通过call方法，可以改变函数执行时的this指向。第一个参数会作为函数被调用时的上下文。（即：`this` 将会指向传递给 `call` 的第一个参数。）其余参数为函数的参数。

## Q：怎么用？

* A：

  ````javascript
  fun.call(thisArg[, arg1[, arg2[, ...]]])
  ````

  * thisArg：
  * [, arg1[, arg2[, ...]]：若干个参数列表

## Q：执行全局函数时发生了什么？

* A：

  ````javascript
  function say(word) {
    console.log(world);
  }
  say("Hello world");
  
  //js执行函数时会默认完成以下的步骤
  say.call(window, "Hello world");
  ````

  1.  把第二个到最后一个参数作为函数执行时要传入的参数
  2.  把函数执行时的this指向第一个参数
  3. 在上面这个特殊的上下文中执行函数

## Q：如何学会用cell替代法分析函数中的this？

* A：

  * 全局调用，相当于`cell(window,args)`;

    * 【示例一】

      ````javascript
      function hello(thing) {  
        console.log(this + " says hello " + thing);
      }
      
      person = { name: "caibirdme" }  
      person.hello = hello;
      
      person.hello("world") // 相当于执行 person.hello.call(person, "world")
      //{name:"caibirdme"} says hello world
      
      hello("world") // 相当于执行 hello.call(window, "world") 
      ````

    * 【示例二】

      ````javascript
      var x = 10;
      var obj = {
          x: 20,
          f: function(){
              console.log(this.x); //this equals obj
                      // ==> 20
              var foo = function(){ console.log(this.x); }
              foo(); // foo.call(window)
                      //foo中this被指定为window，所以==> 10
          }
      };
      
      obj.f();  // obj.f.call(obj)
      // ==> 20 10
      ````

    * 【示例三】

      ````javascript
      (function(name) {
        //
      })("aa");
      //等价于
      (function(name) {
        //
      }).call(window, "aa");
      ````

  * 链式调用，向函数上一层找。

## Q：如何实现call？

* A：

  ````javascript
  Function.prototype.newCall = function(context, ...parameter) {
    if (context === null || context === undefined) {
      context = window;
    } else {
      //处理当call传入的对象是null的时候，或者其他一些类型的时候
      context = Object.create(null)
    }
    //用Symbol原因是key可以不被随意改变
    let fn = Symbol()
    //通过this获取函数
    context[fn] = this
    //调用
    context[fn](...parameter);
    //为了保持对象一至，在执行完之后再把这个对象给删除了
    delete context[fn]
  }
  ````


# bind

## Q：是什么？

* A：`.bind` 和 `.call` 完全相同，除了不会立刻调用函数，而是返回一个能以后调用的新函数。

## Q：怎么用？

* A：与call用法一致。bind 是创建一个新的函数，必须要手动去调用。这个新函数的`this`被指定为`bind()`的**第一个参数**，而**其余参数将作为新函数的参数**，供调用时使用。

  ````javascript
  function.bind(thisArg[, arg1[, arg2[, ...]]]);
  ````

  * thisArg：调用**绑定函数**时作为`this`参数传递给**目标函数**的值。

    > 注意：关于thisArg
    >
    > 1. 使用`new`运算符构造绑定函数，则忽略该值
    > 2. 使用`bind`在`setTimeout`中创建一个函数(作为回调提供)时，作为`thisArg`传递的任何原始值都转换为`object`
    > 3. `bind`函数的参数列表为空，或者`thisArg`是`null`或者`undefined`，执行作用域的`this`将被视为新函数的`thisArg

  * arg1, arg2, ...：当**目标函数**被调用时，被预置入**绑定函数**的参数列表中的参数。
  * 返回值：返回一个**原函数的拷贝**，并拥有指定的`this`值和**初始参数**。

## Q：为什么使用`new`运算符构造绑定函数，该this被忽略？

* A：new的作用: 将`this`的值设置为新创建的空对象，而bind将new 中的this（即空对象）设置为**传递给它的第一个参数**也就是`thisArgs`。

## Q：使用场景？

* A：

  * 保存函数参数

    【示例】处理异步输出

    ````javascript
    for (var i = 1; i <= 5; i++) {
        // 缓存参数
        setTimeout(function (i) {
            console.log('bind', i) // 依次输出：1 2 3 4 5
        }.bind(null, i), i * 1000);
    }
    ````

  * 回调函数this丢失问题

    

