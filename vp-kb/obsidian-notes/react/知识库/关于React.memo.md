---
title: 关于React.memo
tags:
  - react/知识库
---
`React.memo` 是 React 提供的一个高阶组件（HOC），用于优化函数组件的渲染性能。它的作用是**避免不必要的渲染**，从而提高应用的性能。用通俗的话来说，`React.memo` 就像是一个“缓存”，它会记住组件的渲染结果，只有在 `props` 发生变化时才会重新渲染。

---

### **1. 什么是 `React.memo`？**
- `React.memo` 是一个高阶组件，它包裹一个函数组件，并返回一个新的组件。
- 这个新组件会在 `props` 没有变化时，直接复用上一次的渲染结果，避免不必要的渲染。

#### **基本用法：**
```jsx
import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.text}</div>;
});
```

---

### **2. 为什么需要 `React.memo`？**
- **性能优化**：在 React 中，父组件的重新渲染会导致所有子组件重新渲染，即使子组件的 `props` 没有变化。
- **避免不必要的渲染**：通过 `React.memo`，可以确保子组件只在 `props` 变化时重新渲染。

---

### **3. 使用 `React.memo` 的场景**
以下是一些适合使用 `React.memo` 的场景：

#### **3.1 纯展示组件**
- 如果组件只依赖 `props` 渲染 UI，且没有内部状态或副作用，可以使用 `React.memo`。
- 比如：
  ```jsx
  const UserInfo = React.memo(function UserInfo({ name, age }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  });
  ```

#### **3.2 频繁渲染的组件**
- 如果组件的父组件频繁重新渲染，但子组件的 `props` 很少变化，可以使用 `React.memo`。
- 比如：
  ```jsx
  const ListItem = React.memo(function ListItem({ item }) {
    return <li>{item.name}</li>;
  });
  ```

#### **3.3 复杂计算的组件**
- 如果组件的渲染需要复杂的计算，且计算结果只依赖 `props`，可以使用 `React.memo` 避免重复计算。
- 比如：
  ```jsx
  const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
    const result = expensiveCalculation(data);
    return <div>{result}</div>;
  });
  ```

---

### **4. 使用 `React.memo` 的注意事项**
#### **4.1 `props` 的浅比较**
- `React.memo` 默认使用浅比较（shallow comparison）来对比 `props`。
- 如果 `props` 是对象或数组，浅比较可能无法检测到变化。
- 比如：
  ```jsx
  const MyComponent = React.memo(function MyComponent({ config }) {
    return <div>{config.value}</div>;
  });
  
  // 即使 config.value 没有变化，config 对象的引用变化也会触发重新渲染
  <MyComponent config={{ value: 1 }} />
  ```

#### **4.2 自定义比较函数**
- 如果 `props` 是复杂对象，可以通过第二个参数传入自定义的比较函数。
- 比如：
  ```jsx
  const MyComponent = React.memo(
    function MyComponent({ config }) {
      return <div>{config.value}</div>;
    },
    (prevProps, nextProps) => {
      // 只有 config.value 变化时才重新渲染
      return prevProps.config.value === nextProps.config.value;
    }
  );
  ```

#### **4.3 不要滥用 `React.memo`**
- 对于简单的组件，使用 `React.memo` 可能不会带来明显的性能提升，反而会增加代码复杂度。
- 只有在确实需要优化性能时才使用 `React.memo`。

---

### **5. `React.memo` 与类组件的 `PureComponent`**
- `React.memo` 是函数组件的优化工具，类似于类组件的 `PureComponent`。
- `PureComponent` 会自动对 `props` 和 `state` 进行浅比较，避免不必要的渲染。

---

### **6. 总结**
- **`React.memo` 的作用**：避免函数组件在 `props` 没有变化时重新渲染。
- **适用场景**：纯展示组件、频繁渲染的组件、复杂计算的组件。
- **注意事项**：默认使用浅比较，复杂 `props` 需要自定义比较函数。
