import React from 'react';
import Space from './components/Space';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSpace = this.handleClickSpace.bind(this);
    this.state = {
      player_turn: 'X',
      spaces: [...Array(9)]
    };
  }

  handleClickSpace(idx, evt) {
    let { player_turn, spaces } = this.state;
    let spaces_clone = Object.assign([], spaces);
    spaces_clone[idx] = player_turn;
    this.setState({
      player_turn: player_turn == 'X' ? 'O' : 'X',
      spaces: spaces_clone
    });
  }

  render() {
    let { player_turn, spaces } = this.state;
    return (
      <div>
        <div>Player: {player_turn}</div>
        {spaces.map( (space, index) => <Space spaces={spaces} key={index} index={index} value={space} onClick={this.handleClickSpace} />)}
      </div>
    );
  }
}