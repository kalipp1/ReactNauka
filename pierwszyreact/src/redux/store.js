import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);


// const reducer = (state, action) => {
//   switch(action.type){
//     case 'ADD_COLUMN':
//       return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
//     case 'ADD_CARD':
//       return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
//     case 'UPDATE_SEARCHSTRING':
//       return {...state, searchString: action.payload.value}
//     case 'ADD_LIST':
//       return {...state, lists: [...state.lists, {...action.payload, id: shortid() }]};
//     case 'TOGGLE_CARD_FAVORITE':
//       return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
);

export default store;