import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';


export const withStore = (Component, initialState={}) => {
  return () => (
    <Provider store={createStore(reducers, initialState, applyMiddleware(thunk))}>
      <Component />
    </Provider>
  );
};