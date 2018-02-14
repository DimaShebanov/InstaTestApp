import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './components/Router'
import reducers from './redux/reducers';


const store = createStore(reducers);

export default () => {
  return (
      <Provider store = {store}>
        <Router/>
      </Provider>
  )
}