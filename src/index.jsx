import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import store from './store';

/* eslint fp/no-unused-expression: 0 */
render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
