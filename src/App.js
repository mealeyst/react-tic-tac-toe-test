import React from 'react';
import Space from './components/Space';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSpace = this.handleClickSpace.bind(this);
    this.state = {
      player_turn: 'X'
    };
  }

  handleClickSpace() {
    this.setState({
      player_turn: this.state.player_turn == 'X' ? 'O' : 'X'
    });
  }

  render() {
    return (
      <div>
        <div>Player: {this.state.player_turn}</div>
        <Space onClick={this.handleClickSpace} />
      </div>
    );
  }
}