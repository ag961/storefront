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

export const deleteFromCart = (productName) => {
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
      let duplicate = state.cart.find(product => product.name === payload.name);

      if (duplicate) {
        let totalCount = 0;

        let cart = state.cart.map(product => {
          if (product.name === duplicate.name) {
            product.count = payload.count - 1;
            product.orderedQuantity = product.orderedQuantity + 1;
            totalCount += product.orderedQuantity;
            return product;
          }

          else {
            totalCount += product.orderedQuantity;
            return product;
          }
        })
        return { ...state, cart, totalCount }
      }
      
      else {
        let newPayload = { ...payload, orderedQuantity: 1, count: payload.count - 1 };
        let cart = [...state.cart, newPayload];
        let totalCount = 0;
        cart.forEach(product => totalCount += product.orderedQuantity);
        return { ...state, cart, totalCount }
      }

    case 'CART/DELETE_FROM_CART':
      let cart = state.cart.filter(product => product.name !== payload.name);
      let totalCount = 0;
      cart.forEach(product => totalCount += product.orderedQuantity);

      return { ...state, cart, totalCount };

    default:
      return state
  }
};
