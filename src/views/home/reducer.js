import { REQUEST_HOME_DATA, RECEIVE_HOME_DATA } from '@/store/actions'
import { handleActions } from 'redux-actions'

const homeData = handleActions({
  [REQUEST_HOME_DATA]: state => ({
    ...state,
    isLoading: true
  }),
  [RECEIVE_HOME_DATA]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload
    }
  }
}, {
  isLoading: false,
  data: []
})

export default homeData