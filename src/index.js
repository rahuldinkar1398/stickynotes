import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";

import rootReducer from './components/reducers'
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const RootComponent = (
  <Provider store={createStoreWithMiddleware(rootReducer)} >
    <App />
  </Provider>
)

ReactDOM.render(RootComponent,document.getElementById('root'))
