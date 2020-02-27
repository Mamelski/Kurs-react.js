import React, { Component } from 'react';
import './App.css';
import Dialog from './Dialog'

const number = 7;
const object = { firstName: "Jakub", lastName: "Mamelski" };
const array = ["jabłko", "banan"];
const myFunction = function () {
  return 1 + 2;
}
const html = <span>To jest <b>kod html</b></span>;

const element = (
  <div>
    {/* <Dialog content="Wow, pobrałem tytuł z propsów" /> */}
    {/* <Dialog content={number} /> */}
    {/* <Dialog content={object} /> */}
    {/* <Dialog content={array}/> */}
    {/* <Dialog content={myFunction}/> */}
    {/* <Dialog content={myFunction()}/> */}
    <Dialog content={html} />
  </div>
);


class App extends Component {
  render() {
    return (
      element
    );
  }
}

export default App;
