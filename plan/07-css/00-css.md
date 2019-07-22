## CSS(Cascading Style Sheets)层叠样式表

本篇为系统性的复习 css。

1. css 是一种标记语言，无需编译，浏览器直接执行
2. css 用于表现 HTML / XML
3. css 语法由 3 部分构成：选择器、属性、值。

**CSS 的 3 种使用方式：**

1. 外联（外部文件）
2. 内联（HTML 内部）
3. 行内（元素属性）
   优先级：行内 > 内联 > 外联

**多重样式优先级：**

1. \* {}：通用选择器
2. a {}: 元素选择器
3. .class {}: 类选择器
4. input[type] {}: 属性选择器
5. a:hover {}: 伪类选择器
6. #content {}: id 选择器
7. style="": 内联
8. !important: 无视优先级覆盖其他所有样式

**权重计算：**
||内联|id|类|元素|
|-|-|-|-|-|
|分值|1000|100|10|1|

```
div, #red{/* 1 + 100 */} > div, .blue{/* 1 + 10 */}
```

## 字体

个人喜好

## a:hover, a:active

- :hover 必须在 :visited 与 :link 后面
- :active 必须在 :hover 后面

```
font-family: sans-serif;
```

## 元素显示角色

display 用于设置元素的显示角色，默认为 inline。

**块级元素（block）**：生成一个元素框，默认填充父元素内容区域，前后自动添加分隔符，代表元素：`<p>`、`<div>`。

**行内元素（inline）**：在一个文本行内生成元素框，不会打断这行文本，代表元素：`<a>`、`<strong>`、`<em>`。

**@import 指令：**
