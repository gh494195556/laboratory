# Shadow DOM

Shadow DOM 的作用就是“封装”，实现 custom element 内部 DOM 的独立、隐藏。

Shadow DOM 允许将隐藏的 DOM 树添加到常规的 DOM 树中，以 Shadow Root 为根节点，其下和普通 DOM 一样，可以是任意的元素。

Shadow DOM 的 DOM 操作与正常的 DOM 操作一致，但 Shadow DOM 中的操作与外部是隔离的。

**Shadow DOM 关键词**

- Shadow Host：Shadow DOM 的宿主 DOM 节点
- Shadow Tree：Shadow DOM 内部的 DOM 树
- Shadow Boundary：Shadow DOM 结束点
- Shadow Root：Shadow DOM 的根结点

## 基本用法

向 elementRef 元素附件 Shadow DOM，attachShadow() 方法返回新建的 Shadow DOM 的引用。

```javascript
let shadow = elementRef.attachShadow({ mode: 'open' });
let shadow = elementRef.attachShadow({ mode: 'closed' });
```

> mode
>
> - open: 允许 JavaScript 获取 Shadow DOM
> - closed: 不允许

通常，在自定义元素的 constructor 中，使用 this.attachShadow({ mode: 'open'}) 的方式附加一个 Shadow DOM，例如：

```javascript
class Dialog extends HTMLElement {
  constructor() {
    super();
    // 创建 shadow root
    let shadow = this.attachShadow({ mode: 'open' });
  }
}
```

**获取 Shadow DOM**

通过 shadowRoot 属性，可以得到自定义元素的 Shadow Root。

```javascript
let shadowDOM = customElement.shadowRoot;
```

## 案例

前面已经使用过 Shadow DOM 了，具体可 [查看 Demo]()。
