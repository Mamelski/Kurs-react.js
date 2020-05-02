import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    return (
        <button onClick={() => alert('Kliknięto!')}>Kliknij!</button>
    );
  }
}

export default MyComponent;