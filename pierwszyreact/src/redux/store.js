import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import { composeWithDevTools } from '@redux-devtools/extension';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = ( state ) => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const getListById = ( {lists} , listId ) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => column.listId === listId);
export const getAllLists = ( state ) => state.lists;
export const getSearchString = ( state ) => state.searchString;
export const addList = payload => ({ type: 'ADD_LIST', payload });


const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.payload.value}
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id: shortid() }]};
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