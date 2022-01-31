//step 4: create store

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { activeCategoryReducer } from './storeState';

let reducers = combineReducers({ activeCategoryReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
