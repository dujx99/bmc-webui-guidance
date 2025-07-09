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

> 目标：学会常见 JS 基础语法，能简单改页面上的脚本、调试常见逻辑。

### 作用

- 控制网页交互、响应用户操作

- 修改页面内容、样式、跳转、弹窗

  > ✅ 举例：点击按钮弹出消息

  <code class="live-demo" data-height=300>
  <div class="test">JS 点击操作演示</div>
  <button onclick="handleClick()">
    点我试试
  </button>

  <script>
    function handleClick() {
      alert('666！');
    }
  </script>
  </code>

### 常用语法

#### 变量与常量

- 变量：`var`、`let`

  - **块级作用域**：let 只在声明它的块内有效，var 没有块级作用域

  - **重复声明**：var 允许重复声明同一变量，let 会抛出错误

  <code class="live-demo" data-height=350>
  <div class="test">变量定义与修改</div>
  <button onclick="showNum()">
    显示数字
  </button>

  <script>
    var num = 0;
    function showNum() {
      alert(num);
    }
  </script>
  </code>

- 常量：`const`

  - **常量引用**和**必须初始化**

  <code class="live-demo" data-height=350>
  <div class="test">常亮定义与修改</div>
  <button onclick="showNum()">
    显示数字
  </button>

  <script>
    const num = 0;
    function showNum() {
      alert(num);
    }
  </script>
  </code>

#### 数据类型

- 常用数据类型

  | 类型          | 说明   | 示例               | 常见用途                       |
  | ------------- | ------ | ------------------ | ------------------------------ |
  | **Number**    | 数字   | `123`、`3.14`      | 计算、价格、数量               |
  | **String**    | 字符串 | `"hello"`、`'abc'` | 显示文字、用户名               |
  | **Boolean**   | 布尔值 | `true`、`false`    | 条件判断、开关                 |
  | **Null**      | 空值   | `null`             | 主动清空变量、无内容时         |
  | **Undefined** | 未定义 | `undefined`        | 变量未赋值，函数未返回结果时   |
  | **Object**    | 对象   | `{name: "Tom"}`    | 存储结构化数据，API 返回的数据 |
  | **Array**     | 数组   | `[1, 2, 3]`        | 列表、批量数据                 |

- Null 和 Undefined 的区别

  | 项目     | `null`                 | `undefined`                  |
  | -------- | ---------------------- | ---------------------------- |
  | 含义     | 主动设为“空”，表示“无” | 没有赋值，系统默认是“未定义” |
  | 谁设置的 | **开发人员自己设置**   | **JS 系统默认的**            |
  | 场景     | 主动清空变量、重置数据 | 变量未赋值、函数无返回值     |
  | 示意代码 | `let a = null;`        | `let b;`                     |

  ```js
  let a = null;
  let b; // JS 自动会赋值为 undefined
  console.log(a); // null
  console.log(b); // undefined
  ```

#### 条件判断

- if / else 语句

  ```js
  if (score >= 90) {
    console.log("优秀");
  } else if (score >= 60) {
    console.log("及格");
  } else {
    console.log("不及格");
  }
  ```

- 比较运算符

  - **提示**：推荐只用 `===` 和 `!==`，避免 `==` 和 `!=`，因为 `==` 会自动转换类型，容易出 bug

  ```js
  console.log(5 === "5"); // false
  console.log(5 == "5"); // true （不推荐）
  ```

  | **运算符** | **名称**   | **代码示例** | **结果** | **说明**                 |
  | ---------- | ---------- | ------------ | -------- | ------------------------ |
  | `==`       | 等于       | `5 == 5`     | `true`   | 只比较值，忽略类型       |
  |            |            | `"5" == 5`   | `true`   | 文本"5"等于数字 5        |
  | `===`      | 严格等于   | `5 === 5`    | `true`   | 必须值和类型都相同       |
  |            |            | `"5" === 5`  | `false`  | 类型不同（文本 vs 数字） |
  | `!=`       | 不等于     | `5 != 3`     | `true`   |                          |
  |            |            | `5 != "5"`   | `false`  | 值相等，忽略类型         |
  | `!==`      | 严格不等于 | `5 !== 3`    | `true`   |                          |
  |            |            | `5 !== "5"`  | `true`   | 值相等，但类型不同       |
  | `>`        | 大于       | `10 > 5`     | `true`   |                          |
  | `<`        | 小于       | `3 < 8`      | `true`   |                          |
  | `>=`       | 大于等于   | `5 >= 5`     | `true`   |                          |
  |            |            | `10 >= 5`    | `true`   |                          |
  | `<=`       | 小于等于   | `5 <= 5`     | `true`   |                          |
  |            |            | `3 <= 5`     | `true`   |                          |

- 三元运算符

  - 适合一行小判断，简洁但可读性稍差

  ```js
  const age = 20;
  const message = age >= 18 ? "成年人" : "未成年人";
  console.log(message);
  ```

- 逻辑运算符

  | 符号   | 含义        | 示例               |
  | ------ | ----------- | ------------------ |
  | `&&`   | 并且（AND） | `a > 0 && b > 0`   |
  | `\|\|` | 或者（OR）  | `a > 0 \|\| b > 0` |
  | `!`    | 取反（NOT） | `!(a > 0)`         |

- switch 语句

  ```js
  const color = "red";
  switch (color) {
    case "red":
      console.log("红色");
      break;
    case "blue":
      console.log("蓝色");
      break;
    default:
      console.log("未知颜色");
  }
  ```

#### 函数

- 基本写法

  ```js
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(2, 3)); // 输出 5
  ```

- 函数表达式

  ```js
  const sum = function (x, y) {
    return x * y;
  };
  console.log(sum(2, 3));
  ```

- 箭头函数

  ```js
  const sum = (a, b) => {
    return a + b;
  };
  console.log(sum(2, 3));
  ```

#### 数组 & 对象操作

- 数组操作

  - 基本写法

    ```js
    const fruits = ["Apple", "Banana", "Cherry"];
    ```

  - 数组访问

    通过下标从 0 开始编号，使用 [] 访问。

    ```js
    console.log(fruits[0]); // Apple
    ```

  - 常用方法

    | 方法      | 作用             | 示例                          |
    | --------- | ---------------- | ----------------------------- |
    | `push`    | 添加元素到末尾   | `fruits.push("Orange")`       |
    | `pop`     | 删除最后一个元素 | `fruits.pop()`                |
    | `forEach` | 遍历数组         | `fruits.forEach(item => ...)` |

    ```js
    const numbers = [1, 2, 3];
    numbers.push(4);
    console.log(numbers); // [1, 2, 3, 4]
    numbers.pop();
    console.log(numbers); // [1, 2, 3]
    numbers.forEach((num) => {
      console.log("当前数字：", num);
    });
    ```

  - 数组的长度

    ```js
    console.log(numbers.length); // 数组长度
    ```

- 对象操作

  - 基本写法

    ```js
    const user = {
      name: "Alice",
      age: 25,
    };
    ```

  - 对象访问

    ```js
    console.log(user.name); // Alice
    console.log(user["age"]); // 25
    ```

  - 修改与新增属性

    ```js
    user.age = 26; // 修改
    user.gender = "female"; // 新增
    ```

  - 遍历对象属性

    ```js
    for (const key in user) {
      console.log(key, user[key]);
    }
    ```

- 数组 + 对象 组合

  > 项目中最常见结构：**数组里面套对象**，比如接口返回的列表数据

  ```js
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  users.forEach((user) => {
    console.log(user.name + "：" + user.age);
  });
  ```

#### 常用浏览器方法

- console 调试方法

  | 方法              | 作用         | 示例                             |
  | ----------------- | ------------ | -------------------------------- |
  | `console.log()`   | 普通日志输出 | `console.log("调试日志", 变量);` |
  | `console.warn()`  | 警告信息     | `console.warn("警告信息");`      |
  | `console.error()` | 错误信息     | `console.error("错误信息");`     |

- 弹窗交互方法

  | 方法        | 作用       | 示例                                 |
  | ----------- | ---------- | ------------------------------------ |
  | `alert()`   | 弹出提示框 | `alert("操作成功");`                 |
  | `confirm()` | 弹出确认框 | `const res = confirm("确定吗？");`   |
  | `prompt()`  | 弹出输入框 | `const name = prompt("请输入姓名");` |

  ```js
  const sure = confirm("你真的要删除吗？");
  if (sure) {
    alert("已删除");
  } else {
    alert("已取消");
  }
  ```

- 页面跳转方法

  | 方法            | 作用         | 示例                                  |
  | --------------- | ------------ | ------------------------------------- |
  | `location.href` | 设置跳转地址 | `location.href = "https://bing.com";` |

#### 事件绑定

- 常见事件

  | 事件        | 含义                   | 典型场景       |
  | ----------- | ---------------------- | -------------- |
  | `click`     | 点击事件               | 按钮、链接     |
  | `input`     | 输入框输入事件         | 表单输入       |
  | `change`    | 输入框、下拉框变化事件 | 表单提交       |
  | `mouseover` | 鼠标悬停事件           | 菜单悬停、提示 |

- 直接绑定

  - **特点**：直接在 HTML 标签或 JS 中绑定，兼容性最强。
  - **缺点**：一个元素只能绑定一个同类型事件。

    <code class="live-demo" data-height=400>
    <!-- HTML 内联方式 -->
    <button onclick="handleClick()">点击我</button>
    <script>
      // JS 方式
      const button = document.querySelector('button');
      button.onclick = function() {
        console.log('按钮被点击了！');
      };
      // 若再次赋值会覆盖之前的事件
      button.onclick = function() {
        console.log('新的点击事件！');
      };
    </script>
    </code>

- 事件监听

  - **特点**：使用 `addEventListener`，支持多个同类型事件，可控制事件流阶段。
  - **优点**：更灵活，可监听冒泡 / 捕获阶段。

    <code class="live-demo" data-height=550>
    <button>点击我</button>
    <script>
      const button = document.querySelector('button');
      // 添加事件监听
      button.addEventListener('click', function() {
        console.log('第一次点击事件');
      });
      // 会与第一个事件共存
      button.addEventListener('click', function() {
        console.log('第二次点击事件');
      });
      // 捕获阶段监听
      document.body.addEventListener(
        'click',
        function() {
          console.log('捕获阶段触发');
        },
        true
      );
    </script>
    </code>

  - 解绑事件

    ```js
    btn.removeEventListener("click", handler);
    ```

## 浏览器存储机制

> 目标：掌握常见的浏览器存储机制

### localStorage

- 永久存储（除非手动清除）

- 跨页面、跨标签页可用

  | 方法                  | 作用         | 示例                                  |
  | --------------------- | ------------ | ------------------------------------- |
  | `setItem(key, value)` | 存数据       | `localStorage.setItem("user", "Tom")` |
  | `getItem(key)`        | 取数据       | `localStorage.getItem("user")`        |
  | `removeItem(key)`     | 删数据       | `localStorage.removeItem("user")`     |
  | `clear()`             | 清空所有数据 | `localStorage.clear()`                |

- **注意**：存的值都是**字符串**，存对象要手动转换

  ```js
  localStorage.setItem("info", JSON.stringify({ name: "Tom" }));
  const info = JSON.parse(localStorage.getItem("info"));
  ```

### sessionStorage

- 临时存储，页面关闭就清除

- 用法和 `localStorage` 完全一样，只是生命周期不同

  ```js
  sessionStorage.setItem("temp", "123");
  ```

  | 项目       | localStorage       | sessionStorage       |
  | ---------- | ------------------ | -------------------- |
  | 生命周期   | 永久，除非手动删除 | 关闭标签页即失效     |
  | 跨页面访问 | 支持               | 仅限同一页面         |
  | 使用场景   | 登录信息、用户设置 | 临时表单、一次性数据 |

### Cookie

- 一般用于登录信息、后端交互，前端少手工操作

- 会随 HTTP 请求自动发送到服务器

- 4KB 大小限制

  ```js
  // 设置
  document.cookie = "name=Tom";
  // 获取
  document.cookie;
  // 删除
  document.cookie = "name=;expires=" + new Date(0);
  ```
---
