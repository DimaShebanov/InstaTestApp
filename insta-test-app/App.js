import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text } from 'react-native';
import Dashboard from './components/Dashboard'
import reducers from './redux/reducers';


const store = createStore(reducers);

export default () => {
  return (
      <Provider store = {store}>
        <Dashboard/>
      </Provider>
  )
}