import React from 'react';
import './Square.css';

export default class Square extends React.Component {
  render(props) {
    return (
      <div className='square' onClick={this.props.handleClick}>
        {this.props.value ? this.props.value : ''}
      </div>
    );
  }
}
