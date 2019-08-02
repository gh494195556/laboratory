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
