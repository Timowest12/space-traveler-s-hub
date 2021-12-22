import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';

import store from './pages/configureStore';
import reportWebVitals from './reportWebVitals';
import rocketsReducer from './reducer';

const store2 = createStore(rocketsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
