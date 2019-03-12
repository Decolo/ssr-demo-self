import { createStore, applyMiddleware, combineReducers } from 'redux'
import homeReducer from '@views/home/reducer'
import aboutReducer from '@views/about/reducer'

const reducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
})

export const getStore = req => {
  return createStore(reducer)
}

export const getClientStore = () => {
  // 从服务器端输出的页面上拿到脱水的数据
  const defaultState = window.context.state
  // 当做 store的初始数据（即注水）
  return createStore(reducer, defaultState)
}