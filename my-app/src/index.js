import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import './index.css';

var number = 7;
var object = {firstName:"Jakub", lastName:"Mamelski"};
var array = ["jabłko", "banan"];
var myFunction = function() {
  return 1+2;
}

var html = <span><b>To jest kod html</b></span>;

const element = (
  <div>
    {/* <Dialog content="Wow, pobrałem tytuł z propsów" /> */}
    {/* <Dialog content={number} /> */}
    {/* <Dialog content={object} /> */}
    {/* <Dialog content={array}/> */}
    {/* <Dialog content={myFunction}/> */}
    {/* <Dialog content={myFunction()}/> */}
    <Dialog content={html}/>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
