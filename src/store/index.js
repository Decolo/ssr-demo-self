import { createStore, applyMiddleware } from 'redux'

export const getStore = req => {
  return createStore(reducer)
}

export const getClientStore = () => {
  // 从服务器端输出的页面上拿到脱水的数据
  const defaultState = window.context.state
  // 当做 store的初始数据（即注水）
  return createStore(reducer, defaultState)
}