---
id: javascript-shouldKnow-objCreateAndObjAssign
slug: /javascript-shouldKnow-objCreateAndObjAssign
title: Object.create 和 Object.assign
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/JavaScript工程师都应懂的33个概念
---
# Object.create

## Q：能干啥？

* A：以一个现有对象作为原型，创建一个新对象。

## Q：怎么用？

* A：

  ````javascript
  Object.create(proto)
  Object.create(proto, propertiesObject)
  ````

  * `proto`：新创建对象的原型对象。
  * `propertiesObject`：

## Q：什么情况下会报错？

* A：如果 `proto` 既不是`null`，也不是`Obj`，抛出`TypeError`

## 关于Object.create创建实例对象

### Q：使用场景是什么？

* A：构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象。

### Q：怎么用？

* A：

  ````javascript
  var person1 = {
    name: '张三',
    age: 38,
    greeting: function() {
      console.log('Hi! I\'m ' + this.name + '.');
    }
  };
  
  //对象person1是person2的模板，后者继承了前者的属性和方法。
  var person2 = Object.create(person1);
  
  person2.name // 张三
  person2.greeting() // Hi! I'm 张三.
  ````

# Object.assign

## Q：能干啥？

* A：将一个或者多个*源对象*中所有可枚举的自有属性复制到*目标对象*，并返回修改后的目标对象。

## Q：怎么用？

* A：

  ````javascript
  Object.assign(target, ...sources)
  ````

  * `target`：需要应用源对象属性的目标对象，修改后将作为返回值。
  
    > PS：`undefined`和`null`不可以作为target，但是作为`sources`却不会报错
  
  * `sources`：一个或多个包含要应用的属性的源对象。
  
  * 返回值：`target`对象

## Q：属于那种拷贝？

* A：浅拷贝，只复制属性值。假如源对象是一个对象的引用，它仅仅会复制其引用值。

## Q：常见用法有哪些？

* A：

  * 浅拷贝

    >* 只会拷贝源对象自身的并且可枚举的属性到目标对象身上
    >
    >* 会跳过那些值为 null 或 undefined 的源对象
    >* 拷贝过程中断，已经拷贝成功的属性不会受到影响，还未拷贝的属性将不会再被拷贝。

  * 合并多个对象

    > * 后来的源的属性将类似地覆盖早先的属性。

  * 合并具有相同属性的对象

    > * 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。

  * 拷贝Symbol类型属性

## Q：哪些元素会被拷贝？

* A：只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。

  * `Object.assign`拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（`enumerable: false`）

  > 注意：同名二级对象拷贝会被整个替换掉
  >
  > ````javascript
  > const target = { a: { b: 'c', d: 'e' } }
  > const source = { a: { b: 'hello' } }
  > Object.assign(target, source)
  > // { a: { b: 'hello' } }
  > ````
