import { combineReducers } from 'redux'
import { ProductReducer, UserReducer } from './reducers'

const Reducer = combineReducers({
  products: ProductReducer,
  users: UserReducer,
})

export default Reducer