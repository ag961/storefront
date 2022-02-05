//1 design store

let initialState = {
  cart: [],
  totalCount: 0
}


//2 design actions

export const addToCart = (product) => {
  return {
    type: 'CART/ADD_TO_CART',
    payload: product
  }
}


//3 design reducer

export const cartReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'CART/ADD_TO_CART':
      console.log('hit CART/ADD_TO_CART case. State:', state);
      let duplicate = state.cart.find(product => product.name === payload.name);
      if (duplicate) {
        let updatedCart = state.cart.map(product => {
          if (product.name === duplicate.name) {
            product.count = payload.count - 1;
            product.ordered = product.ordered + 1;
            return product;
          } else {
            return product;
          }
        })
        return { ...state, cart: updatedCart, totalCount: state.totalCount + 1 }

      } else {
        let newPayload = { ...payload, ordered: 1, count: payload.count - 1 }
        return { ...state, cart: [...state.cart, newPayload], totalCount: state.totalCount + 1, }
      }

    // return { ...state, cart: [...state.cart, updatedPayload], totalCount: state.totalCount + 1, }
    default:
      return state
  }
};
