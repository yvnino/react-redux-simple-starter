import React from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from '../routes';
import { configureStore } from './configureStore';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter >
        <Router history={ browserHistory } />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
