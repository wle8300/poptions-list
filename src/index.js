import initReactFastclick from 'react-fastclick';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

initReactFastclick();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
