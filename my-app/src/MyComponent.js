import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    return (
        <button
            onClick={() => this.onEvent('on click')}
            onMouseOver={() =>this.onEvent('on mouse over')}
            onDragStart={() =>this.onEvent('on drag start')}>Kliknij!</button>
    );
  }

  onEvent = text => {
    alert(text);
  };
}

export default MyComponent;