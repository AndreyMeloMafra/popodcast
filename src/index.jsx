import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './configs/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
