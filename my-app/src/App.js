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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>

        <main className="ui main text container">
          <ul className="ui relaxed divided list section">
            <li className="item">
              <img src="https://api.adorable.io/avatars/55/typeofweb1.png" className="ui mini rounded image" />
              <div className="content">
                <h4 className="header">Lena</h4>
                <div className="description">JavaScript developer</div>
              </div>
            </li>
            <li className="item">
              <img src="https://api.adorable.io/avatars/55/typeofweb2.png" className="ui mini rounded image" />
              <div className="content">
                <h4 className="header">Brian</h4>
                <div className="description">Human Resources</div>
              </div>
            </li>
            <li class="item">
              <img src="https://api.adorable.io/avatars/55/typeofweb3.png" className="ui mini rounded image" />
              <div className="content">
                <h4 className="header">Rick</h4>
                <div className="description">QA</div>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
