//step 4: create store

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { activeCategoryReducer } from './storeState';
import { productsReducer } from './products';
import { cartReducer } from './cart';

let reducers = combineReducers({ activeCategoryReducer, productsReducer, cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
