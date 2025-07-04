# 前端开发基础

## 页面运行机制

> 目标：理解“前端是怎么跑起来的”。

* 浏览器的工作流程：

  * 输入网址 → 浏览器发送 HTTP 请求

  * 接收 HTML → 渲染页面结构

  * 下载 CSS → 渲染页面样式

  * 下载 JS → 执行页面逻辑
  ```mermaid
    graph TD
    A[输入URL] --> B[发送HTTP请求]
    B --> C[接收HTML、CSS、JavaScript等资源]
    C --> D[构建DOM树]
    D --> E[执行JavaScript代码]
    E --> F[更新DOM或CSSOM]
    F --> G[构建渲染树]
    G --> H[绘制页面]
  ```

* 页面是靠浏览器解析 HTML、CSS、JS 渲染出来的

* DOM（页面结构） + CSSOM（样式结构）组成最终页面

* 前端负责“显示”和“交互”，后端负责“数据”

---

## HTML 基础结构

---

## CSS 基本样式与布局

---

## JavaScript 基础语法

---

## 浏览器存储机制

---
