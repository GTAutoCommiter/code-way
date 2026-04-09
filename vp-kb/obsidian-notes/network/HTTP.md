---
id: network-http
slug: /network-http
title: http-学习笔记
date: 2024-07-30T00:00:00.000Z
tags:
  - 网络协议
---

## 缓存

###  强缓存

*  不会向服务器发送请求，直接从本地缓存中读取文件并返回`Status Code: 200 OK` 

  | Status Code (状态码)        | 描述                                                         |
  | --------------------------- | ------------------------------------------------------------ |
  | `200 （form memory cache）` | 读取位置：内存<br />数据释放：浏览器关闭后                   |
  | `200 (from disk cache)`     | 读取位置：硬盘<br />数据释放：资源不会随着该页面的关闭而释放掉下次打开仍然会是`from disk cache` |

* 访问优先级：`memory cache`>`disk cache`>请求网络资源

* 相关`Response Headers`

  | Response Headers                                             | 描述               |
  | ------------------------------------------------------------ | ------------------ |
  | Expires                                                      | 指定缓存的生命周期 |
  | [Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) | 缓存控制           |

  > Cache-Control强缓存中常见值：
  >
  > * `no-cache`：每次请求需要校验服务器资源的新鲜度
  > * `max-age=31536000`：浏览器在一年内都不需要向服务器请求资源
  > * `public`：表示响应可被任何缓存区缓存
  > * `private`：只能针对个人用户，而不能被代理服务器缓存
  > * `no-store`：禁止一切缓存（即响应不被缓存）
  > * `no-cache`：执行协商缓存

### 协商缓存

* 会比对当前缓存与服务器中缓存新鲜度

  * 若当前缓存**够**新鲜：服务器返回` 304`，客户端从浏览器获取资源
  * 若当前缓存**不够**新鲜：则从服务器获取新缓存。

* 相关 Request/Response Headers

  | Request/Response Headers            | 描述                                                         |
  | ----------------------------------- | ------------------------------------------------------------ |
  | `Last-Modified`/`If-Modified-Since` | 匹配 Response Header 的 `Last-Modified` 与 Request 的 `If-Modified-Since` 是否一致 |
  | `Etag`/`If-None-Match`              | 匹配 Response Header 的 `Etag` 与 Request 的 `If-None-Match` 是否一致 |

  

## HTTPS

### TLS（SSL）加密方式

* `TLS`：传输层安全协议

* 目的：建立安全连接
  * 为通信双方提供识别和认证通道，从而保证通信的机密性和数据完整性。
* 提供服务：
  * 身份验证
  * 加密
  * 完整性

> ⚠️注意：两种协议并不兼容

* 加密流程： [TLS 握手（类似于 TCP 建立连接时的三次握手）](https://www.bilibili.com/video/BV1KY411x7Jp/?spm_id_from=333.337.search-card.all.click&vd_source=2f682a60feabf0f730ad09e0f980ce83)

  * 在 TLS 握手的过程中

    1. 通信双方交换消息以相互验证
    2. 相互确认，并确立它们所要使用的加密算法以及会话密钥 (用于对称加密的密钥)。

  * 握手详情

    ![](https://segmentfault.com/img/bVbCCMD)
