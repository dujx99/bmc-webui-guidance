# BMC WebUI 技术栈

> 介绍 AMI 和 OpenBMC 的 WebUI 技术栈，以及开发中可能会用到的参考资料。

## AMI BMC WebUI 技术栈详解

AMI（American Megatrends Inc.）的 BMC WebUI 是商业固件 BMC 中常见的网页管理界面，广泛用于服务器远程管理，使用 **AMI BMC** 的项目示例：

> **G30 及以前、星云湖（G40）、东海（G50）、南海（G50）等。**

#### 📌 技术栈概览

| 技术                        | 作用                                               |
| --------------------------- | -------------------------------------------------- |
| **jQuery**                  | 主力框架，负责 DOM 操作、事件处理、AJAX            |
| **Bootstrap 3.x/4.x**       | UI 组件、响应式布局                                |
| **AJAX + JSON API**         | 前后端通信，通常是 REST 风格                       |
| **后台语言：C 或 CGI 脚本** | BMC 内部 HTTP 服务器（如 lighttpd）处理 CGI 请求   |
| **HTML5 + CSS3**            | 页面结构与样式（但通常为了兼容老浏览器会限制特性） |
| **Highcharts 等第三方插件** | 数据表格、图表等交互组件                           |

#### 📌 特点

- **强依赖 jQuery + Bootstrap**，代码多为面向过程、DOM 操作直写。

- UI 简陋但稳定，着重功能实现，不强调现代化体验。

- 一般不引入 Node.js 等现代构建工具，全靠浏览器运行。

---

## OpenBMC WebUI 技术栈详解

OpenBMC 是 [开源](https://github.com/openbmc/openbmc) 的 BMC 软件栈，它的 WebUI 经过多次技术演变，经历了**三代框架更替**：

1. [AngularJS（1.x）](https://github.com/openbmc/phosphor-webui)，项目示例：

   > **淮河（G40）、前海（G50）、白令海（G50）等。**

2. [Vue 2.x](https://github.com/openbmc/webui-vue)，项目示例：

   > **大运河（G60）、通天河（G60）等。**

3. [Vue 3.x](https://github.com/openbmc/webui-vue)（最新版），项目示例：

   > **G70 开发中，暂未拉取项目分支。**

---

### 📍 1. 第一代：AngularJS（约 2018 年前后）

| 技术                      | 作用                         |
| ------------------------- | ---------------------------- |
| **AngularJS 1.x**         | SPA 框架，双向绑定、指令系统 |
| **Bootstrap（早期版本）** | 响应式布局                   |
| **REST API**              | 前后端通信                   |
| **HTML5 + CSS3**          | 基础页面布局与样式           |

#### 特点：

- 典型的“老派 SPA”，用 `$scope` 双向绑定。

- 写法偏“重量级”，结构复杂，难维护。

- API 多为 BMC 的 Redfish 接口，直接绑定 REST 数据。

---

### 📍 2. 第二代：Vue 2.x（约 2019~2024 年）

| 技术                   | 作用                                         |
| ---------------------- | -------------------------------------------- |
| **Vue 2.x**            | 轻量级响应式框架，组件化开发                 |
| **Vuex**               | 状态管理（存储用户信息、会话、传感器数据等） |
| **Vue Router**         | 路由管理                                     |
| **BootstrapVue**       | UI 组件库，基于 Bootstrap 4 定制             |
| **Webpack**            | 模块打包、构建优化                           |
| **Node.js + npm/yarn** | 构建与依赖管理                               |
| **ES6+ JavaScript**    | 标准语法，模块化编程                         |
| **Axios**              | HTTP 请求工具（替代老的 AJAX）               |

#### 特点：

- 组件化、单文件组件 (`*.vue`)。

- 清晰的路由结构，每个页面都是独立组件。

- 数据交互通过 Vuex 集中管理。

- 支持热更新、模块懒加载，易维护扩展。

- 构建流程现代化，使用 webpack。

---

### 📍 3. 第三代：Vue 3.x（最新版本）

| 技术                                       | 作用                                   |
| ------------------------------------------ | -------------------------------------- |
| **Vue 3.x (Composition API)**              | 更强大、更灵活的响应式系统             |
| **Vue Router 4.x**                         | 更现代的路由管理                       |
| **Vite**                                   | 超快的现代前端构建工具（替代 webpack） |
| **Bootstrap 5 / Tailwind CSS（部分项目）** | 新一代 UI 框架（部分页面还在过渡）     |
| **ES Modules (ESM)**                       | 原生模块化                             |
| **TypeScript（可选）**                     | 增强型 JS（部分新模块使用）            |
| **Axios / Fetch API**                      | 网络请求                               |

#### 特点：

- 更快、更小、更现代，适合嵌入式 BMC 低资源环境。

- 全面组件化，可以切换 TypeScript。

- 优化了前端资源体积，减少了运行时内存占用。

- 更好的组合式逻辑复用（Composition API）。

- 积极引入 Tailwind CSS 和现代 UI 方案。

---

## 两者对比总结

| 项目         | **AMI BMC WebUI**                    | **OpenBMC WebUI**                        |
| ------------ | ------------------------------------ | ---------------------------------------- |
| 初代框架     | jQuery + Bootstrap                   | AngularJS 1.x                            |
| 当前主力框架 | 仍是 jQuery                          | Vue 2.x / Vue 3.x                        |
| 构建工具     | 无（纯静态 HTML + JS）               | Webpack（Vue2）、Vite（Vue3）            |
| 页面组织     | 靠 iframe 或 DOM 显示隐藏            | 真正的单页应用（SPA）                    |
| 依赖管理     | 无，直接写死 script 标签             | npm/yarn（现代前端生态）                 |
| 风格         | 功能导向、兼容老浏览器               | 现代化、响应式、自适应                   |
| API 通信     | jQuery AJAX                          | Axios / Fetch，集中管理接口              |
| 状态管理     | 无（直接全局变量或 jQuery 事件传递） | Vuex（Vue2）、Pinia（Vue3）              |
| 性能优化     | 基本无（靠浏览器缓存）               | Tree Shaking、代码分割、懒加载等现代优化 |

---

## 参考资料

### 📍 1. AMI BMC WebUI 相关技术栈资料

- jQuery 官方文档：https://api.jquery.com/
- Bootstrap 官方文档：https://getbootstrap.com/docs

---

### 📍 2. OpenBMC 官方文档

- OpenBMC 官方主页：[https://www.openbmc.org/](https://www.openbmc.org/)

- OpenBMC 源码路径

  - OpenBMC GitHub 主页：[GitHub - openbmc/openbmc: OpenBMC Distribution](https://github.com/openbmc/openbmc)

  - AngularJS 版本 WebUI（已停止维护）：[GitHub - openbmc/phosphor-webui](https://github.com/openbmc/phosphor-webui)

  - Vue3 版 WebUI（开发中）：[GitHub - openbmc/webui-vue](https://github.com/openbmc/webui-vue)

---

### 📍 3. AngularJS（S G40、G50）

- 官方文档（已停止维护）：https://code.angularjs.org/1.7.8/docs

- 学习资源：https://www.runoob.com/angularjs/angularjs-tutorial.html

---

### 📍 4. Vue 2.x（G60）

- 官方文档：https://v2.vuejs.org/

- Vuex 文档：https://vuex.vuejs.org/

- Vue Router 文档：https://router.vuejs.org/

- BootstrapVue 文档：https://bootstrap-vue.org/

- 中文文档：https://v2.cn.vuejs.org/

---

#### 📍5. Vue 3.x（G70）

- Vue 3 官方文档：[https://vuejs.org/](https://vuejs.org/)

- Pinia 官方文档：[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

- Vite 官方文档：[https://vitejs.dev/](https://vitejs.dev/)

- Tailwind CSS 文档：[https://tailwindcss.com/](https://tailwindcss.com/)

---

#### 📍6. 构建工具与现代技术

- Webpack：[https://webpack.js.org/](https://webpack.js.org/)

- npm 文档：[https://docs.npmjs.com/](https://docs.npmjs.com/)

- Axios 文档：[https://axios-http.com/](https://axios-http.com/)

---
