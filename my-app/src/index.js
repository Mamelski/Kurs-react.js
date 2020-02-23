import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyComponent from './MyComponent';
import './index.css';

const element = (
  <div>
    <MyComponent />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
