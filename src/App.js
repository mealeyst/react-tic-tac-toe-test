import React from 'react';
import Space from './components/Space';

const initialState = {
  player_turn: 'X',
  spaces: [...Array(9)],
  isInitialized: true
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleClickSpace = this.handleClickSpace.bind(this);
    this.state = initialState;
  }

  handleClickReset() {
    this.setState(initialState);
  }

  handleClickSpace(idx, evt) {
    let { player_turn, spaces } = this.state;
    let spaces_clone = Object.assign([], spaces);
    spaces_clone[idx] = player_turn;
    this.setState({
      player_turn: player_turn == 'X' ? 'O' : 'X',
      spaces: spaces_clone,
      isInitialized: false
    });
  }

  render() {
    let { player_turn, spaces } = this.state;
    return (
      <div>
        <div>Player: {player_turn}</div>
        {spaces.map( (space, index) => <Space spaces={spaces} key={index} index={index} value={space} onClick={this.handleClickSpace} />)}
        <button onClick={this.handleClickReset} disabled={this.state.isInitialized}>Reset</button>
      </div>
    );
  }
}