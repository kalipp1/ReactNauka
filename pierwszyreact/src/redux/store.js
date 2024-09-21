import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = (state) => {
  return state;
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
);

export default store;