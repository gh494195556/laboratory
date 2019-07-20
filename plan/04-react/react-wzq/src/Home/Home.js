import React from 'react';
import Square from './Square';
import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.generateBoard(5)
    };
  }

  render(props) {
    const boardElement = this.state.board.map((rv, ri) => {
      const rowCelles = rv.map((cv, ci) => {
        return (
          <Square
            key={ci}
            value={cv}
            handleClick={() => this.handleClick(ri, ci)}
          />
        );
      });
      return (
        <div className='row' key={ri}>
          {rowCelles}
        </div>
      );
    });
    return boardElement;
  }

  generateBoard(number) {
    return Array(number).fill(Array(number).fill(null));
  }

  handleClick(ri, ci) {
    let copyBoard = this.state.board.slice();
    copyBoard[ri][ci] = 1;
    console.log(this.copyBoard);
    this.setState({
      board: copyBoard
    });
  }
}
