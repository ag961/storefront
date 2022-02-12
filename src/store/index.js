//step 4: create store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { activeCategoryReducer } from './storeState';
import { productsReducer } from './products';
import { cartReducer, deleteFromCart } from './cart';
import thunk from 'redux-thunk';

let reducers = combineReducers({ activeCategoryReducer, productsReducer, cartReducer, deleteFromCart });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
