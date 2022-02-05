//1 design store

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
    { name: 'vehicles', displayName: 'VEHICLES' },
    { name: 'toys', displayName: 'TOYS' },
    { name: 'furniture', displayName: 'FURNITURE' }
  ],
  activeCategory: ''
}


//2 design actions

export const changeActiveCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  }
}


//3 design reducer

export const activeCategoryReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      console.log('hit CHANGE_CATEGORY action')
      return { ...state, activeCategory: payload }
    default:
      return state
  }
};



