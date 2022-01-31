//1 design store

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
    { name: 'vehicles', displayName: 'VEHICLES' },
    { name: 'toys', displayName: 'TOYS' },
    { name: 'furniture', displayName: 'FURNITURE' }
  ],
  products: [
    { name: 'TV', category: 'electronics', description: 'Flat screen 60 inch TV', price: '$500', count: 15 },
    { name: 'cake', category: 'food', description: 'strawberry cheesecake', price: '$20', count: 10 },
    { name: 'bananas', category: 'food', description: 'mini bananas from Peru', price: '$3', count: 16 },
    { name: 'Toyota Corolla', category: 'vehicles', description: '2006 reliable sedan in clue color', price: '$2000', count: 1 },
    { name: 'Doll', category: 'toys', description: 'Blond Barbie doll', price: '$40', count: 30 },
    { name: 'TV-stand', category: 'furniture', description: 'grey wooden TV stand, 20 inch tall', price: '$110', count: 10 },
    { name: 'chair', category: 'furniture', description: 'cushioned, wooden, white in color', price: '$80', count: 16 },
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



