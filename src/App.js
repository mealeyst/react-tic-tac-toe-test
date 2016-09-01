import React from 'react';
import Cell from './components/cell/Cell';
import styles from './App.css';
import Header from './components/Header/Header';
import Gameboard from './components/gameboard/Gameboard';
import GameboardImage from 'babel!svg-react!./svg/gameboard.svg?name=GameboardImage';
import IconX from 'babel!svg-react!./svg/player-1.svg?name=IconX';
import IconO from 'babel!svg-react!./svg/player-2.svg?name=IconO';

const initialState = {
  current_player: 'X',
  isInitialized: true,
  X: 0,
  O: 0,
  moves: [],
  move: 0,
  winner: null,
  freeze: false
}

const WINS = [7, 56, 448, 73, 146, 292, 273, 84];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPlayAgain = this.handleClickPlayAgain.bind(this);
    this.handleClickCell = this.handleClickCell.bind(this);
    this.state = initialState;
  }

  handleClickPlayAgain () {
    this.setState(initialState);
  }

  handleClickCell(value, index) {

    let {current_player, moves, move, X, O} = this.state;

    // clone the moves array
    let moves_copy = moves.slice(0, moves.length);
    // place the current player at that index, so we can show the play in the grid
    moves_copy[index] = current_player;
    this.setState({moves: moves_copy, move: move + 1});

    // increment the current player's score
    let score = this.state[current_player];
    score += value;

    // check the score as a possible win
    let winner = this._checkScore(score);

    if(winner) return;

    let new_state = {};
    new_state[current_player] = score;

    this.setState(new_state);

    // toggle the player
    this.setState({current_player: current_player == 'X' ? 'O' : 'X'});

  }

  _checkScore(score, player) {
    for(let i = 0; i < WINS.length; i++) {
      if((WINS[i] & score) === WINS[i]) {
        this.setState({
          winner: this.state.current_player,
          freeze: true
        });
        return this.state.current_player;
      }
    }
  }

  renderCells() {
    let cells = [];
    let { moves, freeze } = this.state;
    for(let i = 0; i < 9; i++) {
      let row = Math.floor(i / 3) + 1;
      let col = (i % 3) + 1;
      cells.push(<Cell key={i} index={i} value={Math.pow(2, i)} move={moves[i]} freeze={freeze} onClick={this.handleClickCell} />);
    }
    return cells;
  }

  renderWinner() {
    if(this.state.winner) {
      let player = this.state.current_player == 'X' ? <IconX/> : <IconO/>;
      return (
        <div>
          {<h1><span className={styles.currentPlayer}>{player}</span> IS THE WINNER!!!</h1>}
          <button className={styles.playAgain} onClick={this.handleClickPlayAgain}>Play Again?</button>
        </div>
      )
    }
  }

  renderTie() {
    if(this.state.move === 9 && !this.state.winner) {
      return (
        <div>
          {<h1>IT'S A TIE!!!</h1>}
          <button className={styles.playAgain} onClick={this.handleClickPlayAgain}>Play Again?</button>
        </div>
      )
    }
  }

  renderCurrentPlayer() {
    if(!this.state.winner && this.state.move < 9) {
      let player = this.state.current_player == 'X' ? <IconX/> : <IconO/>;
      return (
        <div>
          <h1>Current Player: <span className={styles.currentPlayer}>{player}</span></h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Header>
          {this.renderWinner()}
          {this.renderTie()}
          {this.renderCurrentPlayer()}
        </Header>
        <div className={styles.grid}>
          {this.renderCells()}
          <Gameboard><GameboardImage /></Gameboard>
        </div>
      </div>
    );
  }
}
