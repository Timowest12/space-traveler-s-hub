import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './pages/configureStore';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rocketsReducer from './reducer';
import logger from 'redux-logger';


const store2 = createStore(rocketsReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
