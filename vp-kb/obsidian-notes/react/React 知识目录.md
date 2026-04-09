---
id: react-useSkill
slug: /react-react-useSkill
title: react知识目录
date: 2022-05-10T00:00:00.000Z
tags:
  - React
---

# React 知识目录

## 1. React 基础
### 1.1 React 简介  

### 1.2 JSX 语法  

### 1.3 组件与 Props  

* [单向数据流](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)
* [Props 的传递与校验](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/Props%20%E7%9A%84%E4%BC%A0%E9%80%92%E4%B8%8E%E6%A0%A1%E9%AA%8C)

### 1.4 状态与 State  

### 1.5 事件处理  

### 1.6 条件渲染  

### 1.7 列表与 Key  

### 1.8 表单处理  

### 1.9 组件通信（父子、兄弟、跨层级）  

* [状态提升](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/React%E7%8A%B6%E6%80%81%E6%8F%90%E5%8D%87)

### 1.10 React 组件类型：函数组件 vs 类组件  

* [函数组件与类组件](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E7%BB%84%E4%BB%B6)

---

## 2. React 高级特性
### 2.1 组件生命周期（类组件）  

* [函数组件与类组件生命周期](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)

### 2.2 Hooks 基础  

   - `useState`  
   - `useEffect`  
   - `useContext`  
   - `useReducer`  
   - `useRef`  
   - `useMemo` 与 `useCallback`  

### 2.3 自定义 Hooks  

### 2.4 高阶组件（HOC）  

### 2.5 Render Props  

### 2.6 错误边界（Error Boundaries）  

### 2.7 Portals  

### 2.8 代码分割与懒加载（React.lazy 和 Suspense）  

---

## 3. 状态管理
### 3.1 React 状态管理基础  

### 3.2 Context API  

* [Context API 实现全局状态管理](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/Context%20API%20%E5%AE%9E%E7%8E%B0%E5%85%A8%E5%B1%80%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86)

### 3.3 Redux 基础  

   - Action、Reducer、Store  
   - 使用 `react-redux`  
   - Redux Toolkit  

### 3.4 MobX  

### 3.5 Recoil  

### 3.6 Zustand  

### 3.7 状态管理工具对比与选型  

---

## 4. 路由与导航
### 4.1 React Router 基础  

   - `<BrowserRouter>` 和 `<HashRouter>`  
   - `<Route>`、`<Switch>` 和 `<Redirect>`  
   - 嵌套路由  

### 4.2 React Router Hooks  

   - `useHistory`  
   - `useLocation`  
   - `useParams`  
   - `useRouteMatch`  

### 4.3 动态路由与代码分割  

### 4.4 路由守卫与权限控制  

---

## **5. 性能优化**
### 5.1 React 渲染机制与虚拟 DOM  

* [React 的渲染流程](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/React%20%E7%9A%84%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B)

### 5.2 避免不必要的渲染  

   - `React.memo`  
     - [关于React.memo](https://lao-jiawei.github.io/docs/react/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%85%B3%E4%BA%8EReact.memo)

   - `useMemo` 与 `useCallback`  

### 5.3 代码分割与懒加载  

### 5.4 性能分析工具  

   - React DevTools  
   - Lighthouse  
   - Chrome Performance Tab  

### 5.5 优化长列表渲染  

   - 虚拟列表（React Window 或 React Virtualized）  

### 5.6 Web Vitals 与性能监控  

---

## **6. 测试**
### 6.1 单元测试  

   - Jest  
   - React Testing Library  

### 6.2 组件测试  

### 6.3 快照测试  

### 6.4 端到端测试  

   - Cypress  
   - Puppeteer  

### 6.5 测试覆盖率与持续集成  

---

## **7. 工程化与工具**
### 7.1 项目初始化  

   - Create React App  
   - Vite  

### 7.2 构建工具  

   - Webpack  
   - Babel  

### 7.3 代码格式化与 linting  

   - ESLint  
   - Prettier  

### 7.4 样式管理  

   - CSS Modules  
   - Styled Components  
   - Tailwind CSS  

### 7.5 环境变量与多环境配置  

### 7.6 部署与 CI/CD  

   - GitHub Actions  
   - Netlify  
   - Vercel  

---

## **8. React 生态**
### 8.1 UI 组件库  

   - Material-UI  
   - Ant Design  
   - Chakra UI  

### 8.2 数据请求  

   - Axios  
   - SWR  
   - React Query  

### 8.3 动画库  

   - React Spring  
   - Framer Motion  

### 8.4 表单管理  

   - Formik  
   - React Hook Form  

### 8.5 国际化（i18n）  

   - react-i18next  

---

## **9. 进阶主题**
### 9.1 TypeScript 与 React  

### 9.2 服务端渲染（SSR）  

   - Next.js  

### 9.3 静态站点生成（SSG）  

### 9.4 微前端架构  

### 9.5 WebAssembly 与 React  

### 9.6 React 与 Web3  

### 9.7 React Native 基础  

---

## **10. 最佳实践与设计模式**
### 10.1 组件设计原则  

   - 单一职责  
   - 可复用性  

### 10.2 状态管理最佳实践  

### 10.3 性能优化最佳实践  

### 10.4 代码组织与架构设计  

### 10.5 常见设计模式  

   - 容器与展示组件  
   - 高阶组件（HOC）  
   - 渲染属性（Render Props）  

---

## **11. 资源与社区**
### 11.1 官方文档与教程  

### 11.2 优质博客与文章  

### 11.3 开源项目与源码阅读  





# 组件


## Q：组件拆分原则是啥？

* A：把相关联的东西放一起（按功能、业务）
  * 横向（按业务、功能模块划分）
  * 纵向（应用、系统层级划分）

# 状态管理

## Q：使用场景？

* A：
  * 从前后端交互角度看
    * 要维护大量与服务器交互的数据
  * 从组件角度看
    * 某个组件状态要多个组件内共享
    * 某个状态需要在任何地方都可以拿到
    * 一个组件需要改变全局状态
    * ### 一个组件需要改变另一个组件的状态
