---
id: javascript-dev-objCommonOptions
slug: /javascript-dev-objCommonOptions
title: 对象Object的常见操作
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向开发】
---
# 添加新属性到对象中

````javascript
const obj={};
//方法一：点符号添加属性
obj.newPropKey='新属性的值'
//方法二：方括号添加属性
obj['newPropKey2']='新属性的值'
````

# 删除对象的属性

````javascript
const obj={
  needDeleteProp:'value'
}
delete obj.needDeleteProp;	//使用delete关键字，需要删除的对象的属性
````

# 修改对象属性的值

````javascript
const obj={
  target:'want to change'
}
//方法一：点符号赋值
obj.target='change new word';
//方法二：方括号赋值
obj['target']='change new word';
````

# 查找对象是否存在该属性

方法一：in

````javascript
const obj={
  a:1,
  b:2,
  c:3,
  d:4,
}
console.log('a' in obj)//true
console.log('e' in obj)//false
````

* 无论该属性是在实例上还是在原型上 
  * true：存在该对象的原型或实例上
  * false：该对象原型或实例都不存在该属性

方法二：hasOwnProperty()

````javascript
function Person(){}
Person.prototype.name = "Lao";
Person.prototype.age = 22;
Person.prototype.job = "Software Engineer";
let person1 = new Person();
let person2 = new Person();
console.log(person1.hasOwnProperty("name")); // false

person1.name = "Jia";
console.log(person1.name); // "Jia"，来自实例
console.log(person1.hasOwnProperty("name")); // true
````

* 用来确认某个属性是在实例上还是原型对象上。
  * true：属性在实例上。
  * false：属性不在实例上。

方法三：列出该对象的所有属性，看是否包含

````javascript
const obj={
  a:1,
  b:2,
  c:3,
  d:4,
}
let keys = Object.getOwnPropertyNames(obj.prototype); //列出所有【实例】属性 [a,b,c,d]
keys.includes('a')//true;
keys.includes('e')//false;
````

# 拷贝对象

## 浅拷贝

* 创建一个新对象，仅复制原对象的一层属性，新对象和原对象共享同一个引用（即原对象属性值发生改变，新拷贝的对象属性值也会发生改变）；

### Object对象

方法一：扩展运算符

````javascript
const originalObject={name:'Lao',age:22,job:'FrontEnd Engineer'};

const shallowCopy={...originalObject};	//浅拷贝
````

方法二：Object.assgin()方法

````javascript
const originalObject={name:'Lao',age:22,job:'FrontEnd Engineer'};

const shallowCopy=Objec.assign({},originalObject);//浅拷贝
````

方法三：循环遍历和赋值

````javascript
const originalObject={name:'Lao',age:22,job:'FrontEnd Engineer'};

const shallowCopy = {};
for (let key in originalObject) {
  if (Object.prototype.hasOwnProperty.call(originalObject, key)) {
    shallowCopy[key] = originalObject[key];
  }
}
````

### Array对象

方法一：Array.prototype.slice() 方法

````javascript
const originalArray=[1,2,3,4];

const shallowCopy = originalArray.slice();
````

方法二：扩展运算符

````javascript
const originalArray=[1,2,3,4];

const shallowCopy = [...originalArray];
````

方法三：Array.from() 方法：

```javascript
const originalArray=[1,2,3,4];

const shallowCopy = Array.from(originalArray);
```



## 深拷贝

* 创建一个新对象，对象的属性是原始对象属性值的副本，深拷贝会递归复制对象及其所有嵌套对象，确保新对象与原对象完全独立，（即：修改新对象不会影响原对象。）

### Object对象

方法一：JSON.parse() 和 JSON.stringify()配合使用

````javascript
const originalObject={name:'Lao',age:22,job:'FrontEnd Engineer'};

const deepCopy = JSON.parse(JSON.stringify(originalObject));
````

1. 通过先将对象转换为 JSON 字符串
2. 然后再将 JSON 字符串转换为新的对象，实现深拷贝。

