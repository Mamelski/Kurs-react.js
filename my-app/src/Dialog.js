import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { title = "Domyślny tytuł", content } = this.props
    return (
      <div>
        <dialog open>
          <h1>{title}</h1>
          <p>{content}</p>
        </dialog>
      </div>
    )
  }
}

export default Dialog;