---
date: 2024-07-03T00:00:00.000Z
hide_title: true
title: getPerformance
tags:
  - docs/jvtools
---
<h3>
  <code>getPerformance()</code>
</h3>
获取当前页面性能参数

#### 添加版本

1.0.7

#### 返回

*(Object)*: 当前页面性能参数对象。

| 返回字段         | 含义            | 描述                                                         | 返回字段计算                                                 |
| ---------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| performance      | performance对象 |                                                              |                                                              |
| pageLoad         | 页面加载总耗时  | 指页面完全加载完所用的时间，这时候触发完成了 onload 事件     | loadEventEnd - startTime                                     |
| DNSParsing       | DNS解析耗时     | 指页面完全加载完所用的时间，这时候触发完成了 onload 事件     | domainLookupEnd - domainLookupStart                          |
| TCPConnection    | TCP连接耗时     | 指浏览器和WEB服务器建立TCP/IP连接所用的时间                  | connectEnd - connectStart                                    |
| dataTransfer     | 数据传输耗时    | 指服务器端返回第一个字节到最后一个字节所需要的时间           | responseEnd - responseStart                                  |
| HTMLLoad         | HTML加载完时间  | 指页面所有 HTML 加载完成（不包括页面渲染时间），即包括 DNS、TCP、Request 和 Response | responseEnd - startTime                                      |
| pageRendering    | 页面渲染耗时    | 页面完全加载时间 - HTML加载完成时间                          | loadEventEnd - responseEnd                                   |
| firstPacket      | 首包时间        | 指从页面请求到浏览器开始接收到数据所用的时间                 | responseStart - startTime                                    |
| loadResources    | 资源加载耗时    | 指 DOM 解析完成后到页面完全加载完所用的时间                  | loadEventEnd - domContentLoadedEventEnd                      |
| DOMParsing       | DOM解析耗时     | 指页面请求完成（responseEnd）后，到整个 DOM 解析完所用的时间，页面的复杂度决定了 DOM 解析耗时 | domContentLoadedEventEnd - responseEnd                       |
| networkRequest   | 网路请求耗时    | 指开始发送请求到服务器返回第一个字节所需要的时间             | responseStart - requestStart                                 |
| SSLConnection    | SSL连接耗时     | 只在 HTTPS 下有效，属于TCP连接耗时的一部分，指安全连接握手耗时 | connectEnd - secureConnectionStart                           |
| firstInteraction | 首次交互时间    | 指页面 DOMContentLoaded 事件触发的开始时间，这时候页面可以交互 | domInteractive - startTime                                   |
| whiteScreen      | 白屏时间        | 首次渲染时间，指页面出现第一个文字或图像所花费的时间         | reportTime: loadEventEnd - startTime<br />优先使用最新标准 performance.getEntriesByType('paint')[0].startTime，不支持的话使用 Chrome、IE 提供的 firstPaintTime，chrome.loadTimes().firstPaintTime 或 performance.msFirstPaint，还没有获取，取 domInteractive - startTime但是实际上报取的值是：loadEventEnd - startTime |

#### 例子

```javascript
getPerformance();
```

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/cs/getPerformanceReturn.jfif)
