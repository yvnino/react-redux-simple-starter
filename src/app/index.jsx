// enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch,browserHistory  } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mainReducer from './reducers';
// import {Router} from 'react-router';
import Router from './routes.jsx';
import animate from './style/animate.css';

const store = createStore(mainReducer, applyMiddleware(thunk, logger));


render(
  <Provider store={store}>
    <BrowserRouter >
      <Router history={browserHistory} />
    </BrowserRouter>
 
  </Provider>
   
  ,
  document.getElementById('root')
)
