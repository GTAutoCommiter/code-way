---
title: WorkTag
tags:
  - react/源码阅读/v17
---
版本：v17

位置：`packages/react-reconciler/src/ReactWorkTags.js`

| tag                         | 值   | 描述                                                |
| --------------------------- | ---- | --------------------------------------------------- |
| FunctionComponent           | 0    | 函数组件                                            |
| ClassComponent              | 1    | 类组件                                              |
| HostRoot                    | 3    |                                                     |
| HostPortal                  | 4    |                                                     |
| HostComponent               | 5    |                                                     |
| HostText                    | 6    |                                                     |
| Fragment                    | 7    | 片段，表示 React 片段 (`<React.Fragment>`或`<></>`) |
| Mode                        | 8    | 不同的渲染模式（如并发模式）。                      |
| ContextConsumer             |      |                                                     |
| ContextProvider             |      |                                                     |
| ForwardRef                  |      |                                                     |
| Profiler                    |      |                                                     |
| SuspenseComponent           |      |                                                     |
| MemoComponent               | 14   | 使用 React.memo 创建的组件。                        |
| SimpleMemoComponent         |      |                                                     |
| LazyComponent               |      |                                                     |
| IncompleteClassComponent    |      |                                                     |
| DehydratedFragment          |      |                                                     |
| SuspenseListComponent       |      |                                                     |
| ScopeComponent              |      |                                                     |
| OffscreenComponent          |      |                                                     |
| LegacyHiddenComponent       |      |                                                     |
| CacheComponent              |      |                                                     |
| TracingMarkerComponent      |      |                                                     |
| HostHoistable               |      |                                                     |
| HostSingleton               |      |                                                     |
| IncompleteFunctionComponent |      |                                                     |
| Throw                       | 29   | 在渲染过程中抛出的错误。                            |
