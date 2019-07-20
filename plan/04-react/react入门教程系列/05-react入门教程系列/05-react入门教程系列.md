# 05-react 入门教程系列

## 上节回顾

上一节我们实现了一个基本的三子棋功能

## 本节目标

> 1. 棋步记录
> 2. 历史列表

## 棋步记录

**思路：**

为了实现棋步记录功能，我们需要添加一个新的状态(history)，这个状态保存着每一步落子的记录；每一次在 Click Square 时，应该向 history 中 push 一个当前状态。

本身只是单纯的实现一个棋步记录的功能的话，完全可以把 history 放在 Board 类组件当中来维护；但我们希望随后添加一个展示历史落子列表的组件，而此组件比较适合放在 Game 组件中，所以 history 比较适合由 Game 组件来维护。

**1. 修改 Game 类组件，添加构造函数**

```
constructor(props) {
  this.state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true
  };
}
```

**2. 删除 Board 组件的 constructor**

**3. 修改 Board 组件的 renderSquare**

```
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
```

**4. 修改 Game 组件的 render 函数**

```
render() {
  const history = this.state.history;
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${this.state.xIsNext ? '●' : '○'}`;
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
```

**5. 修改 Board 组件的 render 函数**

```
render() {
  return (
    <div>
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

**6. 将 Board 组件的 handleClick 方法提取到 Game 组件中，并作相应的修改**

```
handleClick(i) {
  const history = this.state.history;
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) return;
  squares[i] = this.state.xIsNext ? '●' : '○';
  this.setState({
    history: history.concat([
      {
        squares: squares
      }
    ]),
    xIsNext: !this.state.xIsNext
  });
}
```

## 历史列表

**1. 修改 Game 组件的 render 函数**

```
render() {
  const history = this.state.history;
  const current = history[this.state.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    return (
      <History key={move} move={move} jumpTo={() => this.jumpTo(move)} />
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${this.state.xIsNext ? '●' : '○'}`;
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
      </div>
      <div className='game-info'>
        <h3>STEPS</h3>
        <ol>{moves}</ol>
      </div>
      <div className='game-result'>
        <h3>{status}</h3>
      </div>
    </div>
  );
}
```

**2. 添加 History 函数组件**

```
function History(props) {
  return (
    <li className='history' key={props.move} onClick={props.jumpTo}>
      {props.move > 0 ? `#${props.move}` : 'START'}
    </li>
  );
}
```

**3. 修改 Game 组件 constructor**

添加一个 stepNumber 状态

```
constructor(props) {
  super(props);
  this.state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0, // <-- 这里
    xIsNext: true
  };
}
```

**4. 添加 Game 组件 jumpTo 函数**

```
jumpTo(step) {
  this.setState({
    stepNumber: step,
    xIsNext: step % 2 === 0
  });
}
```

**5. 修改 Game 组件的 handleClick 函数**

```
handleClick(i) {
  const history = this.state.history.slice(0, this.state.stepNumber + 1); // <-- 这里
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) return;
  squares[i] = this.state.xIsNext ? '●' : '○';
  this.setState({
    history: history.concat([
      {
        squares: squares
      }
    ]),
    stepNumber: history.length, // <-- 这里
    xIsNext: !this.state.xIsNext
  });
}
```

**6. 修改 Game 组件的 render 函数**

```
render() {
  const history = this.state.history;
  const current = history[this.state.stepNumber]; // <-- 这里
  const winner = calculateWinner(current.squares);

  // 其他部分没有改变
```

## index.js 完整代码

```
import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      return (
        <History key={move} move={move} jumpTo={() => this.jumpTo(move)} />
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next player: ${this.state.xIsNext ? '●' : '○'}`;
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <h3>STEPS</h3>
          <ol>{moves}</ol>
        </div>
        <div className='game-result'>
          <h3>{status}</h3>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // <-- 这里
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? '●' : '○';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length, // <-- 这里
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
}

function History(props) {
  return (
    <li className='history' key={props.move} onClick={props.jumpTo}>
      {props.move > 0 ? `#${props.move}` : 'START'}
    </li>
  );
}

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

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

```

## index.css 完整代码

```
body {
  font: 14px 'Century Gothic', Futura, sans-serif;
  margin: 20px;
  position: relative;
}

ol,
ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: '';
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  font-size: 40px;
  width: 50px;
  height: 50px;
}

.square:focus {
  outline: none;
}

.history {
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}

.history:active {
  color: crimson;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 15px;
  border: 1px solid #999;
  height: 100%;
  border-radius: 1px;
  padding: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
}

.game-result {
  margin-left: 15px;
  border: 1px solid #999;
  padding: 15px;
}

```
