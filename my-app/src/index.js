import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const element = (
  <div>
     <App />
    <h1>Helllo world</h1>
    <h2>
      Time: {new Date().toLocaleTimeString()}.
    </h2>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
