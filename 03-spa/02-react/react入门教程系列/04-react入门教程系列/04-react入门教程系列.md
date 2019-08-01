# 04-react 入门教程系列

## 上节回顾

上一节我们实现了将每个 Square 自身维护的 State 提出来，不再由自己管理该状态，而是通过 Props 从外部获取，交由 Board 统一管理。

## 本节目标

> 1. 纯函数（pure function）、纯组件（pure components）
> 2. 函数式组件
> 3. 轮流落子
> 4. 胜出判断

## 纯函数、纯组件

函数与组件大家都不陌生，纯函数与纯组件可能有的同学会感到有点摸不着头脑，什么是纯（pure）？

**纯函数** 的概念相对比较普遍，他一般具有如下的特点：

1. 向函数输入同样的参数，永远会输出同样的结果
2. 函数的执行中不会影响非函数域以外的状态（没有副作用）

**纯组件** 的概念与纯函数是相近的：

1. 不维护自己的 **state**
2. 一般表现为 **函数式组件**

**为什么要写纯函数呢？**

首先我们来看一个例子：

```
// 非纯函数
let pA = 'hello'
let pB = func1(pA) // func1()的执行改变了 pA 的值（副作用）
// 结果： pA='hello world', pB=1

// 纯函数
let pA = 'hello'
let [pB,pC] = func2(pA)
// 结果： pA='hello', pB=1, pC='hello world'
```

**func1** 的执行产生了副作用，他改变了 pA 的值，在很多时候，这种对状态的突变(mutation)会让人很抓狂！

**func2** 的执行返回了两个值，他没有改变 pA 的值，而是根据 pA 的值，产生了新的值。

纯组件的特征也与此相似。

**为什么要采用纯组件？**

纯组件的特征使我们更加容易的实现纯函数，纯组件与纯函数的组合在 **react** 中可以产生如下的优势：

1. 化繁为简
2. 变化跟踪
3. 渲染友好

## 函数式组件

**目标**

> 将 Square 组件修改为函数组件

函数组件与类组件的最直观区别就是一个是函数，一个是类。

**1. 提取出原 Square 类组件的 render 函数返回的 JSX 代码，作为一个 Square(props) 函数的返回值**
按照提示复制代码：

```
class Square extends React.Component {
  render() {
    return (
      // copy here
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
      // copy here
    );
  }
}
```

注释掉 Square 类，新建一个 Square(props) 函数:

```
function Square(props) {
  return (
    <button className='square' onClick={() => this.props.onClick()}>
      {this.props.value}
    </button>
  );
}
```

**2. 修改 Sqaure 函数的返回值 JSX 代码**

```
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

## 轮流落子

目的：

> 实现黑子白子交叉落子

为了实现交叉落子，我们需要在 Board 组件中添加一个新的 state 来保存将要落下的子是黑子还是白子。

我们默认黑子先手。

找到 Board 类组件的 constructor 函数，修改如下：

```
constructor(props) {
  super(props);
  this.state = {
    squares: Array(9).fill(null),
    xIsNext: true // 新增
  };
}
```

每次落子以后，需要修改 xIsNext 值，因此，我们还需要修改 Board.handleClick() 函数：

```
handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = this.state.xIsNext ? '●' : '○';
  this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
}
```

**run** 一下查看效果。

[run 效果图](./assets/1.png)

目前还有一点不足的就是没有显示当前落子的是黑子还是白子

找到 **Board** 类组件的 render 函数稍加修改：

```
render() {
  const status = `Next player: ${this.state.xIsNext ? '●' : '○'}`;

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
```

[效果图](./assets/2.png)

目前在落子后，还可以重复落子覆盖上一次的落子，因此需要添加一些限制。

Board.handleClick:

```
handleClick(i) {
  const squares = this.state.squares.slice();
  if (squares[i]) return; // 添加
  squares[i] = this.state.xIsNext ? '●' : '○';
  this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
}
```

## 胜出判断

目标：

> 添加胜利判断

**1. 添加胜利判断函数**

```
function calculateWinner(squares) {
  // 胜利条件
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] /** a 空有子 */ &&
      squares[a] === squares[b] /** a空子与b空子相同 */ &&
      squares[a] === squares[c] /** a空子与c空子相同 */
    )
      return squares[a];
  }
  return null;
}
```

判断胜利的函数目前只支持接收一个 `3 * 3` 的棋盘。

**2. 使用胜利判断函数**

修改 Board.render 函数：

```
render() {
  const winner = calculateWinner(this.state.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }

  return (
    // 其他部分没有修改
```

**3. 胜利后不可落子限制**

修改 Board.handleClick 函数:

```
handleClick(i) {
  const squares = this.state.squares.slice();
  if (calculateWinner(squares) || squares[i]) return; // 修改
  squares[i] = this.state.xIsNext ? '●' : '○';
  this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
}
```
