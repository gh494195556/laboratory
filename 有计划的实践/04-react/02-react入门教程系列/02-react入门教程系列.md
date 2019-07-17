# 02-react 入门教程系列

## 初识 react 组件

示例代码：

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

结合示例代码，ShoppingList 继承自 React.Component 类，他是一个 **React 组件类**。

组件类通过 **props** 传递参数，通过 **render** 方法返回一个 **React 元素**。每个 **React 元素** 都是一个 JavaScript 对象，因此可以被保存和传递。

Render 方法中的一般使用 **JSX** 语法编写返回的元素， **JSX** 书写简单，并且最终都会被编译成 React.createElement() 等相关 JavaScript 代码生成预期的元素。

**JSX** 中书写 JavaScript 表达式需要用一对 `{}` 括起来。

## 阅读 index.js 代码

上一篇中，最后复制了官方给出的代码，扔到了 src/index.js 中，那么现在通过上面对组件的一个初步了解，回过头来再看一下这个 index.js。

**Square 组件**

Square 组件通过 render 方法返回了一个表示创建一个 button 标签的 react 元素，此元素的中间用一对 `{}` 预留了一个位置，仿佛要在此处做些什么。

```
class Square extends React.Component {
  render() {
    return <button className='square'>{/* TODO */}</button>;
  }
}
```

**Board 组件**

**1. renderSquare 方法**
Board 组件的 renderSquare 方法返回一个 <Square /> 元素，该元素与 Square 类名相同，第一直觉使我认为和这种书写方式可能会触发 Square 组件类 的 render 方法，得到与 render 函数相同类型的 react 元素。该方法接收一个参数 **i**，不过目前还没有使用过就是啦。

**2. render 方法**
render 方法的这种写法与上一个案例的有所不同，他在 return 前书写了 JavaScript 代码，而 JSX 要求书写 JavaScript 代码需要在一对 `{}` 中，因此可以猜测只有 return 的 react 元素对象的构建采用啦 JSX 语法，也就是例子中的 `return ()` 小括号里面是 JSX 语法。

```
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**Game 组件**
没什么好说的。

```
class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
```

通过 react dom 将 Game 组件渲染到 root 元素(div)中

```
ReactDOM.render(<Game />, document.getElementById('root'));
```

## 组件传参

通过 Props 传递参数。

> 目标：从外部向 Square 组件传递一个参数

**1. 修改 Board 组件类的 renderSquare 方法：**

```
renderSquare(i) {
  return <Square value={i}/>;
}
```

主要是添加了一个 `value={i}`，JSX 的语法规定 `{}`中是 JavaScript 表达式，因此 `value={i}` 是把本方法的参数给了 value 这个 attribute。

**2. 修改 Square 组件类的 render 方法：**

```
render() {
  return <button className='square'>{this.props.value}</button>;
}
```

预留的位置终于用上了。

value 这个参数不是必须的，也可以叫做其他的名字，只要两边能对上号就可以。

修改完成之后，执行项目就可以看到效果了，每个矩形中都多出了一个数字。

> 如果无法启动项目，请尝试执行 npm i --save-dev react react-dom，之后在执行 npm start

## 组件状态与交互

### 状态

props 与 state 都可以记录状态，如果说非要解释组件状态与组件传参的区别的话（也没人想要知道），那么我的理解就是:

- this.props 来自外部
- this.state 来自内部

组件的状态通过组件类的**构造函数**(constructor)来初始化。

> 目标：将外部传递的参数修改为内部状态维护

**1. 给 Square 组件类添加一个 constructor 并在其中初始化 state：**

```
constructor(props) {
  super(props);
  this.state = {
    value: null,
  };
}
```

> 注意：super(props);是必须的，他会执行 React.Component 类的构造函数，在 React 中， super 方法必须是 constructor 函数的开头。

**2. 修改 Square 组件类的 render 方法：**

```
render() {
  return <button className='square'>{this.state.value}</button>;
}
```

将 this.props.value 更改为 this.state.value

### 交互

现在组件的状态已经由自己在维护了(不再依靠外部传递的 props.value)，那么下一步就是如何修改组件的状态，也就是**交互**。

> 目标：点击 Square 组件渲染的元素，修改其内部状态 state.value，使其等于 '(O)'

**修改 Square 组件类的 render 方法：**

```
<button className='square' onClick={() => this.setState({ value: 'O' })}>
  {this.state.value}
</button>
```

添加一个 onClick 事件，事件修改了 this.state.value 的值。

> 如果 onClick 中没有使用箭头函数的话，记得显示调用 bind(this)

至此，我们已经可以成功的实现点击 Square 显示 O 的交互啦。
