import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
        <button onClick={() => this.onEvent('kliknęło')}>Kliknij!</button>
    );
  }

  onEvent(text) {
    alert(text);
  };
}

export default MyComponent;