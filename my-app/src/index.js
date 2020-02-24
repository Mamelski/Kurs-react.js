import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import App from './App';
import MyComponent from './MyComponent';
import './index.css';

const element = (
  <div>
    <Dialog />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
