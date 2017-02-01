import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnME extends React.Component {
  constructor() {
    super();
    this.focused = this.focused.bind(this)
    this.blurry = this.blurry.bind(this)
  }

  focused() {
    console.log('Good!')
  }
  blurry() {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
    <button onFocus={this.focused} onBlur={this.blurry}>Click Me</button>
    );
  }
}

module.exports = EyesOnME;
