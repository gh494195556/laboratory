# Template 与 Slot

## Template

template 元素和他的子元素都不会被渲染到页面中，但是他可以被 JavaScript 引用。

[查看示例](01-template.html)

## Template 与 custom element

template 可以和 web components 一起使用，这样在构建 shadow DOM 时会非常的方便！

[查看示例](01-template-custome-element.html)

需要注意的是 style 也需要写在 template 中才会在 Shadow DOM 中生效。

## Slot

Slot 直译为插槽，他可以配合 Template 使用，就像他的名字一样，Slot 会在 Template 中预留一个插槽，插槽中的元素由使用方插入。

为了便于理解，来看一段代码：
[查看示例](02-slot.html)
