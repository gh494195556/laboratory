# 01-Web 前端技术基础

## 课本

> 《现代前端技术解析》

## 现代 Web 前端技术的发展与应用

在以前，网站一般而言都是一些静态信息，文本、图片的信息居多。随着技术的发展，网站的内容也越来越丰富。

如今获取网络信息的方式越来越多，除了电脑以外，现在更多的是通过移动设备或穿戴设备获取信息。

而不同的终端在获取互联网信息的最主要途径，依然是 Web 浏览器。

发展至今，浏览器中的应用已经越发的复杂，现代前端 Web 应用的内容变得更加庞杂，通常也是以多平台的形式展现。

相对而言，PC 机访问的网站会更加的复杂，而手机等终端访问的网站会看起来较为简单。但往往 PC 机在使用网站时往往会比手机要快。

和桌面端浏览器加载的内容相比，移动端的页面请求数量和体积大幅减小，页面内容结构也显得更加简单，但是加载时间却更长了，为什么？

### 现代 Web 前端技术概述

**1. 页面内容多而复杂，怎样保证开发效率？**
借助前端框架，高效封装 DOM 操作，例如 jQuery。

**2. 页面内容多且复杂，如何管理维护？**
采用模块化与组件化的思路来管理，例如 Web Component 注册自己的标签。

**3. 页面加载的内容很多，怎样尽快将网页内容显示给用户？**
先将一部分内容展示给用户，然后根据用户操作，异步加载用户需要的其他内容。

**4. 怎样限制页面内图片的大小，保证页面快速展示？**
使用高压缩比 webp 格式的图片。

**5. 对于重复打开的页面，能否让浏览器不再向服务器请求重复的内容？**
浏览器默认支持文件缓存，Status code: 304 Not Modified。

**6. 页面在移动端浏览器打开需要怎么处理？**
自动定位到一个更加简洁的页面。

### Web 前端技术的发展

静态黄页时期 -> 服务器组装动态网页数据时期 -> 后端为主 MVC 时期 -> 前后端分离时期 -> 纯前端 MV* -> 前端 Virtual DOM、MNV*、前后端同构

Web 前端技术发展的非常迅速而且已经发生了巨大的变化，唯一不变的是持续以效率和质量为导向的道路。

在效率方面，从前后端分离到出现各种封装的前端框架，都在解决前端编成开发效率的问题。

在性能方面，Virtual DOM 和 MNV\* 交互模式就是为了解决前端交互性能问题。

除此之外，前端工程、自动化构建、组件化、前端优化等技术解决方案的出现，也为现代前端开发的效率和质量提升作出了正要的贡献。

## 浏览器应用基础

**问：输入一个网址到页面展示都发生了什么？**

1. 浏览器接收到用户输入的网址后会开启一个线程来处理请求
2. 调用浏览器引擎对应方法分析加载 URL
3. DNS 解析获取该网站地址对应的 IP 地址，查询后连同浏览器 Cookie、userAgent 等信息向目标 IP 发出 GET 请求
4. HTTP 会话，浏览器向 Web 服务器发送报文
5. 进入网站的后台服务器并处理请求
6. 进入部署的后端应用，执行相应的函数
7. 服务器处理请求并返回响应报文，此时如果浏览器访问过该页面，缓存上有对应的资源，会与服务器最后修改的记录对比，一致则返回 304，否则返回 200 和对应内容
8. 浏览器开始下载 HTML 文档（响应报头状态码 200 时）或者从本地缓存读取文件内容（304 时）
9. 浏览器解析 HTML 构建 DOM 树，并且根据 HTML 中的标记请求下载指定的 MIME 类型文件（CSS、JavaScript）同时设置缓存内容
10. 页面开始解析渲染 DOM，CSS、JavaScript 开始作用。

### 浏览器组成结构

- 用户界面
- 网络
- JavaScript 引擎
- 渲染引擎
- UI 后端
- JavaScript 解释器
- 持久化数据存储

`浏览器引擎`可以在用户界面和渲染引擎之间传送指令，或在客户端本地缓存中读写数据等，是浏览器中各个部分之间互相通信的核心。

`网络功能模块`则是浏览器开启网络线程发送请求或下载资源文件的模块。

`浏览器渲染引擎`的功能是解析 DOM 文档和 CSS 规则，并将内容排版到浏览器中显示由央视的界面，因此也有人称之为`排版引擎`。

`JavaScript解释器`则是浏览器解释和执行 JavaScript 代码的部分，如 V8 引擎。

`数据持久化`则是涉及 cookie、localStorage 等一些客户端存储技术，可以通过浏览器引擎提供的 API 调用。

我们需要重点理解渲染引擎的工作原理，灵活运用数据持久化存储技术。

> 关于浏览器内核
> 目前主流浏览器内核有 4 类：
>
> 1. Trident，如：IE、360、搜狗
> 2. Gecko，如：Firefox
> 3. Presto，如：Opera（Opera 现在改用 Blink）
> 4. Webkit，如：Chrome、Safari

Blink，其实是 WebKit 的一个分支，添加了新特性，跨进程 iframe，DOM 移入 JavaScript 中提高 JavaScript 对 DOM 的访问速度等，目前较多的移动端应用内嵌的浏览器内核逐渐采用 Blink。

### 浏览器渲染引擎

**作用**
渲染引擎在浏览器中主要用于解析 HTML 文档和 CSS 文档，然后将 CSS 规则应用到 HTML 标签元素上，最后将 HTML 渲染到浏览器窗口中以显示具体的 DOM 内容。

**渲染引擎的主要工作流程**

```
解析 HTML，构建 DOM 树 -> 构建渲染树 -> 渲染树布局阶段 -> 绘制渲染树
```

解析 HTML 构建 DOM 树时，渲染引擎会先将 HTML 元素标签解析成由多个 DOM 元素对象节点组成的且具有节点父子关系的 DOM 树结构。

然后按照节点顺序提取计算使用的 CSS 规则并重新计算 DOM 树结构的样式数据，生成一个代样式描述的 DOM 渲染树对象。

DOM 渲染树生成后进入渲染树的布局阶段，根据每个渲染树节点在页面中的大小和位置，将节点固定到页面的对应位置上，这个阶段主要是布局属性（position、float、margin 等）。

布局结束后进入绘制阶段，将渲染树节点的北京、颜色、文本等信息应用到每个节点上（color、background 等），最终完成整个 DOM 在页面的显示。

页面生成后，如果页面的元素位置发生了变化，就要从布局阶段开始重新渲染，也就是`页面重排`，所以页面重排一定会进行后续重绘；如果页面的元素只是显示样式改变而布局不变，那么页面内容改变将从绘制阶段开始，也称为`页面重绘`。应尽可能避免页面重排，减少页面重绘。

渲染引擎对 DOM 渲染树的解析和输出时逐步进行的，所以渲染树前面的内容可以先渲染展示，这样就保证了较好的用户体验。所以如果在 HTML 的显示内容当中插入 script 脚本，在读取到脚本时，解释执行往往会阻塞页面结构的渲染。

不同浏览器内核的解析渲染过程略有不同，Webkit 与 Gecko 渲染 DOM 的主要区别在于解析 HTML 或 CSS 文档生成渲染树的过程：

**Webkit**内核中的 HTML 和 CSS 解析可以认为是并行的；**Gecko**则是先解析 HTML 生成 Content Sink（构建 DOM 结构树的工厂方法）后再开始解析 CSS。**Webkit**解析后的渲染对象被称为 Render Tree，而**Gecko**解析后的渲染对象则称为 Frame Tree。

[webkit_renderDOM]()
[gecko_renderDOM]()

### HTML 文档解析

**HTML 文档解析过程是将 HTML 文本字符串逐行解析生成具有父子关系的 DOM 节点树对象的过程。**

<html>：HTMLHtmlElement；<header>、<nav>、<section>、<footer>这些布局类标签的DOM类型均为 `HTMLElement`；<div>、<ul>、<hr>、<span>等类似的都是 \`HTML${标签名}Element\` 类型。

一般情况下也就这三种类型的 DOM 类型

也可以用以下方式查看 DOM 类型：

```
let element = document.querySelector('div');
console.log(element.toString().slice(8, -1));// HTMLDivElement
```

### CSS 解析

**CSS 解析与 HTML 解析类似，将 CSS 文本通过词法解析生成 CSS 分析树，不同的是 HTML 使用类似 XML 结构的语法解析方式，而 CSS 使用 CSSRule 模型。**

关于 CSS 权重

> !important > 内联(1000) > id(100) > class(10) > 元素(1)

## 浏览器数据持久化存储技术

浏览器数据持久化也叫做浏览器缓存（Browser Caching），浏览器端缓存一般分为 **9** 种：

1. HTTP 文件缓存
2. LocalStorage
3. SessionStorage
4. indexDB
5. Web SQL
6. Cookie
7. CacheStorage
8. Application Cache
9. Flash

### HTTP 文件缓存

HTTP 文件缓存是基于 HTTP 协议的浏览器端文件级缓存机制。在文件重复请求的情况下，浏览器可以根据 HTTP 响应的协议头信息判断是从服务器端请求文件还是从本地读取文件。

可以添加 <meta> Expires 或 Cache-Control 来设置过期时间。

### LocalStorage

localStorage 是 HTML5 的一种本地缓存方案，目前主要用于浏览器端保存体积较大的数据，localStorage 在不同的浏览器中长度限制不同。
单个域名下浏览器限制。

同一个浏览器多个标签访问同一个域名，localStorage 是共享的。

| 浏览器         | 最大长度 |
| -------------- | -------- |
| IE8+           | 5MB      |
| Firefox8+      | 5.24MB   |
| Opera          | 2MB      |
| Chrome、Safari | 2.6MB    |

### sessionStorage

sessionStorage 在浏览器关闭时会自动清空。

### Cookie

Cookie 指网站为了辨别用户身份或 Session 跟踪而储存在用户浏览器端的数据。Cookie 信息一般会通过 HTTP 请求发送到服务器端。Cookie 分为 Session Cookie 和持久型 Cookie，持久型的 Cookie 加密保存在硬盘上（\documents and settings\userName\cookie）。HttpOnly 参数可以设置为 Cookie 只能通过 HTTP 请求头发送到服务器端进行读写操作。

### WebSQL

WebSQL 是浏览器端用于存储较大数据的缓存机制，目前支持的浏览器较少，Chrome 是有的（不是 HTML5 规范）。

### IndexDB

IndexDB 也是可以在客户端存储大量结构化数据并且能在这些数据上使用索引进行高性能检索的一套 API（不是 HTML5 规范）。

### Application Cache

Application Cache 是一种允许浏览器通过 manifest 配置文件在本地有选择性的存储 JavaScript、CSS、图片等静态资源的文件级缓存机制。

注意：Application Cache 已经开始被标准弃用，渐渐将会用 `ServiceWorkers` 代替

### CacheStorage

CacheStorage 时在 ServiceWorker 规范中定义的，可用于保存每个 ServiceWorker 声明的 Cache 对象。

### Flash 缓存

目前应用较少，他主要基于网页端 Flash。

###总结
目前可以在项目中配置应用的只有 HTTP 缓存、localStorage、Cookie。ServiceWorker 将来可能被使用，目前兼容性欠缺。
