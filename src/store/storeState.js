import axios from 'axios';

//1 design store

let initialState = {
  categories: [],
  activeCategory: ''
}

//2 design actions

export const changeActiveCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  }
}

export const fetchCategories = async (dispatch) => {
  let response = await axios.get(`${process.env.REACT_APP_SERVER}/categories`);
  console.log('response', response.data)
  let fetchedCategories = response.data;
  dispatch(actualFetchCategories(fetchedCategories));
}

function actualFetchCategories(data) {
  return {
    type: 'CATEGORIES/LOAD_FETCHED_CATEGORIES',
    payload: data
  }
}

//3 design reducer

export const activeCategoryReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

    case 'CATEGORIES/LOAD_FETCHED_CATEGORIES':
      console.log('hit case', payload)
      return { ...state, categories: payload }

    case 'CHANGE_CATEGORY':
      return { ...state, activeCategory: payload }
    default:
      return state
  }
};



