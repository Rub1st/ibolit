import { INDEX_PRODUCTS, INDEX_SALES, INDEX_ARRIVED_PRODUCTS, SET_MAX_PRICE, SET_SEARCH_QUERY, SET_MIN_PRICE } from '../constants/products'

export const indexProducts = (items) => ({
  type: INDEX_PRODUCTS,
  value: items,
})

export const indexSales = (items) => ({
  type: INDEX_SALES,
  value: items
})

export const indexArrivedProducts = (items) => ({
  type: INDEX_ARRIVED_PRODUCTS,
  value: items
})

export const setMinPrice = (items) => ({
  type: SET_MIN_PRICE,
  value: items
})

export const setMaxPrice = (items) => ({
  type: SET_MAX_PRICE,
  value: items
})

export const setSearchQuery = (items) => ({
  type: SET_SEARCH_QUERY,
  value: items
})