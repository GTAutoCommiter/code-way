---
title: React状态提升
tags:
  - react/知识库
---
**状态提升**是 React 中一个非常重要的概念，它可以帮助你在多个组件之间共享和管理状态。用通俗的话来说，状态提升就是把组件的状态“往上提”，放到它们的共同父组件中，然后通过 `props` 把状态和更新状态的函数传递给子组件。

---

### **1. 什么是状态提升？**
- **状态提升**就是把子组件的状态放到它们的父组件中管理。
- 父组件负责保存和更新状态，然后通过 `props` 把状态和更新状态的函数传递给子组件。
- 子组件通过 `props` 接收状态和函数，并根据需要调用这些函数来更新状态。

---

### **2. 为什么要用状态提升？**
- **共享状态**：当多个组件需要共享同一个状态时，状态提升可以避免重复代码。
- **保持一致性**：通过集中管理状态，可以确保多个组件之间的状态同步。
- **简化逻辑**：把状态管理放在父组件中，可以让子组件更专注于 UI 渲染。

---

### **3. 状态提升的例子**
假设我们有两个组件：`TemperatureInput`（温度输入框）和 `TemperatureDisplay`（温度显示框）。我们希望这两个组件共享同一个温度状态。

#### **3.1 不使用状态提升**
- `TemperatureInput` 和 `TemperatureDisplay` 各自管理自己的状态。
- 这样会导致状态不同步，比如输入框的值和显示框的值不一致。

#### **3.2 使用状态提升**
- 把温度状态提升到它们的父组件 `App` 中。
- `App` 组件负责管理温度状态，并通过 `props` 把状态和更新状态的函数传递给子组件。

---

### **4. 代码示例**
以下是一个使用状态提升的完整示例：

#### **4.1 父组件（App）**
```jsx
import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import TemperatureDisplay from './TemperatureDisplay';

function App() {
  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (newTemperature) => {
    setTemperature(newTemperature);
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureDisplay temperature={temperature} />
    </div>
  );
}

export default App;
```

#### **4.2 子组件（TemperatureInput）**
```jsx
import React from 'react';

function TemperatureInput({ temperature, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div>
      <label>Enter Temperature: </label>
      <input
        type="text"
        value={temperature}
        onChange={handleChange}
      />
    </div>
  );
}

export default TemperatureInput;
```

#### **4.3 子组件（TemperatureDisplay）**
```jsx
import React from 'react';

function TemperatureDisplay({ temperature }) {
  return (
    <div>
      <p>Current Temperature: {temperature}°C</p>
    </div>
  );
}

export default TemperatureDisplay;
```

---

### **5. 状态提升的好处**
1. **状态集中管理**：父组件负责管理状态，子组件只需要关心如何渲染和触发更新。
2. **避免状态不一致**：所有子组件都使用同一个状态，确保数据的一致性。
3. **代码复用**：子组件可以复用，因为它们不依赖自己的状态。

---

### **6. 状态提升的适用场景**
- **表单组件**：多个输入框需要共享同一个状态。
- **联动组件**：一个组件的状态变化会影响另一个组件的显示。
- **复杂 UI**：多个组件需要根据同一个状态更新 UI。

---

### **7. 总结**
- **状态提升**就是把子组件的状态放到父组件中管理，然后通过 `props` 传递给子组件。
- 它的核心思想是**单一数据源**，即状态只保存在一个地方，避免重复和不一致。
- 通过状态提升，你可以更好地管理 React 应用中的状态，让代码更清晰、更易维护。
