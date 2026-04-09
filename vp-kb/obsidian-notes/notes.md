---
layout: page
title: 知识库索引
---

# 📚 知识体系分类

<div class="kb-container">
  <a href="/java/" class="kb-card">
    <div class="kb-icon">☕</div>
    <h3>Java</h3>
    <p>后端核心、Spring 生态与 JVM 开发</p>
  </a>
  <a href="/javascript/" class="kb-card">
    <div class="kb-icon">JS</div>
    <h3>JavaScript</h3>
    <p>底层原理、ES6+ 与异步编程</p>
  </a>
  <a href="/typescript/" class="kb-card">
    <div class="kb-icon">TS</div>
    <h3>TypeScript</h3>
    <p>类型守卫、范型编程与工程化应用</p>
  </a>
  <a href="/react/" class="kb-card">
    <div class="kb-icon">⚛️</div>
    <h3>React</h3>
    <p>Hooks、Fiber 架构与组件设计</p>
  </a>
  <a href="/vue/" class="kb-card">
    <div class="kb-icon">🖖</div>
    <h3>Vue</h3>
    <p>响应式原理、Vue3 与 Composition API</p>
  </a>
  <a href="/frontend/" class="kb-card">
    <div class="kb-icon">🎨</div>
    <h3>Frontend Docs</h3>
    <p>前端通用文档与面试复习笔记</p>
  </a>
  <a href="/algorithm/" class="kb-card">
    <div class="kb-icon">🔢</div>
    <h3>算法</h3>
    <p>数据结构、LeetCode 题解与底层逻辑</p>
  </a>
  <a href="/network/" class="kb-card">
    <div class="kb-icon">🌐</div>
    <h3>计算机网络</h3>
    <p>HTTP/3、TCP/IP 协议栈深度解析</p>
  </a>
  <a href="/os/" class="kb-card">
    <div class="kb-icon">💻</div>
    <h3>操作系统</h3>
    <p>进程管理、IO 复用与内存模型</p>
  </a>
</div>

<style>
.kb-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}
.kb-card {
  display: block;
  padding: 30px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}
.kb-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: var(--vp-c-brand-light);
  background: var(--vp-c-bg-mute);
}
.kb-icon {
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: bold;
}
.kb-card h3 {
  margin: 0 0 10px 0 !important;
  font-size: 20px;
  font-weight: 700;
}
.kb-card p {
  margin: 0 !important;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
