import homeReducer from '@/views/home/reducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  home: homeReducer
})

export default reducer