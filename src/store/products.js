import axios from 'axios';
//1 design store

let initialState = {
  products: []
}

//2 design actions

// export const subtractCount = () => {
//   return {
//     type: 'PRODUCTS/SUBTRACT_COUNT',
//   }
// }

export const fetchProducts = async (dispatch) => {
  let response = await axios.get(`${process.env.REACT_APP_SERVER}/products`);
  let products = response.data;
  dispatch(actualFetchProducts(products))
}

function actualFetchProducts(data) {
  return {
    type: 'PRODUCTS/FETCH_PRODUCTS',
    payload: data
  }
}


//3 design reducer

export const productsReducer = (state = initialState, action) => {

  let { type, payload } = action;
  switch (type) {
    default:
      return state

    case 'PRODUCTS/FETCH_PRODUCTS':
      return { ...state, products: payload }

    // case 'CART/ADD_TO_CART':
    //   let newProducts = state.products.map(product => {
    //     if (product.name === payload.name) {
    //       return { ...product, count: product.count - 1 }
    //     } else return product
    //   })
    //   return { ...state }

    // case 'CART/DELETE_FROM_CART':

    //   let products = state.products.map(product => {
    //     if (product.name === payload.name) {
    //       product.count += payload.orderedQuantity
    //       return product
    //     }
    //     return product;
    //   })

    //   return { ...state, products }


  }
};
