# 03-react 入门教程系列

## 上节回顾

上一节我们通过在每一个 Square 组件内部维护一个 state 的方式，实现了点击 Square 页面显示 O 的功能。

## 本节目的

> 1. 将每个 Square 自身维护的 State 提出来，不再由自己管理该状态，而是通过 Props 从外部获取。
> 2. 提出来的 State 统一由 Board 组件管理。

## Board 管理状态

**1. 添加 Board 构造函数**

```
constructor(props) {
  super(props);
  this.state = {
    squares: Array(9).fill(null)
  };
}
```

**2. 修改 Board 组件类的 renderSquare 方法**

```
renderSquare(i) {
  return (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  );
}
```

- 修改: value 为传递 squres 数组对应索引的值
- 添加: onClick 参数，并且向该参数传递了一个函数

**3. 添加 Board 组件的 handleClick 方法**

```
handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({ squares: squares });
}
```

## Square 使用状态

**修改 Square 组件类**

- 删除 constructor，现在不需要 Square 自己维护状态了，所以删除
- 修改 render 方法
  - onClick 的具体实现交由 Board 组件来实现(Board 组件类的 handleClick 方法)
  - 现实外部传递的 value

```
render() {
  return (
    <button className='square' onClick={() => this.props.onClick()}>
      {this.props.value}
    </button>
  );
}
```

原本的 value 由 Square 本身提供，并且由本身修改，现在更改为由 Board 派发 value，并且 value 的变更由 Board 提供的 onClick 方法来管理。

在这里，Square 的职责仅仅是展示 value 和适时调用 Board 传递的 onClick 方法，仅此而已。
