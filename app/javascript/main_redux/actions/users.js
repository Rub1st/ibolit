import { INDEX_USER, SET_CURRENT_USER } from '../constants/users'

export const indexUser = (items) => ({
  type: INDEX_USER,
  value: items
})

export const setCurrentUser = (items) => ({
  type: SET_CURRENT_USER,
  value: items
})
