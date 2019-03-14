import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

export const getStore = req => {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}

export const getClientStore = () => {
  // 从服务器端输出的页面上拿到脱水的数据
  const defaultState = window.context.state
  // 当做 store的初始数据（即注水）
  const store = createStore(reducer, defaultState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}