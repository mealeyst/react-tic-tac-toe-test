import React from 'react';
import styles from './App.css';
import Space from './components/Space';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  handleClickSpace() {
    console.log('handleClickSpace');
  }

  render() {
    return (
      <div className={styles.app}>
        <Space onClick={this.handleClickSpace} />
      </div>
    );
  }
}