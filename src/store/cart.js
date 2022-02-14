import axios from 'axios';
import { fetchProducts } from './products';
//1 design store

let initialState = {
  cart: [],
  totalCount: 0
}

//2 design actions

export const addToCart = (product) => {

  return async function addToCartThunk(dispatch, getState) {
    product.count = product.count - 1;

    let response = await axios.put(`${process.env.REACT_APP_SERVER}/products`, product);
    let updatedProduct = response.data;
    
    dispatch(actualAddToCart(updatedProduct));
    dispatch(fetchProducts);
  }
}

const actualAddToCart = (product) => {
  return {
    type: 'CART/ADD_TO_CART',
    payload: product
  }
}


export const deleteFromCart = (product) => {

  return async function deleteFromCartThunk( dispatch, getState) {

    console.log('product count before', product.count)
    product.count = product.count + product.orderedQuantity;    
    delete product.orderedQuantity;

    console.log('product count after', product.count)

    let response = await axios.put(`${process.env.REACT_APP_SERVER}/products`, product);
    let updatedProduct = response.data;    
    dispatch(actualDeleteFromCart(updatedProduct));
    dispatch(fetchProducts);
  }
}

function actualDeleteFromCart(productName){
  return {
    type: 'CART/DELETE_FROM_CART',
    payload: productName
  }
}

//3 design reducer

export const cartReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'CART/ADD_TO_CART':

      // check if we already have a product in our cart
      let duplicate = state.cart.find(product => product.name === payload.name);
      if (duplicate) { // if we do, only increase the ordered quantity of that product
        let totalCount = 0;
        let cart = state.cart.map(product => {
          if (product.name === duplicate.name) {
            product.count = product.count - 1;
            product.orderedQuantity = product.orderedQuantity + 1;
            totalCount += product.orderedQuantity;
            return product;
          }
          else {
            totalCount += product.orderedQuantity;
            return product;
          }
        })
        return {cart, totalCount }
      } else { //if no duplcate is found, add the product to the cart
        let newPayload = { ...payload, orderedQuantity: 1 };
        let cart = [...state.cart, newPayload];
        let totalCount = 0;
        cart.forEach(product => totalCount += product.orderedQuantity);
        return { cart, totalCount }
      }

    case 'CART/DELETE_FROM_CART':
      let cart = state.cart.filter(product => product.name !== payload.name);
      let totalCount = 0;
      cart.forEach(product => totalCount += product.orderedQuantity);

      return { cart, totalCount };

    default:
      return state
  }
};
