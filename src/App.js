import React from 'react';
import Space from './components/Space';
import Cell from './components/Cell';

const initialState = {
  player_turn: 'X',
  spaces: [
    {row: 1, col: 1, value: null},
    {row: 1, col: 2, value: null},
    {row: 1, col: 3, value: null},
    {row: 2, col: 1, value: null},
    {row: 2, col: 2, value: null},
    {row: 2, col: 3, value: null},
    {row: 3, col: 1, value: null},
    {row: 3, col: 2, value: null},
    {row: 3, col: 3, value: null},
  ],
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


  handleClickCell(row, col) {
    console.log('row',row);
    console.log('col',col);
    console.log('handleClickCell')
  }

  renderCells() {
    let cells = [];
    for(let i = 0; i < 9; i++) {
      let row = Math.floor(i / 3) + 1;
      let col = (i % 3) + 1;
      cells.push(<Cell key={i} row={row} col={col} onClick={this.handleClickCell}>{i}</Cell>);
    }
    return cells;
  }

  render() {
    let { player_turn, spaces } = this.state;
    return (
      <div>
        <div>Player: {player_turn}</div>
        {this.renderCells()}
        {spaces.map( (space, index) => <Space spaces={spaces} key={index} index={index} space={space} onClick={this.handleClickSpace} />)}
        <button onClick={this.handleClickReset} disabled={this.state.isInitialized}>Reset</button>
      </div>
    );
  }
}