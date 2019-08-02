# custom element

web components 标准的一个非常重要的特性是它可以将一些 HTML 与功能封装成一个 “HTML 标签”。

在没有接触 web components 之前，如果页面有一个功能，比如点击按钮，添加一个 html 代码块，该代码块功能一样，只是承载的数据不同。

对于我个人经验来说，写起来还是非常难受的，无论如何都需要写一堆操作 DOM 的代码，最终插入到某个元素中。

现在，有了 custom element，似乎可能更加优雅的完成上述的功能，不如就继续往下看吧。

## CustomElementRegistry interface

[CustomElementRegistry](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry) interface 提供了 4 个方法：

1. define(): 定义一个 custom element
2. get(): 获取一个 custom element 的 constructor
3. upgrade(): 提升 custom element node
4. whenDefined(): 元素被定义后会执行该回调

customElements 对象实现了 CustomElementRegistry interface，所以可以使用 customElements.define() 定义一个 custom element。

custom element 有 2 种：

1. 独立型（Autonomous custom elements）：继承 HTMLElement 类。
2. 扩展型（Customized built-in elements）：继承特定的元素类，比如 HTMLUListElement、HTMLDivElement 等。

## Autonomous custom elements

[autonomous-custom-element.html](https://github.com/bey6/laboratory/blob/master/07-general/01-web%20component/02-custom%20element/autonomous-custom-element.html)

案例实现了一个 <b-dialog> custom element，并且通过 attribute 接收一个外部参数。

![b-dialog.png](b-dialog.png)

## Customized built-in elements
