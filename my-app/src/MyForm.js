import React, { Component } from 'react';


class MyForm extends Component {
  render() {
    return (
      <input name="nip" validate={[this.validateInput]} />
    )
  }

  validateInput(value) {
    if(value && value.length === 11){
        console.log('valid');
        return true;
    }

    return false;
  }
}

export default MyForm;