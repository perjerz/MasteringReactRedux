import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';

import Register from './features/event/Register';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './features/event/redux.js';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <Register />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
