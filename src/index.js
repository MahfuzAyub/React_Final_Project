import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { store } from './store/store'
ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter><App /></BrowserRouter>
  </Provider>, document.getElementById('root'));
reportWebVitals();