---
id: javascript-shouldKnow-higherOrderFunctions
slug: /javascript-shouldKnow-higherOrderFunctions
title: 'map, reduce, filter 等高阶函数'
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---
#   构造函数

## Q：是什么？

* A：专门用来生成实例对象的函数。
  * JavaScript 语言使用构造函数（constructor）作为对象的模板。

## Q：特点是什么？

* A：
  * 函数体内部使用了`this`关键字，代表了所要生成的对象实例。
  * 生成对象的时候，必须使用`new`命令。
  * 构造函数名一般为大写字母开头

## Q：构造函数如何实现继承？

* A：

  * 方法一：构造函数绑定

    * 使用call或apply方法，将父对象的构造函数绑定在子对象上

      ````javascript
      function Animal(){
        this.species = "动物";
      }
      function Cat(name,color){
        //继承Animal
        Animal.apply(this, arguments);
        this.name = name;
        this.color = color;
      }
      
      var cat1 = new Cat("大毛","黄色");
      alert(cat1.species); // 动物
      ````

  * 方法二： prototype模式（常见）

    * 若子类的prototype对象，指向一个父类的实例，那么所有子类的实例，就能继承父类了。

      ````javascript
      //将子类的prototype对象，指向一个父类的实例
      //它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
      Cat.prototype = new Animal();
      
      //任何一个prototype对象都有一个constructor属性，指向它的构造函数。
      //若没有这行，Cat.prototype.constructor指向Animal。
      Cat.prototype.constructor = Cat;
      
      var cat1 = new Cat("大毛","黄色");
      
      alert(cat1.species); // 动物
      ````

      > 注意：
      >
      > * 如果替换了prototype对象，必需为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。
      >
      >   ````javascript
      >   o.prototype = {};
      >   o.prototype.constructor = o;
      >   ````
    
  * 方法三：直接继承prototype
  
    1. 先将子类`prototype`指向父类`prototype`
    2. 再改变子类构造函数
    3. 最后创建子类实例
  
    ````javascript
    function Animal(){ }
    
    Animal.prototype.species = "动物";
    
    Cat.prototype = Animal.prototype;
    Cat.prototype.constructor = Cat;
    var cat1 = new Cat("大毛","黄色");
    
    alert(cat1.species); // 动物
    ````
  
    * 优点：效率比较高（不用执行和建立父类的实例），比较省内存
    * 缺点：子类`prototype`和父类`prototype`都指向同一个对象（即：子类可以对父类的`prototype`进行修改）
  
  * 方法四： 利用空对象作为中介
  
    ````javascript
    function extend(Child, Parent) {
      //F是空对象，所以几乎不占内存。
      var F = function(){};
      F.prototype = Parent.prototype;
      Child.prototype = new F();
      Child.prototype.constructor = Child;
      
      //意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
      //等于在子对象上打开一条通道，可以直接调用父对象的方法。
      //为了实现继承的完备性，纯属备用性质。
      Child.uber = Parent.prototype;
    }
    
    extend(Cat,Animal);
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ````
  
  * 方法五：拷贝继承
  
    * 把父对象的所有属性和方法，拷贝进子对象
  
    ````javascript
    //将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。　
    function extend2(Child, Parent) {
      var p = Parent.prototype;
      var c = Child.prototype;
      for (var i in p) {
        c[i] = p[i];
      }
      c.uber = p;
    }
    
    extend2(Cat, Animal);
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ````

## Q：如何给构造函数添加属性？

* A：将属性添加至构造函数原型上。

  ````javascript
  //✅
  Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  //❌
  Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  ````

## Q：如何使用super实现继承

* A：

  ````javascript
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  }
  ````

  * super相当于调用父类的构造函数，所传的参数，在父类构造函数中可以接受到。

# new命令

## Q：new使用时发生了什么？

* A：执行构造函数，返回一个实例对象。相当于使用一个立即函数。每当用 `new` 调用函数时，JavaScript 解释器都会在底层创建一个全新的对象并把这个对象当做 `this`。

  1. 首先创建一个空对象，然后赋值给this。
  2. 执行函数，通常修改this对象，增加一些新的属性。
  3. `this`被返回。
  
  ````javascript
  function person(name) {
    this.name = name;
  }
  var foo = new person("deen");
  //通过new创建了一个对象
  //new是一种语法糖，new person等价于
  var bar = (function(name) {
    var _newObj = {
      constructor : person,
      __proto__ : person.prototype,
    };
    _newObj.constructor(name); // _newObj.constructor.call(_newObj, name)
    return _newObj;
  })();
  ````

## Q：如果忘了使用`new`命令，直接调用构造函数会发生什么事？

* A：构造函数就变成了普通函数，并不会生成实例对象。`this`这时代表全局对象。

  ````javascript
  var Vehicle = function (){
    this.price = 1000;
  };
  
  var v = Vehicle();
  
  v // undefined
  //price属性变成了全局变
  price // 1000
  ````

## Q：构造函数内部有return语句会发生什么？

* A：

  * 若return对象，则返回return指定的对象

    ````javascript
    var Vehicle = function (){
      this.price = 1000;
      return { price: 2000 };
    };
    
    (new Vehicle()).price
    // 2000
    ````

    > 注意：
    >
    > * 如果`return`语句返回的是一个跟`this`无关的新对象，`new`命令会返回这个新对象，而不是`this`对象。

  * 否则，就会不管`return`语句，返回`this`对象。

    ````javascript
    var Vehicle = function () {
      this.price = 1000;
      return 1000;
    };
    
    (new Vehicle()) === 1000
    // false
    ````

## Q：构造函数内部如何知道是否使用new指令？

* A：可以使用`new.target`属性。

  * 如果当前函数是`new`命令调用，`new.target`指向当前函数
  * 否则为`undefined`。

  ````javascript
  function f() {
    console.log(new.target === f);
  }
  
  f() // false
  new f() // true
  ````


# 对象

## Q：是什么？

* A：每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。
  * 对象是单个实物的抽象。
  * 对象是一个容器，封装了属性（property）和方法（method）。

## Q：有什么特征？

* A：

  * 可以复用，通过继承机制还可以定制。

  * 如果你有两个名称相同的键，则键会被替换掉。它仍然位于第一个键出现的位置，但是值是最后出现那个键的值。

    ````javascript
    const obj = { 
      a: 'one', 
      b: 'two', 
      a: 'three' 
    }
    console.log(obj)
    //{a:'three',b:'two'}
    ````

    


## Q：如何访问对象中的属性？

* A：

  ````javascript
  //方法一
  const value=obj.key;
  //方法二
  const value=obj['key'];
  ````

## Q：所有对象的键所属类型是啥？

* 所有对象的键（不包括 Symbol）在底层都是字符串。

  ````javascript
  const obj = { 1: 'a', 2: 'b', 3: 'c' }
  obj.hasOwnProperty('1')//true
  obj.hasOwnProperty(1)//false
  ````

## Q：如何判断一个对象是否拥有某一个属性/方法？

* A：通过in来判断，无论是该属性/方法存在于实例对象还是原型对象。

  ````javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.getName = function() {
    return this.name;
  }
  
  var p1 = new Person('tim', 10);
  console.log('name' in p1); // true
  ````


## Q：当调用一个对象不存在的函数时，会抛出什么类型的错误？

* A：TypeError

## Q：如何给对象添加一个新属性？

* A：

  * 方法一：`defineProperty`方法。

    ````javascript
    Object.defineProperty(targetObj, key, options);
    ````

    * `targetObj`：修改的目标对象（object）

    * `key`：键名（string）

    * `options`：

      | 键名         | 描述                    |
      | ------------ | ----------------------- |
      | value        | 键值                    |
      | writable     | 可写性                  |
      | enumerable   | 可枚举性（默认为false） |
      | configurable |                         |
      
      
  
  * 方法二：obj[key]

# 实例

## Q：是什么？

* A：通过构造函数创建出来的对象。

# instanceof

## Q：能干啥？

* A：可以判断实例对象的__proto__属性是否与构造函数的prototype属性指向同一地址，是的话返回true，否则fasle。

# 静态方法

## Q：特点是啥？

* 只能被创建它们的构造器使用，并且不能传递给实例。（即：不能被实例使用）

  * 若被使用则抛出 `TypeError` 错误。

  ````javascript
  class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }
  
  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' })
  freddie.colorChange('orange')
  ````

  
