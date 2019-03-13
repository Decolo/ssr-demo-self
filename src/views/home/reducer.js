import { REQUEST_HOME_DATA, RECEIVE_HOME_DATA } from './action'

import { handleActions } from 'redux-actions'

const homeData = handleActions({
  [REQUEST_HOME_DATA]: state => ({
    ...state,
    isLoading: true
  }),
  [RECEIVE_HOME_DATA]: (state, action) => ({
    isLoading: false,
    data: action.payload.data
  })
}, {
  isLoading: false,
  data: []
})

export default homeData