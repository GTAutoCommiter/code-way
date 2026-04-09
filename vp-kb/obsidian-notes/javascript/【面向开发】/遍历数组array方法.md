---
id: javascript-dev-throughTheArray
slug: /javascript-dev-throughTheArray
title: 遍历数组array方法
date: 2022-05-10T00:00:00.000Z
tags:
  - javascript/【面向开发】
---
遍历数组array方法

* 使用for遍历

  ````javascript
  let array=[1,2,3,4];
  for(let i=0;i<array.length-1;i++ ){
    console.log(array[i]);
  }
  ````

* 使用while遍历

  ````javascript
  let array=[1,2,3,4];
  let i=0
  while(i<array.length){
    console.log(array[i]);
    i++;
  }
  ````

* 使用for...in循环

  ````javascript
  let array=[1,2,3,4];
  for(let index in array){
    console.log(array[index]);
  }
  ````

  PS：for...in循环中若是null或undefined，则不执行

* 使用for...of循环

  ````javascript
  let array=[1,2,3,4];
  for(const num of array){
    console.log(num);
  }
  ````

* 使用forEach循环

  ````javascript
  let array=[1,2,3,4];
  array.forEach((num)=>{
    console.log(num);
  })
  ````

  > PS：不影响原数组，性能差



