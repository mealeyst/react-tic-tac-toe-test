import React from 'react';
import styles from './App.css';
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
      <div className={styles.app}>
        <Space onClick={this.handleClickSpace} />
      </div>
    );
  }
}