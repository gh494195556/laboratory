# Web Components

> Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的 web 应用中使用它们。

## 概念

有时候我们可能将一套代码组合成一个可复用的元素，之后就可以在项目中使用这个元素，而不用做重复的劳动。

Web Components 旨在解决这些问题，它由三项主要技术组成，他们可以一起使用来创建封装功能的定义元素，可以在你喜欢的任何地方复用，并且不必担心代码冲突。

- Custom elements（自定义元素）
- Shadow DOM（影子 DOM）
- HTML templates（HTML 模板）

**1. Custom elements**
一组 JavaScript API，允许您定义 Custom elements 及其行为，然后可以在您的用户界面中按照需要使用他们。

**2. Shadow DOM**
一组 JavaScript API，用于将封装的 Shadow DOM Tree 附加到元素（与主文档的 DOM 分开呈现）并控制其关联的功能。通过这种方式，可以保持元素的功能私有而不用担心与文档其他部分冲突。

**3. HTML templates**
`<template>`和`<slot>`元素使您可以编写不在呈现页面中显示的标记模板。他们可以作为自定义元素结构的基础被多次复用。

## 使用

**自定义元素注册方法的定义**

> (method) CustomElementRegistry.define(name: string, constructor: Function, options?: ElementDefinitionOptions): void

由此可见注册一个元素至少需要提供一个元素名和一个构造器。

注册一个 web component 的 **基本** 方法如下：

1. 创建一个带有构造函数的类，为 `CustomElementRegistry.define()` 第二个参数做准备。
2. 使用 `CustomElementRegistry.define()` 方法注册自定义的元素。
3. （可选）使用 `Element.attachShadow()` 方法将一个 shadow DOM 附加到自定义元素。
4. （可选）使用 `<template>` 和 `<slot>` 定义一个 HTML 模板。
5. 作为一个 HTML 元素使用注册的元素名称。

## \<hello-world\>

超简单 `<hello-world>` 自定义元素:

```html
// 其他省略...
<body>
  <!-- 使用 hello-world custom component -->
  <hello-world></hello-world>
  <script>
    window.onload = (e) => {
      // 1. 定义 custom element constructor
      class HelloWorld extends HTMLElement {
        constructor() {
          super();
          // 2. 在此处为 hello-world 元素丰富内容
          this.textContent = 'Hello World.';
        }
      }
      // 3. 注册一个名为 hello-world 的函数
      customElements.define('hello-world', HelloWorld);
    };
  </script>
</body>
```

这样就算注册了一个 custom element。

## 复用

custom element 复用起来非常的方便，只需要把代码提取到一个单独的 js 文件，在需要的时候引入到 html 即可。

像这样：

**html-1**

```html
<body>
  <!-- 使用 hello-world custom component -->
  <hello-world></hello-world>
  <script src="hello-world.js"></script>
</body>
```

**html-2**

```html
<body>
  <h1>组件复用</h1>
  <hello-world></hello-world>
  <script>
    window.onload = (e) => {
      document.querySelector('hello-world').style.backgroundColor = '#369';
    };
  </script>
  <script src="hello-world.js"></script>
</body>
```

**js**

```javascript
// 1. 定义 custom element constructor
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    // 2. 在此处为 hello-world 元素丰富内容
    this.textContent = 'Hello World.';
  }
}
// 3. 注册一个名为 hello-world 的函数
customElements.define('hello-world', HelloWorld);
```
