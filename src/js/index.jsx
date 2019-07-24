import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import movieSearchReducer from './containers/movieSearchReducer';
import movieDetailReducer from './containers/movieDetailReducer';
import App from './app';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */

const rootReducer = combineReducers({
  movieSearchData: movieSearchReducer,
  movieDetailData: movieDetailReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promise)));
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
