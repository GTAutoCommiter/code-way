---
title: 关于useMemo
tags:
  - react/知识库
---
`useMemo` 是 React 提供的一个 Hook，用于优化性能，避免不必要的计算和渲染。用通俗的话来说，`useMemo` 就像是一个“缓存”，它会记住某个计算结果，只有在依赖项变化时才会重新计算。

---

### **1. 什么是 `useMemo`？**
- `useMemo` 是一个 Hook，用于缓存计算结果。
- 它接收两个参数：
  1. 一个计算函数（返回需要缓存的值）。
  2. 一个依赖项数组（只有依赖项变化时才会重新计算）。

#### **基本用法：**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

### **2. 为什么需要 `useMemo`？**
- **性能优化**：在 React 中，组件的重新渲染会导致所有逻辑重新执行，即使某些计算结果没有变化。
- **避免不必要的计算**：通过 `useMemo`，可以确保只有在依赖项变化时才重新计算，减少不必要的性能开销。

---

### **3. 使用 `useMemo` 的场景**
以下是一些适合使用 `useMemo` 的场景：

#### **3.1 复杂计算**
- 如果某个计算结果需要复杂的计算（如排序、过滤、数学运算），且计算结果只依赖某些变量，可以使用 `useMemo`。
- 比如：
  ```jsx
  const sortedList = useMemo(() => {
    return largeList.sort((a, b) => a.value - b.value);
  }, [largeList]);
  ```

#### **3.2 避免子组件不必要的渲染**
- 如果父组件传递的 `props` 是计算后的值，且这个值只在某些依赖项变化时才变化，可以使用 `useMemo` 避免子组件不必要的渲染。
- 比如：
  ```jsx
  const childProps = useMemo(() => {
    return { value: computeValue(a, b) };
  }, [a, b]);
  
  return <ChildComponent {...childProps} />;
  ```

#### **3.3 优化渲染性能**
- 如果某个值在渲染过程中被多次使用，且计算成本较高，可以使用 `useMemo` 缓存这个值。
- 比如：
  ```jsx
  const formattedDate = useMemo(() => {
    return formatDate(date);
  }, [date]);
  ```

---

### **4. 使用 `useMemo` 的注意事项**
#### **4.1 不要滥用 `useMemo`**
- `useMemo` 本身也有一定的性能开销，如果计算非常简单，使用 `useMemo` 可能反而会降低性能。
- 只有在确实需要优化性能时才使用 `useMemo`。

#### **4.2 依赖项数组**
- 依赖项数组中的变量变化时，`useMemo` 会重新计算。
- 如果依赖项数组为空，`useMemo` 只会在组件挂载时计算一次。
- 如果省略依赖项数组，`useMemo` 会在每次渲染时重新计算。

#### **4.3 与 `useEffect` 的区别**
- `useMemo` 用于缓存计算结果，返回值可以直接用于渲染。
- `useEffect` 用于执行副作用（如数据获取、DOM 操作），没有返回值。

---

### **5. `useMemo` 与 `React.memo` 的区别**
- **`useMemo`**：缓存计算结果，避免不必要的计算。
- **`React.memo`**：缓存组件的渲染结果，避免不必要的渲染。

---

### **6. 代码示例**
以下是一个完整的示例，展示如何使用 `useMemo` 优化性能：

```jsx
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ list, filter }) {
  // 使用 useMemo 缓存过滤后的列表
  const filteredList = useMemo(() => {
    return list.filter(item => item.value > filter);
  }, [list, filter]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const [list, setList] = useState([
    { id: 1, name: 'Apple', value: 10 },
    { id: 2, name: 'Banana', value: 5 },
    { id: 3, name: 'Orange', value: 8 },
  ]);
  const [filter, setFilter] = useState(0);

  return (
    <div>
      <button onClick={() => setFilter(5)}>Filter > 5</button>
      <ExpensiveComponent list={list} filter={filter} />
    </div>
  );
}

export default App;
```

---

### **7. 总结**
- **`useMemo` 的作用**：缓存计算结果，避免不必要的计算和渲染。
- **适用场景**：复杂计算、避免子组件不必要的渲染、优化渲染性能。
- **注意事项**：不要滥用，确保依赖项数组正确。
