import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';
import shortid from 'shortid';


const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
      break;
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
      break;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
);

export default store;