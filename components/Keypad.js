import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component {
  constructor() {
    super();
    this.entering = this.entering.bind(this)
  }
  entering() {
    console.log('Entering password...')
  }

  render() {
    return (
    <input onKeyUp={this.entering} type="password" />
    );
  }
}

module.exports = Keypad;
