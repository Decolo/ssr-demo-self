import { createAction } from 'redux-actions'

export const REQUEST_HOME_DATA = 'REQUEST_HOME_DATA'
export const RECEIVE_HOME_DATA = 'RECEIVE_HOME_DATA'
export const FETCH_HOME_DATA = 'FETCH_HOME_DATA'

export const doRequestHomeData = createAction(REQUEST_HOME_DATA)
export const doReceiveHomeData = createAction(RECEIVE_HOME_DATA)
export const doFetchHomeData = createAction(FETCH_HOME_DATA)
