import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions';
import rocketsReducer from '../reducer';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);



export default store;