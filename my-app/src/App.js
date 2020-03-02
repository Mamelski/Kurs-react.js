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
      <div>
        <header className="ui fixed menu">
          <nav className="ui container">
            <a href="#" className="header item">
              <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
              Lista kontaktów
            </a>
            <div className="header item">
              <button className="ui button">Dodaj</button>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
