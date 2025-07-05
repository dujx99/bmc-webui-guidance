# 前端开发基础

## 页面运行机制

> 目标：理解“前端是怎么跑起来的”。

- 浏览器的工作流程：

  - 输入网址 → 浏览器发送 HTTP 请求

  - 接收 HTML → 渲染页面结构

  - 下载 CSS → 渲染页面样式

  - 下载 JS → 执行页面逻辑

  ```mermaid
  graph TD
  A[Enter URL] --> B[Send HTTP Request]
  B --> C[Receive HTML, CSS, JavaScript Resources]
  C --> D[Build DOM Tree]
  D --> E[Run JavaScript Code]
  E --> F[Update DOM And CSSOM]
  F --> G[Construct Render Tree]
  G --> H[Paint Page]
  ```

- 页面是靠浏览器解析 HTML、CSS、JS 渲染出来的

- DOM（页面结构） + CSSOM（样式结构）组成最终页面

- 前端负责“显示”和“交互”，后端负责“数据”

---

## HTML 基础结构

> 目标：认识常用标签及它们的属性，看懂页面结构。

### 常见标签

| 标签             | 用途 / 场景                    | 特点 / 备注                            |
| ---------------- | ------------------------------ | -------------------------------------- |
| `<div>`          | 区块容器，布局、分组           | 最常用标签，无语义，仅用于分组、布局   |
| `<span>`         | 行内容器，包裹文字、小图标     | 常用于局部文字样式调整、图标容器       |
| `<p>`            | 段落文本                       | 会自动换行，上下有间距                 |
| `<h1>` \~ `<h6>` | 标题（从大到小）               | SEO 友好、结构清晰，常用于页面标题     |
| `<a>`            | 超链接，跳转页面或下载文件     | 有 `href` 属性，通常配合按钮样式使用   |
| `<button>`       | 按钮，触发事件                 | 可点击，通常配合 JS 事件使用           |
| `<input>`        | 输入框，单行文本、密码、数字等 | 有多种类型（text、password、number）   |
| `<textarea>`     | 多行文本输入框                 | 用于较长的文本输入                     |
| `<img>`          | 图片展示                       | 有 `src` 属性，需指定图片地址          |
| `<ul>` / `<ol>`  | 列表容器（无序 / 有序）        | `ul` 常用于菜单、导航，`ol` 有数字序号 |
| `<li>`           | 列表项，放在 `ul` / `ol` 里    | 配合 `ul`、`ol` 使用，表示每一项       |
| `<select>`       | 下拉选择框                     | 用于单选、多选选项选择                 |
| `<option>`       | 下拉框中的选项                 | 必须放在 `<select>` 内部               |

### 常用属性

| 属性    | 常见用途         | 简单示例                                                               |
| ------- | ---------------- | ---------------------------------------------------------------------- |
| `id`    | 唯一标识、定位   | `<div id="header">`                                                    |
| `class` | 分组、样式       | `<div class="menu">`                                                   |
| `href`  | 链接地址         | `<a href="#">`                                                         |
| `src`   | 资源路径         | `<img src="logo.png">`                                                 |
| `alt`   | 图片替代文本     | `<img alt="Logo">`                                                     |
| `title` | 提示信息         | `<button title="提交">`                                                |
| `style` | 临时样式         | `<p style="color:red;">`                                               |
| `type`  | 输入框或按钮类型 | `<input type="text">`（文本框）<br>`<input type="password">`（密码框） |

### 页面结构布局的层级嵌套关系

- HTML 层级关系

  - 页面上所有内容，都是“盒子套盒子”

  - 每个标签就是“一个盒子”

  - 标签可以互相嵌套，形成 **父子关系**

- 三段式布局

  ```
  <body>
  ├─ <header>（头部）
  ├─ <main>（主体内容）
  │   ├─ <section>（某一块内容）
  │   │   └─ <p>文字</p>
  │   └─ <article>（另一块内容）
  └─ <footer>（底部）
  ```

### 演示

<code class="live-demo" data-height=250>
<div class="header">头部</div>
<div class="main">
  <div class="sidebar">侧边栏</div>
  <div class="content">&nbsp;&nbsp;主内容</div>
</div>
<div class="footer">底部</div>

<style>
  .main {
    display: flex;
  }
</style>
</code>

---

## CSS 基本样式与布局

> 目标：理解基本布局方式，能在实际工作中微调页面、修改样式。

### 作用与语法

- 设置颜色、字体、边距

- 控制布局、排列方式

- 基本语法

```css
选择器 {
  属性: 值;
}
```

### 常用选择器

| 选择器       | 用途                           | 示例             |
| ------------ | ------------------------------ | ---------------- |
| 标签名       | 选中所有该标签                 | `p { }`          |
| `.class`     | 选中指定类的元素               | `.menu { }`      |
| `#id`        | 选中特定 id 的元素             | `#header { }`    |
| `#id .class` | 选中特定 id 元素下指定类的元素 | `#left .box { }` |

### 盒子模型

- **盒子模型 = 元素的“空间结构”**，盒子模型由 4 部分组成：`content`、`padding`、`border`、`margin`，从内到外是：

  - 内容区（Content）：实际显示的内容，如文字、图片。

  - 内边距（Padding）：内容和边框之间的空白区域，控制内部空间。

  - 边框（Border）：包围元素的边框线条，常用于视觉效果、分隔。

  - 外边距（Margin）：盒子与其他元素之间的距离，控制外部间距。

### 常用样式属性

| 属性             | 功能     | 示例                           | 备注               |
| ---------------- | -------- | ------------------------------ | ------------------ |
| `color`          | 字体颜色 | `color: red;`                  | 支持英文、十六进制 |
| `background`     | 背景颜色 | `background: #f0f0f0;`         | 背景颜色/图片      |
| `font-size`      | 字体大小 | `font-size: 16px;`             | 单位 px、em、rem   |
| `text-align`     | 文本对齐 | `text-align: center;`          | 常用于标题、按钮   |
| `padding`        | 内边距   | `padding: 10px;`               | 内容与边框的距离   |
| `margin`         | 外边距   | `margin: 20px;`                | 元素与外部的距离   |
| `border`         | 边框     | `border: 1px solid #000;`      | 线条样式           |
| `width`/`height` | 宽高     | `width: 300px; height: 100px;` | 尺寸               |

<code class="live-demo" data-height=250>
<div class="test">CSS 属性演示</div>

<style>
  .test {
    color: red;
  }
</style>
</code>

### Flex 布局

> Flex 布局是当前主流布局方式，在 WebUI 项目中应用广泛

- 容器设 `display: flex;` → 子元素自动排列

- 启用方式：放在父容器上

- 常用属性：

| 属性              | 功能     | 示例                                            |
| ----------------- | -------- | ----------------------------------------------- |
| `flex-direction`  | 排列方向 | `row`（默认）、`column`                         |
| `justify-content` | 主轴对齐 | `center`、`space-between`、`flex-start`（默认） |
| `align-items`     | 侧轴对齐 | `center`、`flex-start`、`stretch`（默认）       |

<code class="live-demo" data-height=400>
<div>Flex 布局演示</div>
<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</div>

<style>
  .container {
    display:flex;
  }
  .box1 {
    background: lightcoral;
  }
  .box2 {
    background: lightblue;
  }
  .box3 {
    background: lightgreen;
  }
</style>
</code>

---

## JavaScript 基础语法

---

## 浏览器存储机制

---
