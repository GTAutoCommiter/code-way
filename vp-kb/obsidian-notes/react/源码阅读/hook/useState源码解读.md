---
id: react-source-code-useState
slug: /react-source-code-useState
title: useState源码解读
date: 2022-05-10T00:00:00.000Z
tags:
  - react/源码阅读/hook
---

1. react方法主入口==>react/packages/react/index.js

   ````javascript
   export {
     ...
     useState,
     ...
   } from './src/ReactClient';
   ````

2. 前往/src/ReactClient

   ````javascript
   import {
     ...,
     useState,
     ...
   } from './ReactHooks';
   ````

3. 前往/ReactHooks

   ```typescript
   export function useState<S>(
     initialState: (() => S) | S,
   ): [S, Dispatch<BasicStateAction<S>>] {
     const dispatcher = resolveDispatcher();
     return dispatcher.useState(initialState);
   }
   ```

   * resolveDispatcher

     ````javascript
     function resolveDispatcher() {
       const dispatcher = ReactSharedInternals.H;
       ...
       return ((dispatcher: any): Dispatcher);
     }
     ````

4. 前往/react/packages/shared/ReactSharedInternals.js

   ````javascript
   import * as React from 'react';
   
   const ReactSharedInternals =
     React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
   
   export default ReactSharedInternals;
   ````

5. 前往/node_modules/@types/react/index.d.ts

   ````typescript
   /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
   function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
   // convenience overload when first argument is omitted
   /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
   function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
   ````

6. 前往/react/packages/react-reconciler/src/ReactFiberHooks.js

   ````typescript
   const HooksDispatcherOnMount: Dispatcher = {
     ...,
     useState: mountState,
     ...,
   };
   ````

   * mountState

     ````typescript
     function mountState<S>(
       initialState: (() => S) | S,
     ): [S, Dispatch<BasicStateAction<S>>] {
       const hook = mountStateImpl(initialState);
       const queue = hook.queue;
       const dispatch: Dispatch<BasicStateAction<S>> = (dispatchSetState.bind(
         null,
         currentlyRenderingFiber,
         queue,
       ): any);
       queue.dispatch = dispatch;
       return [hook.memoizedState, dispatch];
     }
     ````

     * mountStateImpl

       ````typescript
       function mountStateImpl<S>(initialState: (() => S) | S): Hook {
         const hook = mountWorkInProgressHook();
         if (typeof initialState === 'function') {
           const initialStateInitializer = initialState;
           // $FlowFixMe[incompatible-use]: Flow doesn't like mixed types
           initialState = initialStateInitializer();
           if (shouldDoubleInvokeUserFnsInHooksDEV) {
             setIsStrictModeForDevtools(true);
             // $FlowFixMe[incompatible-use]: Flow doesn't like mixed types
             initialStateInitializer();
             setIsStrictModeForDevtools(false);
           }
         }
         hook.memoizedState = hook.baseState = initialState;
         const queue: UpdateQueue<S, BasicStateAction<S>> = {
           pending: null,
           lanes: NoLanes,
           dispatch: null,
           lastRenderedReducer: basicStateReducer,
           lastRenderedState: (initialState: any),
         };
         hook.queue = queue;
         return hook;
       }
       ````

       

