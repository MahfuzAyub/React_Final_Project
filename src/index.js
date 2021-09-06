import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor}>
      <BrowserRouter><App /></BrowserRouter>
    </PersistGate>
  </Provider>, document.getElementById('root'));
reportWebVitals();