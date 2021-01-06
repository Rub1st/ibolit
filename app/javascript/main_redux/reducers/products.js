import { INDEX_PRODUCTS, INDEX_SALES, INDEX_ARRIVED_PRODUCTS, SET_MAX_PRICE, SET_SEARCH_QUERY, SET_MIN_PRICE } from '../constants/products'

const initialState = {
  arrived_products: [],
  products: [],
  sales: [],
  minPrice: 0,
  maxPrice: 10_000,
  searchQuery: '',
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDEX_PRODUCTS: {
      return {...state, products: action.value}
    }
    case INDEX_SALES: {
      return {...state, sales: action.value}
    }
    case INDEX_ARRIVED_PRODUCTS: {
      return {...state, arrived_products: action.value}
    }
    case SET_SEARCH_QUERY: {
      return {...state, searchQuery: action.value}
    }
    case SET_MIN_PRICE: {
      return {...state, minPrice: action.value}
    }
    case SET_MAX_PRICE: {
      return {...state, maxPrice: action.value}
    }
    default:{
      return state;
    }
  }
}

export default ProductReducer