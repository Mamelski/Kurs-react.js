import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import './index.css';

const element = (
  <div>
    <Dialog title="Wow" content="Pobrałem tytuł z propsów" />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
